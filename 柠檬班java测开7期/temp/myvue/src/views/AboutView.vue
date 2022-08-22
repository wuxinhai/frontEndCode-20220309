<template>
  <div class="about">
    <h1>This is an about page</h1>
    <Bottom/>
  </div>
</template>
//引入
import Bttom from '@/component/Bottom.vue'
<script>
import Bottom from '../components/Bottom.vue'
export default{
  name:'AboutView',
  //声明
  components:{
    Bottom
  },
  data(){
    return{

    }
  }
}
</script>
