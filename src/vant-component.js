import Vue from 'vue'
import { Button, Loading, PullRefresh, Tabbar, TabbarItem} from 'vant'
export default {
    install:function(){
        Vue.component(Button.name, Button)
        Vue.component(Loading.name, Loading)
        Vue.component(PullRefresh.name, PullRefresh)
        Vue.component(Tabbar.name, Tabbar)
        Vue.component(TabbarItem.name, TabbarItem)
    }
}