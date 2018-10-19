import {sidebarCssClasses, asideMenuCssClasses, validBreakpoints, checkBreakpoint} from '@/shared/classes'

test('sidebarCssClasses', () => {
  expect(sidebarCssClasses.constructor === Array).toBe(true);
  expect(sidebarCssClasses.length).toBe(5);
  expect(sidebarCssClasses).toContain('sidebar-show');
  expect(sidebarCssClasses).toContain('sidebar-sm-show');
  expect(sidebarCssClasses).toContain('sidebar-md-show');
  expect(sidebarCssClasses).toContain('sidebar-lg-show');
  expect(sidebarCssClasses).toContain('sidebar-xl-show');
});
test('asideMenuCssClasses', () => {
  expect(asideMenuCssClasses.constructor === Array).toBe(true);
  expect(asideMenuCssClasses.length).toBe(5);
  expect(asideMenuCssClasses).toContain('aside-menu-show');
  expect(asideMenuCssClasses).toContain('aside-menu-sm-show');
  expect(asideMenuCssClasses).toContain('aside-menu-md-show');
  expect(asideMenuCssClasses).toContain('aside-menu-lg-show');
  expect(asideMenuCssClasses).toContain('aside-menu-xl-show');
});
test('validBreakpoints', () => {
  expect(validBreakpoints.constructor === Array).toBe(true);
  expect(validBreakpoints.length).toBe(4);
  expect(validBreakpoints).toContain('sm');
  expect(validBreakpoints).toContain('md');
  expect(validBreakpoints).toContain('lg');
  expect(validBreakpoints).toContain('xl');
});
test('checkBreakpoint', () => {
  expect(checkBreakpoint.constructor === Function).toBe(true);
  expect(checkBreakpoint('sm', validBreakpoints)).toBe(true);
  expect(checkBreakpoint('xs', validBreakpoints)).toBe(false);
});
