<template>
  <b-navbar-nav class="d-md-down-none">
    <b-nav-item
      v-for="data in navBarItems"
      v-bind:key="data.text"
      v-bind:title="data.text"
      v-bind:to="data.url"
      v-bind:class="data.class"
      >
      {{data.text}}
      </b-nav-item>
  </b-navbar-nav>
</template>
<script>
import json from '../configs/leftNavBarItems.json'

export default {
  name: 'LeftNavBarItem',
  data(){
    return{
      navBarItems: json
    }
  },
}
</script>
