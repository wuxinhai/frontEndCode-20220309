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
    详细地址(计算属性):<span>{{calAddress}}</span><br/>
    详细地址(监听属性):<span>{{addRess}}</span><br/>
    <div>------- v-if 条件渲染-------</div>
    <select v-model="condition">
        <option value="a">A</option>
        <option value="b">B</option>
        <option value="c">C</option>
        <option value="d">D</option>
        <option value="e">E</option>
    </select>
    <div v-if="condition == 'a'">A:代表奔放</div>
    <div v-else-if="condition == 'b'">B:代表奔放</div>
    <div v-else-if="condition == 'c'">C:代表鱼鱼</div>
    <div v-else>X:代表其它</div>
    <div>------- v-for-------</div>
    <div>------- 普通字符串数组-------</div>
    <div v-for="(item,index) in userName" :key="item">
        {{index}}--{{item}}
    </div>
    <div>------- 普通对象数组-------</div>
        <div v-for="(item,index) in users" :key="item.username">
        {{index}}--{{item.name}}--{{JSON.stringify(item)}}
    </div>
        <div>------- 普通对象-------</div>
        <div v-for="(item,index) in myUser" :key="index">
        {{index}}--{{item}}
    </div>
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
            detail:'',
            addRess:'',
            condition:'c',
            userName:['zs','ls','ww'],
            users:[
                {username:'zs',name:'张三',age:22},
                {username:'ls',name:'李四',age:25},
                {username:'ww',name:'王五',age:26}
            ],
            myUser:{username:'zl',name:'赵六',age:27}
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
    watch:{
        province(){
            this.addRess = this.province+this.city+this.detail;
        },
        city(){
            this.addRess = this.province+this.city+this.detail;
        },
        detail(){
            this.addRess = this.province+this.city+this.detail;
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

