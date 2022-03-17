---
title: Packit
date: 2019-06-28
---

{{< columns >}}

### What is Packit?

An open source project aiming to ease the integration of your project with [Fedora Linux](https://getfedora.org),
[CentOS Stream](https://www.centos.org/centos-stream/)
and other distributions.

<--->

### Who should use Packit?

Upstream projects that want to build RPM packages out of pull requests, commits or releases, test their code changes
and bring upstream releases to Fedora Linux.

{{< /columns >}}

### What key features does Packit offer?

{{< columns >}}

#### Building RPMs

Packit uses [Copr build system](https://copr.fedorainfracloud.org/) to build RPMs from your code changes. This way,
you can validate your package will be correctly built from each pull request and also have your changes installable by anyone
via YUM repository created in Copr.
[Learn more.](/docs/configuration/#copr_build)
<--->

#### Testing

Packit runs your tests in [Testing Farm](https://docs.testing-farm.io/general/0.1/index.html) and can test either the RPM package built in Copr or
trigger tests directly on different platforms. [Learn more.](https://packit.dev/docs/testing-farm/)
<--->

#### Automating Fedora releases

With Packit, you can easily
get your upstream releases to the [Fedora dist-git](https://src.fedoraproject.org), automatically submit builds in [Koji](https://koji.fedoraproject.org/koji/)
and create [Bodhi](https://bodhi.fedoraproject.org) updates! [Learn more.](/docs/configuration/#propose_downstream)
{{< /columns >}}

### How does Packit look like in action?

{{< workflow >}}

### Why start using Packit?

1. _Easy to configure_ - Feel free to jump into [our guide]({{< ref "guide" >}}) or check directly the [configuration documentation](/docs/configuration).

2. _Stable users_ - [Systemd](https://github.com/systemd/systemd/blob/45cab6e3c1d542d66c293a3a722c08412386f335/.packit.yml),
   [cockpit](https://github.com/cockpit-project/cockpit/blob/b0398fafe302b7c453db0e10a49f9d70e37727e2/packit.yaml),
   [avocado](https://github.com/avocado-framework/avocado/blob/73fd7259d6e87aad218ed87e5ccd4212c4a5042c/.packit.yml),
   [ansible-lint](https://github.com/ansible-community/ansible-lint/blob/0903650292b6dd057daec27aa6d9f2523cc9afdc/.packit.yaml)
   and many other projects. If you are interested, have a look at our [blog post](/posts/2021-in-numbers/) about the usage
   of Packit in the previous year.

3. _We are an active project_ - We are open to any ideas on how to improve Packit and try to bring new features
   and fix bugs as soon as possible, so you can open an [upstream issue](https://github.com/packit/packit-service/issues/new)
   any time.

4. _We are here to help_ - In case of questions, feel free to contact
   [us](https://github.com/orgs/packit/teams/the-packit-team):

   - **#packit** on [Libera.Chat](https://libera.chat/)
   - **hello@packit.dev**

{{< button relref="/docs/guide" >}}Get started{{< /button >}}

### What does Packit consist of?

1. a [CLI tool]({{< ref "cli" >}}), which you can
   [install locally](/docs/guide/#have-packit-tooling-installed-locally)
   and start using right away,

2. a [service]({{< ref "packit-service" >}}), which provides you feedback
   on how is your project integrated with [Fedora Linux](https://getfedora.org), [CentOS Stream](https://www.centos.org/centos-stream/)
   and other distributions.
