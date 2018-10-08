<template>
  <b-card :no-body="true">
    <b-card-body class="p-0 clearfix">
      <i :class="iconClasses" class="p-4 font-2xl mr-3 float-left"></i>
      <div class="h5 text-primary mb-0 pt-3">{{header}}</div>
      <div class="text-muted text-uppercase font-weight-bold font-xs">{{text}}</div>
    </b-card-body>
  </b-card>
</template>

<script>
export default {
  name: 'Widget03',
  props: {
    iconClasses: {
      type: String,
      default: 'fa fa-cogs bg-primary'
    },
    header: {
      type: String,
      default: 'Lorem ipsum...'
    },
    text: {
      type: String,
      default: 'Income'
    },
  }
}
</script>
