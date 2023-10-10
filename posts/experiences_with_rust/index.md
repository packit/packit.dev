---
title: Experiences using Packit for a Rust executable Project
# any date that can be parsed with https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/parse
date: 2023-10-10
authors: amulhern
---

# Experiences using Packit for a Rust Executable Project

"How absurdly simple!" I cried.

"Quite so!" said he, a little nettled. "Every problem becomes very childish when once it is explained to you."

- Arthur Conan Doyle, "The Adventure of the Dancing Men"

We have planned for a while to use Packit to generate packages on Copr
on demand for our somewhat complicated Rust executable, stratisd. It
looked like this was going to be challenging, and in a sense it was,
but once the task was completed, it turned out to have been pretty
straightforward.

<!-- truncate -->

The two primary parts of our Stratis project are stratisd, a big,
fairly complicated Rust project which generates multiple distinct Rust
executables and also installs scripts and configuration files and so
forth, and stratis-cli, a relatively simple Python project which
communicates with stratisd over the D-Bus. Our main purpose in getting
on-demand packages of both these projects was not to test the
packaging, although that is a nice thing to do, but to have a
convenient way to do functional testing of the project, frequently
generating a stratisd package from one stratisd pull request and a
stratis-cli package from a matching stratis-cli pull request.

The Packit team had already obliged us by preparing a Packit
configuration file for our stratis-cli repo, we thus merely had to
figure out how to do the same for stratisd. We already had some
scripts which we could run by hand to make the SRPMs for both projects
so that we could manually send them to Copr so, as it turned out, all
we really needed to do was figure out how to write a Packit
configuration file for stratisd so that Packit would do these tasks
for us. There follows a quick summary of the decisions we made to
solve this problem. Note that our whole and only task was to figure
out how to create the source artifacts and edit the spec file and
to provide these in such a way that Packit could take over from there,
build the SRPM, and carry on to request the Copr builds which provide
the binary packages for testing.

A Packit configuration is used to set certain configuration _options_,
to override certain _actions_, or to define certain _hooks_. The
available actions and hooks are specific to a given job or set of jobs.
If an action is not
overridden in a project's Packit configuration, Packit will execute
its own default action. For example, Packit's default for the
create-archive action is just git-archive. Any action can be overridden by
specifying a sequence of commands. For the stratisd Packit
configuration, we found that we had to override the majority of the
actions.

Note that the [stratisd Packit configuration file] is quite
simple as most of the action is in the `create_archive.py` script. Some
things to make note of are the following:

1. `merge_pr_in_ci` is set to false. This prevents Packit from
   automatically merging our pull request into its target branch. It has
   always been our custom to build from the unmerged branch when testing
   PRs and we preferred to do the same in our Packit configuration.

2. `fix-spec-file` contains a dummy echo action. This is how we override
   Packit's default spec file editing action. Instead of specifying an
   override for this action, we use [our own script], `create_artifacts.py`, to
   edit the spec file as well as to generate the three source artifacts that we
   use in this package in the `create-archive` action.

3. `create_artifacts.py` uses the Packit team's [specfile package] to
   edit the stratisd specfile. We needed just two modifications: 1. To overwrite the Version field with our preferred version string. 2. To overwrite the Source entries with the names and paths of the
   source artifacts.
   This requires just one [very simple function] using specfile.

4. In the Packit configuration, the `update_release` field is set to
   false. We prefer to update the Version field in the spec file using
   our `create_archive.py` script, so that the updated version is
   recognized as a pre-release version of our current version by
   `rpmdev-vercmp`.

5. We modified our [stratis-cli Packit configuration file] to work the
   same way as our stratisd one.

In summary, we got the ability to take advantage of the Packit
infrastructure for Copr builds by figuring out how to satisfy its
requirements for the source artifacts and the specfile. Note that our
decisions about how to do this were made based on the scripts we had
already written to generate the SRPMs and the particular requirements
of our project. For example, our release scripts are written in
Python, and we stuck with that choice. That turned out to be handy,
because that allowed us to use the specfile project in our scripts to
edit the spec file. But it would have been possible to write the
artifact creation script in Rust using the cargo xtask pattern just as
well, and to solve the spec file rewriting problem using, e.g., sed.
We overwrote the Version field in the spec file, rather than allowing
Packit to autobump our release number, because our development process
requires us to bump the version in the Cargo.toml (for Rust) and
setup.cfg (for Python) files to the version we will release as soon as
we begin development. These choices and their implementations could be
made differently to support a project with different constraints and
different existing infrastructure.

[stratisd Packit configuration file]: https://github.com/stratis-storage/stratisd/blob/master/.packit.yaml
[specfile package]: https://github.com/packit/specfile
[very simple function]: https://github.com/stratis-storage/ci/blob/master/release_management/_utils.py#L80
[stratis-cli Packit configuration file]: https://github.com/stratis-storage/stratis-cli/blob/master/.packit.yaml
[our own script]: https://github.com/stratis-storage/ci/blob/master/release_management/create_artifacts.py
