<template>
    <h1>------------------事件-------------------</h1>
    <h2>-----------click直接写js脚本.累加-----------</h2>
    <span>{{count}}</span>
    <input type="button" value="+" @click="count++"/>
    <input type="button" value="-" @click="count--"/>
    <h2>-----------click调用methods部分的函数.算术运算-----------</h2>
    操作数1：<input type="text" v-model="op1"><br/>
    操作数2：<input type="text" v-model="op2"><br/>
    结果：<span>{{opResult}}</span><br/>
    <input type="button" value="+" @click="calculate($event)">
    <input type="button" value="-" @click="calculate($event)">
    <input type="button" value="*" @click="calculate($event)">
    <input type="button" value="/" @click="calculate($event)">
</template>
<script>
export default {
    name: 'EventView',
    data(){
        return{
            count:0,
            op1:0,
            op2:0,
            opResult:0
        }
    },
    methods:{
        calculate(event){
            let operate = event.srcElement.value
            let express = parseInt(this.op1) + operate + parseInt(this.op2)
            this.opResult = eval(express)
        }
    }
}
</script>