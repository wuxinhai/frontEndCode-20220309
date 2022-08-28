<template>
    <div>
        <h1>---【条件渲染】---</h1>
        <h3>--------v-if--------</h3>
        条件：type==
        <select v-model="type">
            <option value="A">A</option>
            <option value="B">B</option>
            <option value="C">C</option>
            <option value="D">D</option>
            <option value="E">E</option>
            <option value="F">F</option>
        </select>
        <br/>
        选中的值是：<span v-if="type=='A'">
            A
        </span>
        <span v-else-if="type=='B'">
            B
        </span>
        <span v-else-if="type=='C'">
            C
        </span>
        <span v-else>
            其他值
        </span>
        <h3>--------v-show--------</h3>
        <div v-show="isShow">我是通过v-show来切换是否显示</div>
        <input type="button" value="显示/隐藏" @click="toggleShow"/>
        <h3>--------v-if与v-show差异，通过f12查看元素--------</h3>
        <div>v-if开始</div>
        <div v-if="false">v-if</div>
        <div>v-if结束</div>
        <div>v-show开始</div>
        <div v-show="false">v-show</div>
        <div>v-show结束</div>
    </div>
</template>
<script>
export default {
    name: 'onditionFun',
    data(){
        return{
            type: 'B',
            isShow: true
        }
    },
    watch:{
        isShow(newValue,oldValue){
            console.log(newValue)
            console.log(oldValue)
        }
    },
    methods:{
        toggleShow: function(){
            this.isShow = !this.isShow
        }
    }
}
</script>