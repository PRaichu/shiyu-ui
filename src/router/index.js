import VueRouter from 'vue-router'
import Layout from '@/layouts/Layout'
import HelloWorld from '@/views/testViews/HelloWorld'
import Page1 from '@/views/testViews/Page1'
import Page2 from '@/views/testViews/Page2'
import Page3 from '@/views/testViews/Page3'
import Page4 from '@/views/testViews/Page4'

export default new VueRouter({
  routes: [
    {
      path: '/',
      component: Layout,
      children: [
        {
          path: 'hello',
          component: HelloWorld
        },
        {
          path: 'page1',
          component: Page1
        },
        {
          path: 'page2',
          component: Page2
        },
        {
          path: 'page3',
          component: Page3
        },
        {
          path: 'page4',
          component: Page4
        }
      ]
    }
  ]
})
