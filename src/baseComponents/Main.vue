<template>
    <div class="index-db">
        <van-pull-refresh v-model="isLoading" @refresh="onRefresh" success-text="刷新成功">
            <ul style="height: 100%;width: 100%;overflow-y: auto;">
                <li v-for="item in list" :key="item.name">{{item.name}}</li>
            </ul>
        </van-pull-refresh>
    </div>
</template>
<script>
    import { mapMutations } from 'vuex'
    import { Toast } from 'vant'
    export default {
        data(){
            return {
                list:[
                    {name:'1'},
                    {name:'2'},
                    {name:'3'},
                    {name:'4'},
                    {name:'5'},
                    {name:'6'},
                    {name:'7'},
                    {name:'8'},
                    {name:'9'},
                    {name:'10'},
                    {name:'11'},
                    {name:'12'},
                    {name:'13'},
                    {name:'14'}
                ],
                listRefresh:[
                    {name:'15'},
                    {name:'16'},
                    {name:'17'},
                    {name:'18'},
                    {name:'19'},
                    {name:'20'},
                    {name:'21'},
                    {name:'22'},
                    {name:'23'},
                    {name:'24'},
                    {name:'25'},
                    {name:'26'},
                    {name:'27'},
                    {name:'28'},
                    {name:'29'},
                    {name:'30'},
                    {name:'31'},
                    {name:'32'},
                    {name:'33'},
                    {name:'34'},
                ],
                isLoading: true
            }
        },
        methods: {
            ...mapMutations({
                setLoadingBool:'SET_LOADING_BOOL'
            }),
            clickBtn(){
                this.setLoadingBool(true)
            },
            onRefresh(){
                setTimeout(() => {
                    this.list = [...this.list,...this.listRefresh]
                    this.isLoading = false
                }, 1000)
            }
        }
    }
</script>
<style>
    .index-db {
        /* 使用marign会有滚动条的出现 使用padding不会出现滚动条 */
        padding-top: 40px;
        padding-bottom: 50px;
        height: 100%;
    }
    .index-db .van-pull-refresh{
        width: 100%;
        height: 100%;
    }
</style>