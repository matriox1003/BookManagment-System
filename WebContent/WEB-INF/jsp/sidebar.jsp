<%@ page language="java" contentType="text/html; charset=UTF-8"
pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
 <!DOCTYPE html>
 <html lang="zh-CN">
 <body>
  <div class="col-md-3 left_col">
    <div class="left_col scroll-view">
      <div class="navbar nav_title" style="border: 0;">
        <a href="${pageContext.request.contextPath}/page/index" class="site_title"><i class="glyphicon glyphicon-tasks"></i> <span>图书管理系统</span></a>
      </div>
      <button class="btn btn-dark book-search" style="margin-left:3em;"><a href="${pageContext.request.contextPath}/index">图书搜索</a></button>
      <div class="clearfix"></div>

      <!-- menu profile quick info -->
      <div class="profile clearfix">
      <div class="profile_pic">
          <img src="${pageContext.request.contextPath}/static/images/picture.jpg" alt="用户名" class="img-circle profile_img">
        </div>
        <div class="profile_info" >
          <span>欢迎,</span>
          <h2><c:out value="${sessionScope.user.uName}"></c:out></h2>
        </div>
      </div>
      <!-- /menu profile quick info -->

      <br />

      <!-- sidebar menu -->
      <div id="sidebar-menu" class="main_menu_side hidden-print main_menu">
        <div class="menu_section">
          <h3>General</h3>
          <ul class="nav side-menu">
            <li  class="active"><a><i class="glyphicon glyphicon-home space"></i> 主页 </a></li>
            <li><a><i class="glyphicon glyphicon-info-sign space"></i> 个人信息 </a></li>
            <c:if test="${sessionScope.user.uType == 0}">
              <li><a><i class="glyphicon glyphicon-hdd space"></i> 图书管理 </a></li>
              <li><a><i class="glyphicon glyphicon-user space"></i> 用户管理 </a></li>
            </c:if>
          </ul>
        </div>
        <div class="menu_section">
        </div>

      </div>
      <!-- /sidebar menu -->

      <!-- /menu footer buttons -->
      <div class="sidebar-footer hidden-small">
        <a data-toggle="tooltip" data-placement="top" title="设置">
          <span class="glyphicon glyphicon-cog" aria-hidden="true"></span>
        </a>
        <a data-toggle="tooltip" data-placement="top" title="全屏">
          <span class="glyphicon glyphicon-fullscreen" aria-hidden="true"></span>
        </a>
        <a data-toggle="tooltip" data-placement="top" title="锁定">
          <span class="glyphicon glyphicon-eye-close" aria-hidden="true"></span>
        </a>
        <a data-toggle="tooltip" data-placement="top" title="退出" href="${pageContext.request.contextPath}/logout">
          <span class="glyphicon glyphicon-off" aria-hidden="true"></span>
        </a>
      </div>
      <!-- /menu footer buttons -->
    </div>
  </div>
 </body>
 </html>

 
 
