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
          iconClass: 'el-icon-s-shop',
          link: '/hello',
          isParent: false
        },
        {
          title: '设置',
          iconClass: 'el-icon-s-shop',
          link: '/',
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
