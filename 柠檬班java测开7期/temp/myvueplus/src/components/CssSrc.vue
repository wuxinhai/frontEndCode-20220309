<template>
    <div>
        <h1>--------【CSS绑定和Style绑定】--------</h1>
        <h3>--------CSS绑定--------</h3>
        <div class="c1" :class="{c2:c2Enable,c3:c3Enable}">
            【对象语法(1)】，注意与普通css属性是叠加效果
        </div>
        <div :class="calCss">【对象语法(2)】，使用计算属性</div>
        <div :class="[class4,class5]">【数组语法】</div>
        <h3>--------Style绑定--------</h3>
        <div :style="{color:c6,'font-size':c7 + 'px'}">【对象语法】</div>
        <div :style="[c8,c9]">【数组语法】</div>
    </div>
</template>
<script>
export default {
    name:'CssSrc',
    data(){
        return{
            c2Enable: true,
            c3Enable: false,
            class4: 'c4',
            class5: 'c5',
            c6: 'green',
            c7: 30,
            c8: {
                'background-color': 'lightblue'
            },
            c9: {
                color: 'yellow'
            }
        }
    },
    computed:{
        calCss(){
            return {
                c2: false,
                c3: true
            }
        }
    },
    methods:{}
}
</script>
<style scoped>
.c1{
    border-width: 2px;
    border-style: solid;
    border-color: yellow;
}
.c2{
    color: red;
}
.c3{
    font-size: 50px;
}
.c4{
    color: blue;
}
.c5{
    font-size: 30px;
}

</style>