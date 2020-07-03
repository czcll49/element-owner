<template>
    <div>
        <p>{{ msg }}</p>
        <el-calendar v-model="value"></el-calendar>
    </div>
</template>

<script>

    import Vue from 'vue';

    export default {
        name: "Index",
        props: {},
        data() {

            return {
                msg: '信息',
                value: new Date()
            }
        },
        mounted() {
            this.initData();
        },
        methods: {
            initData() {
                console.log('初始化方法');
            },
            del(index) {
                console.log(Vue.version);
                Vue.delete(this.list, index);
            }
        },
        components: {}
    }
</script>

<style scoped>

</style>
