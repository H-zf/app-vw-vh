import Vue from 'vue'
import App from './App.vue'
import router from './router'
import VantComponent from './vant-component'
import store from './store/store'
//如果使用export 暴露就需要进行解构 如果使用export default暴露就直接使用变量接收就可以了

Vue.use(VantComponent)
window.addEventListener("popstate",function(){
    router.isBack = true
},false)

Vue.prototype.my_go = (num)=>{
    router.isBack = true
    router.go(num)
}
new Vue({
    store,
    router,
    render: h => h(App)
}).$mount("#app")