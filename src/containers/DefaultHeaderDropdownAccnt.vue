<template>
  <c-nav-item-dropdown no-caret right>
    <template slot="button-content">
      <img
        src="img/avatars/6.jpg"
        class="img-avatar"
        alt="admin@bootstrapmaster.com" />
    </template>
    
    <b-dropdown-header tag="div" class="text-center"><strong>Account</strong></b-dropdown-header>
    <b-dropdown-item><i class="fa fa-bell-o" /> Updates
      <c-badge variant="info" additionalClasses="hehe">{{ itemsCount }}</c-badge>
    </b-dropdown-item>
    <b-dropdown-item><i class="fa fa-envelope-o" /> Messages
      <c-badge variant="success">{{ itemsCount }}</c-badge>
    </b-dropdown-item>
    <b-dropdown-item><i class="fa fa-tasks" /> Tasks
      <c-badge variant="danger">{{ itemsCount }}</c-badge>
    </b-dropdown-item>
    <b-dropdown-item><i class="fa fa-comments" /> Comments
      <c-badge variant="warning">{{ itemsCount }}</c-badge>
    </b-dropdown-item>
    <b-dropdown-header
      tag="div"
      class="text-center">
      <strong>Settings</strong>
    </b-dropdown-header>
    <b-dropdown-item><i class="fa fa-user" /> Profile</b-dropdown-item>
    <b-dropdown-item><i class="fa fa-wrench" /> Settings</b-dropdown-item>
    <b-dropdown-item><i class="fa fa-usd" /> Payments
      <c-badge variant="secondary">{{ itemsCount }}</c-badge>
    </b-dropdown-item>
    <b-dropdown-item><i class="fa fa-file" /> Projects
      <c-badge variant="primary">{{ itemsCount }}</c-badge>
    </b-dropdown-item>
    <b-dropdown-divider />
    <b-dropdown-item><i class="fa fa-shield" /> Lock Account</b-dropdown-item>
    <b-dropdown-item><i class="fa fa-lock" /> Logout</b-dropdown-item>
  </c-nav-item-dropdown>
</template>

<script>

export default {
  name: 'DefaultHeaderDropdownAccnt',
  data: () => {
    return { itemsCount: 42 }
  },
}
</script>
