---
title: Introduction to specfile library
date: 2024-01-12
authors: nforro
tags:
  - specfile
---

# Introduction to specfile library

Have you ever wanted to make changes in an RPM spec file programmatically? _specfile_ library
has been created for that very purpose. It is a pure Python library that allows you to conveniently
edit different parts of a spec file while doing its best to keep the resulting changeset minimal
(no unnecessary whitespace changes etc.).

## Installation

The library is packaged for Fedora, EPEL 9 and EPEL 8 and you can simply install it with dnf:

```bash
dnf install python3-specfile
```

On other systems, you can use pip (just note that it requires RPM Python bindings to be installed):

```bash
pip install specfile
```

## Usage

Let's have a look at a few simple examples of how to use the library.

### Bumping release

To bump release and add a new changelog entry, we could use the following code:

```python
from specfile import Specfile

with Specfile("example.spec") as spec:
    spec.release = str(int(spec.expanded_release) + 1)
    spec.add_changelog_entry("- Bumped release for test purposes")
```

Let's take a look at what happens here:

We instantiate `Specfile` class with a path to our spec file and use it as a context manager
to automatically save all changes upon exiting the context.

We then use `expanded_release` property to get the current value of `Release` tag after macro expansion.
We assume it is numeric, so we simply convert it to integer, add 1, convert the result back to string
and assign the new value to `release` property.

:::tip

Note that `release`/`expanded_release` properties exclude dist tag (usually `%{?dist}`) - for convenience,
it is ignored when reading and preserved unmodified when writing. If that's not what you want, you can use
`raw_release`/`expanded_raw_release` properties instead.

:::

Finally, we add a new changelog entry. We don't specify any other arguments but content,
so the author is determined automatically using the same procedure as `rpmdev-packager` uses
and date is set to current day.

### Switching to `%autochangelog`

To make a switch from traditional changelog to `%autochangelog`, we could do the following:

```python
import pathlib
from specfile import Specfile

spec = Specfile("example.spec", autosave=True)

with spec.sections() as sections:
    entries = sections.changelog[:]
    sections.changelog[:] = ["%autochangelog"]

pathlib.Path("changelog").write_text("\n".join(entries) + "\n")
```

Let's take a look at what happens here:

We instantiate `Specfile` class with a path to our spec file and we also set `autosave` argument
that ensures that any changes are saved automatically as soon as possible.

_specfile_ heavily relies on context managers. Here we are using `sections()` method that returns
a context manager that we can use to manipulate spec file sections. Upon exiting the context,
any modifications done are propagated to the internal representation stored in our `Specfile` instance,
and since `autosave` is set, they are immediately saved to the spec file as well.

First, we store a copy of the content of the `%changelog` section. The content is represented
as a list of lines.

Then we replace the content with a single line - "%autochangelog".

Finally, we save the stored content into a "changelog" file.

### Iterating through tags

Contexts can be nested. Here is a code that iterates through all _package_ sections
(including the first, implicitly named one; also known as _preamble_) and prints expanded value
of all `Requires` tags:

```python
spec = Specfile("example.spec")

with spec.sections() as sections:
    for section in sections:
        # normalized name of a section is lowercased
        if section.normalized_name != "package":
            continue
        with spec.tags(section) as tags:
            for tag in tags:
                # normalized name of a tag is capitalized
                if tag.normalized_name != "Requires":
                    continue
                print(f"Section: {section.id}, Tag: {tag.name}, Value: {tag.expanded_value}")
```

Let's take a look at what happens here:

We instantiate `Specfile` class with a path to our spec file. This time we don't set `autosave` because
we are not doing any modifications (though we could still save any changes explicitly using `save()` method).

Then we use `sections()` context manager and iterate through sections; we skip sections not called "package"
(the initial _%_ is ommited for convenience).

After that we use `tags()` context manager and pass the current section as an argument. This allows us
to iterate through tags in the current section. Without any argument, we would get a list of tags in _preamble_,
the very first section in a spec file. We skip tags not called "Requires" and finally print the values
of `Requires` tags after macro expansion. We also print tag names (not normalized) and section IDs - those are
section names followed by options, e.g. "package -n alternative-name-for-example".

## More info and links

Are you interested in more details, trying the library out or even contributing? You can find _specfile_ source code on [GitHub](https://github.com/packit/specfile).
See the [README](https://github.com/packit/specfile/blob/main/README.md) for more tips and usage examples.
You can also check out the [API reference](https://packit.dev/specfile/api/specfile).
