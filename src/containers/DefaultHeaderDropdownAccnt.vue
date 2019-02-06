<template>
  <CDropdown right class="nav-item" toggleClasses="nav-link" menuClasses="hehe">
    <img slot="button"
      src="img/avatars/6.jpg"
      class="img-avatar"
      alt="admin@bootstrapmaster.com"
    />

    <c-dropdown-header tag="div"  class="text-center"><strong>Account</strong></c-dropdown-header>
    <c-dropdown-item><i class="fa fa-bell-o" /> Updates
      <c-badge variant="info" additionalClasses="hehe">{{ itemsCount }}</c-badge>
    </c-dropdown-item>
    <c-dropdown-item><i class="fa fa-envelope-o" /> Messages
      <c-badge variant="success">{{ itemsCount }}</c-badge>
    </c-dropdown-item>
    <c-dropdown-item><i class="fa fa-tasks" /> Tasks
      <c-badge variant="danger">{{ itemsCount }}</c-badge>
    </c-dropdown-item>
    <c-dropdown-item><i class="fa fa-comments" /> Comments
      <c-badge variant="warning">{{ itemsCount }}</c-badge>
    </c-dropdown-item>
    <c-dropdown-header
      tag="div"
      class="text-center">
      <strong>Settings</strong>
    </c-dropdown-header>
    <c-dropdown-item><i class="fa fa-user" /> Profile</c-dropdown-item>
    <c-dropdown-item><i class="fa fa-wrench" /> Settings</c-dropdown-item>
    <c-dropdown-item><i class="fa fa-usd" /> Payments
      <c-badge variant="secondary">{{ itemsCount }}</c-badge>
    </c-dropdown-item>
    <c-dropdown-item><i class="fa fa-file" /> Projects
      <c-badge variant="primary">{{ itemsCount }}</c-badge>
    </c-dropdown-item>
    <CDropdownDivider/>
    <c-dropdown-item><i class="fa fa-shield" /> Lock Account</c-dropdown-item>
    <c-dropdown-item><i class="fa fa-lock" /> Logout</c-dropdown-item>
  </CDropdown>
</template>

<script>
// import CDropdown from './CDropdown'
// import CDropdownHeader from './CDropdownHeader'
// import CDropdownDivider from './CDropdownDivider'
// import CDropdownItem from './CDropdownItem'


export default {
  name: 'DefaultHeaderDropdownAccnt',
  // components: {
  //   CDropdown,
  //   CDropdownHeader,
  //   CDropdownDivider,
  //   CDropdownItem
  // },
  data: () => {
    return { itemsCount: 42 }
  },
}
</script>
