import { sidebarCssClasses } from '@/shared/classes'
import toggleClasses from '@/shared/toggle-classes'

test('toggleClasses', () => {
  const cssClass = `sidebar-show`
  expect(toggleClasses.constructor === Function).toBe(true)
  toggleClasses(cssClass, sidebarCssClasses )
  console.log(document.body.classList)
  expect(document.body.classList).toMatchObject({ '0': 'sidebar-show' })
  toggleClasses("sidebar-xl-show", sidebarCssClasses )
  console.log(document.body.classList)
  toggleClasses("sidebar-lg-show", sidebarCssClasses )
  console.log(document.body.classList)
  toggleClasses("sidebar-md-show", sidebarCssClasses )
  expect(document.body.classList).toMatchObject({ '0': 'sidebar-xl-show', '1': 'sidebar-lg-show', '2': 'sidebar-md-show' })
  console.log(document.body.classList)
  toggleClasses("sidebar-xl-show", sidebarCssClasses )
  console.log(document.body.classList)
  toggleClasses(cssClass, sidebarCssClasses )
  expect(document.body.classList).toMatchObject({ '0': 'sidebar-show' })
  console.log(document.body.classList)
});
