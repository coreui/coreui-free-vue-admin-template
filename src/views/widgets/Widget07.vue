<template>
  <div class="card">
    <div :class="cardClasses" class="card-header">
      <div class="font-weight-bold">
        <span>{{rightHeader}}</span>
        <span class="float-right">{{leftHeader}}</span>
      </div>
      <div>
        <span>
          <small>{{rightFooter}}</small>
        </span>
        <span class="float-right">
          <small>{{leftFooter}}</small>
        </span>
      </div>
      <div class="chart-wrapper">
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Widget07',
  props: {
    cardClasses: {
      type: String,
      default: 'bg-primary'
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
