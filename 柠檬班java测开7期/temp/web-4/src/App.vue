<template>
  <div id="app">
    <value msg="我是父组件传递消息。"/>
    <computed />
    <css />
    <condition />
    <list />
    <lifecycle />
  </div>
</template>

<script>
import Value from './components/Value.vue'
import Computed from './components/Computed'
import Css from './components/Css'
import Condition from './components/Condition'
import List from './components/List'
import Lifecycle from './components/Lifecycle'

export default {
  name: 'App',
  components: {
    Value,
    Computed,
    Css,
    Condition,
    List,
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
  margin-top: 60px;
}
</style>
