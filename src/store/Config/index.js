import getters from './getters'
import actions from './actions'
import mutations from './mutations'

const state = {
  sidebarMenu: [
    {
      title: '首页',
      iconClass: 'el-icon-s-shop',
      link: '/',
      isParent: false
    },
    {
      title: 'Hello',
      iconClass: 'bi bi-messenger',
      link: '/hello',
      isParent: false
    },
    {
      title: 'Page1',
      iconClass: 'el-icon-s-shop',
      link: '/page1',
      isParent: false
    },
    {
      title: '页面2,3,4',
      iconClass: 'bi bi-mailbox2',
      link: '',
      isParent: true,
      children: [
        {
          title: 'Page2',
          iconClass: 'bi bi-messenger',
          link: '/page2',
          isParent: false
        },
        {
          title: 'Page3',
          iconClass: 'bi bi-record',
          link: '/page3',
          isParent: false
        },
        {
          title: 'Page4',
          iconClass: 'bi bi-record',
          link: '/page4',
          isParent: false
        }
      ]
    }
  ]
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
