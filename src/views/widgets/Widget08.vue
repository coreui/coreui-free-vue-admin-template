<template>
  <div class="card">
    <div class="card-body text-center">
      <div class="text-muted small text-uppercase font-weight-bold">{{header}}</div>
        <div class="h2 py-3">{{text}}</div>
          <div class="chart-wrapper">
            <slot></slot>
          </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Widget08',
  props: {
    cardClasses: {
      type: String,
      default: 'bg-primary'
    },
    header: {
      type: String,
      default: 'header:string'
    },
    text: {
      type: String,
      default: 'text:string'
    },
  }
}
</script>
