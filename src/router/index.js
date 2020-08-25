import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/views/Home.vue'
import Detail from '@/views/Detail.vue'
import Car from '@/views/Car.vue'
import Personal from '@/views/Personal.vue'
import Index from '@/views/Index.vue'
Vue.use(VueRouter)
export default new VueRouter({
    routes:[
        {
            path: '/',
            name:'首页',
            component: Index
        }
    ]
})