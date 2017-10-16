<template>
      <b-nav-item-dropdown right no-caret>
        <template slot="button-content">
          <img src="static/img/avatars/6.jpg" class="img-avatar" alt="admin@bootstrapmaster.com">
          <span class="d-md-down-none">admin</span>
        </template>
        <b-dropdown-header tag="div" class="text-center"><strong>Account</strong></b-dropdown-header>
        <b-dropdown-item><i class="fa fa-bell-o"></i> Updates<b-badge variant="info">42</b-badge></b-dropdown-item>
        <b-dropdown-item><i class="fa fa-envelope-o"></i> Messages<b-badge variant="success">42</b-badge></b-dropdown-item>
        <b-dropdown-item><i class="fa fa-tasks"></i> Tasks<b-badge variant="danger">42</b-badge></b-dropdown-item>
        <b-dropdown-item><i class="fa fa-comments"></i> Comments<b-badge variant="warning">42</b-badge></b-dropdown-item>
        <b-dropdown-header tag="div" class="text-center"><strong>Settings</strong></b-dropdown-header>
        <b-dropdown-item><i class="fa fa-user"></i> Profile</b-dropdown-item>
        <b-dropdown-item><i class="fa fa-wrench"></i> Settings</b-dropdown-item>
        <b-dropdown-item><i class="fa fa-usd"></i> Payments<b-badge variant="default">42</b-badge></b-dropdown-item>
        <b-dropdown-item><i class="fa fa-file"></i> Projects<b-badge variant="primary">42</b-badge></b-dropdown-item>
        <b-dropdown-divider></b-dropdown-divider>
        <b-dropdown-item><i class="fa fa-shield"></i> Lock Account</b-dropdown-item>
        <b-dropdown-item><i class="fa fa-lock"></i> Logout</b-dropdown-item>
      </b-nav-item-dropdown>
</template>
<script>
  export default {
    name: 'header-dropdown'
  }
</script>
