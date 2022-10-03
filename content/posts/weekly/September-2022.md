---
title: September 2022
date: 2022-09-05
weight: 58
---

## Week 35 (August 30th – September 5th)

- SRPMs for Copr builds are built in Copr by default for Packit GitHub app installations since September 6, 2022.
  For older installations, you can set the `srpm_build_deps` config option to use Copr as a builder.
  Let us know if you hit any issue with the new implementation. We are going to slowly decommission the old implementation
  and are happy to help with the transition. ([packit-service#1636](https://github.com/packit/packit-service/pull/1636))
- More indexes added to the database have further improved API/dashboard response times. ([packit-service#1639](https://github.com/packit/packit-service/pull/1639))
- When submitting Testing Farm tests, Packit will now retry multiple times in case there is a failure.
  ([packit-service#1605](https://github.com/packit/packit-service/pull/1605))
- We have implemented checking the available composes before submitting the tests for both internal and public Testing
  Farm. ([packit-service#1628](https://github.com/packit/packit-service/pull/1628))

## Week 36 (September 6th – September 12th)

- When querying Bodhi for information about Fedora/EPEL releases to resolve aliases,
  packit now correctly handles pagination of API results. This resolves an issue that caused
  Fedora 37 not to be pointed to from any alias.
  ([packit#1704](https://github.com/packit/packit/pull/1704))

## Week 37 (September 13th – September 19th)

- Added support for filenames specified in source URL fragments, for example: `https://example.com/foo/1.0/download.cgi#/%{name}-%{version}.tar.gz` ([specfile#100](https://github.com/packit/specfile/pull/100))
- Some more underlying improvements to our libraries and deployment.

## Week 38 (September 20th – September 26th)

- Propose downstream job now pushes changes even when it's not creating a new pull request. This allows updating existing pull requests. ([packit#1725](https://github.com/packit/packit/pull/1725))
- Packit now deduces Copr targets for Copr builds when you have set your custom Copr project to be used. ([packit-service#1673](https://github.com/packit/packit-service/pull/1673))
- Retriggering tasks via re-run button in Github commit checks when there are configured identifiers for jobs should now work correctly. ([packit-service#1671](https://github.com/packit/packit-service/pull/1671))
- Packit now reports a pending state rather than an error on Testing Farm runs in case the related copr build has not finished yet. ([packit-service#1669](https://github.com/packit/packit-service/pull/1669))
- Users can now **allow** building in a custom Copr project from a _git-forge_ project.
  User has to add manually the _git-forge_ project reference to the Copr project settings.
  As an example, we should add _github.com/packit/ogr_ to the list named _Packit forge project allowed_ in our _packit-dev_ Copr project settings: https://copr.fedorainfracloud.org/coprs/packit/packit-dev/edit#packit_forge_projects_allowed. ([packit-service#1638](https://github.com/packit/packit-service/pull/1638))

## Week 39 (September 27th – October 3rd)

- We have improved mapping of Testing Farm Composes, if you have set your own custom mapping and the TF Compose is available, it will be used as is without any additional modifications we do (version, etc.). ([packit-service#1675](https://github.com/packit/packit-service/pull/1675))
- We have added support for running the tests with Copr builds built by Packit in another pull request (in a different repository). You can read more about this feature in [our documentation](https://packit.dev/docs/testing-farm/#running-tests-with-builds-from-another-pull-request). ([packit-service#1658](https://github.com/packit/packit-service/pull/1658))
