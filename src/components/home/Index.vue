<template>
    <div>
        <p>{{ msg }}</p>
        <p>
            <a href="javascript: void(0);" @click="del(index)" v-for="(l, index) in list" :key="index">{{ l }}</a>
        </p>
        <el-calendar v-model="value"></el-calendar>
    </div>
</template>

<script>

    import Vue from 'vue';

    export default {
        name: "Index",
        props: {},
        data() {

            let list = [1, 2, 3, 4, 5, 6];

            return {
                list,
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
