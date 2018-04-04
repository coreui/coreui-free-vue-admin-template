<template>
  <label :class="classList">
    <input
      :value="value"
      :checked="isChecked"
      :disabled="isDisabled"
      type="checkbox"
      class="switch-input"
      @change="handleChange">
    <template v-if="isOn">
      <span
        :data-on="on"
        :data-off="off"
        class="switch-label" />
    </template>
    <template v-else>
      <span class="switch-label" />
    </template>
    <span class="switch-handle" />
  </label>
</template>

<script>
export default {
  model: {
    prop: 'checked',
    event: 'change'
  },
  props: {
    value: {
      type: Boolean,
      default: true
    },
    uncheckedValue: {
      type: Boolean,
      default: false
    },
    checked: {
      type: Boolean,
      default: false
    },
    type: {
      type: String,
      default: 'default'
    },
    variant: {
      type: String,
      default: ''
    },
    pill: {
      type: Boolean,
      default: false
    },
    on: {
      type: String,
      default: null
    },
    off: {
      type: String,
      default: null
    },
    size: {
      type: String,
      default: null
    },
    disabled: {
      type: Boolean,
      default: false
    }

  },
  computed: {
    classList () {
      return [
        'switch',
        this.switchType,
        this.switchVariant,
        this.switchPill,
        this.switchSize
      ]
    },
    switchType () {
      return this.type ? `switch-${this.type}` : `switch-default`
    },
    switchVariant () {
      return this.variant ? `switch-${this.variant}` : `switch-secondary`
    },
    switchPill () {
      return this.pill ? `switch-pill` : null
    },
    switchSize () {
      return this.size ? `switch-${this.size}` : ''
    },
    isChecked () {
      return this.checked === this.value
    },
    isDisabled () {
      return this.disabled ? true : null
    },
    isOn () {
      return this.on ? true : null
    }
  },
  methods: {
    handleChange ({ target: { checked } }) {
      this.$emit('change', checked ? this.value : this.uncheckedValue)
    }
  }
}
</script>
