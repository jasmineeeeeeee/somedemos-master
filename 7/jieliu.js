function JL(fun,delay) {
    var pre = Date.now();
    return function (args) {/*匿名函数的this ——全局*/
        var that = this;
        var now = Date.now();
        console.log(this);
        if(now - pre >= delay){
            fun.apply(fun,args);
            pre = Date.now();
            /*console.log(this);       this 也指向全局*/
        }
    }
}
function handle() {
    alert('节流函数！');
}
window.addEventListener('scroll',JL(handle,3000));