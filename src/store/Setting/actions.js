export default {
  setTheme(context, payload) {
    context.commit('setThemeCommit', payload)
  },
  setSidebarIsOpen(context, payload) {
    context.commit('setSidebarIsOpenCommit', payload)
  }
}
