export default function toggleClasses (toggleClass, classList, force) {
  const level = classList.indexOf(toggleClass)
  const removeClassList = classList.slice(0, level)
  removeClassList.map((className) => document.body.classList.remove(className))
  document.body.classList.toggle(toggleClass, force)
}
