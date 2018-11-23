import { mergeData } from 'vue-functional-data-merge'
export default {
  name: 'CButtonClose',
  functional: true,
  render (h, { data, props, slots }) {
    const componentData = {
      staticClass: 'close',
      attrs: {
        type: props.type || 'button',
        'aria-label': props.ariaLabel || 'Close'
      }
    }
    if (!slots().default)
      componentData.domProps = { innerHTML: '&times;' }
    return h('button', mergeData(data, componentData), slots().default)
  }
}
