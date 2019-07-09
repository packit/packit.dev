# packit.dev
[packit.dev](https://packit.dev) website content

## Hugo

### Installation

This repository uses git submodules, so you have to `git clone --recurse-submodules` it.

#### Fedora

The current build of hugo in Fedora does not work with our setup, please use this copr repo instead:
```
$ dnf copr enable daftaupe/hugo
```

And then:

1. `dnf install hugo`
2. `hugo help`


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

tl;dr:
Run `make generate`.

Long story:
We host the content on GitHub Pages from [docs/](docs/) folder.
See `GitHub Pages` section in [this repo's Settings](https://github.com/packit-service/packit.dev/settings).
To regenerate the content in `docs/` folder, you have to run `hugo`.
However, running `hugo` does not remove generated files before building.
This means that you should delete the [docs/](docs/) directory before running the `hugo` command.
If you do not remove these files, you run the risk of the wrong files (e.g., drafts or future posts) being left in the generated site.

If you keep forgetting to run `make generate` before you push your changes, you can utilize [git pre-commit hook](https://git-scm.com/docs/githooks#_pre_commit).

```sh
$ echo "make generate && git add docs/*" > .git/hooks/pre-commit
$ chmod +x .git/hooks/pre-commit
```

### About page

We want the [About page](https://github.com/packit-service/packit.dev/blob/master/content/about.md)
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
