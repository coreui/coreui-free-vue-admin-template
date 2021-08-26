import { defineComponent, h, resolveComponent } from "vue";
import { RouterLink } from "vue-router";

import { CSidebarNav, CNavItem, CNavGroup, CNavTitle } from "@coreui/vue";
import nav from "@/_nav.js";

const AppSidebarNav = defineComponent({
  name: "AppSidebarNav",
  components: {
    CNavItem,
    CNavGroup,
    CNavTitle,
  },
  setup() {
    const singleItem = (item) =>
      item.to
        ? h(
            RouterLink,
            {
              to: item.to,
              custom: true,
            },
            {
              default: (props) =>
                h(
                  resolveComponent(item._name),
                  {
                    active: props.isActive,
                    href: props.href,
                    icon: "cil-speedometer",
                    onClick: () => props.navigate(),
                  },
                  [
                    item.icon &&
                      h(resolveComponent("CIcon"), {
                        customClassName: "nav-icon",
                        name: item.icon,
                      }),
                    item.name,
                    item.badge &&
                    h(resolveComponent("CBadge"), {
                      class: 'ms-auto',
                      color: item.badge.color,
                    }, item.badge.text),
                  ]
                ),
            }
          )
        : h(resolveComponent(item._name), {}, item.name);

    const group = (item) =>
      h(
        RouterLink,
        {
          to: item.route,
          custom: true,
        },
        {
          default: (props) =>
            h(
              resolveComponent("CNavGroup"),
              {
                visible: props.isActive
              },
              {
                togglerContent: () => [
                  h(resolveComponent("CIcon"), {
                    customClassName: "nav-icon",
                    name: item.icon,
                  }),
                  item.name,
                ],
                default: () => item.children.map((child) => singleItem(child)),
              }
            ),
        }
      );

    return () =>
      h(
        CSidebarNav,
        {},
        nav.map((item) =>
          typeof item.children === "undefined" ? singleItem(item) : group(item)
        )
      );
  },
});
export { AppSidebarNav };
