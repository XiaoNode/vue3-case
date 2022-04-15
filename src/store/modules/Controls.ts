
const state = {
  isCollapse: false, // 控制菜单展开与折叠
  text:'this is text'
}
const mutations = {
  TOOGLESIDEBAR(state: any) {
    state.isCollapse = !(state.isCollapse);
  }
}
const actions = {
}
const getters = {
}
const modules = {
}


export default {
  namespaced: true,
  state,
  mutations,
  actions
}

