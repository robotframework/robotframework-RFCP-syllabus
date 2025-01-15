// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer').themes.github;
const darkCodeTheme = require('prism-react-renderer').themes.dracula;

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Robot Framework Certified Professional® Syllabus',
  tagline: 'The foundation for the "Robot Framework Certified Professional®" (RFCP) exam and training',
  url: 'https://syllabus.robotframework.org',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/rf_favicon.png',
  organizationName: 'robotframework', // Usually your GitHub org/user name.
  projectName: 'robotframework-RFCP-syllabus', // Usually your repo name.
  trailingSlash: false,
  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          routeBasePath: '/docs',
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl: 'https://github.com/robotframework/robotframework-RFCP-syllabus/edit/docusaurus/website',
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
        title: 'syllabus.robotframework.org',
        logo: {
          alt: 'Robot Framework Logo',
          src: 'img/robot-framework.svg',
          srcDark: 'img/robot-framework-dark.svg',
        },
        items: [
          {
            label: 'Syllabus',
            to: '/docs/overview',
            position: 'right',
          },
          {
            href: 'https://robotframework.org/robotframework/latest/RobotFrameworkUserGuide.html',
            label: 'User Guide',
            position: 'right',
          },
          {
            href: 'https://robotframework.org/robotframework/#standard-libraries',
            label: 'Standard Library',
            position: 'right',
          },
          {
            href: 'https://robot-framework.readthedocs.io/en/stable/',
            label: 'API Documentation',
            position: 'right',
          },

          {
            href: 'https://slack.robotframework.org/',
            label: 'Slack',
            position: 'right',
          },
          {
            href: 'https://github.com/robotframework/robotframework-RFCP-syllabus',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Syllabus',
                to: '/docs/overview',
              },
              {
                href: 'https://robotframework.org/robotframework/latest/RobotFrameworkUserGuide.html',
                label: 'User Guide',
              },
              {
                href: 'https://robotframework.org/robotframework/#standard-libraries',
                label: 'Standard Library',
              },
              {
                href: 'https://robot-framework.readthedocs.io/en/stable/',
                label: 'API Documentation',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'GitHub',
                href: 'https://github.com/robotframework/robotframework-RFCP-syllabus',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Robot Framework Certified Professional® Syllabus Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
        additionalLanguages: ['robotframework', 'rust'],
      },
    }),
};

module.exports = config;