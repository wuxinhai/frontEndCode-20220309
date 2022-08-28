<template>
    <div>
        <h1>---【计算属性与监听属性】---</h1>
        <h3>地址收集</h3>
        省:<input type="text" placeholder="请输入省" v-model="province" /><br/>
        市:<input type="text" placeholder="请输入市" v-model="city" /><br/>
        具体地址：
        <input type="text" placeholder="请输入具体地址" v-model="detail" /><br/>
        详细地址（Computed计算属性）：<span>{{ calAddress }}</span>
        <br/>
        详细地址（Watch监听属性）：<span>{{ address }}</span>
    </div>
</template>
<script>
export default {
    name: "AddRess",
    data(){
        return{
            province: '',
            city: '',
            detail: '',
            address: ''
        }
    },
    created(){},
    //计算属性
    computed:{
        calAddress(){
            return this.province + this.city + this.detail
        }
    },
    //监听属性
    watch:{
        province:function(){
            this.address = this.province+this.city+this.detail
        },
        city:function(){
            this.address = this.province+this.city+this.detail
        },
        detail:function(){
            this.address = this.province+this.city+this.detail
        }
    },
    methods:{

    }
}
</script>