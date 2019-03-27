# packit.dev
packit.dev website content

## Hugo

### Installation (Fedora)

This repository uses git submodules, so you have to `git clone --recurse-submodules` it.

1. `dnf install hugo`
2. `hugo help`

Note: If you need latest greatest, run `dnf copr enable daftaupe/hugo` first.

### Add new post

`hugo new post/packit-100.md`

### Content

All content [is organized](https://gohugo.io/content-management/organization) in [content](content/) directory tree.

### Start Hugo server

1. `hugo server -D` (`-D` means 'include content marked as draft')
2. [Web Server](http://localhost:1313)


### Rebuild content & Github Pages

We host the content on GitHub Pages from [docs/](docs/) folder.
See `GitHub Pages` section in [this repo's Settings](https://github.com/packit-service/packit.dev/settings).
To rebuild the content into `docs/` folder, you have to run `hugo -d docs`.

Running `hugo` does not remove generated files before building.
This means that you should delete the [docs/](docs/) directory before running the `hugo` command.
If you do not remove these files, you run the risk of the wrong files (e.g., drafts or future posts) being left in the generated site.

### Themes

Currently, we use [Blackburn theme](https://themes.gohugo.io/blackburn).
For complete list of themes for Hugo, see [this](https://themes.gohugo.io).
If you want to add a new theme:

1. `git submodule add <theme_git_url> themes/<theme_name>`
2. set `theme = "theme_name"` in [config.toml](config.toml)

### Site Configuration

[Configuration](https://gohugo.io/getting-started/configuration/) is stored in [config.toml](config.toml).
