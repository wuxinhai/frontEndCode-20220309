<!-- 组件的html部分 -->
<template>
    <h1 class="my-class">My Component</h1>
    <div v-html="content"></div>
    <div v-bind:id="id">{{user.name}}</div>
    <a :href="baiduHref">百度</a>
    <input type="button" value="点我" v-on:click="clickMe" /><br/>
    <input type="text" v-model="content"/>
    <div>-------计算属性-------</div>
    省:<input type="text" v-model="province"/><br/>
    市:<input type="text" v-model="city"/><br/>
    街道:<input type="text" v-model="detail"/><br/>
    详细地址(插值):<span>{{province}}{{city}}{{detail}}</span><br/>
    详细地址(计算属性):<span>{{calAddress}}</span>
</template>
<!-- Script部分 -->
<script>

export default{
    name:'MyComponent',
    data(){
        return{
            content:'<b>我是</b>初始值',
            content2:'我是另外的值',
            user:{
                name:'jack'
            },
            id:'divName',
            baiduHref:'http://www.baidu.com',
            province:'',
            city:'',
            detail:''
        }
    },
    //钩子
    created(){
        //会在此从后端加载数据，设置到data部分，最后渲染html(templage)
        // this.content = "从后端加载的值"
        this.user.name = 'lucy'
    },
    computed:{
        calAddress(){
            return this.province+this.city+this.detail;
        }
    },
    //在methods部分，可以定义多个函数
    methods:{
        //点击我的函数
        clickMe(){
            this.content = this.content+"<span style='color:red'>-------</span>"
        }
    }
}
</script>
<!-- CSS部分 -->
<style scoped>
.my-class{
    color: red;
}
</style>

