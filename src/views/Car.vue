<template>
    <div>
        <van-button type="info" @click="back">回退</van-button>
    </div>
</template>
<script>
export default {
    data() {
        return {
            
        }
    },
    methods: {
        back(){
            this.my_go(-1)
        }
    },
    mounted() {
    
    }
}
</script>
