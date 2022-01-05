export const themeData = {
  "logo": "https://vuejs.org/images/logo.png",
  "darkMode": true,
  "navbar": [
    {
      "text": "Home",
      "link": "/"
    },
    {
      "text": "About",
      "link": "/about/"
    }
  ],
  "sidebar": [
    {
      "text": "Front Of House",
      "link": "/audio/foh"
    },
    {
      "text": "Monitor",
      "link": "/audio/monitor"
    },
    {
      "text": "Input List",
      "link": "/audio/input_list"
    },
    {
      "text": "Backline",
      "link": "/audio/backline"
    },
    {
      "text": "Stage Plan",
      "link": "/audio/stage_plan"
    }
  ],
  "sidebarDepth": 2,
  "displayAllHeaders": true,
  "smoothScroll": true,
  "lastUpdated": "Last Updated",
  "searchPlaceholder": "Search...",
  "plugins": [
    [
      "@vuepress/back-to-top",
      true
    ],
    [
      "@vuepress/active-header-links",
      true
    ],
    [
      "@vuepress/medium-zoom",
      true
    ],
    [
      "@vuepress/nprogress",
      true
    ],
    [
      "@vuepress/last-updated",
      true
    ],
    [
      "@vuepress/plugin-search",
      true
    ]
  ],
  "locales": {
    "/": {
      "selectLanguageName": "English"
    }
  },
  "repo": null,
  "selectLanguageText": "Languages",
  "selectLanguageAriaLabel": "Select language",
  "editLink": true,
  "editLinkText": "Edit this page",
  "lastUpdatedText": "Last Updated",
  "contributors": true,
  "contributorsText": "Contributors",
  "notFound": [
    "There's nothing here.",
    "How did we get here?",
    "That's a Four-Oh-Four.",
    "Looks like we've got some broken links."
  ],
  "backToHome": "Take me home",
  "openInNewWindow": "open in new window",
  "toggleDarkMode": "toggle dark mode",
  "toggleSidebar": "toggle sidebar"
}
