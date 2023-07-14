# packit.dev

Repository containing documentation and GH Actions used for deployment of the
[packit.dev] website.

### Installation

```
$ yarn
```

### Local Development

```
$ yarn start
```

This command starts a local development server and opens up a browser window.
Most changes are reflected live without having to restart the server.

> **Note**
> If you do not wish to automatically open the browser, since it's annoying. You
> can pass `--no-open` switch.

### Content

Majority of content is in the directories in this repository, namely:

- [development documentation](development/)
- [documentation](docs/)
- [blog posts](posts/)
- [source-git documentation](source-git/)
- [weekly updates](weekly/)

There's also “imported” documentation:

- [deployment](https://github.com/packit/deployment/tree/main/docs/deployment)

> **Warning**
> For the imported documentation, update the documentation in the linked
> repository in the linked directory.

#### Docusaurus features

For any of the markdown features see
[Docusaurus docs](https://docusaurus.io/docs/markdown-features).

##### Admonitions (previously known as “hint” blocks in Hugo)

```
:::type

content

:::
```

Allowed types: note, tip, info, caution, danger

**Newlines** around content are needed, because without newlines _prettier_
**can** reformat it as one-liner and break the rendering.

##### Blog post previews

Blog posts are listed on their respective locations. Each post has a “preview”
that, by default, contains whole post.

Ideally try to start each blog post with a “mouth-watering” paragraph that can
be followed by a `<!--truncate-->` mark that specifies an end of the preview.

Example can be seen [here](posts/manual-triggering/index.md) or in any of the
pre-existing blog posts.

##### Blog post authors

Blog posts support authors, see [`authors.yml`](authors.yml) for the global list
of authors, they can be specified as:

```
---
authors: ‹kerberos-login›
---
```

or

```
---
authors:
  - ‹kerberos-login›
  - ‹kerberos-login›
---
```

Irregular authors can be inlined without explicit specification in the global
list.

Each author can have name, email, title, URL and photo.

By default everyone has Kerberos login as their alias, RH email, URL and photo
point to GitHub.

#### Images

Images are kept close to the actual content with few differences, as described
below. Keeping them close to the markdown files allows us to have shorter links
in the text and also better organized, as opposed to the prefixes on the files
and unused images.

##### Documentation

In case of documentation, they are in an `img` directory placed in the root of
the documentation “section”, e.g. [docs/img]. They »can« be further separated
into subdirectories.

##### Blog posts / weekly

For blog posts it's ideal to create a directory »per« blog post and in each of
them nested `img` directory containing the pictures used in the blog post.

> **Warning**
> There's only one picture used in the weekly, so there are just markdown files
> and one shared `img` directory.

#### Aliases

Aliases are set globally in the [configuration](docusaurus.config.js).

#### “Weight”

Docusaurus uses `sidebar_position` instead of `weight` as Hugo did.

You don't need to specify the position for blog posts, they are sorted by the
date.

#### Tags

Both documentation and blog posts can be tagged. As of now there are only blog
posts tagged.

##### Weekly blog posts

They are tagged by the year to simplify lookup.

They also don't persistently occupy the sidebar (set to 12 recent posts for
weekly, so you can look a year back), so there shouldn't be any need to merge
them yearly.

#### Categories

When writing documentation, it is possible to group similar pages in categories
that can be made by creating a directory and:

1. Adding `index.md` that serves as a “cover” for that category.
2. Adding `_category_.yml` ([example](docs/configuration/upstream/_category_.yaml))
   that generates a simple page with links to the pages in the category.

   It is recommended to put `description` in each of the pages as they are shown
   on the “cover”.

### Build

```
$ yarn build
```

This command generates static content into the `build` directory and can be
served using any static contents hosting service.

### Deployment

Using SSH:

```
$ USE_SSH=true yarn deploy
```

Not using SSH:

```
$ GIT_USER=<Your GitHub username> yarn deploy
```

If you are using GitHub pages for hosting, this command is a convenient way to
build the website and push to the `gh-pages` branch.

---

This website is built using [Docusaurus 2](https://docusaurus.io/), a modern static website generator.
