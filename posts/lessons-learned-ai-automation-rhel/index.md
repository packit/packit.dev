---
title: "Lessons learned: Building production AI automation for RHEL package maintenance"
date: 2025-10-06T00:00:00+01:00
authors: lbarczio
tags:
  - AI
  - automation
  - RHEL
---

# Lessons learned: Building production AI automation for RHEL package maintenance

After building and running AI-powered automation for RHEL package maintenance workflows (available in [this](https://github.com/packit/ai-workflows) repo), our team has learned a lot about what it takes to move from impressive demos to a reliable production system. Here are the key insights that might save you time and frustration on your own AI automation journey.

<!-- truncate -->

## Too many frameworks

When we started this project, the number of AI frameworks available was both exciting and overwhelming. We experimented with multiple approaches:

- **[Goose AI](https://block.github.io/goose/)** - Our early experiments used Goose with YAML-based recipes for tasks like issue triage and package rebasing
- **[BeeAI Framework](https://framework.beeai.dev)** - Eventually became our production choice, offering more structured agent development with requirement-based workflows involving a lot of code automation (Python-based)
- **[Google's ADK](https://google.github.io/adk-docs/get-started/quickstart)** - A big contender, it took us hours to debate and decide
- **[LlamaStack](https://llamastack.github.io/latest/)** - It wasn't mature enough
- **Custom MCP (Model Context Protocol)** integrations - For connecting to services like Jira and GitLab

The reality? Every framework has trade-offs, and the “best” choice depends heavily on your specific use case. Goose was great for rapid prototyping and was an excellent starting point choice, but we quickly discovered we needed something more robust for production. With so many options available, we went with something we were able to easily start with and still achieve good results. BeeAI's structured approach with conditional requirements and many more possibilities of restrictions and control over agents proved more suitable for our complex, multi-step workflows.

Since security is very important for the production-level system, and it's also easy to create your own MCP server, we've opted for that option so the code is 100% controlled by us. This way, we can define exactly which Jira fields can be touched, what values are allowed, and under what conditions. Agents get an exact list of functions they can use, and none of them have any credentials in their environment: everything that needs authentication goes through MCP.

**Lesson learned:** Don't get stuck in analysis paralysis. Pick a framework that aligns with your team's expertise and iterate. You can always migrate later (and we did).

## The Demo-to-Production gap is enormous

AI agents can be incredibly impressive in demos. Show someone an agent that can analyse a Jira issue, determine it needs a backport, find the upstream patch, and apply it automatically - and they'll be amazed. As we were amazed too. But making that work reliably in production? That's where the real work begins.

Our triage agent, which analyses Jira issues and decides follow-up actions, for example, has a 150+ line prompt with detailed decision trees:

```python
# From Triage Agent - just a snippet of the complexity
"""
**Decision Guidelines & Investigation Steps**

You must decide between one of 5 actions. Follow these guidelines:

1. **Rebase** - Only when issue explicitly instructs to "rebase" or "update"
2. **Backport a Patch OR Request Clarification**
   2.1. Deep Analysis of the Issue
   2.2. Systematic Source Investigation
   2.3. Validate the Fix and URL
   2.4. Decide the Outcome
3. **No Action** - For non-bugs (QE tasks, features, docs)
4. **Error** - Processing issues preventing analysis
"""
```

What looks like a simple “analyse this issue” task actually requires:

- Complex decision trees with multiple fallback paths
- Comprehensive error handling for edge cases
- Detailed validation of patches and URLs
- Integration with multiple external systems (Jira, GitLab, upstream repos)

**Lesson learned:** Don't let demo success fool you into underestimating production complexity.

## The art of decomposition

Like many AI projects, we started with the foolish idea of building one super-agent that could handle everything. Fortunately, we realised very quickly that this just isn't possible - at least not reliably.

Our foundation became three core agents, which proved to be an excellent starting point:

1. **Triage Agent** - Analyses Jira issues and determines the resolution path
2. **Rebase Agent** - Handles package updates to newer upstream versions
3. **Backport Agent** - Applies specific patches and fixes

But as we started encountering specific production issues and as these agents grew increasingly complex with corner cases and real-world requirements, we began implementing even more specialised agents that integrate seamlessly with our main three.

The Log Agent is a perfect example of this evolution. Instead of having the backport and rebase agents figure out how to document their changes (adding yet another responsibility to already complex workflows), we created a dedicated specialist:

```python
# This is just a snippet from the Log Agent instructions
"""
You are an expert on summarizing packaging changes in RHEL ecosystem.
To document a change:
1. Use `git diff --cached` to see the final changes staged for commit
2. Add a changelog entry to the spec file with proper formatting
3. Generate a commit message title (max 80 characters)
4. Summarize changes for the merge request description
"""
```

This specialisation journey is still ongoing, and we can absolutely see opportunities to create even smaller, more focused agents. Each new specialised agent makes our workflows more robust and our main agents cleaner and more reliable.

**Lesson learned:** Start with a small number of core agents, but don't be afraid to extract specialised functionality as complexity grows.

## Models matter, but tooling and architecture matter more

We've experimented with multiple models, providers and settings:

- [Google's Gemini](https://ai.google.dev/gemini-api) (currently `gemini-2.5-pro`)
- [Anthropic's Claude](https://claude.ai/) (`claude-sonnet-4`)
- Custom temperature and parameter tuning

Yes, newer models often perform better, and it's worth trying them. But here's what matters more:

1. **Proper tooling:** Our agents have access to specialised tools, which provide deterministic, reliable functionality that the AI can leverage.
2. **Task decomposition:** Breaking complex workflows into smaller, manageable steps with clear inputs and outputs.
3. **Validation and error handling:** Every step has validation, and failures are handled gracefully with retry logic.
4. **Explicit system prompt:** LLMs can be very creative in their solutions, make sure to precisely guide them via system prompts.

For example, our backport agent doesn't just “apply a patch” - it has a sophisticated workflow and tools:

```python
# Specialized tools for reliable patch handling
tools=[
    GitPatchCreationTool(options=local_tool_options),
    GitPatchApplyTool(options=local_tool_options),
    GitPatchApplyFinishTool(options=local_tool_options),
    GitLogSearchTool(options=local_tool_options),
    GitPreparePackageSourcesTool(options=local_tool_options),
    # ... more specialized tools
]
```

**Lesson learned:** Invest time in tooling and architecture.

## Mixing AI creativity with code reliability

This might be the most important lesson: AI agents will never be 100% deterministic, and that's actually okay for many use cases. But you need to be strategic about where you accept non-determinism and where you demand consistency.

**Examples where we embrace AI non-determinism:**

- Analysing natural language in Jira issues
- Writing commit messages and documentation
- Searching for fixes upstream

**Examples where we use deterministic code:**

- Git operations (clone, checkout, apply patches)
- File system operations
- Complex deterministic logic, like mapping RHEL versions to branches

**Lesson learned:** Design your system to be “AI-assisted” rather than “AI-controlled”. Use AI for the creative, analytical work, but rely on deterministic code for the critical operations.

## From code to service

Once you move from building a prototype to building a production system, you also need to think about the infrastructure and other components, not just agents and code around them. Here are just a few examples of what we architected that keeps AI agents running reliably:

- **Queue-based architecture:** We use valkey queues to orchestrate work between agents, a reliable pattern we already knew worked. Issues flow through different queues with automatic retry logic.
- **Observability:** Every agent action flows through [Phoenix tracing](https://phoenix.arize.ai/), giving us complete visibility into what agents are thinking and doing. When something goes wrong, we can trace exactly which decisions led to the failure. This isn't just logging - it's understanding why your AI system made specific choices.
- **Container deployment:** The entire system runs on OpenShift and each agent type has its own deployment with resource limits. This also makes the whole system easily scalable.
- **Dry-run capabilities:** Every operation has a dry-run support built in. This helps us to better test and debug the agent's behaviour. When an agent makes an unexpected decision, we can replay the scenario safely.

**Lesson learned:** Start thinking about operational capabilities on day one. Dry-run modes, proper logging, and failure recovery aren't “nice to haves” - they are what makes AI systems actually usable. And since LLMs produce a ton of output, you'll need an efficient way to find out why the agents made such an odd decision.

## Takeaways

After roughly 3.5 months of development, our system is currently running for a selected set of components - and it's being heavily developed. But by following these principles, we've seen a huge difference in reliability and maintainability. More importantly, we're now much clearer about what's actually possible to do with AI and what isn't.

Ask me again in 3 months, and I'll probably have another set of valuable lessons learned. But that's the nature of this rapidly evolving field.
