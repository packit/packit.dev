---
title: Advanced usage of the specfile library
date: 2025-01-09
authors: nforro
tags:
  - specfile
---

# Advanced usage of the specfile library

Are you already familiar with the basic concepts of the _specfile_ library?
Then welcome to a collection of some slightly more advanced topics that you could find useful.
If you're not that familiar and would like to start with something easier,
you can take a look at [Introduction to specfile library](posts/specfile-introduction).

<!--truncate-->

## Forced parsing

Imagine you want to make changes to a spec file that requires some sources
to be present at the time of parsing such as sources referenced from shell
expansions (e.g. `%(date +%F -r %{SOURCE0})`), includes some external files
using the `%include` directive, or loads external macrofiles with the `%load` macro,
but all you have is the spec file itself.

In such case you may want to instantiate `Specfile` with the `force_parse` argument
set to `True` in order to attempt to parse the spec file with missing external files.
If that succeeds and some required external files were indeed missing during parsing,
the `Specfile.tainted` property is set to `True` to indicate that certain assumptions
could be broken - for example a condition that relies on a macro defined in an external
macrofile could be evaluated incorrectly.

## Defining and undefining macros

You can define or undefine any RPM macros before parsing a spec file with the `macros`
argument to the `Specfile` constructor. The argument takes a list of 2-string tuples
where the first element is macro name and the second element is macro value.
If the second element is `None`, the macro will be undefined. This can come in handy
when you need to undefine a system macro such as `fedora`.

```python
from specfile import Specfile

spec = Specfile(
    "example.spec",
    macros=[
        ("fedora", None),
        ("epel", "9"),
    ],
)
```

It is also possible to pass macro definitions in the same format as the `extra_macros`
argument to the `Specfile.expand()` method in order to temporarily define or undefine macros
before expression expansion.

For example, the following code snippet will print the expanded value of the `Release` tag
without system dist tag:

```python
spec = Specfile("example.spec")

print(spec.expand("%release", extra_macros=[("dist", None)]))
```

:::note

This is just for demonstration of `extra_macros`, you can achieve the same with:

```python
spec = Specfile("example.spec")

print(spec.expanded_release)
```

:::

## Conditions and expansion

### Validity

`MacroDefinition`, `Tag`, `SourceListEntry`, `Source` and `Patch` classes have a `valid` attribute
that determines if the respective entity is in a true branch of a condition (provided that the condition
is not present in a false branch of another condition).

Having the following in a spec file:

```specfile
%if %{defined copr_username}
Epoch: 102
%else
Epoch: 2
%endif
```

You can use the `Tag.valid` attribute to choose the suitable `Epoch` tag based on validity:

```python
from specfile import Specfile

spec = Specfile("example.spec")

with spec.tags() as tags:
    epoch_tags = [t for t in tags if t.normalized_name == "Epoch"]
    # print the value of the first Epoch tag, disregarding the condition
    print(epoch_tags[0].value)
    # print the value of the first valid Epoch tag
    print(next(t for t in epoch_tags if t.valid).value)
    # when accessing tags by name the first valid one is chosen,
    # so this does the same as above
    print(tags.epoch.value)
```

### Expression expansion

You can get expanded values of tags with their `expanded_value` property. This is the literal
value of a tag as present in the spec file that is passed to `Specfile.expand()` for expansion.

If you are not interested in modification and want to get exactly what `rpmspec --parse example.spec`
would give you, you can use the `Specfile.parsed_sections` property:

```python
spec = Specfile("example.spec")

with spec.tags(spec.parsed_sections.package) as tags:
    print(tags.version.value)
```

Doing this means that all conditions and macros will be already expanded, so all tags will be valid
and their `value` and `expanded_value` will be the same. Modifications will have no effect.

You can also access the underlying `rpm.spec` object with the `Specfile.rpm_spec` property,
which allows you to do things like:

```python
spec = Specfile("example.spec")

print(spec.rpm_spec.sourceHeader.epoch)
```

