# packit.dev

[packit.dev](https://packit.dev) website content

## Hugo

### Installation

This repository uses git submodules, so you have to `git clone --recurse-submodules` it.

#### Fedora

1. `dnf install hugo`
2. `hugo help`

There's also a copr repo, but the newer versions not always work as expected, you have to experiment a bit:

```
$ dnf copr enable daftaupe/hugo
```

#### MacOS

```
$ brew install hugo
```

### Add new post

`hugo new posts/packit-xyz.md`

### Content

All content [is organized](https://gohugo.io/content-management/organization) in [content](content/) directory tree.

### Start Hugo server

1. `make server` or `hugo server -D` (`-D` means 'show also content marked as draft')
2. [Web Server](http://localhost:1313)

### Rebuild content & Github Pages

It's done automatically with each push to master. We use
[Hugo Deploy GitHub Pages Action](https://github.com/marketplace/actions/hugo-deploy-github-pages)
configured in [.github/workflows/deploy-pages.yml](.github/workflows/deploy-pages.yml)
which pushes the generated content into
[packit/packit.dev-github-pages](https://github.com/packit/packit.dev-github-pages)
from where the Github Pages are served.
The secret used by the action is stored in
[settings/secrets](https://github.com/packit/packit.dev/settings/secrets).

### About page

We want the [About page](https://github.com/packit/packit.dev/blob/master/content/about.md)
to be visible on the top of the website, so we have to keep the `date:` in the `about.md` newer then in the other content files.
If you find a better way, let us know.

### Themes

Currently, we use [Grav Learn theme](https://github.com/matcornic/hugo-theme-learn).
For complete list of themes for Hugo, see [this](https://themes.gohugo.io).
If you want to use a theme:

1. `git submodule init themes/<theme_name>`
2. `git submodule update`
3. set `theme = "theme_name"` in [config.toml](config.toml)

### Site Configuration

[Configuration](https://gohugo.io/getting-started/configuration/) is stored in [config.toml](config.toml).
