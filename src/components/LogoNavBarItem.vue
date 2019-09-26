<template>
  <b-link class="navbar-brand" to="#">
    <img
      v-for="data in logoNavBarItems"
      v-bind:key="data.alt_title"
      v-bind:class="data.class"
      v-bind:src="data.img_src_url"
      v-bind:width="data.width"
      v-bind:height="data.height"
      v-bind:alt="data.alt_title"

    />
  </b-link>
</template>
<script>
import json from '../configs/logoNavBarItems.json'

export default {

  name: 'LogoNavBarItem',
  data(){
    return{
      logoNavBarItems: json
    }
  },
}
</script>
