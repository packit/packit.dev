// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

const EDIT_URL = "https://github.com/packit/packit.dev/tree/main";

// Represents one section of documentation, e.g. deployment or source-git
// Since the config is JS, we can abuse it to avoid unnecessary duplication.
class Section {
  // Args:
  //   path: Relative path to the directory containing the documentation
  //   label: Label shown on the navigation bar of the webpage
  //   editUrl: Base of the URL that is generated at the end of any page of the
  //     given documentation. This URL is different for the deployment or
  //     research docs.
  constructor(path, label, editUrl) {
    this.path = path;
    this.label = label;
    this.editUrl = editUrl || EDIT_URL;
  }

  // Generates a Docusaurus plugin entry.
  docs() {
    return [
      "@docusaurus/plugin-content-docs",
      {
        id: this.path,
        path: this.path,
        routeBasePath: this.path,
        sidebarPath: require.resolve("./sidebars.js"),
        editUrl: this.editUrl,
      },
    ];
  }

  // Generates an item for the navigation bar.
  navbar() {
    return {
      type: "doc",
      docId: "index",
      docsPluginId: this.path,
      position: "left",
      label: this.label,
    };
  }
}

const sections = [
  new Section("docs", "Documentation"),
  new Section("source-git", "Source-git"),
  new Section(
    "deployment",
    "Deployment",
    "https://github.com/packit/deployment/tree/main/docs",
  ),
  new Section("development", "Development"),
];

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Packit",
  tagline: "»TODO«",
  favicon: "img/favicon.png",

  url: "https://packit.dev",
  baseUrl: "/",

  // GitHub Pages deployment config.
  organizationName: "packit", // Usually your GitHub org/user name.
  projectName: "packit.dev", // Usually your repo name.
  trailingSlash: false,

  // TODO: Switch back to throw
  onBrokenLinks: "warn",
  onBrokenMarkdownLinks: "warn",

  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        // We have multiple instances of documentation and blogs, so disable the
        // defaults and set them up from plugins below.
        docs: false,
        blog: false,
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      }),
    ],
  ],

  plugins: [
    ...sections.map((section) => section.docs()),
    [
      "@docusaurus/plugin-content-blog",
      {
        id: "posts",
        routeBasePath: "posts",
        path: "posts",
        authorsMapPath: "../authors.yml",
        feedOptions: {
          type: "all",
          title: "Packit Blog",
          description: "Blog posts by Packit",
        },
        editUrl: EDIT_URL,
      },
    ],
    [
      "@docusaurus/plugin-content-blog",
      {
        id: "weekly",
        routeBasePath: "posts/weekly",
        path: "weekly",
        authorsMapPath: "../authors.yml",
        feedOptions: {
          type: "all",
          title: "Packit Weekly",
          description: "Weekly updates by Packit",
        },
        editUrl: EDIT_URL,
      },
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: "img/docusaurus-social-card.jpg", // TODO
      navbar: {
        title: "Packit",
        logo: {
          alt: "Packit Logo",
          src: "img/logo.png",
        },
        items: [
          ...sections.map((section) => section.navbar()),
          { to: "/posts", label: "Blog Posts", position: "left" },
          { to: "/posts/weekly", label: "Weekly Updates", position: "left" },
          {
            href: "https://github.com/facebook/docusaurus",
            label: "GitHub",
            position: "right",
          },
        ],
      },
      footer: {
        style: "dark",
        links: [
          {
            title: "Docs",
            items: [
              {
                label: "Tutorial",
                to: "/docs/index",
              },
            ],
          },
          {
            title: "Community",
            items: [
              {
                label: "Stack Overflow",
                href: "https://stackoverflow.com/questions/tagged/docusaurus",
              },
              {
                label: "Discord",
                href: "https://discordapp.com/invite/docusaurus",
              },
              {
                label: "Twitter",
                href: "https://twitter.com/docusaurus",
              },
            ],
          },
          {
            title: "More",
            items: [
              {
                label: "Blog",
                to: "/blog",
              },
              {
                label: "GitHub",
                href: "https://github.com/facebook/docusaurus",
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} My Project, Inc. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;