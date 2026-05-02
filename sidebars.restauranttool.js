/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  restauranttoolSidebar: [
    {
      type: "doc",
      id: "index",
    },
    {
      type: "category",
      label: "Admin",
      link: { type: "doc", id: "admin/index" },
      collapsible: false,
      collapsed: false,
      items: [
        { type: "doc", id: "admin/anmeldung" },
        {
          type: "category",
          label: "Einstellungen",
          link: { type: "doc", id: "admin/einstellungen/index" },
          collapsed: true,
          items: [
            { type: "doc", id: "admin/einstellungen/allgemein" },
            { type: "doc", id: "admin/einstellungen/kategorien" },
            { type: "doc", id: "admin/einstellungen/zutaten-symbole" },
            { type: "doc", id: "admin/einstellungen/freie-tage" },
            { type: "doc", id: "admin/einstellungen/speisezeiten" },
            { type: "doc", id: "admin/einstellungen/benutzer" },
            { type: "doc", id: "admin/einstellungen/sepa" },
            { type: "doc", id: "admin/einstellungen/online-bestellung" },
          ],
        },
      ],
    },
    {
      type: "doc",
      id: "benutzer",
    },
  ],
};
export default sidebars;
