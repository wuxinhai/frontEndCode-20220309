<template>
  <div class="hello">
    <h1>---【插值及常用语法】---</h1>
    <h3>通过父组件使用传递来的数据：{{ msg }}</h3>
    <h3 id="h1Title">{{ title }}</h3>
    <input type="text" v-model="content" style="width:100%;" />
    <div>{{ content }}</div>
    <div v-html="content"></div>
    <input type="button" v-bind:value="title" />
    <div>{{ age+1 }}</div>
    <a :href="url">跳转</a><br />
    <input type= "button" v-on:click="login" value="登录" />
  </div>
</template>

<script>
export default {
  name: 'Value',
  props: {
    msg: String
  },
  data() {
    return {
      title: "我的标题",
      titleId:  "h1Title" ,
      content: "大家好，我是<b style='color:red'>张三</b>。",
      age: 18,
      url: "http://lemon.ke.qq.com" 
    }
  },
  created(){
  },
  methods:{
    login(){
      
      alert("登录方法。")
    }
  }
}
</script>

<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
