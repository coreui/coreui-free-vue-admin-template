<template>
  <label :class="classList">
    <input
      :id="id"
      :name="name"
      :type="type"
      :checked="isChecked"
      :disabled="disabled"
      :required="required"
      :value="value"
      class="switch-input form-check-input"
      @change="toggle"
    >
    <span
      :data-checked="dataOn"
      :data-unchecked="dataOff"
      class="switch-slider"
    >
    </span>
  </label>
</template>

<script>
export default {
  name:'CSwitch',
  model: {
    prop: 'passedValue',
    event: 'change'
  },
  data: function () {
    return {
      isChecked: null,
      passedValue: null
    }
  },
  props: {
    variant: {
      type: String,
      default: 'secondary'
    },
    outline: {
      type: [Boolean, String],
      default: null,
      validator: value => [false, true, '', 'alt'].indexOf(value) !== -1
    },
    size: {
      type: String,
      default: null,
      validator: value => ['', 'lg', 'sm'].indexOf(value) !== -1
    },
    shape: {
      type: String,
      default: null,
      validator: value => [null, '3d', 'pill'].indexOf(value) !== -1
    },
    id: String,
    name: String,
    checked: {
      type: Boolean,
      default: false
    },
    disabled: Boolean,
    required: Boolean,
    value: String,
    trueValue: [String, Number, Array, Object],
    falseValue: [String, Number, Array, Object],
    dataOn: String,
    dataOff: String,
    type: {
      type: String,
      default: 'checkbox'
    }
  },
  computed: {
    classList () {
      return [
        'switch',
        this.dataOn || this.dataOff ? 'switch-label' : '',
        this.size ? `switch-${this.size}` : '',
        this.shape ? `switch-${this.shape}` : '',
        `switch${this.outline ? '-outline' : ''}-${this.variant}${this.outline==='alt' ? '-alt' : ''}`,
        'form-check-label'
      ]
    }
  },
  methods: {
    toggle (event) {
      this.setValues(event.target.checked)
      this.$emit('change', this.passedValue, event);
    },
    setValues (checked) {
      this.isChecked = checked
      if(checked)
        this.passedValue = this.trueValue !== undefined ? this.trueValue : checked
      else
        this.passedValue = this.falseValue !== undefined ? this.falseValue : checked
    },
    detectPassedCheck (modelValue) {
      if(typeof modelValue === 'boolean')
        this.isChecked = modelValue
      else if (modelValue === this.falseValue)
        this.isChecked = false
      else if (modelValue === this.trueValue)
        this.isChecked = true
      else if (this.type === 'checkbox')
        console.warn('Value passed to CSwitch component by v-model property is not of boolean type and does not equal trueValue or falseValue property.')
    }
  },
  created () {
    if(this.$vnode.data.model)
      this.detectPassedCheck(this.$vnode.data.model.value)
    else
      this.isChecked = this.checked
  }
}
</script>
