<template>
  <CDropdown
    nav
    no-caret
    class="c-header-nav-items"
    placement="bottom-end"
    add-menu-classes="pt-0"
    :show.sync="show"
  >
    <template #toggler>
      <CLink class="c-header-nav-link" @click="show = !show">
        <div class="c-avatar">
          <img
            src="img/avatars/6.jpg"
            class="c-avatar-img "
          />
        </div>
      </CLink>
    </template>
    <CDropdownHeader tag="div" class="text-center" variant="light">
      <strong>Account</strong>
    </CDropdownHeader>
    <CDropdownItem>
      <i class="cui-bell mr-2"/> Updates
      <CBadge variant="info" class="ml-auto">{{ itemsCount }}</CBadge>
    </CDropdownItem>
    <CDropdownItem>
      <i class="cui-envelope-open mr-2" /> Messages
      <CBadge variant="success" class="ml-auto">{{ itemsCount }}</CBadge>
    </CDropdownItem>
    <CDropdownItem>
      <i class="cui-task mr-2" /> Tasks
      <CBadge variant="danger" class="ml-auto">{{ itemsCount }}</CBadge>
    </CDropdownItem>
    <CDropdownItem>
      <i class="cui-comment-square mr-2" /> Comments
      <CBadge variant="warning" class="ml-auto">{{ itemsCount }}</CBadge>
    </CDropdownItem>
    <CDropdownHeader
      tag="div"
      class="text-center"
      variant="light"
    >
      <strong>Settings</strong>
    </CDropdownHeader>
    <CDropdownItem>
      <i class="cui-user mr-2" /> Profile
    </CDropdownItem>
    <CDropdownItem>
      <i class="cui-wrench mr-2" /> Settings
    </CDropdownItem>
    <CDropdownItem>
      <i class="cui-dollar mr-2" /> Payments
      <CBadge variant="secondary" class="ml-auto">{{ itemsCount }}</CBadge>
    </CDropdownItem>
    <CDropdownItem>
      <i class="cui-file mr-2" /> Projects
      <CBadge variant="primary" class="ml-auto">{{ itemsCount }}</CBadge>
    </CDropdownItem>
    <CDropdownDivider/>
    <CDropdownItem>
      <i class="cui-shield mr-2" /> Lock Account
    </CDropdownItem>
    <CDropdownItem>
      <i class="cui-lock-locked mr-2" /> Logout
    </CDropdownItem>
  </CDropdown>
</template>

<script>
export default {
  name: 'TheHeaderDropdownAccnt',
  data () {
    return { 
      itemsCount: 42,
      show: false
    }
  }
}
</script>
