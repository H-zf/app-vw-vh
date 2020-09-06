<template>
    <div class="index-footer">
        <van-tabbar v-model="active" @change="toggleView">
            <van-tabbar-item icon="home-o">首页</van-tabbar-item>
            <van-tabbar-item icon="search" dot>详情</van-tabbar-item>
            <van-tabbar-item icon="friends-o" :badge="sumqutity">购物车</van-tabbar-item>
            <van-tabbar-item icon="setting-o" badge="20">个人</van-tabbar-item>
        </van-tabbar>
    </div>
</template>

<script>
import { mapState, mapGetters} from 'vuex'
export default {
    data(){
        return {
            active:0,
            toggleRoute:{
                0:this.indexToggle,
                1:this.detailToggle,
                2:this.carToggle,
                3:this.personalToggle
            }
        }
    },
    computed:{
        ...mapState({
            carqutity:(state) => state.CarData.quetity
        }),
        ...mapGetters({
            sumqutity:'sumqutity'
        })
    },
    methods: {
        toggleView(active){
            console.log(this.toggleRoute)
            this.toggleRoute[active]()
        },
        toggle(name,params){
            this.$router.push({name,params})
        },
        indexToggle(){
            this.toggle('index',{})
        },
        detailToggle(){
            this.toggle('detail',{})
        },
        carToggle(){
            this.toggle('car',{})
        },
        personalToggle(){
            this.toggle('personal',{})
        }
    }
}
</script>

<style>
    .index-footer {
        height: 50px;
        line-height: 50px;
        background-color: red;
        position: fixed;
        left: 0;
        bottom: 0;
        right: 0;
    }
</style>