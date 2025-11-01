// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer').themes.vsLight;
const darkCodeTheme = require('prism-react-renderer').themes.dracula;

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Syllabus of Robot Framework® Certified Professional',
  tagline: 'The foundation for the "Robot Framework® Certified Professional" (RFCP®) exam and training',
  url: 'https://robotframework.org',
  baseUrl: '/robotframework-RFCP-syllabus/',
  onBrokenLinks: 'warn',
  markdown: {
    hooks: {
      onBrokenMarkdownLinks: 'warn',
    },
  },
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
          admonitions: {
            keywords: ['lo', 'K1', 'K2', 'K3', 'note', 'tip', 'info', 'warning', 'danger'],
            extendDefaults: true,
          },
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
            label: 'LOs',
            to: '/docs/learning_objectives',
            position: 'left',
          },
          // {
          //   href: 'https://robotframework.org/robotframework/latest/RobotFrameworkUserGuide.html',
          //   label: 'User Guide',
          //   position: 'right',
          // },
          // {
          //   href: 'https://robotframework.org/robotframework/#standard-libraries',
          //   label: 'Standard Library',
          //   position: 'right',
          // },
          // {
          //   href: 'https://robot-framework.readthedocs.io/en/stable/',
          //   label: 'API Documentation',
          //   position: 'right',
          // },

          // {
          //   href: 'https://slack.robotframework.org/',
          //   label: 'Slack',
          //   position: 'right',
          // },
          // {
          //   href: 'https://github.com/robotframework/robotframework-RFCP-syllabus',
          //   label: 'GitHub',
          //   position: 'right',
          // },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          // {
          //   title: 'Docs',
          //   items: [
          //     {
          //       label: 'Syllabus',
          //       to: '/docs/overview',
          //     },
          //     // {
          //     //   href: 'https://robotframework.org/robotframework/latest/RobotFrameworkUserGuide.html',
          //     //   label: 'User Guide',
          //     // },
          //     // {
          //     //   href: 'https://robotframework.org/robotframework/#standard-libraries',
          //     //   label: 'Standard Library',
          //     // },
          //     // {
          //     //   href: 'https://robot-framework.readthedocs.io/en/stable/',
          //     //   label: 'API Documentation',
          //     // },
          //   ],
          // },
          // {
          //   title: 'More',
          //   items: [
          //     {
          //       label: 'GitHub',
          //       href: 'https://github.com/robotframework/robotframework-RFCP-syllabus',
          //     },
          //   ],
          // },
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
    async function quizRawLoaderPlugin() {
      return {
        name: 'quiz-raw-loader',
        configureWebpack() {
          return {
            module: {
              rules: [
                {
                  test: /\.(quiz|txt)$/,
                  type: 'asset/source', // <-- built-in replacement for raw-loader
                },
              ],
            },
          };
        },
      };
    },
    require.resolve('docusaurus-lunr-search')

  ],
};

module.exports = config;