import components from './components'

const install = function (Vue: any) {
  Object.values(components).forEach(el => Vue.component(el.name, el))
}

export default {
  install,
  ...components
}