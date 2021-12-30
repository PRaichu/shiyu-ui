import VueRouter from 'vue-router'
import Layout from '@/layouts/Layout'
import HelloWorld from '@/components/HelloWorld'

export default new VueRouter({
  routes: [
    {
      path: '/',
      component: Layout,
      children: [
        {
          path: 'hello',
          component: HelloWorld
        }
      ]
    }
  ]
})
