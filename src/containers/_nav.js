export default [
  {
    _name: 'CSidebarNav',
    _children: [
      {
        _name: 'CSidebarNavItem',
        name: 'Dashboard',
        to: '/dashboard',
        icon: 'cil-speedometer',
        badge: {
          color: 'primary',
          text: 'NEW'
        }
      },
      {
        _name: 'CSidebarNavTitle',
        _children: ['Theme']
      },
      {
        _name: 'CSidebarNavItem',
        name: 'Colors',
        to: '/theme/colors',
        icon: 'cil-drop'
      },
      {
        _name: 'CSidebarNavItem',
        name: 'Typography',
        to: '/theme/typography',
        icon: 'cil-pencil'
      },
      {
        _name: 'CSidebarNavTitle',
        _children: ['Components']
      },
      {
        _name: 'CSidebarNavDropdown',
        name: 'Base',
        route: '/base',
        icon: 'cil-puzzle',
        items: [
          {
            name: 'Breadcrumbs',
            to: '/base/breadcrumbs',
            icon: 'cil-puzzle'
          },
          {
            name: 'Cards',
            to: '/base/cards',
            icon: 'cil-puzzle'
          },
          {
            name: 'Carousels',
            to: '/base/carousels',
            icon: 'cil-puzzle'
          }, 
          {
            name: 'Collapses',
            to: '/base/collapses',
            icon: 'cil-puzzle'
          },
          {
            name: 'Forms',
            to: '/base/forms',
            icon: 'cil-puzzle'
          },
          {
            name: 'Jumbotrons',
            to: '/base/jumbotrons',
            icon: 'cil-puzzle'
          },
          {
            name: 'List Groups',
            to: '/base/list-groups',
            icon: 'cil-puzzle'
          },
          {
            name: 'Navs',
            to: '/base/navs',
            icon: 'cil-puzzle'
          },
          {
            name: 'Navbars',
            to: '/base/navbars',
            icon: 'cil-puzzle'
          },
          {
            name: 'Paginations',
            to: '/base/paginations',
            icon: 'cil-puzzle'
          },
          {
            name: 'Popovers',
            to: '/base/popovers',
            icon: 'cil-puzzle'
          },
          {
            name: 'Progress Bars',
            to: '/base/progress-bars',
            icon: 'cil-puzzle'
          },
          {
            name: 'Switches',
            to: '/base/switches',
            icon: 'cil-puzzle'
          },
          {
            name: 'Tables',
            to: '/base/tables',
            icon: 'cil-puzzle'
          },
          {
            name: 'Tabs',
            to: '/base/tabs',
            icon: 'cil-puzzle'
          },
          {
            name: 'Tooltips',
            to: '/base/tooltips',
            icon: 'cil-puzzle'
          }
        ]
      },
      {
        _name: 'CSidebarNavDropdown',
        name: 'Buttons',
        route: '/buttons',
        icon: 'cil-cursor',
        items: [
          {
            name: 'Buttons',
            to: '/buttons/standard-buttons',
            icon: 'cil-cursor'
          },
          {
            name: 'Button Dropdowns',
            to: '/buttons/dropdowns',
            icon: 'cil-cursor'
          },
          {
            name: 'Button Groups',
            to: '/buttons/button-groups',
            icon: 'cil-cursor'
          },
          {
            name: 'Brand Buttons',
            to: '/buttons/brand-buttons',
            icon: 'cil-cursor'
          }
        ]
      },
      {
        _name: 'CSidebarNavItem',
        name: 'Charts',
        to: '/charts',
        icon: 'cil-chart-pie'
      },
      {
        _name: 'CSidebarNavDropdown',
        name: 'Icons',
        route: '/icons',
        icon: 'cil-star',
        items: [
          {
            name: 'CoreUI Icons',
            to: '/icons/coreui-icons',
            icon: 'cil-star',
            badge: {
              color: 'info',
              text: 'NEW'
            }
          },
          {
            name: 'Brands',
            to: '/icons/brands',
            icon: 'cil-star'
          },
          {
            name: 'Flags',
            to: '/icons/flags',
            icon: 'cil-star'
          }
        ]
      },
      {
        _name: 'CSidebarNavDropdown',
        name: 'Notifications',
        route: '/notifications',
        icon: 'cil-bell',
        items: [
          {
            name: 'Alerts',
            to: '/notifications/alerts',
            icon: 'cil-bell'
          },
          {
            name: 'Badges',
            to: '/notifications/badges',
            icon: 'cil-bell'
          },
          {
            name: 'Modals',
            to: '/notifications/modals',
            icon: 'cil-bell'
          }
        ]
      },
      {
        _name: 'CSidebarNavItem',
        name: 'Widgets',
        to: '/widgets',
        icon: 'cil-calculator',
        badge: {
          color: 'primary',
          text: 'NEW',
          shape: 'pill'
        }
      },
      {
        _name: 'CSidebarNavDivider',
        _class: 'm-2'
      },
      {
        _name: 'CSidebarNavTitle',
        _children: ['Extras']
      },
      {
        _name: 'CSidebarNavDropdown',
        name: 'Pages',
        route: '/pages',
        icon: 'cil-star',
        items: [
          {
            name: 'Login',
            to: '/pages/login',
            icon: 'cil-star'
          },
          {
            name: 'Register',
            to: '/pages/register',
            icon: 'cil-star'
          },
          {
            name: 'Error 404',
            to: '/pages/404',
            icon: 'cil-star'
          },
          {
            name: 'Error 500',
            to: '/pages/500',
            icon: 'cil-star'
          }
        ]
      },
      {
        _name: 'CSidebarNavItem',
        name: 'Download CoreUI',
        href: 'http://coreui.io/vue/',
        icon: { name: 'cil-cloud-download', class: 'text-white' },
        _class: 'bg-success text-white',
        target: '_blank'
      },
      {
        _name: 'CSidebarNavItem',
        name: 'Try CoreUI PRO',
        href: 'http://coreui.io/pro/vue/',
        icon: { name: 'cil-layers', class: 'text-white' },
        _class: 'bg-danger text-white',
        target: '_blank'
      }
    ]
  }
]