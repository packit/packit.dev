---
title: Generated code in upstream archives
disableToc: false
weight: 10
---

# When the release archive does not match the upstream git tag checkout

This document covers a scenario when an upstream project has a script to create
release archives and some of the code in the archive is generated. This means
that when a downstream distribution has patches of the generated code those
patches can't be applied in the upstream repo.


## The solution

The provided solution will be performed in a [source-git]({{< ref "/docs/source-git" >}})
repository.

When all your downstream patches apply cleanly on top of the upstream git repo
for the particular git tag, then all is good and you don't need anything
special. You can follow [the guide for the source-git init command]({{< ref
"/docs/cli/source-git/init" >}}) to create such a source-git repo.

There is an issue when the patches require running tooling to regenerate code.
Some upstream projects even use tooling which is not available downstream.
Sadly, packit is unable to magically solve this scenario. If you cannot
regenerate the code downstream, there is nothing that packit can offer.
Alternatively you can fork the upstream project and start producing your own
tarballs with patches of your choice - packit can help with setting this up,
automate testing and the release process.

Another variant of this problem is when you need to patch code which is **not**
present in the upstream repo and is present in the release tarball. It means
your downstream patches (of the generated code) would not apply within the
upstream repo.

There are two solutions to this:

1. Use upstream git history, patch regular sources instead and regenerate code
   in `%prep`.

2. Create additional commit with changes (run `autogen.sh`, generate
   documentation, etc.) so that you can apply the downstream patches.

3. Create the source-git repo from the tarball, not using the upstream git
   history.


## Variant 1

This still follows the regular source-git repo. The problem may be when
regenerating the does not fix the original problem or creates new problems -
and you'll really need to patch the generated sources.

In such a case, you should follow "Variant 3" since the code you need to patch
is not present in the upstream repo.


## Variant 2

It's a manual step to make which ensures that you still have upstream history
and at the same time you can comfortably work with the package in the
downstream.

To make packit ignore commits (so they are not generated as new downstream
patches), just append a new line to the commit message:
```
ignore: true
```


## Variant 3

There is a tool to achieve this within the packit project:
[dist-git-to-source-git](https://github.com/packit/dist-git-to-source-git).
Thought this tool was mainly used by the packit team and was not meant to be
used outside of the team, please [reach out]({{< ref
"faq#how-can-i-contact-you" >}}) and the team will be happy to assist you.
