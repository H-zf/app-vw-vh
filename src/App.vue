<template>
    <div id="app">
        <router-view></router-view>
        <van-loading color="#1989fa" v-if="loadingMask"/>
    </div>
</template>
<script>
    import { mapState } from 'vuex'
    export default {
        data(){
            return {

            }
        },
        computed: {
            ...mapState({
                loadingMask:(state) => state.HomeModules.loadingBool //使用的时候是将modules定义的名称为主
            })
            // loadingMask(){
            //     return this.$store.state.HomeModules.loadingBool
            // }
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
</style>