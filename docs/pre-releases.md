---
title: Pre-releases
sidebar_position: 9
---
# Setting up pre-releases with Packit

There are two ways how to support pre-releases in a spec file.

The simpler way relies on the `%version_no_tilde` macro from `rust-srpm-macros` (not present on EL < 9)
that converts a pre-release version with `~` back to upstream version. An optional argument defines upstream delimiter
that defaults to `-`.
Here is an example of a spec file using this macro:

```specfile
Version:        3.28.0~rc3

...

Source0:        https://example.com/files/v%{version_no_tilde}/%{name}-%{version_no_tilde}.tar.gz

...

%prep
%autosetup -p1 -n %{name}-%{version_no_tilde}
```

If upstream version doesn't have a delimiter, for example `3.28.0b5`, you can use `%{version_no_tilde %{quote:%nil}}`.

The second, more complex way requires you to define a macro, typically called `prerelease` or `prerel`, and package version
(value of the `Version` tag) and upstream version are constructed depending on whether it is defined or commented out.
Here is an example of such a spec file:

```specfile
%global base_version 3.28.0
%global prerelease rc3

%global package_version %{base_version}%{?prerelease:~%{prerelease}}
%global upstream_version %{base_version}%{?prerelease:-%{prerelease}}

...

Version:        %{package_version}

...

Source0:        https://example.com/files/v%{upstream_version}/%{name}-%{upstream_version}.tar.gz

...

%prep
%autosetup -p1 -n %{name}-%{upstream_version}
```

And a bit more complex example that achieves the same (but this time there is no delimiter in upstream version
and tarball URL is slightly different):

```specfile
%global majorver 3
%global minorver 28
%global patchver 0
%global prerel rc3

%if 0%{?prerel:1}
%global package_version %{majorver}.%{minorver}.%{patchver}~%{prerel}
%global upstream_version %{majorver}.%{minorver}.%{patchver}%{prerel}
%else
%global package_version %{majorver}.%{minorver}.%{patchver}
%global upstream_version %{majorver}.%{minorver}.%{patchver}
%endif

...

Version:        %{package_version}

...

Source0:        https://example.com/files/v%{majorver}.%{minorver}/%{name}-%{upstream_version}.tar.gz

...

%prep
%autosetup -p1 -n %{name}-%{upstream_version}
```

Packit supports both ways. There is a config option [`prerelease_suffix_pattern`](/docs/configuration#prerelease_suffix_pattern)
that defines a regex that is used to determine if a version is a pre-release or not.
It defaults to `([.\-_~^]?)(alpha|beta|rc|pre(view)?)([.\-_]?\d+)?` and you can adjust it if your project uses
a different versioning scheme or undefine it to opt-out from pre-release processing. The first capturing group of the regex
should capture the delimiter and can be empty if there is none.
If a pre-release is detected, the delimiter is replaced with `~` to ensure proper sorting by RPM. You can also configure
the [`prerelease_suffix_macro`](/docs/configuration#prerelease_suffix_macro) option to correspond to a pre-release macro
in your spec file and this macro will be commented out or uncommented accordingly.
