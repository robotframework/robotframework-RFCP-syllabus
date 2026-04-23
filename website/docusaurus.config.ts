// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer').themes.vsLight;
const darkCodeTheme = require('prism-react-renderer').themes.dracula;
import remarkDirective from "remark-directive";
import remarkTermDirective from "./src/remark/remark-term-directive.js";
import codeMaxLineLength from './src/remark/remark-code-max-line-length.js';


/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Syllabus of Robot Framework® Certified Professional',
  tagline: 'The foundation for the "Robot Framework® Certified Professional" (RFCP®) exam and training',
  url: 'https://robotframework.org',
  baseUrl: '/robotframework-RFCP-syllabus/',
  onBrokenLinks: 'throw',
  markdown: {
    hooks: {
      onBrokenMarkdownLinks: 'throw',
    },
  },
  favicon: 'img/rf_favicon.png',
  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
  },
  organizationName: 'robotframework', // Usually your GitHub org/user name.
  projectName: 'robotframework-RFCP-syllabus', // Usually your repo name.
  trailingSlash: false,
  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          admonitions: {
            keywords: ['lo', 'K1', 'K2', 'K3', 'note', 'tip', 'info', 'warning', 'danger'],
            extendDefaults: true,
          },
          routeBasePath: '/docs',
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // editUrl: 'https://github.com/robotframework/robotframework-RFCP-syllabus/edit/docusaurus/website',
          remarkPlugins: [remarkDirective, remarkTermDirective, [codeMaxLineLength, { max: 100 }]],
        },
        blog: false,
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],
  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      colorMode: {
        defaultMode: 'dark',
        disableSwitch: false,
        respectPrefersColorScheme: false,
      },
      navbar: {
        title: 'RFCP-Syllabus',
        logo: {
          alt: 'Robot Framework Logo',
          src: 'img/robot-framework.svg',
          srcDark: 'img/robot-framework-dark.svg',
        },
        items: [
          {
            label: 'Introduction',
            to: '/docs/overview',
            position: 'left',
          },
          {
            label: 'Chapter 1',
            to: '/docs/chapter-01/overview',
            position: 'left',
          },
          {
            label: 'Chapter 2',
            to: '/docs/chapter-02/overview',
            position: 'left',
          },
          {
            label: 'Chapter 3',
            to: '/docs/chapter-03/overview',
            position: 'left',
          },
          {
            label: 'Chapter 4',
            to: '/docs/chapter-04/overview',
            position: 'left',
          },
          {
            label: 'Chapter 5',
            to: '/docs/chapter-05/overview',
            position: 'left',
          },
          {
            label: 'Example Exam',
            to: '/docs/example-exam',
            position: 'left',
          },
          {
            label: 'LOs',
            to: '/docs/learning_objectives',
            position: 'left',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Robot Framework® Foundation - Syllabus of Robot Framework® Certified Professional`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
        additionalLanguages: ['robotframework', 'python'],
      },
    }),
  plugins: [
    require.resolve('docusaurus-lunr-search')
  ],
};

module.exports = config;