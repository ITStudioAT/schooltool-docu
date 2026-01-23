// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import { themes as prismThemes } from "prism-react-renderer";

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "SchoolTool",
  tagline: "SchoolTool is Cool",
  favicon: "img/schooltool.ico",

  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
  },

  // Set the production url of your site here
  url: "https://schooltool.at/",
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: "/documentation/",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "ITStudioAT", // Usually your GitHub org/user name.
  projectName: "schooltool-docu", // Usually your repo name.

  onBrokenLinks: "throw",

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "de",
    locales: ["de"],
  },

  presets: [
    [
      "classic",
      {
        docs: false,
        blog: {
          /* ... */
        },
        theme: { customCss: "./src/css/custom.css" },
      },
    ],
  ],

  plugins: [
    [
      "@docusaurus/plugin-content-docs",
      {
        id: "anmeldetool",
        path: "docs/anmeldetool",
        routeBasePath: "anmeldetool",
        sidebarPath: "./sidebars.anmeldetool.js",
      },
    ],
    [
      "@docusaurus/plugin-content-docs",
      {
        id: "nachhilfetool",
        path: "docs/nachhilfetool",
        routeBasePath: "nachhilfetool",
        sidebarPath: "./sidebars.nachhilfetool.js",
      },
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: "img/schooltool_white.png",
      colorMode: {
        respectPrefersColorScheme: true,
      },
      navbar: {
        items: [
          {
            type: "doc",
            docsPluginId: "anmeldetool",
            docId: "index",
            label: "Anmeldetool",
            position: "left",
          },
          {
            type: "doc",
            docsPluginId: "nachhilfetool",
            docId: "index",
            label: "Nachhilfetool",
            position: "left",
          },
          { to: "/blog", label: "Neuigkeiten", position: "left" },
        ],
      },

      footer: {
        style: "dark",
        links: [
          {
            title: "Docs",
            items: [
              { label: "Anmeldetool", to: "/anmeldetool" },
              { label: "Nachhilfetool", to: "/nachhilfetool" },
            ],
          },
        ],
        copyright: `Copyright © 2025-2026 ITStudio.at by Günther Kron.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
