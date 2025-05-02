import { defineUserConfig } from 'vuepress'
import { defaultTheme } from '@vuepress/theme-default'
import { viteBundler } from '@vuepress/bundler-vite'

export default defineUserConfig({
  bundler: viteBundler(),

  lang: 'en-US',
  title: 'RTFR',
  description: 'Read The Fucking Rider',
  base: '/',

  theme: defaultTheme({
    logo: 'https://vuejs.org/images/logo.png',
    darkMode: true,
    navbar: [
      { text: 'Home', link: '/' },
      { text: 'About', link: '/about/' },
    ],
    sidebar: [
      { text: 'Front Of House', link: '/audio/foh' },
      { text: 'Monitor', link: '/audio/monitor' },
      { text: 'Input List', link: '/audio/input_list' },
      { text: 'Backline', link: '/audio/backline' },
      { text: 'Stage Plan', link: '/audio/stage_plan' },
    ],
    sidebarDepth: 2,
    displayAllHeaders: true,
    smoothScroll: true,
    lastUpdated: 'Last Updated',
    searchPlaceholder: 'Search...',
  }),
  
  plugins: [
    ['@vuepress/back-to-top', true],
    ['@vuepress/active-header-links', true],
    ['@vuepress/medium-zoom', true],
    ['@vuepress/nprogress', true],
    ['@vuepress/last-updated', true],
    ['@vuepress/plugin-search', true],
  ],
})
