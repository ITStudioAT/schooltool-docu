/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  releasesSidebar: [
    { type: "doc", id: "index" },
    {
      type: "category",
      label: "Versionen",
      collapsed: false,
      items: [{ type: "doc", id: "v3-31-11" }],
    },
    { type: "doc", id: "bekannte-bugs" },
    { type: "doc", id: "roadmap" },
  ],
};
export default sidebars;
