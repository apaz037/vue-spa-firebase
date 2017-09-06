import Vue from 'vue'
import Router from 'vue-router'

const routerOptions = [
  { path: '/', component: 'Landing' },
  { path: '/signin', component: 'Signin' },
  { path: '/signup', component: 'Signup' },
  { path: '/home', component: 'Home' }
]

// Route Lazy Loading
const routes = routerOptions.map(route => {
  return {
    path: route.path,
    component: () => import(`@/components/${route.component}.vue`)
  }
})

Vue.use(Router)

export default new Router({
  // for html 5 history mode
  mode: 'history',
  routes
})
