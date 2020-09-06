<template>
    <div>
        <van-button type="info" @click="back">回退</van-button>
        <hr>
        <input type="text" v-model="clothNumber">
        <van-button type="info" @click="add('cloth')">添加衣服</van-button>
        <van-button type="info" @click="de('cloth')">减少衣服</van-button>
        <hr>
        <input type="text" v-model="shoeNumber">
        <van-button type="info" @click="add('shoe')">添加鞋子</van-button>
        <van-button type="info" @click="de('shoe')">减少鞋子</van-button>
    </div>
</template>
<script>
import { mapMutations } from 'vuex'
export default {
    data() {
        return {
            // shopNumber:0
        }
    },
    methods: {
        ...mapMutations({
            addcloth:'addcloth',
            addshoe:'addshoe'
        }),
        back(){
            this.my_go(-1)
        },
        add(val){
            if(val === 'cloth'){
                this.clothNumber ++ 
            } else {
                this.shoeNumber ++
            }
        },
        de(val){
            if(val === 'cloth'){
                this.clothNumber -- 
            } else {
                this.shoeNumber --
            }
        }
    },
    computed:{
        clothNumber:{
            get(){
                return this.$store.state.CarData.sum.clothNumber || 0
            },
            set(val){
                this.addcloth(val)
            }
        },
        shoeNumber:{
            get(){
                return this.$store.state.CarData.sum.shoeNumber || 0
            },
            set(val){
                this.addshoe(val)
            }
        }
    },
    mounted() {
        console.log('add---',this.add)
        console.log('decrece---',this.decrece)
    }
}
</script>
