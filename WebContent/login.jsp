<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
    <!-- Meta, title, CSS, favicons, etc. -->
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <title>图书管理系统</title>

    <!-- Bootstrap -->
    <link href="${pageContext.request.contextPath}/static/css/bootstrap/bootstrap.min.css" rel="stylesheet">
    <!-- Font Awesome -->
    <link hre="${pageContext.request.contextPath}/static/css/font-awesome/font-awesome.min.css">
    <!-- NProgress -->
    <link href="${pageContext.request.contextPath}/static/css/nprogress/nprogress.css" rel="stylesheet">
    <!-- Animate.css -->
    <link href="${pageContext.request.contextPath}/static/css/animate/animate.min.css" rel="stylesheet">

    <!-- Custom Theme Style -->
    <link href="${pageContext.request.contextPath}/static/css/build/custom.min.css" rel="stylesheet">

    <!-- 我的 -->

    <link rel="icon" href="${pageContext.request.contextPath}/static/images/favicon.ico"   type="image/x-icon" />
  </head>

  <body class="login">
    <div>
      <a class="hiddenanchor" id="signup"></a>
      <a class="hiddenanchor" id="signin"></a>

      <div class="login_wrapper">
        <div class="animate form login_form">
          <section class="login_content">
            <form>
              <h1>登&nbsp;&nbsp;&nbsp;录</h1>
              <div>
                <input type="text" class="form-control" data-toggle="tooltip" data-placement="right" title="用户名有误" name="username" placeholder="用户名" required="true" />
              </div>
              <div>
                <input type="password" class="form-control" data-toggle="tooltip" data-placement="right" title="密码有误" name="password" placeholder="密码" required="true" />
              </div>
              <div>
                <a class="btn btn-default submit" type="submit">登&nbsp;&nbsp;&nbsp;录</a>
                <a class="reset_pass" href="#"></a>
              </div>

              <div class="clearfix"></div>

              <div class="separator">
                <p class="change_link">第一次登录 ？
                  <a href="#signup" class="to_register"> 注册 </a>
                </p>

                <div class="clearfix"></div>
                <br />

                <div>
                  <h1><i class="glyphicon glyphicon-tasks space"></i> 图书管理系统</h1>
                  <p>Copyright &copy;  2021 All rights reserved</p>
                </div>
              </div>
            </form>
          </section>
        </div>

        <div id="register" class="animate form registration_form">
          <section class="login_content">
            <form>
              <h1>创建账户</h1>
              <div>
                <input type="text" maxlength="20" class="form-control" data-toggle="tooltip" data-placement="right" title="用户名不合法" id="username" name="re-username" placeholder="用户名：十个汉字或20个字符以内" required="required" />
              </div>
              <div>
                <input type="password" maxlength="20" class="form-control" data-toggle="tooltip" data-placement="right" title="密码不合法" id="password" name="re-password" placeholder="密码：十个汉字或20个字符以内" required="required" />
              </div>
              <div>
                <input type="text" maxlength="60" class="form-control" data-toggle="tooltip" data-placement="right" title="所在学校或单位不合法" id="workplace" name="re-workplace" placeholder="所在学校或单位：30个汉字或60个字符以内" />
              </div>
              <div>
                <input type="text" maxlength="60" class="form-control" data-toggle="tooltip" data-placement="right" title="家庭住址不合法" id="address" name="re-address" placeholder="家庭住址：30个汉字或60个字符以内"  />
              </div>
              <div>
                <input type="tel" class="form-control" data-toggle="tooltip" data-placement="right" title="联系方式不合法" name="re-telephone" id="telephone" placeholder="联系方式：11位手机号" required="required" />
              </div>
              <div>
                <a class="btn btn-default submit" type="submit">注&nbsp;&nbsp;&nbsp;册</a>
              </div>

              <div class="clearfix"></div>

              <div class="separator">
                <p class="change_link">已有账户 ?
                  <a href="#signin" class="to_login">登录 </a>
                </p>

                <div class="clearfix"></div>
                <br />

                <div>
                  <h1><i class="glyphicon glyphicon-tasks space"></i> 图书管理系统</h1>
                  <p>Copyright &copy;  2021 All rights reserved</p>
                </div>
              </div>
            </form>
          </section>
        </div>
      </div>
    </div>

    <div class="modal fade" id="myModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
          <div class="modal-dialog" role="document">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title" id="myModalLabel">提示</h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div class="modal-body">
                ...
              </div>
              <div class="modal-footer">
                <button type="button" class="btn btn-primary" data-dismiss="modal">去登陆</button>
              </div>
            </div>
          </div>
        </div>

    <script src="${pageContext.request.contextPath}/static/js/jQuery/jquery.min.js"></script>
    <script src="${pageContext.request.contextPath}/static/js/bootsrap/bootstrap.bundle.min.js"></script>
    <script type="text/javascript" src="${pageContext.request.contextPath}/static/js/mine/common.js"></script>
    <script type="text/javascript" src="${pageContext.request.contextPath}/static/js/mine/login.js"></script>
  </body>
</html>
