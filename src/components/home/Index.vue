<template xmlns:v-slot="http://www.w3.org/1999/XSL/Transform">
    <div>
        <p>{{ msg }}</p>
        <el-tabs type="border-card">
            <el-tab-pane>
                <template slot="label">
                    <i class="el-icon-date"></i>
                    <span>我的行程</span>
                </template>
                <span>我的行程</span>
            </el-tab-pane>
            <el-tab-pane label="消息中心">消息中心</el-tab-pane>
            <el-tab-pane label="角色管理">角色管理</el-tab-pane>
            <el-tab-pane label="定时任务补偿">定时任务补偿</el-tab-pane>
        </el-tabs>
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
