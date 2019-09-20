<template>
  <CDropdown
    nav
    no-caret
    class="c-header-nav-items"
    placement="bottom-end"
    add-menu-classes="pt-0"
  >
    <template #toggler="{click}">
      <CLink class="c-header-nav-link" @click="click">
        <div class="c-avatar">
          <img
            src="img/avatars/6.jpg"
            class="c-avatar-img "
          />
        </div>
      </CLink>
    </template>
    <CDropdownHeader tag="div" class="text-center bg-light">
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
      class="text-center bg-light"
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
