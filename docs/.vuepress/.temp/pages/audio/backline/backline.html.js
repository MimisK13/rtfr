export const data = {
  "key": "v-56d69708",
  "path": "/audio/backline/backline.html",
  "title": "Backline",
  "lang": "en-US",
  "frontmatter": {},
  "excerpt": "",
  "headers": [
    {
      "level": 2,
      "title": "Drums",
      "slug": "drums",
      "children": []
    },
    {
      "level": 2,
      "title": "Bass",
      "slug": "bass",
      "children": []
    },
    {
      "level": 2,
      "title": "Guitars",
      "slug": "guitars",
      "children": []
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
