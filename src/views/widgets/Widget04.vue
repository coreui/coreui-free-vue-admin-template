<template>
  <div class="brand-card">
    <div :class="'bg-' + type" class="brand-card-header">
      <i  class="fa" :class="'fa-'+ type"></i>
      <div class="chart-wrapper">
        <slot></slot>
      </div>
    </div>
    <div class="brand-card-body">
      <div>
        <div class="text-value">{{rightHeader}}</div>
        <div class="text-uppercase text-muted small">{{rightFooter}}</div>
      </div>
      <div>
        <div class="text-value">{{leftHeader}}</div>
        <div class="text-uppercase text-muted small">{{leftFooter}}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Widget04',
  props: {
    type: {
      type: String,
      default: 'facebook'
    },
    rightHeader: {
      type: String,
      default: 'rightHeader:string'
    },
    rightFooter: {
      type: String,
      default: 'rightFooter:string'
    },
    leftHeader: {
      type: String,
      default: 'leftHeader:string'
    },
    leftFooter: {
      type: String,
      default: 'leftFooter:string'
    },
  }
}
</script>
