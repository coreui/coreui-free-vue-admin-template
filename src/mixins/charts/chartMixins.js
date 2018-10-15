import { deepObjectsMerge, getColor } from '@coreui/coreui/dist/js/coreui-utilities'

const generatedLabels = {
  computed:{
    generatedLabels() {
      if(this.labels !== undefined)
        return this.labels
      let labels = [];
      for(let i=1; i<=this.data.length; i++)
        labels.push('')
      return labels
    },
  },
}
const generatedBackgroundColor = {
  computed:{
    generatedBackgroundColor(){
      return getColor(this.backgroundColor)
    },
  },
}
const generatedBorderColor = {
  computed:{
    generatedBorderColor(){
      return getColor(this.borderColor)
    },
  },
}
const generatedPointHoverBackgroundColor = {
  computed:{
    generatedPointHoverBackgroundColor () {
     if(this.$options.propsData.pointHoverBackgroundColor === undefined)
       return this.generatedBorderColor
     return getColor(this.pointHoverBackgroundColor)
    },
  },
}
const generatedOptions = {
  computed:{
    generatedOptions () {
     if(this.$options.propsData.options !== undefined)
       deepObjectsMerge(this.finalOptions, this.options)
     return this.finalOptions
    },
  },
}
export{
  generatedLabels,
  generatedBackgroundColor,
  generatedBorderColor,
  generatedPointHoverBackgroundColor,
  generatedOptions
}
