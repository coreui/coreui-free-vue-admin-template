<template>
  <blockquote :class=classes>
      <p>{{content}}</p>
      <footer :class=footerClasses>{{footerContent}}
        <cite :title=citeContent>
          {{citeContent}}
        </cite>
      </footer>
  </blockquote>
</template>

<script>
export default {
  name: 'Blockquote',
  props:{
    classes:{
      type: String,
      required: false,
      default:'card-blockquote'
    },
    content:{
      type: String,
      required: false,
      default:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.'
    },
    footerContent:{
      type: String,
      required: false,
      default:'Someone famous in'
    },
    footerClasses:{
      type: String,
      required: false,
      default:''
    },    
    citeContent:{
      type: String,
      required: false,
      default:'Source Title'
    },
  },
}
</script>
