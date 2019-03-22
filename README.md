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


### Generate/deploy website

After running `hugo server` for local web development,
you need to do a final `hugo` run (without the `server` part of the command) to rebuild your site.
You may then deploy your site by copying the `public/` directory to your production web server.

Running `hugo` does not remove generated files before building.
This means that you should delete your `public/` directory before running the `hugo` command.
If you do not remove these files, you run the risk of the wrong files (e.g., drafts or future posts) being left in the generated site.

### Themes

Currently, we use [Blackburn theme](https://themes.gohugo.io/blackburn).
For complete list of themes for Hugo, see [this](https://themes.gohugo.io).
If you want to add a new theme:

1. `git submodule add <theme_git_url> themes/<theme_name>`
2. set `theme = "theme_name"` in [config.toml](config.toml)

### Site Configuration

[Configuration](https://gohugo.io/getting-started/configuration/) is stored in [config.toml](config.toml).
