import * as types from './types'

const state = {
    loadingBool:false,
    change_name:''
}
const mutations = {
    [types.SET_LOADING_BOOL](state,val){
        console.log('val----',val)
        state.loadingBool = val
        console.log('state.loadingBool',state.loadingBool)
    }
}
const actions = {
    changeName ({commit},anotherName) {
        commit("change_name", anotherName)
    }
}
const getters = {
 
}
// 不要忘记把state, mutations等暴露出去。
export default {
  state,
  mutations,
  actions,
  getters
}