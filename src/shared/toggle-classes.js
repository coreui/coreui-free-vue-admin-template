export default function toggleClasses (toggleClass, classList) {
  const level = classList.indexOf(toggleClass)
  const removeClassList = classList.slice(0, level)
  removeClassList.map((className) => document.body.classList.remove(className))
  document.body.classList.toggle(toggleClass)
}
