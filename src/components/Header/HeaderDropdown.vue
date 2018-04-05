<template>
  <b-nav-item-dropdown :right="right" :no-caret="noCaret">
    <template slot="button-content">
      <slot name="button-content">
        <img
          src="static/img/avatars/6.jpg"
          class="img-avatar"
          alt="admin@bootstrapmaster.com" />
      </slot>
    </template>
    <slot>
      <div :style="{ right: 'auto', height: '400px' }">dropdown</div>
    </slot>
  </b-nav-item-dropdown>
</template>
<script>
export default {
  name: 'HeaderDropdown',
  props: {
    right: {
      type: Boolean,
      default: false
    },
    noCaret: {
      type: Boolean,
      default: false
    }
  },
  data: () => {
    return { itemsCount: 42 }
  }
}
</script>
