export default [
  {
    _name: 'CNavItem',
    name: 'Dashboard',
    to: '/dashboard',
    icon: 'cil-speedometer',
    badge: {
      color: 'primary',
      text: 'NEW'
    }
  },
  // {
  //   _name: 'CNavTitle',
  //   name: 'Theme'
  // },
  {
    _name: 'CNavItem',
    name: 'Colors',
    to: '/theme/colors',
    icon: 'cil-drop'
  },
  {
    _name: 'CNavItem',
    name: 'Typography',
    to: '/theme/typography',
    icon: 'cil-pencil'
  },
  // {
  //   _name: 'CNavTitle',
  //   name: 'Components'
  // },
  {
    _name: 'CNavGroup',
    name: 'Base',
    route: '/base',
    icon: 'cil-puzzle',
    children: [
      {
        _name: 'CNavItem',
        name: 'Breadcrumbs',
        to: '/base/breadcrumbs'
      },
      {
        _name: 'CNavItem',
        name: 'Cards',
        to: '/base/cards'
      },
      {
        _name: 'CNavItem',
        name: 'Carousels',
        to: '/base/carousels'
      },
      {
        _name: 'CNavItem',
        name: 'Collapses',
        to: '/base/collapses'
      },
      {
        _name: 'CNavItem',
        name: 'Forms',
        to: '/base/forms'
      },
      /*
      {
        _name: 'CNavItem',
        name: 'Jumbotrons',
        to: '/base/jumbotrons'
      },
      */
      {
        _name: 'CNavItem',
        name: 'List Groups',
        to: '/base/list-groups'
      },
      {
        _name: 'CNavItem',
        name: 'Navs',
        to: '/base/navs'
      },
      {
        _name: 'CNavItem',
        name: 'Navbars',
        to: '/base/navbars'
      },
      {
        _name: 'CNavItem',
        name: 'Paginations',
        to: '/base/paginations'
      },
      {
        _name: 'CNavItem',
        name: 'Popovers',
        to: '/base/popovers'
      },
      {
        _name: 'CNavItem',
        name: 'Progress Bars',
        to: '/base/progress-bars'
      },
      {
        _name: 'CNavItem',
        name: 'Switches',
        to: '/base/switches'
      },
      {
        _name: 'CNavItem',
        name: 'Tables',
        to: '/base/tables'
      },
      {
        _name: 'CNavItem',
        name: 'Tabs',
        to: '/base/tabs'
      },
      {
        _name: 'CNavItem',
        name: 'Tooltips',
        to: '/base/tooltips'
      }
    ]
  },
  {
    _name: 'CNavGroup',
    name: 'Buttons',
    route: '/buttons',
    icon: 'cil-cursor',
    children: [
      {
        _name: 'CNavItem',
        name: 'Buttons',
        to: '/buttons/standard-buttons'
      },
      {
        _name: 'CNavItem',
        name: 'Button Dropdowns',
        to: '/buttons/dropdowns'
      },
      {
        _name: 'CNavItem',
        name: 'Button Groups',
        to: '/buttons/button-groups'
      },
//      {
//        _name: 'CNavItem',
//        name: 'Brand Buttons',
//       to: '/buttons/brand-buttons'
//      }
    ]
  },
  {
    _name: 'CNavItem',
    name: 'Charts',
    to: '/charts',
    icon: 'cil-chart-pie'
  },
  {
   _name: 'CNavGroup',
    name: 'Icons',
    route: '/icons',
    icon: 'cil-star',
    children: [
      {
        _name: 'CNavItem',
        name: 'CoreUI Icons',
        to: '/icons/coreui-icons',
        badge: {
          color: 'info',
          text: 'NEW'
        }
      },
      {
        _name: 'CNavItem',
        name: 'Brands',
        to: '/icons/brands'
      },
      {
        _name: 'CNavItem',
        name: 'Flags',
        to: '/icons/flags'
      }
    ]
  },
  {
    _name: 'CNavGroup',
    name: 'Notifications',
    route: '/notifications',
    icon: 'cil-bell',
    children: [
      {
        _name: 'CNavItem',
        name: 'Alerts',
        to: '/notifications/alerts'
      },
      {
        _name: 'CNavItem',
        name: 'Badges',
        to: '/notifications/badges'
      },
      {
        _name: 'CNavItem',
        name: 'Modals',
        to: '/notifications/modals'
      }
    ]
  },
  {
    _name: 'CNavItem',
    name: 'Widgets',
    to: '/widgets',
    icon: 'cil-calculator',
    badge: {
      color: 'primary',
      text: 'NEW',
      shape: 'pill'
    }
  },
  // {
  //   _name: 'CSidebarNavDivider',
  //   _class: 'm-2'
  // },
  // {
  //   _name: 'CNavTitle',
  //   name: 'Extras'
  // },
  // {
  //   _name: 'CNavGroup',
  //   name: 'Pages',
  //   route: '/pages',
  //   icon: 'cil-star',
  //   children: [
  //     {
  //       _name: 'CNavItem',
  //       name: 'Login',
  //       to: '/pages/login'
  //     },
  //     {
  //       _name: 'CNavItem',
  //       name: 'Register',
  //       to: '/pages/register'
  //     },
  //     {
  //       _name: 'CNavItem',
  //       name: 'Error 404',
  //       to: '/pages/404'
  //     },
  //     {
  //       _name: 'CNavItem',
  //       name: 'Error 500',
  //       to: '/pages/500'
  //     }
  //   ]
  // },
  // {
  //   _name: 'CNavItem',
  //   name: 'Download CoreUI',
  //   href: 'http://coreui.io/vue/',
  //   icon: { name: 'cil-cloud-download', class: 'text-white' },
  //   _class: 'bg-success text-white',
  //   target: '_blank'
  // },
  // {
  //   _name: 'CNavItem',
  //   name: 'Try CoreUI PRO',
  //   href: 'http://coreui.io/pro/vue/',
  //   icon: { name: 'cil-layers', class: 'text-white' },
  //   _class: 'bg-danger text-white',
  //   target: '_blank'
  // }
]
