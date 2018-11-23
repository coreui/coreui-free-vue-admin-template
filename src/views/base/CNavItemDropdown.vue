<template>
  <li :class='dropdownClasses' :id="safeId">
    <a href="#" :id="'C-' + safeId"  aria-haspopup="true" :aria-expanded="visible"
       :class="toggleClasses" @click="toggle(!visible)" @blur="toggle(false)">
      <slot name="button-content">{{text}}</slot>
    </a>
    <div :class='menuClasses' :aria-labbeledby="'C-' + safeId">
      <slot></slot>
      <slot name="dropdown"></slot>
    </div>
  </li>
</template>
<script>

export default {
  name: 'CNavItemDropdown',
  data () {
    return {
      visible: this.show
    }
  },
  props: {
    noCaret: {
      type: Boolean,
      default: false
    },
    extraToggleClasses: {
      type: String,
      default: ''
    },
    extraMenuClasses: {
      type: String,
      default: ''
    },
    text: {
      type: String,
      default: 'Dropdown'
    },
    show: {
      type: Boolean,
      default: false
    },
    dropup: {
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    },
    right: {
      type: Boolean,
      default: false
    },
  },
  methods:{
    toggle (visible) {
      if(this.disabled)
        return
      this.visible = visible
    }
  },
  computed: {
    dropdownClasses () {
      return [
        'nav-item',
        'dropdown',
        this.dropup ? 'dropup' : '',
        this.visible ? 'show' : ''
      ]
    },
    toggleClasses () {
      return [
        'nav-link',
        this.noCaret ? '' : 'dropdown-toggle',
        this.disabled ? 'disabled' : '',
        this.extraToggleClasses ? this.extraToggleClasses : ''
      ]
    },
    menuClasses () {
      return [
        'dropdown-menu',
        this.right ? 'dropdown-menu-right' : 'dropdown-menu-left',
        this.visible ? 'show' : '',
        this.extraMenuClasses ? this.extraMenuClasses : ''
      ]
    }
  },
}
</script>
