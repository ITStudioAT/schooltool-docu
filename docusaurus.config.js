// @ts-check
import { themes as prismThemes } from "prism-react-renderer";

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "SchoolTool",
  tagline: "Werkzeuge für den Schulalltag.",
  favicon: "img/schooltool.ico",

  future: {
    v4: true,
  },

  url: "https://schooltool.at/",
  baseUrl: "/documentation/",

  organizationName: "ITStudioAT",
  projectName: "schooltool-docu",

  onBrokenLinks: "throw",

  i18n: {
    defaultLocale: "de",
    locales: ["de", "en"],
  },

  headTags: [
    {
      tagName: "link",
      attributes: { rel: "preconnect", href: "https://fonts.googleapis.com" },
    },
    {
      tagName: "link",
      attributes: {
        rel: "preconnect",
        href: "https://fonts.gstatic.com",
        crossorigin: "anonymous",
      },
    },
  ],

  stylesheets: [
    {
      href: "https://fonts.googleapis.com/css2?family=Geist:wght@300;400;500;600;700&family=Geist+Mono:wght@400;500&display=swap",
      type: "text/css",
      crossorigin: "anonymous",
    },
  ],

  presets: [
    [
      "classic",
      {
        docs: false,
        blog: false,
        theme: { customCss: "./src/css/custom.css" },
      },
    ],
  ],

  plugins: [
    [
      "@docusaurus/plugin-content-docs",
      {
        id: "restauranttool",
        path: "docs/restauranttool",
        routeBasePath: "restauranttool",
        sidebarPath: "./sidebars.restauranttool.js",
      },
    ],
    [
      "@docusaurus/plugin-content-docs",
      {
        id: "releases",
        path: "docs/releases",
        routeBasePath: "releases",
        sidebarPath: "./sidebars.releases.js",
      },
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      image: "img/schooltool_white.png",
      colorMode: {
        respectPrefersColorScheme: true,
      },
      docs: {
        sidebar: {
          autoCollapseCategories: true,
        },
      },
      navbar: {
        title: "SchoolTool",
        logo: {
          alt: "SchoolTool",
          src: "img/brand-mark.svg",
          href: "/",
        },
        hideOnScroll: false,
        items: [
          {
            type: "html",
            value: '<span class="navbar__link navbar__link--disabled">Anmeldetool</span>',
            position: "left",
          },
          {
            type: "html",
            value: '<span class="navbar__link navbar__link--disabled">Nachhilfetool</span>',
            position: "left",
          },
          {
            type: "html",
            value: '<span class="navbar__link navbar__link--disabled">Unterrichtstool</span>',
            position: "left",
          },
          {
            type: "doc",
            docsPluginId: "restauranttool",
            docId: "index",
            label: "Restaurantool",
            position: "left",
          },
          {
            type: "doc",
            docsPluginId: "releases",
            docId: "index",
            label: "Changelog",
            position: "right",
          },
        ],
      },

      footer: {
        style: "dark",
        links: [],
        copyright: `Copyright © 2025–2026 ITStudio.at by Günther Kron.`,
      },

      prism: {
        theme: prismThemes.dracula,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
