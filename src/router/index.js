import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/views/Home.vue'
import Detail from '@/views/Detail.vue'
import Car from '@/views/Car.vue'
import Personal from '@/views/Personal.vue'
import Index from '@/views/Index.vue'
Vue.use(VueRouter)
// onComplete is not a function 此报错是你this.$router.push 中的参数错误
// Non-nested routes must include a leading slash character. Fix the following routes 是path前面要加一个斜杠
export default new VueRouter({
    routes:[
        {
            path: '/',
            name:'home',
            component: Index,
            meta:{
                index:1
            }
        },
        {
            path: '/Car',
            name:'car',
            component: Car,
            meta:{
                index:3
            }
        },
        {
            path: '/Personal',
            name:'personal',
            component: Personal,
            meta:{
                index:2
            }
        },
        {
            path: '/Detail',
            name:'detail', //name是需要区分大小写的 不然会进行报错
            component: Detail,
            meta:{
                index:4
            }
        }
    ]
})