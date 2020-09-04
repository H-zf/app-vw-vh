<template>
    <div>
        <van-button type="info" @click="back">回退</van-button>
    </div>
</template>

<script>
export default {
    methods: {
        back(){
            this.my_go(-1)
        }
    }
}
</script>