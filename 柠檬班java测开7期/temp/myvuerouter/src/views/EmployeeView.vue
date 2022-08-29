<template>
    <h1>员工信息</h1>
    <form action="api/employee/save" method="post">
        <table>
            <caption><b>员工等级表</b></caption>
            <tr>
                <td>姓名</td>
                <td>
                    <input type="text" id="txtName" name="name" v-model="employee.name" placeholder="请输入姓名"/>
                </td>
            </tr>
            <tr>
                <td>年龄</td>
                <td>
                    <input type="number" id="txtAge" name="age" v-model="employee.age" min="0"/>
                </td>
            </tr>
            <tr>
                <td>性别</td>
                <td>
                    <input type="radio" name="sex" id="rdoMale" value="male" v-model="employee.sex" /><label for="rdoMale">男</label>
                    <input type="radio" name="sex" id="rdoFeMale" value="female" v-model="employee.sex" /><label for="rdoFeMale">女</label>
                </td>
            </tr>
            <tr>
                <td>业余爱好</td>
                <td>
                    <input type="checkbox" name="hobby" value="read" id="chkRead" v-model="employee.hobby"><label for="rdoMale">读书</label>
                    <input type="checkbox" name="hobby" value="internet" id="chkInternet" v-model="employee.hobby"><label for="chkInternet">上网</label>
                    <input type="checkbox" name="hobby" value="movie" id="chkMovie" v-model="employee.hobby"><label for="chkMovie">看电影</label>
                    <input type="checkbox" name="hobby" value="other" id="chkOther" v-model="employee.hobby"><label for="chkOther">其他</label>
                </td>
            </tr>
            <tr>
                <td>所在部门</td>
                <td>
                    <select name="depName" id="depTxt" v-model="employee.dept">
                        <option value="js">技术部</option>
                        <option value="cw">财务部</option>
                        <option value="rs">人事部</option>
                        <option value="qt">其它</option>
                    </select>
                </td>
            </tr>
            <tr>
                <td>自我评价</td>
                <td>
                    <textarea name="desc" v-model="employee.desc" id="txtDesc" cols="30" rows="10" placeholder="请输入自我评价,如：我是一个乐观、开朗的人，也是一个脱离低级趣味的人。"></textarea>
                </td>
            </tr>
            <tr>
                <td colspan="2" align="center">
                    <input type="submit" name="sub" id="subTxt" value="提交"/>
                    <input type="reset" name="res" id="resTxt" value="重置"/>
                    <input type="button" name="but" id="butTxt" value="普通按钮" @click="save" />
                </td>
            </tr>
        </table>
    </form>
</template>
<script>
import { create } from 'domain';

export default {
    name: 'EmployeeView',
    data(){
        return{
            //定义了对象，并设置了初值
            employee:{
            },
            //省
            provinces:[{
                provincesId:1,
                provinceName:'湖南省'
            },{
                provincesId:2,
                provinceName:'广东省'
            }
        ]
        }
    },
    created(){
        //初始时加载数据，一般从后端使用axios
        this.employee = {
            name:'张三',
            age:24,
            sex:'female',
            hobby:['read','movie'],
            dept:'js',
            desc:'我的是一个特别的人'
        }
    },
    methods:{
        //保存
        save(){
            //直接就能将双向绑定的employee保存到后端
            alert(JSON.stringify(this.employee))
        }
    }
}
</script>