---
title: "Packit Flock 2024 Diary"
date: 2024-09-05T15:16:18+02:00
authors: flachman
tags:
  - fedora
  - flock
  - conference
  - "2024"
---

# Flock Packit Diary Blog post

It’s been a month since two Packit members ([Laura](https://fosstodon.org/@lbarcziova) and [František](https://mastodonczech.cz/@lachmanfrantisek) attended Flock, the annual Fedora conference, in Rochester. Let’s see some highlights from our journey There and Back Again. Sadly the travel there wasn’t as expected at all, but luckily the tornadoes did not stop us and we both made it to Rochester.

<!--truncate-->

# Packit contributions

We prepared two talks for the Flock attendees. If you missed it, the recordings are available. But here’s what we presented:

## Packit release automation journey ([recording](https://www.youtube.com/watch?v=x-o91dkv1Cg))

This one mainly targeted the Fedora maintainers and described how you can use Packit for your packages. The basic workflow has been here for some time but we’ve presented a couple of interesting news about what we are currently working on:

The requirement to have a git repository representing is now gone. By NOT specifying the `upstream_project_url` config option, Packit will not try to clone or interact with the upstream via git. This is especially useful if the upstream project does not use git, or you just don’t need it (e.g. packages using language-specific repositories like PyPI).

If you are interested in having a nice git tree, you’ll welcome that the Packit team is currently working on making it possible t[o avoid diverging branches when doing release syncing](https://github.com/packit/packit-service/pull/2478).

Another long-time-awaited feature is support for releasing package groups using side-tags. Since Flock, Nikola from the Packit team polished the functionality and even created a [dedicated documentation page](https://packit.dev/docs/fedora-releases-guide/releasing-multiple-packages)e describing how to use it.

And that’s not all, there are also two related efforts we are in the early phases. One is about using Packit to run reverse-dependency checks/builds. The update is that Mikolaj Izdebski (thanks a lot\!) re-enabled a Copr plugin in Koschei so it should now be possible to run the checks independently to Koji which is better for ad-hock CI checks but also to not produce extra load on Koji itself. Ideally, this would be available for both upstream and dist-git pull requests. And speaking of the dist-git pull requests, there is a discussion about [the future of Fedora CI](https://pagure.io/fedora-ci/general/issue/476) and Zuul, we agreed within a team to take a look and see if we can’t help with that. The reasons and questions to answer are covered in the talk.

And that’s still not all. There is also a Google Summer of Code project by Bryan Elee as part of which an integration for OpenBuildService is being implemented. Stay tuned. The CLI support is nearly there.

And lastly, project Myccorhisa. Our effort to create a unified dashboard for various Fedora-related services. Want to help us better understand the needs? Please, describe your usual workflow in [this form](https://packit.limesurvey.net/project-mycorrhiza).

But we were not speaking just about the features but also how we work and how we help people to get on board.

After the talk, there was an interesting discussion. One of the suggestions was to onboard new packages to Packit automatically – we thought about it within a team and [will work](https://github.com/packit/packit-service/issues/2506) on opening a pull request with the configuration and most importantly, a description of Packit.

## Packit \+ Testing Farm and Fedora: still happily testing upstream projects ([recording](https://www.youtube.com/watch?v=F7C82Fwdvis))

For the second talk, we were joined by [Jan Havlín](https://matrix.to/#/@jhavlin:fedora.im?web-instance[element.io]=chat.fedoraproject.org) from the Testing Farm team and the main aim of the talk was to show various new and old ways how to use Packit for your project. Rather than showing documentation, we presented the features on real projects and how they configure this so you can easily do the same. You might have seen this style of presentation from us, but don’t be fooled just by the structure, there were a couple of new features presented as well.

One big achievement is a collaboration with [Siteshwar Vashisht](https://twitter.com/SiteshwarV) on integrating OpenScanHub to run static analysis for your projects. The setup is very simple, just set up Packit to run builds both for the pull requests and your `main` branch and Packit will trigger a differential scan on pull requests for you. We have a separate blog post (/posts/openscanhub-prototype) about this. There is also [one](https://situ.im/posts/openscanhub-fedora-and-packit) written by Situ.

Also, Jan showed how you can newly generate your own Testing Farm tokens using your Fedora account – but when using Packit, this is not needed and Packit will take care of this for you. But maybe you want to use this to play with the Testing Farm environment locally – you can newly reserve a machine thanks to this token.

# Other talks and activities

During the Flock, we’ve quite intensively discussed the possibility of running Packit in Fedora infrastructure. Why? Currently, Packit is run on a RedHat-hosted OpenShift instance, but Packit’s main target is Fedora and we don’t communicate (and also don’t want to) with Red Hat internal services. Also, to show clearly the users that Packit is part of Fedora. On this topic, there was a [talk](https://cfp.fedoraproject.org/flock-2024/talk/VL7D3H/) held by David Kirwan about Communishift which is here for users to deploy their projects on Fedora-hosted OpenShift. We can use it, but we discussed with CPE team, that OpenShift managed by CPE team and used for other Fedora infrastructure systems might be a better fit. [Matej Focko](https://fosstodon.org/@m4tt_314) from our team collected our requirements and we were asked to communicate this publicly via [https://discussion.fedoraproject.org](https://discussion.fedoraproject.org/).

A lot of interest was caught by the talk about Fedora dist-git forge replacement. [Tomáš Hrčka](https://matrix.to/#/@humaton:fedora.im?web-instance[element.io]=chat.fedoraproject.org) quite nicely covered the current state that his team was asked to do the technical research but did not make any decision. Packit has even been included in their research which we are thankful for. Currently, we have two candidates – [Forgejo](https://forgejo.org/) and GitLab. Both have been deployed for testing purposes and can be accessed via Fedora staging accounts. So far, the Forgejo seems like a better choice both because of extensibility and ease of deployment/maintenance but nothing has been decided yet. There are two Packit-related topics – if Forgejo is picked, we need to implement its support in ogr, our library for git-forge communication, but hopefully, this would be the only place for change, let’s see…;) Another interesting thing is that there is an idea to provide dist-git functionality not directly on the git-forge, but as a separate dashboard/page and this might be worth collaborating as part of the project Myccorhisa.

If you are interested in testing in Fedora, you must watch [the talk](https://cfp.fedoraproject.org/flock-2024/talk/8U9GKX/) by [Adam Williamson](https://fosstodon.org/@adamw) with a long title _The hard problems: towards stronger checks on dependencies and compose inputs in Fedora._ Hopefully, Packit be a part of the solution covered during the talk.

Thanks to the community aspect of the conference, it was really easy to sit down with anyone and help them with the Packit setup and we’ve managed to onboard a couple of new projects for [Fedora automation](https://packit.dev/docs/fedora-releases-guide/dist-git-onboarding). Usually, people want to do the onboarding at home, alone (which they hardly do) at first, but they are happy to leave with a working setup after a bit of convincing. We can unblock them more easily, and describe anything needed and they are usually surprised at how simple it is..;)

If you are interested in a talk that was really engaging, take a look at _CentOS Stream \- a preview of RHEL, a solid base for CentOS SIGs_ by [Adam Šamalík](https://matrix.to/#/@asamalik:fedora.im?web-instance[element.io]=chat.fedoraproject.org). It was a nice walkthrough covering CentOS Stream and its design and processes. Also, a couple of interesting questions followed.

We also attended the Fedora Infrastructure Hackfest. There were a lot of topics covered, but two had a relation to Packit:

- There is a plan to unify the building of containers across CPE and we’ve suggested to include more teams like Packit since this is not a unique problem. A group of interested people will collaborate on the documentation and tooling.
- There are a lot of packages owned by the `infra-sig` and it’s hard to maintain them all. A cleanup is needed (e.g. pass the packages to other relevant parties). For the basic packages, we proposed help with Packit onboarding.

There were many more discussions and talks worth mentioning. Feel free to check the [schedule](https://cfp.fedoraproject.org/flock-2024/schedule/) with links to YouTube videos from the recording.

# Will we meet next year?

Could not make it in person this year? Let’s hope we’ll meet next year. Maybe somewhere in Europe this time. Want to influence the future Flock? There is still a day to fill out the [Flock Survey](https://fedoraproject.limequery.com/flock-2024).
