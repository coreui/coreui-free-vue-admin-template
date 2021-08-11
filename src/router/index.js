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
        path: "/theme",
        name: "Theme",
        redirect: "/theme/typography"
      },
      {
        path: "/theme/colors",
        name: "Colors",
        component: () => import("@/views/theme/Colors.vue"),
      },
      {
        path: "/theme/typography",
        name: "Typography",
        component: () => import("@/views/theme/Typography.vue"),
      },
      {
        path: "/base",
        name: "Base",
        component: {
          render() {
            return h(resolveComponent('router-view'))
          }
        },
        redirect: '/base/breadcrumbs',
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
      {
        path: "/buttons",
        name: "Buttons",
        component: {
          render() {
            return h(resolveComponent('router-view'))
          }
        },
        redirect: '/buttons/standard-buttons',
        children: [
          {
            path: "/buttons/standard-buttons",
            name: "Buttons",
            component: () => import("@/views/buttons/Buttons.vue"),
          }, 
          {
            path: "/buttons/dropdowns",
            name: "Button Dropdowns",
            component: () => import("@/views/buttons/ButtonDropdowns.vue"),
          }, 
          {
            path: "/buttons/button-groups",
            name: "Button Groups",
            component: () => import("@/views/buttons/ButtonGroups.vue"),
          }, 
          /*
          {
            path: "/buttons/brand-buttons",
            name: "Brand Buttons",
            component: () => import("@/views/buttons/BrandButtons.vue"),
          },
          */ 
        ]
      },
      {
        path: "/icons",
        name: "Icons",
        component: {
          render() {
            return h(resolveComponent('router-view'))
          }
        },
        redirect: '/icons/coreui-icons',
        children: [
          {
            path: "/icons/coreui-icons",
            name: "CoreUI Icons",
            component: () => import("@/views/icons/CoreUIIcons.vue"),
          },
          {
            path: "/icons/brands",
            name: "Brands",
            component: () => import("@/views/icons/Brands.vue"),
          },
          {
            path: "/icons/flags",
            name: "Flags",
            component: () => import("@/views/icons/Flags.vue"),
          }, 
        ]
      },
      {
        path: "/notifications",
        name: "Notifications",
        component: {
          render() {
            return h(resolveComponent('router-view'))
          }
        },
        redirect: '/notifications/alerts',
        children: [
          {
            path: "/notifications/alerts",
            name: "Alerts",
            component: () => import("@/views/notifications/Alerts.vue"),
          },
          {
            path: "/notifications/badges",
            name: "Badges",
            component: () => import("@/views/notifications/Badges.vue"),
          },
          {
            path: "/notifications/modals",
            name: "Modals",
            component: () => import("@/views/notifications/Modals.vue"),
          },
        ]
      },
      {
        path: "/widgets",
        name: "Widgets",
        component: () => import("@/views/Widgets.vue"),
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
