import { lazy } from "solid-js";

import { HashRouter } from "@solidjs/router";
import type { RouteDefinition } from "@solidjs/router";

import Root from "~/Root.tsx";

const routes = [
  {
    path: "/",
    component: lazy(() => import("~/routes/index.page.tsx")),
  },
  {
    path: "/dash",
    component: lazy(() => import("~/routes/dash.layout.tsx")),
    children: [
      {
        path: "/",
        component: lazy(() => import("~/routes/dash.index.page.tsx")),
      },
    ],
  },
  {
    path: "/components",
    component: lazy(() => import("~/routes/components.page.tsx")),
  },
  {
    path: "/*all",
    component: lazy(() => import("~/routes/404.page.tsx")),
  },
] satisfies RouteDefinition[];

export default () => <HashRouter root={Root}>{routes}</HashRouter>;
