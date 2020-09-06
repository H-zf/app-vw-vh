const state = {
    sum:{
        clothNumber:0,
        shoeNumber:0
    }
}
const mutations = {
    addcloth(state,pre){
        state.sum.clothNumber = pre
    },
    addshoe(state,pre){
        state.sum.shoeNumber = pre
    }
}
const actions = {
    
}
const getters = {
    sumqutity(state){
        return Object.values(state.sum).reduce((item,pre)=>{
            return item + pre
        },0)
    }
}
export default {
    state,
    mutations,
    actions,
    getters
  }