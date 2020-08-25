<template>
    <slot-design>
        <template v-slot:header="scope">
            <h-header></h-header>
        </template>
        <template v-slot:main="scope">
            <h-main></h-main>
        </template>
        <template v-slot:footer="scope">
            <h-footer></h-footer>
        </template>
    </slot-design>
</template>

<script>
    import SlotDesign from '@/baseComponents/SlotDesign.vue'
    import HHeader from '@/baseComponents/Header.vue'
    import HMain from '@/baseComponents/Main.vue'
    import HFooter from '@/baseComponents/Footer.vue'
    export default {
        data(){
            return {

            }
        },
        methods: {

        },
        components: {
            SlotDesign,
            HHeader,
            HMain,
            HFooter
        }
    }
</script>