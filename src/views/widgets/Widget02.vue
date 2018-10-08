<template>
  <b-col cols="12" sm="6" lg="3">
    <b-card :no-body="true" footer-class="px-3 py-2">
      <b-card-body class="p-3 clearfix">
        <i :class="iconClasses" class="fa fa-cogs bg-primary p-3 font-2xl mr-3 float-left"></i>
        <div class="h5 text-primary mb-0 mt-2">{{header}}</div>
        <div class="text-muted text-uppercase font-weight-bold font-xs">{{text}}</div>
      </b-card-body>
      <div slot="footer" v-if="showLink">
        <b-link class="font-weight-bold font-xs btn-block text-muted" :href="link">View More <i class="fa fa-angle-right float-right font-lg"></i></b-link>
      </div>
    </b-card>
  </b-col>
</template>

<script>
export default {
  name: 'Widget02',
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
    showLink: {
      type: Boolean,
      default: false
    },
    link: {
      type: String,
      default: '#'
    },
  }
}
</script>
