<template>
    <div id="app">
        <transition :name="transitionName">
            <router-view></router-view>
        </transition>
        <van-loading color="#1989fa" v-if="loadingMask"/>
    </div>
</template>
<script>
    import { mapState } from 'vuex'
    export default {
        data(){
            return {
                transitionName:''
            }
        },
        computed: {
            ...mapState({
                loadingMask:(state) => state.HomeModules.loadingBool //使用的时候是将modules定义的名称为主
            })
            // loadingMask(){
            //     return this.$store.state.HomeModules.loadingBool
            // }
        },
        watch:{
            $route(to, from) {
            //如果to索引大于from索引,判断为前进状态,反之则为后退状态
            let isBack = this.$router.isBack
                console.log(isBack);
                if(isBack){
                //设置动画名称
                this.transitionName = 'slide-right';
                }else{
                this.transitionName = 'slide-left';
                }
                this.$router.isBack = false;
            }
        }
    }
</script>
<style>
html,body,#app{
    width: 100%;
    height: 100%;
    -webkit-tap-highlight-color:rgba(0,0,0,0);
    font-size: 18px;
}
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
::-webkit-scrollbar{
  width: 0;
}
.slide-right-enter-active,
.slide-right-leave-active,
.slide-left-enter-active,
.slide-left-leave-active {
  will-change: transform;
  transition: all 500ms;
  position: absolute;
}
.slide-right-enter {
  opacity: 0;
  transform: translate3d(-100%, 0, 0);
}
.slide-right-leave-active {
  opacity: 0;
  transform: translate3d(100%, 0, 0);
}
.slide-left-enter {
  opacity: 0;
  transform: translate3d(100%, 0, 0);
}
.slide-left-leave-active {
  opacity: 0;
  transform: translate3d(-100%, 0, 0);
}
</style>