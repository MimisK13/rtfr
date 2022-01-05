import { Vuepress } from '@vuepress/client/lib/components/Vuepress'

const routeItems = [
  ["v-8daa1a0e","/",{"title":"Read The Fucking Rider"},["/index.html","/README.md"]],
  ["v-74bc627b","/about/",{"title":"About"},["/about/index.html","/about/README.md"]],
  ["v-a547d818","/hospitality/",{"title":"Hospitality"},["/hospitality/index.html","/hospitality/README.md"]],
  ["v-cb3727c2","/lights/plot.html",{"title":"Light Plot"},["/lights/plot","/lights/plot.md"]],
  ["v-742fc899","/lights/",{"title":"Lights"},["/lights/index.html","/lights/README.md"]],
  ["v-ce20e166","/video/",{"title":"VIDEO"},["/video/index.html","/video/README.md"]],
  ["v-2aabeb22","/audio/backline/",{"title":"Backline"},["/audio/backline/index.html","/audio/backline/README.md"]],
  ["v-29c505a2","/audio/foh/",{"title":"Front Of House (FOH)"},["/audio/foh/index.html","/audio/foh/README.md"]],
  ["v-54b277ec","/audio/input_list/",{"title":"Input List"},["/audio/input_list/index.html","/audio/input_list/README.md"]],
  ["v-191b2132","/audio/monitor/",{"title":"Monitor"},["/audio/monitor/index.html","/audio/monitor/README.md"]],
  ["v-2e9121da","/audio/stage_plan/",{"title":"Stage Plan"},["/audio/stage_plan/index.html","/audio/stage_plan/README.md"]],
  ["v-3706649a","/404.html",{},["/404"]],
]

export const pagesRoutes = routeItems.reduce(
  (result, [name, path, meta, redirects]) => {
    result.push(
      {
        name,
        path,
        component: Vuepress,
        meta,
      },
      ...redirects.map((item) => ({
        path: item,
        redirect: path,
      }))
    )
    return result
  },
  [
    {
      name: "404",
      path: "/:catchAll(.*)",
      component: Vuepress,
    }
  ]
)
