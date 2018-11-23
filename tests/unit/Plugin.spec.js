// import Vue from 'vue'
import CoreuiVueModule from '@coreui/vue'
// Vue.use(CoreuiVueModule)

test("Should register all components when installed", () => {

  const component = jest.fn();
  const Vue = { component };

  CoreuiVueModule.install(Vue);

  // Test if a particular component was registered
  expect(component).toBeCalledWith("Aside", expect.any(Object));
  expect(component).toBeCalledWith("AsideToggler", expect.any(Object));
  expect(component).toBeCalledWith("Breadcrumb", expect.any(Object));
  expect(component).toBeCalledWith("Callout", expect.any(Object));
  expect(component).toBeCalledWith("Footer", expect.any(Object));
  expect(component).toBeCalledWith("Header", expect.any(Object));
  expect(component).toBeCalledWith("HeaderDropdown", expect.any(Object));
  expect(component).toBeCalledWith("Sidebar", expect.any(Object));
  expect(component).toBeCalledWith("SidebarFooter", expect.any(Object));
  expect(component).toBeCalledWith("SidebarForm", expect.any(Object));
  expect(component).toBeCalledWith("SidebarHeader", expect.any(Object));
  expect(component).toBeCalledWith("SidebarMinimizer", expect.any(Object));
  expect(component).toBeCalledWith("SidebarNav", expect.any(Object));
  expect(component).toBeCalledWith("SidebarNavDivider", expect.any(Object));
  expect(component).toBeCalledWith("SidebarNavItem", expect.any(Object));
  expect(component).toBeCalledWith("SidebarNavDropdown", expect.any(Object));
  expect(component).toBeCalledWith("SidebarNavLabel", expect.any(Object));
  expect(component).toBeCalledWith("SidebarNavLink", expect.any(Object));
  expect(component).toBeCalledWith("SidebarNavTitle", expect.any(Object));
  expect(component).toBeCalledWith("SidebarToggler", expect.any(Object));
  expect(component).toBeCalledWith("Switch", expect.any(Object));

  // Test how many times component got registered
  // const totalOfComponents = 21;
  // expect(component).toHaveBeenCalledTimes(totalOfComponents);
});
