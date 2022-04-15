
const state = {
  userInfo: {
    name: "this is name"
  },
  mode:'mode hahah'
}
const mutations = {
  SET_USER_INFO_NAME: (state: any, name: string) => {
    state.userInfo.name = name;
  },
  SET_MODE:(state:any,mode:string|number)=>{
    state.mode = mode;
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

