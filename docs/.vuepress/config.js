import { defaultTheme } from '@vuepress/theme-default'
import { defineUserConfig } from 'vuepress/cli'
import { viteBundler } from '@vuepress/bundler-vite'
import { searchPlugin } from '@vuepress/plugin-search'

export default defineUserConfig({
  lang: 'en-US',
  title: 'RTFR',
  description: 'Read The Fucking Rider',
  base: '/',

  theme: defaultTheme({
    hostname: 'https://readthefuckingrider.com',

    repo: 'mimisk13/rtfr',
    docsDir: 'docs',
    docsBranch: 'master',
    editLink: true,
    editLinkText: 'Edit this page on GitHub',
    lastUpdatedText: 'Last Updated',

    logo: '/images/logo.png',
    darkMode: true,
    navbar: [
      { text: 'Home', link: '/' },
      { text: 'About', link: '/about/' },
    ],

    sidebarDepth: 2,
    displayAllHeaders: true,
    smoothScroll: true,
    sidebar: [
      {
        text: 'Guide',
        collapsible: true,
        children: [
          '/audio/introduction.md',
          '/audio/getting-started.md',
          '/audio/foh/',
          '/audio/monitor/',
          '/audio/input_list/',
          '/audio/backline/',
          '/audio/stage_plan/',
          '/glossary.md',
        ],
      },
      /*
      {
        text: 'Lights',
        collapsible: true,
        children: [
          '/audio/introduction.md',
          '/audio/getting-started.md',
          '/audio/foh/',
          '/audio/monitor/',
        ],
      },
      {
        text: 'Video',
        collapsible: true,
        children: [
          '/audio/introduction.md',
          '/audio/getting-started.md',
          '/audio/foh/',
          '/audio/monitor/',
        ],
      },
      {
        text: 'Hospitality',
        collapsible: true,
        children: [
          '/audio/introduction.md',
          '/audio/getting-started.md',
          '/audio/foh/',
          '/audio/monitor/',
        ],
      },
       */
      {
        text: 'Formating',
        link: '/formatting.md',
      }
    ],
  }),

  plugins: [
    searchPlugin({
      // options
      locales: {
        '/': {
          placeholder: 'Search',
        },
      },
    }),
  ],

  bundler: viteBundler(),
})
