function fd(fun,delay) {
    return function (args) {
        clearTimeout(fun.id);
        var that = this;
        fun.id = setTimeout(function () {
            fun.call(that,args);
        },delay)
    }
}
function handle() {
    console.log("hello");
}
window.addEventListener('click', fd(handle, 3000));

