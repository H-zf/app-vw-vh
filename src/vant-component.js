import Vue from 'vue'
import { Button, Loading } from 'vant'
export default {
    install:function(){
        Vue.component(Button.name, Button)
        Vue.component(Loading.name, Loading)
    }
}