In this case the printed value will be a number, not a string like in previous cases.

:::info

This means you have 3 ways how to get expanded value of a tag with the _specfile_ library.
All of them should give you same or very similar results, but only the first one gives you access
also to the unexpanded value of a tag and the possibility to modify it. On the other hand it will
also take the most time, so think twice if performance is a concern.

:::

## Making modifications less obstructive

Consider the following in a spec file:

```specfile
#global rc_ver 3
%global maj_ver 12
%global min_ver 0
%global patch_ver 1

Name:       %{pkg_name}
Version:    %{maj_ver}.%{min_ver}.%{patch_ver}%{?rc_ver:~rc%{rc_ver}}
```

Rather than replacing the value of `Version` with a version string, removing all the macro
substitutions in the process, you can use `Specfile.update_tag()` and have it try to update
the relevant macro definitions instead:

```python
from specfile import Specfile

spec = Specfile("example.spec")

spec.update_tag("Version", "12.1.0")
```

This will result in:

```specfile
#global rc_ver 3
%global maj_ver 12
%global min_ver 1
%global patch_ver 0

Name:       %{pkg_name}
Version:    %{maj_ver}.%{min_ver}.%{patch_ver}%{?rc_ver:~rc%{rc_ver}}
```

It will even uncomment a commented-out macro definition if needed:

```python
spec = Specfile("example.spec")

spec.update_tag("Version", "12.1.1~rc1")
```

This will result in:

```specfile
%global rc_ver 1
%global maj_ver 12
%global min_ver 1
%global patch_ver 1

Name:       %{pkg_name}
Version:    %{maj_ver}.%{min_ver}.%{patch_ver}%{?rc_ver:~rc%{rc_ver}}
```

However, if you want to go back to a regular version, you have to comment out the relevant
macro definition explicitly:

```python
from specfile import Specfile
from specfile.macro_definitions import CommentOutStyle

spec = Specfile("example.spec")

with spec.macro_definitions() as macro_definitions:
    # use the original comment-out style
    macro_definitions.rc_ver.comment_out_style = CommentOutStyle.HASH
    macro_definitions.rc_ver.commented_out = True

spec.update_tag("Version", "12.1.1")
```

This will result in:

```specfile
#global rc_ver 1
%global maj_ver 12
%global min_ver 1
%global patch_ver 1

Name:       %{pkg_name}
Version:    %{maj_ver}.%{min_ver}.%{patch_ver}%{?rc_ver:~rc%{rc_ver}}
```

The algorithm isn't perfect and won't work in all situations, but even if it's not possible to update
some macro definitions it is guaranteed that `expanded_value` of a tag after calling `update_tag()`
will be equal to the given value.

There is also a more general method `Specfile.update_value()` that allows you to update any string
within a spec file in the same manner, trying to preserve macro substitutions and update relevant
macro definitions (or even tag values in case of e.g. `%{version}`) if possible. It is up to you
to replace the original string with the result (that can but doesn't have to be exactly the same).

:::info

The algorithm first tokenizes the string to be updated. Then it determines which macro substitutions
within the string can be affected by modifying bodies of preceding macro definitions or values
of preceding tags. Then it identifies substrings that are deemed modifiable (that could be for example
a sequence of numbers between two dots) and constructs a regular expression in which the modifiable
macro substitutions and the modifiable substrings are capturing groups.
If the requested new string is a not match to this regular expression, nothing happens and the requested
new string is returned unchanged. If it is a match though, the captured groups corresponding to modifiable
macro substitutions are processed, recursively, starting with tokenization once again. The requested
new string is then updated with corresponding macro substitutions from the original string and returned.

:::

## More info and links

Are you interested in more details, trying the library out or even contributing?
You can find _specfile_ source code on [GitHub](https://github.com/packit/specfile).
See the [README](https://github.com/packit/specfile/blob/main/README.md) for more tips and usage examples.
You can also check out the [API reference](https://packit.dev/specfile/api/specfile).
