/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: "Protobuffet",
  tagline: "Documentation Toolset for Your Protobuf Workspace",
  url: "https://mashita1023.github.io",
  baseUrl: "/proto-test",
  organizationName: "mashita1023", // Usually your GitHub org/user name.
  projectName: "proto-test", // Usually your repo name.
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon.ico",
  themeConfig: {
    navbar: {
      title: "Protobuffet",
      logo: {
        alt: "Protobuffet Logo",
        src: "img/logo.png",
      },
      items: [
        {
          to: "protodocs/test/hoge/hoge.proto",
          activeBasePath: "protodocs",
          label: "Protodocs",
          position: "left",
        },
        {
          href: "https://github.com/protobuffet/docusaurus-protobuffet",
          label: "GitHub",
          position: "right",
        },
      ],
    },
    footer: {
      style: "dark",
      links: [
        {
          title: "Protobuffet",
          items: [
            {
              label: "Overview",
              to: "https://protobuffet.com/docs/what/overview",
            },
            {
              label: "Features",
              to: "https://protobuffet.com/docs/what/features",
            },
            {
              label: "Motivation",
              to: "https://protobuffet.com/docs/what/motivation",
            },
          ],
        },
        {
          title: "Guides",
          items: [
            {
              label: "Installation",
              to: "https://protobuffet.com/docs/how/installation",
            },
            {
              label: "Usage",
              to: "https://protobuffet.com/docs/how/usage",
            },
          ],
        },
        {
          title: "Community",
          items: [
            {
              label: "GitHub",
              href: "https://github.com/protobuffet/docusaurus-protobuffet",
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Protobuffet. Built with Docusaurus.`,
    },
  },
  presets: [
    [
      "@docusaurus/preset-classic",
      {
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          // Please change this to your repo.
          editUrl:
            "https://github.com/facebook/docusaurus/edit/master/website/",
        },
        blog: false,
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      },
    ],
    [
      "docusaurus-protobuffet",
      {
        protobuffet: {
          fileDescriptorsPath: "./fixtures/proto_workspace.json",
          protoDocsPath: "./protodocs",
          sidebarPath: "./generatedSidebarsProtodocs.js",
        },
      },
    ],
  ],
  plugins: [],
};
