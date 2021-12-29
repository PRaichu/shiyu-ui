import getters from './getters'
import actions from './actions'
import mutations from './mutations'

const state = {
  sidebarMenu: [
    {
      title: '个人中心',
      iconClass: 'el-icon-s-shop',
      link: '',
      isParent: true,
      children: [
        {
          title: '信息',
          iconClass: 'bi bi-messenger',
          link: '/hello',
          isParent: false
        },
        {
          title: '设置',
          iconClass: 'bi bi-record',
          link: '/',
          isParent: false
        }
      ]
    },
    {
      title: '个人中心',
      iconClass: 'bi bi-mailbox2',
      link: '',
      isParent: true,
      children: [
        {
          title: '信息',
          iconClass: 'bi bi-messenger',
          link: '/hello',
          isParent: false
        },
        {
          title: '设置',
          iconClass: 'bi bi-record',
          link: '/',
          isParent: false
        }
      ]
    },
    {
      title: '个人中心',
      iconClass: 'el-icon-s-shop',
      link: '',
      isParent: false,
      children: [
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
