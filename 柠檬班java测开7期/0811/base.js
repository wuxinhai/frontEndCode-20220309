var color = ["red","green","blue"];
var index = 0;
var interval;
//开始随机颜色
function startRandomColor(){
    interval = setInterval(function(){
        document.getElementById("dvContent").style.backgroundColor = color[(index++)%3];
    },1000);
}
//停止随机颜色
function stopRandomColor(){
    clearInterval(interval);
}