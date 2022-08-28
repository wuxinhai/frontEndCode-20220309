<template>
    <div id="lifecycle">
        <h1>---【生命周期】---</h1>
        姓名<input type="text" ref="txtName"/>
    </div>
</template>
<script>
export default {
    name: 'LifecyCle',
    data(){
        return{

        }
    },
    created(){
        console.log("created()方法被调用。")
        //此处打开注释，将会报错，因为created钩子方法被调用时，dom还未渲染，名称为txtName的元素不存在
        //this.$refs.txtName.value = '赵四'
    },
    mounted(){
        console.log("mounted()方法被调用。")
        this.$refs.txtName.value = '尼古拉斯.' + this.$refs.txtName.value
    },
    methods:{}
};
</script>