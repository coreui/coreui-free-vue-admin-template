export default [
  'CSidebarNav',
  [
    [
      'CSidebarNavLink',
      {
        props: {
          name: 'Dashboard',
          to: '/dashboard',
          icon: 'speedometer',
          badge: {
            color: 'primary',
            text: 'NEW'
          }
        }
      }
    ],
    [
      'CSidebarNavTitle',
      ['Theme']
    ],
    [
      'CSidebarNavLink',
      {
        props: {
          name: 'Colors',
          to: '/theme/colors',
          icon: 'drop'
        }
      }
    ],
    [
      'CSidebarNavLink',
      {
        props: {
          name: 'Typography',
          to: '/theme/typography',
          icon: 'pencil'
        }
      }
    ],
    [
      'CSidebarNavTitle',
      ['Components']
    ],
    [
      'CSidebarNavDropdown',
      {
        props: {
          name: 'Base',
          route: '/base',
          icon: 'puzzle',
        }
      },
      [
        [
          'CSidebarNavLink',
          {
            props: {
              name: 'Breadcrumbs',
              to: '/base/breadcrumbs',
              icon: 'puzzle'
            }
          }
        ],
        [
          'CSidebarNavLink',
          {
            props: {
              name: 'Cards',
              to: '/base/cards',
              icon: 'puzzle'
            }
          }
        ],
        [
          'CSidebarNavLink',
          {
            props: {
              name: 'Carousels',
              to: '/base/carousels',
              icon: 'puzzle'
            }
          }
        ],
        [
          'CSidebarNavLink',
          {
            props: {
              name: 'Collapses',
              to: '/base/collapses',
              icon: 'puzzle'
            }
          }
        ],
        [
          'CSidebarNavLink',
          {
            props: {
              name: 'Forms',
              to: '/base/forms',
              icon: 'puzzle'
            }
          }
        ],
        [
          'CSidebarNavLink',
          {
            props: {
              name: 'Jumbotrons',
              to: '/base/jumbotrons',
              icon: 'puzzle'
            }
          }
        ],
        [
          'CSidebarNavLink',
          {
            props: {
              name: 'List Groups',
              to: '/base/list-groups',
              icon: 'puzzle'
            }
          }
        ],
        [
          'CSidebarNavLink',
          {
            props: {
              name: 'Navs',
              to: '/base/navs',
              icon: 'puzzle'
            }
          }
        ],
        [
          'CSidebarNavLink',
          {
            props: {
              name: 'Navbars',
              to: '/base/navbars',
              icon: 'puzzle'
            }
          }
        ],
        [
          'CSidebarNavLink',
          {
            props: {
              name: 'Paginations',
              to: '/base/paginations',
              icon: 'puzzle'
            }
          }
        ],
        [
          'CSidebarNavLink',
          {
            props: {
              name: 'Popovers',
              to: '/base/popovers',
              icon: 'puzzle'
            }
          }
        ],
        [
          'CSidebarNavLink',
          {
            props: {
              name: 'Progress Bars',
              to: '/base/progress-bars',
              icon: 'puzzle'
            }
          }
        ],
        [
          'CSidebarNavLink',
          {
            props: {
              name: 'Switches',
              to: '/base/switches',
              icon: 'puzzle'
            }
          }
        ],
        [
          'CSidebarNavLink',
          {
            props: {
              name: 'Tables',
              to: '/base/tables',
              icon: 'puzzle'
            }
          }
        ],
        [
          'CSidebarNavLink',
          {
            props: {
              name: 'Tabs',
              to: '/base/tabs',
              icon: 'puzzle'
            }
          }
        ],
        [
          'CSidebarNavLink',
          {
            props: {
              name: 'Tooltips',
              to: '/base/tooltips',
              icon: 'puzzle'
            }
          }
        ]
      ]
    ],
    [
      'CSidebarNavDropdown',
      {
        props: {
          name: 'Buttons',
          route: '/buttons',
          icon: 'cursor',
        }
      },
      [
        [
          'CSidebarNavLink',
          {
            props: {
              name: 'Buttons',
              to: '/buttons/standard-buttons',
              icon: 'cursor'
            }
          }
        ],
        [
          'CSidebarNavLink',
          {
            props: {
              name: 'Button Dropdowns',
              to: '/buttons/dropdowns',
              icon: 'cursor'
            }
          }
        ],
        [
          'CSidebarNavLink',
          {
            props: {
              name: 'Button Groups',
              to: '/buttons/button-groups',
              icon: 'cursor'
            }
          }
        ],
        [
          'CSidebarNavLink',
          {
            props: {
              name: 'Brand Buttons',
              to: '/buttons/brand-buttons',
              icon: 'cursor'
            }
          }
        ]
      ]
    ],
    [
      'CSidebarNavLink',
      {
        props: {
          name: 'Charts',
          to: '/charts',
          icon: 'chart-pie'
        }
      }
    ],
    [
      'CSidebarNavDropdown',
      {
        props: {
          name: 'Icons',
          route: '/icons',
          icon: 'star',
        }
      },
      [
        [
          'CSidebarNavLink',
          {
            props: {
              name: 'CoreUI Icons',
              to: '/icons/coreui-icons',
              icon: 'star',
              badge: {
                color: 'info',
                text: 'NEW'
              }
            }
          }
        ],
        [
          'CSidebarNavLink',
          {
            props: {
              name: 'Brands',
              to: '/icons/brands',
              icon: 'star'
            }
          }
        ],
        [
          'CSidebarNavLink',
          {
            props: {
              name: 'Flags',
              to: '/icons/flags',
              icon: 'star'
            }
          }
        ]
      ]
    ],
    [
      'CSidebarNavDropdown',
      {
        props: {
          name: 'Notifications',
          route: '/notifications',
          icon: 'bell',
        }
      },
      [
        [
          'CSidebarNavLink',
          {
            props: {
              name: 'Alerts',
              to: '/notifications/alerts',
              icon: 'bell'
            }
          }
        ],
        [
          'CSidebarNavLink',
          {
            props: {
              name: 'Badges',
              to: '/notifications/badges',
              icon: 'bell'
            }
          }
        ],
        [
          'CSidebarNavLink',
          {
            props: {
              name: 'Modals',
              to: '/notifications/modals',
              icon: 'bell'
            }
          }
        ]
      ]
    ],
    [
      'CSidebarNavLink',
      {
        props: {
          name: 'Widgets',
          to: '/widgets',
          icon: 'calculator',
          badge: {
            color: 'primary',
            text: 'NEW',
            shape: 'pill'
          }
        }
      }
    ],
    [
      'CSidebarNavDivider',
    ],
    [
      'CSidebarNavTitle',
      ['Extras']
    ],
    [
      'CSidebarNavDropdown',
      {
        props: {
          name: 'Pages',
          route: '/pages',
          icon: 'star',
        }
      },
      [
        [
          'CSidebarNavLink',
          {
            props: {
              name: 'Login',
              to: '/pages/login',
              icon: 'star'
            }
          }
        ],
        [
          'CSidebarNavLink',
          {
            props: {
              name: 'Register',
              to: '/pages/register',
              icon: 'star'
            }
          }
        ],
        [
          'CSidebarNavLink',
          {
            props: {
              name: 'Error 404',
              to: '/pages/404',
              icon: 'star'
            }
          }
        ],
        [
          'CSidebarNavLink',
          {
            props: {
              name: 'Error 500',
              to: '/pages/500',
              icon: 'star'
            }
          }
        ]
      ]
    ],
    [
      'CSidebarNavLink',
      {
        props: {
          name: 'Download CoreUI',
          href: 'http://coreui.io/vue/',
          icon: 'cloud-download',
          addLinkClasses: 'c-nav-link-success',
          target: '_blank'
        },
        attrs: {
          class: 'mt-auto',
        }
      }
    ],
    [
      'CSidebarNavLink',
      {          
        props: {
          name: 'Try CoreUI PRO',
          href: 'http://coreui.io/pro/vue/',
          icon: 'layers',
          addLinkClasses: 'c-nav-link-danger',
          target: '_blank'
        }
      }
    ]
  ]
]

