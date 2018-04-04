export const sidebarCssClasses = [
  'sidebar-show',
  'sidebar-sm-show',
  'sidebar-md-show',
  'sidebar-lg-show',
  'sidebar-xl-show'
]

export const asideMenuCssClasses = [
  'aside-menu-show',
  'aside-menu-sm-show',
  'aside-menu-md-show',
  'aside-menu-lg-show',
  'aside-menu-xl-show'
]

export const validBreakpoints = [ 'sm', 'md', 'lg', 'xl' ]

export function checkBreakpoint (breakpoint, list) {
  return list.indexOf(breakpoint) > -1
}
