function login() {
    var name = document.getElementsByTagName('input')[0];
    var password = document.getElementsByTagName('input')[1];
    var warn1 = document.getElementsByClassName('s1')[0];
    var warn2 = document.getElementsByClassName('s2')[0];
    //console.log(password.value);
    if(window.localStorage){
        var storage = window.localStorage;

        if(name.value == '') warn1.innerText='请输入正确的用户名';
        if(password.value == '') warn2.innerText='请输入您的密码';
        if(storage.getItem(name.value) != password.value){
            warn2.innerText = '密码错误，请再次输入';
        }
        else{
            alert("欢迎您"+name.value+",即将回到首页");
            setTimeout(function () {
                window.location.href='index.html';
            },2000)
        }
    }
    console.log(storage);
}
function cancel() {
    window.history.back(-1);
}