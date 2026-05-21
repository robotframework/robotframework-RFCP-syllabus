import { themes as prismThemes } from 'prism-react-renderer';
import remarkDirective from "remark-directive";
import remarkTermDirective from "./src/remark/remark-term-directive.js";
import codeMaxLineLength from './src/remark/remark-code-max-line-length.js';
import type { Config } from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const rawDocsBuildMode = process.env.DOCS_BUILD_MODE ?? 'preview';

if (!['preview', 'production'].includes(rawDocsBuildMode)) {
  throw new Error(
    `Invalid DOCS_BUILD_MODE: "${rawDocsBuildMode}". Expected "preview" or "production".`,
  );
}

const includeCurrentVersion = rawDocsBuildMode === 'preview';

const config: Config = {
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
  organizationName: 'robotframework',
  projectName: 'robotframework-RFCP-syllabus',
  trailingSlash: false,
  presets: [
    [
      'classic',
      ({
        docs: {
          includeCurrentVersion,
          admonitions: {
            keywords: ['lo', 'K1', 'K2', 'K3', 'note', 'tip', 'info', 'warning', 'danger'],
            extendDefaults: true,
          },
          sidebarPath: './sidebars.ts',
          remarkPlugins: [remarkDirective, remarkTermDirective, [codeMaxLineLength, { max: 100 }]],
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options),
    ],
  ],
  themeConfig: ({
    colorMode: {
      defaultMode: 'dark',
      disableSwitch: false,
      respectPrefersColorScheme: true,
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
          type: 'doc',
          docId: 'overview',
          label: 'Introduction',
          position: 'left',
        },
        {
          type: 'doc',
          docId: 'chapter-01/overview',
          label: 'Chapter 1',
          position: 'left',
        },
        {
          type: 'doc',
          docId: 'chapter-02/overview',
          label: 'Chapter 2',
          position: 'left',
        },
        {
          type: 'doc',
          docId: 'chapter-03/overview',
          label: 'Chapter 3',
          position: 'left',
        },
        {
          type: 'doc',
          docId: 'chapter-04/overview',
          label: 'Chapter 4',
          position: 'left',
        },
        {
          type: 'doc',
          docId: 'chapter-05/overview',
          label: 'Chapter 5',
          position: 'left',
        },
        {
          type: 'doc',
          docId: 'example-exam/Example-exam',
          label: 'Example Exam',
          position: 'left',
        },
        {
          type: 'doc',
          docId: 'learning_objectives',
          label: 'LOs',
          position: 'left',
        },
        {
          type: 'docsVersionDropdown',
          position: 'right',
          dropdownActiveClassDisabled: true,
        },
      ],
    },
    footer: {
      style: 'dark',
      copyright: `Copyright © ${new Date().getFullYear()} Robot Framework® Foundation - Syllabus of Robot Framework® Certified Professional`,
    },
    prism: {
      theme: prismThemes.vsLight,
      darkTheme: prismThemes.dracula,
      additionalLanguages: ['robotframework', 'python'],
    },
  } satisfies Preset.ThemeConfig),
  plugins: [
    'docusaurus-lunr-search',
  ],
};

export default config;
