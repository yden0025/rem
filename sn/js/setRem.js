// 动态获取当前屏幕宽度， 根据屏幕宽度实时设置1rem的大小

function setRem() {
    //获取屏幕的宽
    var w = window.innerWidth;  

    if (w > 750) {
        w = 750;
    }
    //设置rem的值
    document.documentElement.style.fontSize = w / 10 + 'px';   

}

setRem();

//当页面尺寸发生变化是，实时设置rem
window.onresize = setRem;