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
    logo: '/images/logo.png',
    darkMode: true,
    navbar: [
      { text: 'Home', link: '/' },
      { text: 'About', link: '/about/' },
    ],
    sidebar: [
      {
        text: 'Guide',
        collapsible: false,
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
    ],
    sidebarDepth: 2,
    displayAllHeaders: true,
    smoothScroll: true,
    lastUpdated: 'Last Updated'
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
