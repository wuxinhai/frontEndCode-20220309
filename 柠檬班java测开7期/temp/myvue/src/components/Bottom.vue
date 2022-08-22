<template>
    <h1 class="my-bottom">版权所有&nbsp;{{ years }}</h1>
</template>
<script>
export default {
    name:'Bottom',
    data(){
        return{
            years:"2002-2020"
        }
    }
}
</script>

<style scoped>
.my-bottom{
    background-color: aqua;
}
</style>


