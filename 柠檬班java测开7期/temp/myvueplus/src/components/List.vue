<template>
    <div>
        <h1>---【列表渲染】---</h1>
        <h3>--------遍历JSON数组（常用）--------</h3>
        <ul id="ulAnimal">
            <li v-for="(animal,index) in animals" :key="index">
                {{index}} - {{animal.type}} - {{animal.name}}
            </li>
        </ul>
        <h3>--------遍历对象--------</h3>
        <ul id="ulAnimal">
            <li v-for="(value,name,index) in person" :key="name">
                {{index}} - {{name}} - {{value}}
            </li>
        </ul>
        <h3>--------数组操作（常用）--------</h3>
        <ul id="ulAnimal2">
            <li v-for="(animal,index) in animals" :key="index">
                {{index}} - {{animal.type}} - {{animal.name}}
            </li>
        </ul>
        动物类型：<input type="text" v-model="animal.type" /><br/>
        动物名称：<input type="text" v-model="animal.name" /><br/>
        <input type="button" value="添加" @click="addAnimal"/>
        &nbsp;<input type="button" value="过滤,只保留dog" @click="filterAniaml"/>
        &nbsp;<input type="button" value="查看当前的动物分类" @click="mapAnimal"/>
    </div>
</template>
<script>
export default {
    name:'listSrc',
    data(){
        return{
            //动物数组
            animals:[
                { type: 'dog', name: '旺财' },
                { type: 'cat', name: '小花' },
                { type: 'pig', name: '小肥' }
            ],
            //人员对象
            person:{
                name: '张三',
                sex: '男',
                age: 12
            },
            //当前动物，用于表单双向绑定
            animal:{
                type:'',
                name:''
            }
        }
    },
    methods:{
        //添加动物
        addAnimal(){
            //添加当前动物到动物数组,空字符串、undefined、null、0值都为false，否则为true
            if(this.animal.type && this.animal.name){
                //深拷贝，不然清空会导致数据丢失
                let animal = JSON.parse(JSON.stringify(this.animal))
                this.animals.push(animal)
                //清空添加成功的当前动物信息
                this.animal.type = ''
                this.animal.name = ''
            }
        },
        //过滤动物
        filterAniaml:function(){
            //匿名函数语法
            // let animals = this.animals.filter(function(animal){
            //     return animal.type === 'dog'
            // })
            //箭头语法，关注ES6
            let animals = this.animal.filter(s=>{
                return s.type === 'dog'
            })
            this.animal = animals
        },
        //获取指定列的动物
        mapAnimal: function(){
            let animalTypes = this.animals.map(s=>{
                return s.type
            })
            //alert("当前所添加的动物种类有：" + animalTypes)
            alert("当前所添加的动物种类有：" + Array.from(new Set(animalTypes)));//去重
        }
    }
}
</script>