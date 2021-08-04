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
          {
            path: "/base/cards",
            name: "Cards",
            component: () => import("@/views/base/Cards.vue"),
          },
          {
            path: "/base/carousels",
            name: "Carousels",
            component: () => import("@/views/base/Carousels.vue"),
          },
          {
            path: "/base/collapses",
            name: "Collapses",
            component: () => import("@/views/base/Collapses.vue"),
          },
          {
            path: "/base/forms",
            name: "Forms",
            component: () => import("@/views/base/Forms.vue"),
          },
          /*
          {
            path: "/base/jumbotrons",
            name: "Jumbotrons",
            component: () => import("@/views/base/Jumbotrons.vue"),
          },
          */
          {
            path: "/base/list-groups",
            name: "List Groups",
            component: () => import("@/views/base/ListGroups.vue"),
          },
          {
            path: "/base/navs",
            name: "Navs",
            component: () => import("@/views/base/Navs.vue"),
          },
          {
            path: "/base/navbars",
            name: "Navbars",
            component: () => import("@/views/base/Navbars.vue"),
          },    
          {
            path: "/base/paginations",
            name: "Paginations",
            component: () => import("@/views/base/Paginations.vue"),
          }, 
          {
            path: "/base/popovers",
            name: "Popovers",
            component: () => import("@/views/base/Popovers.vue"),
          },
          {
            path: "/base/progress-bars",
            name: "Progress Bars",
            component: () => import("@/views/base/ProgressBars.vue"),
          }, 
          {
            path: "/base/switches",
            name: "Switches",
            component: () => import("@/views/base/Switches.vue"),
          }, 
          {
            path: "/base/tables",
            name: "Tables",
            component: () => import("@/views/base/Tables.vue"),
          }, 
          {
            path: "/base/tabs",
            name: "Tabs",
            component: () => import("@/views/base/Tabs.vue"),
          },
          {
            path: "/base/tooltips",
            name: "Tooltips",
            component: () => import("@/views/base/Tooltips.vue"),
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
