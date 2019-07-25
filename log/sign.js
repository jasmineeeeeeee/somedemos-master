function sign() {
    var name = document.getElementsByClassName('login-input1')[0];
    var password = document.getElementsByClassName('login-input2')[0];
    var warn1 = document.getElementsByClassName('s1')[0];
    var warn2 = document.getElementsByClassName('s2')[0];
    console.log(name.value);
    if(window.localStorage){
        var storage = window.localStorage;
        if(name.value == '')warn1.innerText = '请输入正确的用户名';
        if(password.value=='')warn2.innerText = '请输入您的密码';
        else if(storage.getItem(name.value)){
            warn1.innerText = '该用户名已被注册！';
        }
        storage.setItem(name.value,password.value);
        alert("注册成功，现在去登录");
        setTimeout(function () {
            window.location.href='login.html';
        },2000)

    }
}
function cancel() {
    window.history.back(-1);
}