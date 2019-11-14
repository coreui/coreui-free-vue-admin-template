export default [
  {
    _name: 'CSidebarNav',
    _children: [
      {
        _name: 'CSidebarNavItem',
        name: 'Dashboard',
        to: '/dashboard',
        icon: 'speedometer',
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
        icon: 'drop'
      },
      {
        _name: 'CSidebarNavItem',
        name: 'Typography',
        to: '/theme/typography',
        icon: 'pencil'
      },
      {
        _name: 'CSidebarNavTitle',
        _children: ['Components']
      },
      {
        _name: 'CSidebarNavDropdown',
        name: 'Base',
        route: '/base',
        icon: 'puzzle',
        items: [
          {
            name: 'Breadcrumbs',
            to: '/base/breadcrumbs',
            icon: 'puzzle'
          },
          {
            name: 'Cards',
            to: '/base/cards',
            icon: 'puzzle'
          },
          {
            name: 'Carousels',
            to: '/base/carousels',
            icon: 'puzzle'
          }, 
          {
            name: 'Collapses',
            to: '/base/collapses',
            icon: 'puzzle'
          },
          {
            name: 'Forms',
            to: '/base/forms',
            icon: 'puzzle'
          },
          {
            name: 'Jumbotrons',
            to: '/base/jumbotrons',
            icon: 'puzzle'
          },
          {
            name: 'List Groups',
            to: '/base/list-groups',
            icon: 'puzzle'
          },
          {
            name: 'Navs',
            to: '/base/navs',
            icon: 'puzzle'
          },
          {
            name: 'Navbars',
            to: '/base/navbars',
            icon: 'puzzle'
          },
          {
            name: 'Paginations',
            to: '/base/paginations',
            icon: 'puzzle'
          },
          {
            name: 'Popovers',
            to: '/base/popovers',
            icon: 'puzzle'
          },
          {
            name: 'Progress Bars',
            to: '/base/progress-bars',
            icon: 'puzzle'
          },
          {
            name: 'Switches',
            to: '/base/switches',
            icon: 'puzzle'
          },
          {
            name: 'Tables',
            to: '/base/tables',
            icon: 'puzzle'
          },
          {
            name: 'Tabs',
            to: '/base/tabs',
            icon: 'puzzle'
          },
          {
            name: 'Tooltips',
            to: '/base/tooltips',
            icon: 'puzzle'
          }
        ]
      },
      {
        _name: 'CSidebarNavDropdown',
        name: 'Buttons',
        route: '/buttons',
        icon: 'cursor',
        items: [
          {
            name: 'Buttons',
            to: '/buttons/standard-buttons',
            icon: 'cursor'
          },
          {
            name: 'Button Dropdowns',
            to: '/buttons/dropdowns',
            icon: 'cursor'
          },
          {
            name: 'Button Groups',
            to: '/buttons/button-groups',
            icon: 'cursor'
          },
          {
            name: 'Brand Buttons',
            to: '/buttons/brand-buttons',
            icon: 'cursor'
          }
        ]
      },
      {
        _name: 'CSidebarNavItem',
        name: 'Charts',
        to: '/charts',
        icon: 'chart-pie'
      },
      {
        _name: 'CSidebarNavDropdown',
        name: 'Icons',
        route: '/icons',
        icon: 'star',
        items: [
          {
            name: 'CoreUI Icons',
            to: '/icons/coreui-icons',
            icon: 'star',
            badge: {
              color: 'info',
              text: 'NEW'
            }
          },
          {
            name: 'Brands',
            to: '/icons/brands',
            icon: 'star'
          },
          {
            name: 'Flags',
            to: '/icons/flags',
            icon: 'star'
          }
        ]
      },
      {
        _name: 'CSidebarNavDropdown',
        name: 'Notifications',
        route: '/notifications',
        icon: 'bell',
        items: [
          {
            name: 'Alerts',
            to: '/notifications/alerts',
            icon: 'bell'
          },
          {
            name: 'Badges',
            to: '/notifications/badges',
            icon: 'bell'
          },
          {
            name: 'Modals',
            to: '/notifications/modals',
            icon: 'bell'
          }
        ]
      },
      {
        _name: 'CSidebarNavItem',
        name: 'Widgets',
        to: '/widgets',
        icon: 'calculator',
        badge: {
          color: 'primary',
          text: 'NEW',
          shape: 'pill'
        }
      },
      {
        _name: 'CSidebarNavDivider'
      },
      {
        _name: 'CSidebarNavTitle',
        _children: ['Extras']
      },
      {
        _name: 'CSidebarNavDropdown',
        name: 'Pages',
        route: '/pages',
        icon: 'star',
        items: [
          {
            name: 'Login',
            to: '/pages/login',
            icon: 'star'
          },
          {
            name: 'Register',
            to: '/pages/register',
            icon: 'star'
          },
          {
            name: 'Error 404',
            to: '/pages/404',
            icon: 'star'
          },
          {
            name: 'Error 500',
            to: '/pages/500',
            icon: 'star'
          }
        ]
      },
      {
        _name: 'CSidebarNavItem',
        name: 'Download CoreUI',
        href: 'http://coreui.io/vue/',
        icon: { name: 'cloud-download', class: 'text-warning' },
        _class: 'bg-success text-white',
        target: '_blank'
      },
      {
        _name: 'CSidebarNavItem',
        name: 'Try CoreUI PRO',
        href: 'http://coreui.io/pro/vue/',
        icon: 'layers',
        _class: 'bg-danger text-white',
        target: '_blank'
      }
    ]
  }
]