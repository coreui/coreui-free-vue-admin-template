<template>
  <CDropdown
    nav
    noCaret
    noPopper
    addMenuClasses="c-dropdown-menu-right"
  >
    <template #button-content>
      <img
        src="img/avatars/6.jpg"
        class="c-img-avatar"
        alt="admin@bootstrapmaster.com"
      />
    </template>
    <CDropdownHeader tag="div" class="c-text-center">
      <strong>Account</strong>
    </CDropdownHeader>
    <CDropdownItem>
      <i class="fa fa-bell-o" /> Updates
      <CBadge variant="info" additionalClasses="hehe">{{ itemsCount }}</CBadge>
    </CDropdownItem>
    <CDropdownItem>
      <i class="fa fa-envelope-o" /> Messages
      <CBadge variant="success">{{ itemsCount }}</CBadge>
    </CDropdownItem>
    <CDropdownItem>
      <i class="fa fa-tasks" /> Tasks
      <CBadge variant="danger">{{ itemsCount }}</CBadge>
    </CDropdownItem>
    <CDropdownItem>
      <i class="fa fa-comments" /> Comments
      <CBadge variant="warning">{{ itemsCount }}</CBadge>
    </CDropdownItem>
    <CDropdownHeader
      tag="div"
      class="c-text-center"
    >
      <strong>Settings</strong>
    </CDropdownHeader>
    <CDropdownItem>
      <i class="fa fa-user" /> Profile
    </CDropdownItem>
    <CDropdownItem>
      <i class="fa fa-wrench" /> Settings
    </CDropdownItem>
    <CDropdownItem>
      <i class="fa fa-usd" /> Payments
      <CBadge variant="secondary">{{ itemsCount }}</CBadge>
    </CDropdownItem>
    <CDropdownItem>
      <i class="fa fa-file" /> Projects
      <CBadge variant="primary">{{ itemsCount }}</CBadge>
    </CDropdownItem>
    <CDropdownDivider/>
    <CDropdownItem>
      <i class="fa fa-shield" /> Lock Account
    </CDropdownItem>
    <CDropdownItem>
      <i class="fa fa-lock" /> Logout
    </CDropdownItem>
  </CDropdown>
</template>

<script>
export default {
  name: 'DefaultHeaderDropdownAccnt',
  data: () => {
    return { itemsCount: 42 }
  },
}
</script>
