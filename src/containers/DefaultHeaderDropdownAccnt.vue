<template>
  <CDropdown
    nav
    no-caret
    no-popper
    add-menu-classes="dropdown-menu-right"
  >
    <template #toggler-content>
      <img
        src="img/avatars/6.jpg"
        class="img-avatar"
        alt="admin@bootstrapmaster.com"
      />
    </template>
    <CDropdownHeader tag="div" class="text-center">
      <strong>Account</strong>
    </CDropdownHeader>
    <CDropdownItem>
      <i class="cui-bell"/> Updates
      <CBadge variant="info" additional-classes="hehe">{{ itemsCount }}</CBadge>
    </CDropdownItem>
    <CDropdownItem>
      <i class="cui-envelope-open" /> Messages
      <CBadge variant="success">{{ itemsCount }}</CBadge>
    </CDropdownItem>
    <CDropdownItem>
      <i class="cui-task" /> Tasks
      <CBadge variant="danger">{{ itemsCount }}</CBadge>
    </CDropdownItem>
    <CDropdownItem>
      <i class="cui-comment-square" /> Comments
      <CBadge variant="warning">{{ itemsCount }}</CBadge>
    </CDropdownItem>
    <CDropdownHeader
     tag="div"
      class="text-center"
    >
      <strong>Settings</strong>
    </CDropdownHeader>
    <CDropdownItem>
      <i class="cui-user" /> Profile
    </CDropdownItem>
    <CDropdownItem>
      <i class="cui-wrench" /> Settings
    </CDropdownItem>
    <CDropdownItem>
      <i class="cui-dollar" /> Payments
      <CBadge variant="secondary">{{ itemsCount }}</CBadge>
    </CDropdownItem>
    <CDropdownItem>
      <i class="cui-file" /> Projects
      <CBadge variant="primary">{{ itemsCount }}</CBadge>
    </CDropdownItem>
    <CDropdownDivider/>
    <CDropdownItem>
      <i class="cui-shield" /> Lock Account
    </CDropdownItem>
    <CDropdownItem>
      <i class="cui-lock-locked" /> Logout
    </CDropdownItem>
  </CDropdown>
</template>

<script>
export default {
  name: 'DefaultHeaderDropdownAccnt',
  data () {
    return { itemsCount: 42 }
  }
}
</script>
