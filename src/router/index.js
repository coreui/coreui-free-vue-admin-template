import { h, resolveComponent } from "vue";
import { createRouter, createWebHistory } from "vue-router";
// import Home from "../views/Home.vue";

import DefaultLayout from "@/layouts/DefaultLayout";

// Views - Components
// const Breadcrumbs = () => import("@/views/base/Breadcrumbs");

const routes = [
  {
    path: "/",
    name: "Home",
    component: DefaultLayout,
    children: [
      {
        path: "dashboard",
        name: "Dashboard",
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
          import(/* webpackChunkName: "dashboard" */ "@/views/Dashboard.vue"),
      },
      {
        path: "/base",
        name: "Base",
        component: {
          render() {
            return h(resolveComponent('router-view'))
          }
        },
        children: [
          {
            path: "/base/breadcrumbs",
            name: "Breadcrumbs",
            component: () =>
              import(
                /* webpackChunkName: "dashboard" */ "@/views/base/Breadcrumbs.vue"
              ),
          },
        ],
      },
    ],
  },
  // {
  //   path: "/about",
  //   name: "About",
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () =>
  //     import(/* webpackChunkName: "about" */ "../views/About.vue")
  // }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
