export const data = {
  "key": "v-7409d1c8",
  "path": "/audio/foh/foh.html",
  "title": "FOH (Front Of House)",
  "lang": "en-US",
  "frontmatter": {},
  "excerpt": "",
  "headers": [
    {
      "level": 2,
      "title": "PA SYSTEM",
      "slug": "pa-system",
      "children": [
        {
          "level": 3,
          "title": "Test",
          "slug": "test",
          "children": []
        }
      ]
    }
  ]
}

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updatePageData) {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ data }) => {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  })
}
