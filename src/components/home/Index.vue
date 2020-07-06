<template>
    <div>
        <p>{{ msg }}</p>
        <el-tabs type="border-card" v-model="tab" @tab-click="tabClick">
            <el-tab-pane name="bar">
                <template slot="label">
                    <i class="el-icon-date"></i>
                    <span>我的行程</span>
                </template>
                <div id="bar" :style="{width: '600px', height: '300px'}"></div>
            </el-tab-pane>
            <el-tab-pane name="line" label="消息中心">
                <div id="line" :style="{width: '600px', height: '300px'}"></div>
            </el-tab-pane>
            <el-tab-pane name="pie" label="角色管理">
                <div id="pie" :style="{width: '600px', height: '300px'}"></div>
            </el-tab-pane>
            <el-tab-pane name="gauge" label="定时任务补偿">
                <div id="gauge" :style="{width: '600px', height: '300px'}"></div>
            </el-tab-pane>
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
                tab: 'bar',
                msg: '信息',
                value: new Date()
            }
        },
        mounted() {
            this.initData();
        },
        methods: {
            initData() {
                this.drawLine();
                console.log('初始化方法');
            },
            del(index) {
                console.log(Vue.version);
                Vue.delete(this.list, index);
            },
            tabClick() {
                this.drawLine();
            },
            drawLine() {
                // 基于准备好的dom，初始化echarts实例
                let myChart = this.$echarts.init(document.getElementById(this.tab))
                // 绘制图表
                myChart.setOption({
                    title: { text: '在Vue中使用echarts' },
                    tooltip: {},
                    xAxis: {
                        data: ["衬衫","羊毛衫","雪纺衫","裤子","高跟鞋","袜子"]
                    },
                    yAxis: {},
                    series: [{
                        name: '销量',
                        type: this.tab,
                        data: [5, 20, 36, 10, 10, 20]
                    }]
                });
            }
        },
        components: {}
    }
</script>

<style scoped>

</style>
