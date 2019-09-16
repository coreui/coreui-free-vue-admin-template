export default [
  'CSidebarNav',
  [
    [
      'CSidebarNavLink',
      {
        props: {
          name: 'Dashboard',
          to: '/dashboard',
          icon: 'cui-speedometer',
          badge: {
            variant: 'primary',
            textHtml: 'NEW'
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
          icon: 'cui-drop'
        }
      }
    ],
    [
      'CSidebarNavLink',
      {
        props: {
          name: 'Typography',
          to: '/theme/typography',
          icon: 'cui-pencil'
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
          icon: 'cui-puzzle',
        }
      },
      [
        [
          'CSidebarNavLink',
          {
            props: {
              name: 'Breadcrumbs',
              to: '/base/breadcrumbs',
              icon: 'cui-puzzle'
            }
          }
        ],
        [
          'CSidebarNavLink',
          {
            props: {
              name: 'Cards',
              to: '/base/cards',
              icon: 'cui-puzzle'
            }
          }
        ],
        [
          'CSidebarNavLink',
          {
            props: {
              name: 'Carousels',
              to: '/base/carousels',
              icon: 'cui-puzzle'
            }
          }
        ],
        [
          'CSidebarNavLink',
          {
            props: {
              name: 'Collapses',
              to: '/base/collapses',
              icon: 'cui-puzzle'
            }
          }
        ],
        [
          'CSidebarNavLink',
          {
            props: {
              name: 'Forms',
              to: '/base/forms',
              icon: 'cui-puzzle'
            }
          }
        ],
        [
          'CSidebarNavLink',
          {
            props: {
              name: 'Jumbotrons',
              to: '/base/jumbotrons',
              icon: 'cui-puzzle'
            }
          }
        ],
        [
          'CSidebarNavLink',
          {
            props: {
              name: 'List Groups',
              to: '/base/list-groups',
              icon: 'cui-puzzle'
            }
          }
        ],
        [
          'CSidebarNavLink',
          {
            props: {
              name: 'Navs',
              to: '/base/navs',
              icon: 'cui-puzzle'
            }
          }
        ],
        [
          'CSidebarNavLink',
          {
            props: {
              name: 'Navbars',
              to: '/base/navbars',
              icon: 'cui-puzzle'
            }
          }
        ],
        [
          'CSidebarNavLink',
          {
            props: {
              name: 'Paginations',
              to: '/base/paginations',
              icon: 'cui-puzzle'
            }
          }
        ],
        [
          'CSidebarNavLink',
          {
            props: {
              name: 'Popovers',
              to: '/base/popovers',
              icon: 'cui-puzzle'
            }
          }
        ],
        [
          'CSidebarNavLink',
          {
            props: {
              name: 'Progress Bars',
              to: '/base/progress-bars',
              icon: 'cui-puzzle'
            }
          }
        ],
        [
          'CSidebarNavLink',
          {
            props: {
              name: 'Switches',
              to: '/base/switches',
              icon: 'cui-puzzle'
            }
          }
        ],
        [
          'CSidebarNavLink',
          {
            props: {
              name: 'Tables',
              to: '/base/tables',
              icon: 'cui-puzzle'
            }
          }
        ],
        [
          'CSidebarNavLink',
          {
            props: {
              name: 'Tabs',
              to: '/base/tabs',
              icon: 'cui-puzzle'
            }
          }
        ],
        [
          'CSidebarNavLink',
          {
            props: {
              name: 'Tooltips',
              to: '/base/tooltips',
              icon: 'cui-puzzle'
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
          icon: 'cui-cursor',
        }
      },
      [
        [
          'CSidebarNavLink',
          {
            props: {
              name: 'Buttons',
              to: '/buttons/standard-buttons',
              icon: 'cui-cursor'
            }
          }
        ],
        [
          'CSidebarNavLink',
          {
            props: {
              name: 'Button Dropdowns',
              to: '/buttons/dropdowns',
              icon: 'cui-cursor'
            }
          }
        ],
        [
          'CSidebarNavLink',
          {
            props: {
              name: 'Button Groups',
              to: '/buttons/button-groups',
              icon: 'cui-cursor'
            }
          }
        ],
        [
          'CSidebarNavLink',
          {
            props: {
              name: 'Brand Buttons',
              to: '/buttons/brand-buttons',
              icon: 'cui-cursor'
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
          icon: 'cui-pie-chart'
        }
      }
    ],
    [
      'CSidebarNavDropdown',
      {
        props: {
          name: 'Icons',
          route: '/icons',
          icon: 'cui-star',
        }
      },
      [
        [
          'CSidebarNavLink',
          {
            props: {
              name: 'CoreUI Icons',
              to: '/icons/coreui-icons',
              icon: 'cui-star',
              badge: {
                variant: 'info',
                textHtml: 'NEW'
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
              icon: 'cui-star'
            }
          }
        ],
        [
          'CSidebarNavLink',
          {
            props: {
              name: 'Flags',
              to: '/icons/flags',
              icon: 'cui-star'
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
          icon: 'cui-bell',
        }
      },
      [
        [
          'CSidebarNavLink',
          {
            props: {
              name: 'Alerts',
              to: '/notifications/alerts',
              icon: 'cui-bell'
            }
          }
        ],
        [
          'CSidebarNavLink',
          {
            props: {
              name: 'Badges',
              to: '/notifications/badges',
              icon: 'cui-bell'
            }
          }
        ],
        [
          'CSidebarNavLink',
          {
            props: {
              name: 'Modals',
              to: '/notifications/modals',
              icon: 'cui-bell'
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
          icon: 'cui-calculator',
          badge: {
            variant: 'primary',
            textHtml: 'NEW',
            pill: true
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
          icon: 'cui-star',
        }
      },
      [
        [
          'CSidebarNavLink',
          {
            props: {
              name: 'Login',
              to: '/pages/login',
              icon: 'cui-star'
            }
          }
        ],
        [
          'CSidebarNavLink',
          {
            props: {
              name: 'Register',
              to: '/pages/register',
              icon: 'cui-star'
            }
          }
        ],
        [
          'CSidebarNavLink',
          {
            props: {
              name: 'Error 404',
              to: '/pages/404',
              icon: 'cui-star'
            }
          }
        ],
        [
          'CSidebarNavLink',
          {
            props: {
              name: 'Error 500',
              to: '/pages/500',
              icon: 'cui-star'
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
          icon: 'cui-cloud-download',
          class: 'mt-auto',
          variant: 'success'
        }
      }
    ],
    [
      'CSidebarNavLink',
      {          
        props: {
          name: 'Try CoreUI PRO',
          href: 'http://coreui.io/pro/vue/',
          icon: 'cui-layers',
          variant: 'danger'
        }
      }
    ]
  ]
]

