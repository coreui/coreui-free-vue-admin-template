export default {
  items: [
    {
      name: 'Dashboard',
      url: '/dashboard',
      icon: 'cui-speedometer',
      badge: {
        variant: 'primary',
        text: 'NEW'
      }
    },
    {
      title: true,
      name: 'Theme',
      class: '',
      wrapper: {
        element: '',
        attributes: {}
      }
    },
    {
      name: 'Colors',
      url: '/theme/colors',
      icon: 'cui-drop'
    },
    {
      name: 'Typography',
      url: '/theme/typography',
      icon: 'cui-pencil'
    },
    {
      title: true,
      name: 'Components',
      class: '',
      wrapper: {
        element: '',
        attributes: {}
      }
    },
    {
      name: 'Base',
      url: '/base',
      icon: 'cui-puzzle',
      children: [
        {
          name: 'Breadcrumbs',
          url: '/base/breadcrumbs',
          icon: 'cui-puzzle'
        },
        {
          name: 'Cards',
          url: '/base/cards',
          icon: 'cui-puzzle'
        },
        {
          name: 'Carousels',
          url: '/base/carousels',
          icon: 'cui-puzzle'
        },
        {
          name: 'Collapses',
          url: '/base/collapses',
          icon: 'cui-puzzle'
        },
        {
          name: 'Forms',
          url: '/base/forms',
          icon: 'cui-puzzle'
        },
        {
          name: 'Jumbotrons',
          url: '/base/jumbotrons',
          icon: 'cui-puzzle'
        },
        {
          name: 'List Groups',
          url: '/base/list-groups',
          icon: 'cui-puzzle'
        },
        {
          name: 'Navs',
          url: '/base/navs',
          icon: 'cui-puzzle'
        },
        {
          name: 'Navbars',
          url: '/base/navbars',
          icon: 'cui-puzzle'
        },
        {
          name: 'Paginations',
          url: '/base/paginations',
          icon: 'cui-puzzle'
        },
        {
          name: 'Popovers',
          url: '/base/popovers',
          icon: 'cui-puzzle'
        },
        {
          name: 'Progress Bars',
          url: '/base/progress-bars',
          icon: 'cui-puzzle'
        },
        {
          name: 'Switches',
          url: '/base/switches',
          icon: 'cui-puzzle'
        },
        {
          name: 'Tables',
          url: '/base/tables',
          icon: 'cui-puzzle'
        },
        {
          name: 'Tabs',
          url: '/base/tabs',
          icon: 'cui-puzzle'
        },
        {
          name: 'Tooltips',
          url: '/base/tooltips',
          icon: 'cui-puzzle'
        }
      ]
    },
    {
      name: 'Buttons',
      url: '/buttons',
      icon: 'cui-cursor',
      children: [
        {
          name: 'Buttons',
          url: '/buttons/standard-buttons',
          icon: 'cui-cursor'
        },
        {
          name: 'Button Dropdowns',
          url: '/buttons/dropdowns',
          icon: 'cui-cursor'
        },
        {
          name: 'Button Groups',
          url: '/buttons/button-groups',
          icon: 'cui-cursor'
        },
        {
          name: 'Brand Buttons',
          url: '/buttons/brand-buttons',
          icon: 'cui-cursor'
        }
      ]
    },
    {
      name: 'Charts',
      url: '/charts',
      icon: 'cui-pie-chart'
    },
    {
      name: 'Icons',
      url: '/icons',
      icon: 'cui-star',
      children: [
        {
          name: 'CoreUI Icons',
          url: '/icons/coreui-icons',
          icon: 'cui-star',
          badge: {
            variant: 'info',
            text: 'NEW'
          }
        },
        {
          name: 'Flags',
          url: '/icons/flags',
          icon: 'cui-star'
        },
        {
          name: 'Font Awesome',
          url: '/icons/font-awesome',
          icon: 'cui-star',
          badge: {
            variant: 'secondary',
            text: '4.7'
          }
        },
        {
          name: 'Simple Line Icons',
          url: '/icons/simple-line-icons',
          icon: 'cui-star'
        }
      ]
    },
    {
      name: 'Notifications',
      url: '/notifications',
      icon: 'cui-bell',
      children: [
        {
          name: 'Alerts',
          url: '/notifications/alerts',
          icon: 'cui-bell'
        },
        {
          name: 'Badges',
          url: '/notifications/badges',
          icon: 'cui-bell'
        },
        {
          name: 'Modals',
          url: '/notifications/modals',
          icon: 'cui-bell'
        }
      ]
    },
    {
      name: 'Widgets',
      url: '/widgets',
      icon: 'cui-calculator',
      badge: {
        variant: 'primary',
        text: 'NEW'
      }
    },
    {
      divider: true
    },
    {
      title: true,
      name: 'Extras'
    },
    {
      name: 'Pages',
      url: '/pages',
      icon: 'cui-star',
      children: [
        {
          name: 'Login',
          url: '/pages/login',
          icon: 'cui-star'
        },
        {
          name: 'Register',
          url: '/pages/register',
          icon: 'cui-star'
        },
        {
          name: 'Error 404',
          url: '/pages/404',
          icon: 'cui-star'
        },
        {
          name: 'Error 500',
          url: '/pages/500',
          icon: 'cui-star'
        }
      ]
    },
    {
      name: 'Download CoreUI',
      url: 'http://coreui.io/vue/',
      icon: 'cui-cloud-download',
      class: 'mt-auto',
      variant: 'success'
    },
    {
      name: 'Try CoreUI PRO',
      url: 'http://coreui.io/pro/vue/',
      icon: 'cui-layers',
      variant: 'danger'
    }
  ]
}
