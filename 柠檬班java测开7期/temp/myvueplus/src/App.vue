<template>
  <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
  </nav>
  <router-view/>
  <!-- 3.使用 -->
  <my-component/>
  <ValueSrc/>
  <ComputtedSrc/>
  <CssSrc/>
  <Condition/>
  <ListSrc/>
  <Lifecycle/>
</template>

<script>
//1.引入
import MyComponent from '@/components/MyComponent.vue';
import ValueSrc from './components/ValueSrc.vue';
import ComputtedSrc from './components/ComputtedSrc.vue';
import CssSrc from './components/CssSrc.vue';
import Condition from './components/Condition.vue';
import ListSrc from './components/List.vue';
import Lifecycle from './components/Lifecycle.vue';
export default{
  name:'APP',
  components:{
    //2.声明
    MyComponent,
    ValueSrc,
    ComputtedSrc,
    CssSrc,
    Condition,
    ListSrc,
    Lifecycle
}
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
