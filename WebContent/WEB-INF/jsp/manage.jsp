<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
    <%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<!DOCTYPE html>
<html lang="zh-CN">
<head>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
    <!-- Meta, title, CSS, favicons, etc. -->
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>图书管理系统</title>
    <link rel="icon" href="${pageContext.request.contextPath}/static/images/favicon.ico"   type="image/x-icon" />

     <!-- Bootstrap -->
     <link href="${pageContext.request.contextPath}/static/css/bootstrap/bootstrap.min.css" rel="stylesheet">
     <!-- Font Awesome -->
     <link hre="${pageContext.request.contextPath}/static/css/font-awesome/font-awesome.min.css">
     <!-- NProgress -->
     <link href="${pageContext.request.contextPath}/static/css/nprogress/nprogress.css" rel="stylesheet">
     <!-- iCheck -->
     <link href="${pageContext.request.contextPath}/static/css/iCheck/green.css" rel="stylesheet">
     <link rel="stylesheet" href="${pageContext.request.contextPath}/static/css/build/custom.min.css">

     <!-- 我的主页 -->
     <link rel="stylesheet" href="${pageContext.request.contextPath}/static/css/mine/manage.css">
</head>
<body class="nav-md">
    <div class="container body">
      <div class="main_container">
        
        <!-- menu and sidebar -->
        <%@ include file = "sidebar.jsp"%>
       	<%@ include file = "header.jsp" %>
        <!-- page content -->
        <div class="right_col" role="main">
          <h2>欢迎来到图书管理系统</h2>
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
                <button type="button" class="btn btn-secondary" data-dismiss="modal">关闭</button>
              </div>
            </div>
          </div>
        </div>
        <!-- /page content -->
        
        <!-- footer -->
		<jsp:include page="footer.jsp"></jsp:include>
      </div>
    </div>

    <script src="${pageContext.request.contextPath}/static/js/jQuery/jquery.min.js"></script>
    <script src="${pageContext.request.contextPath}/static/js/bootsrap/bootstrap.bundle.min.js"></script>
    <script src="${pageContext.request.contextPath}/static/js/fastclick/fastclick.js"></script>
    <script src="${pageContext.request.contextPath}/static/js/nprogress/nprogress.js"></script>
    <script src="${pageContext.request.contextPath}/static/js/Chart/Chart.min.js"></script>
    <script src="${pageContext.request.contextPath}/static/js/gauge/gauge.min.js"></script>
    <script src="${pageContext.request.contextPath}/static/js/iCheck/icheck.min.js"></script>
    <script src="${pageContext.request.contextPath}/static/js/custom/custom.min.js"></script>
	<script src="${pageContext.request.contextPath}/static/js/mine/common.js"></script>
	<script src="${pageContext.request.contextPath}/static/js/mine/manage.js"></script>
  </body>
</html>
