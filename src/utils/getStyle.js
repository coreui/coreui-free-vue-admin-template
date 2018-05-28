// todo
// temp getStyle fix for IE
const getStyle = (prop, node) => {
  const root = node || document.querySelector(':root')
  const value = window.getComputedStyle(root).getPropertyValue(prop).trim()
  // console.log('utils/getStyle', value)
  return value
}

export default getStyle
