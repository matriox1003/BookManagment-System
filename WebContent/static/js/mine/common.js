function checkUser(username, password) {
    var username_reg = new RegExp("^([a-zA-Z0-9_]{5,16}|[\u4e00-\u9fa5]{2,4})$");
    var password_regx = new RegExp('^[0-9a-zA-Z_]{5,18}$');

   if(username === '' || !username_reg.test(username)) {
       return false;
   }  

   if (password === '' || !password_regx.test(password)) {
       return false;
   }
    
    return true;
}

function userFormCheck(user) {

    if (checkUser(user.uName, user.uPassword) === false) {
         $(function () {
              $("#username").attr("title", "用户名不合法").tooltip("show");
              $("#password").attr("title", "密码不合法").tooltip("show");
         });

         setTimeout(function() {
              $("#username").tooltip("dispose");
              $("#password").tooltip("dispose");
         }, 2000);
         return false;
    }

    var tel_ragx = /^1(3|4|5|6|7|8|9)\d{9}$/;

    if (user.uTel === '' || !(tel_ragx.test(user.uTel))) {
         // alert(telephone);
         $("#telephone").tooltip('show');
         setTimeout(function () {
              $("#telephone").tooltip('dispose');
         }, (2000));

         return false;
    }

    return true;
}

function requestFullScreen(element) {
     // 判断各种浏览器，找到正确的方法
     var requestMethod = element.requestFullScreen || //W3C
     element.webkitRequestFullScreen ||    //Chrome等
     element.mozRequestFullScreen || //FireFox
     element.msRequestFullScreen; //IE11
     if (requestMethod) {
         requestMethod.call(element);
     }
     else if (typeof window.ActiveXObject !== "undefined") {//for Internet Explorer
         var wscript = new ActiveXObject("WScript.Shell");
         if (wscript !== null) {
             wscript.SendKeys("{F11}");
         }
     }
 }
 
 //退出全屏 判断浏览器种类
 function exitFull() {
     // 判断各种浏览器，找到正确的方法
     var exitMethod = document.exitFullscreen || //W3C
     document.mozCancelFullScreen ||    //Chrome等
     document.webkitExitFullscreen || //FireFox
     document.webkitExitFullscreen; //IE11
     if (exitMethod) {
         exitMethod.call(document);
     }
     else if (typeof window.ActiveXObject !== "undefined") {//for Internet Explorer
         var wscript = new ActiveXObject("WScript.Shell");
         if (wscript !== null) {
             wscript.SendKeys("{F11}");
         }
     }
 }

 // 判断是否全屏
function isFullscreenEnabled(){
     return document.fullscreenEnabled       ||
               document.mozFullScreenEnabled    ||
               document.webkitFullscreenEnabled ||
               document.msFullscreenEnabled || false;
}