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
  constructor(path, label, editUrl, nested) {
    this.path = path;
    this.label = label;
    this.editUrl = editUrl || EDIT_URL;
    this.nested = nested;
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
    if (this.nested) {
      return {
        type: "dropdown",
        label: this.label,
        to: this.path,
        items: this.nested.map((section) => section.navbar()),
      };
    }

    return {
      type: "doc",
      docId: "index",
      docsPluginId: this.path,
      label: this.label,
    };
  }
}

const developmentSections = [
  new Section(
    "deployment",
    "Deployment",
    "https://github.com/packit/deployment/tree/main/docs",
  ),
  new Section(
    "research",
    "Research",
    "https://github.com/packit/research/tree/main",
  ),
  new Section(
    "agile",
    "Agile",
    "https://github.com/packit/agile/tree/main/docs",
  ),
  new Section(
    "specfile",
    "specfile library",
    "https://github.com/packit/specfile/tree/main/docs",
  ),
];

const sections = [
  new Section("docs", "Documentation"),
  new Section("source-git", "Source-git"),
  new Section("development", "Development", undefined, developmentSections),
];

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Packit",
  tagline: "Automate and ease the work of maintainers and developers",
  favicon: "img/favicon.png",

  url: "https://packit.dev",
  baseUrl: "/",

  // GitHub Pages deployment config.
  organizationName: "packit", // Usually your GitHub org/user name.
  projectName: "packit.dev", // Usually your repo name.
  trailingSlash: false,

  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "throw",

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
    ...developmentSections.map((section) => section.docs()),
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
        blogSidebarCount: 12,
        editUrl: EDIT_URL,
      },
    ],
    [
      "@docusaurus/plugin-client-redirects",
      {
        redirects: [
          { from: ["/about"], to: "/docs/about" },
          { from: ["/faq"], to: "/docs/faq" },
          {
            from: ["/testing-farm", "/docs/testing-farm"],
            to: "/docs/configuration/upstream/tests",
          },
          {
            from: [
              "/packit-service",
              "/packit-as-a-service",
              "/docs/packit-service",
              "/docs/packit-as-a-service",
            ],
            to: "/docs/guide",
          },
          {
            from: [
              "/posts/weekly/january-2022",
              "/posts/weekly/february-2022",
              "/posts/weekly/march-2022",
              "/posts/weekly/april-2022",
              "/posts/weekly/may-2022",
              "/posts/weekly/june-2022",
              "/posts/weekly/july-2022",
              "/posts/weekly/august-2022",
              "/posts/weekly/september-2022",
              "/posts/weekly/october-2022",
              "/posts/weekly/november-2022",
              "/posts/weekly/december-2022",
            ],
            to: "/posts/weekly/2022",
          },
          {
            from: ["/posts/weekly/2023/08/07"],
            to: "/posts/weekly/2023/week-31",
          },
          {
            from: ["/posts/weekly/2023/08/14"],
            to: "/posts/weekly/2023/week-32",
          },
        ],
      },
    ],
  ],

  markdown: {
    mermaid: true,
  },

  themes: ["@docusaurus/theme-mermaid"],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      docs: {
        sidebar: {
          hideable: true,
        },
      },
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
          {
            type: "dropdown",
            label: "Blog Posts",
            to: "/posts",
            items: [{ to: "/posts/weekly", label: "Weekly Updates" }],
          },
          {
            href: "https://dashboard.packit.dev",
            label: "Dashboard",
            position: "right",
          },
          {
            href: "https://status.packit.dev/",
            label: "Status",
            position: "right",
          },
          {
            href: "https://github.com/packit",
            // label: "GitHub",
            position: "right",
            className: "header-github-link",
          },
        ],
      },
      footer: {
        style: "light",
        links: [
          {
            title: "Docs",
            items: [
              {
                label: "Onboarding guide",
                to: "/docs/guide",
              },
              {
                label: "Fedora releases guide",
                to: "/docs/fedora-releases-guide",
              },
            ],
          },
          {
            title: "Contact",
            items: [
              {
                html: `
                  <a href="https://chat.fedoraproject.org/#/room/#packit:fedora.im">
                    #packit:fedora.im
                  </a> (Element / Matrix)
                `,
              },
              {
                html: `
                  <a href="mailto:hello@packit.dev">hello@packit.dev</a>
                `,
              },
              {
                html: `
                  <a href="https://fosstodon.org/@packit" rel="me">
                    @packit@fosstodon.org
                  </a> (Mastodon)
                `,
              },
            ],
          },
          {
            title: "More",
            items: [
              {
                label: "Usage Charts",
                to: "/usage",
              },
              {
                label: "Blog Posts",
                to: "/posts",
              },
              {
                label: "GitHub",
                href: "https://github.com/packit",
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Packit is a Red Hat sponsored free software project. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
      algolia: {
        // The application ID provided by Algolia
        appId: "STHKG8EYKZ",
        // Public API key: it is safe to commit it
        apiKey: "5ea910a1c2fb83cb1cc4978e14d7d570",
        indexName: "packitdev",
      },
    }),
};

module.exports = config;
