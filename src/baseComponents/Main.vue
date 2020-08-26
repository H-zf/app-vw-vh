<template>
    <div class="index-db">
       <van-button type="primary" @click="clickBtn">vant</van-button>
    </div>
</template>
<script>
    import { mapMutations } from 'vuex'
    export default {
        data(){
            return {

            }
        },
        methods: {
            ...mapMutations({
                setLoadingBool:'SET_LOADING_BOOL'
            }),
            clickBtn(){
                this.setLoadingBool(true)
            }
        }
    }
</script>
<style>
    .index-db {
        /* 使用marign会有滚动条的出现 使用padding不会出现滚动条 */
        padding-top: 40px;
        padding-bottom: 40px;
    }
</style>