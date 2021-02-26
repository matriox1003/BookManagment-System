<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@ taglib uri="http://java.sun.com/jsp/jstl/fmt" prefix="fmt"%>
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
     <link rel="stylesheet" href="${pageContext.request.contextPath}/static/css/mine/index.css">
</head>
<body class="nav-md">
	<c:set var="pageCount" value="5"></c:set>
    <div class="container body">
      <div class="main_container">

      <div class="top-container">
        <div class="top-left">
            <span class="glyphicon glyphicon-tasks" ></span>
            <span>图书管理系统</span>
        </div>
        <div class="top-right">
          <span><a href="${pageContext.request.contextPath}/manage">后台管理</a></span>
          <span><a href="${pageContext.request.contextPath}/logout">退出登录</a></span>
        </div>
    </div>

      <!-- page content -->
      <div class="right_col" role="main">
        <div class="right-middle col-md-8 col-sm-4">
        	<form action="/BookManage/bookSearch" method="get">
        		<input type="hidden" name="start" value="0">
        		<input type="hidden" name="offset" value="${pageCount}">
        		<div class="form-check-inline">
        			 <div class="form-group">
					    <select class="form-control" name="type" id="form-select">
					      <c:choose>
					      	<c:when test="${type=='全部'}">
					      		<option selected="selected" value="all">全部</option>
					      	</c:when>
					      	<c:otherwise><option value="all">全部</option></c:otherwise>
					      </c:choose>
					       <c:choose>
					      	<c:when test="${type=='图书类型'}">
					      		<option selected="selected" value="booktype">图书类型</option>
					      	</c:when>
					      	<c:otherwise><option value="booktype">图书类型</option></c:otherwise>
					      </c:choose>
					       <c:choose>
					      	<c:when test="${type=='图书名称'}">
					      		<option selected="selected" value="bookname">图书名称</option>
					      	</c:when>
					      	<c:otherwise><option value="bookname">图书名称</option></c:otherwise>
					      </c:choose>
					       <c:choose>
					      	<c:when test="${type=='作者'}">
					      		<option selected="selected" value="writer">作者</option>
					      	</c:when>
					      	<c:otherwise><option value="writer">作者</option></c:otherwise>
					      </c:choose>
					       <c:choose>
					      	<c:when test="${type=='出版社'}">
					      		<option selected="selected" value="public">出版社</option>
					      	</c:when>
					      	<c:otherwise><option value="public">出版社</option></c:otherwise>
					      </c:choose>
    					</select>
  					</div>
  					<div class="input-group">
						<input type="text" class="form-control" name="keyword" placeholder="输入图书名称">
						<span class="input-group-btn">
							<button type="submit" class="btn btn-secondary">搜索</button>
						</span>
					</div>
        		</div>
        	</form>
        	<c:choose>
        		<c:when test="${ bookCount == 0 }">
        			<h2 style="text-align: center;">暂无信息</h2>
        		</c:when>
        		<c:otherwise>
        			<table class="table table-hover" my-data="book-table">
        				<thead>
        					<tr>
        						<th scope="col">图书编号</th>
        						<th scope="col">图书类型</th>
        						<th scope="col">图书名称</th>
        						<th scope="col">馆藏数量</th>
        						<th scope="col">作者</th>
        						<th scope="col">出版社</th>
        						<th scope="col">借阅状态</th>
        						<th scope="col">操作</th>
        					</tr>
        				</thead>
        				<tbody>
        					<c:forEach var="book" items="${bookList}">
        						<tr>
        							<td>${book.bId}</td>
        							<td>${book.bType}</td>
        							<td>${book.bName}</td>
        							<td>${book.bNumber}</td>
        							<td>${book.bWriter}</td>
        							<td>${book.bPublic}</td>
        							<td>${book.bState}</td>
        							<td>
        								<c:set var="isOut" value="0"></c:set>
        								<c:forEach var="bId" items="${bIdList}">
        									<c:if test="${book.bId == bId}">
        										<button class="btn btn-sm btn-success">还书</button>
        										<c:set var="isOut" value="${isOut = isOut + 1}"></c:set>
        									</c:if>
        								</c:forEach>
        								<c:if test="${isOut == '0'}">
        									<button class="btn btn-sm btn-primary">借阅</button>
        								</c:if>
        							</td>
        						</tr>
        					</c:forEach>
        				</tbody>
        			</table>
        			<nav aria-label="Page navigation example" my-data="book-nav">
		        		<ul class="pagination justify-content-center">
		        			<li class="page-item<c:if test="${currentPage==1}"> disabled</c:if>">
		        				<a href="/BookManage/bookSearch?type=${type}&keyword=${keyword}&start=${(currentPage - 2) *  pageCount}&offset=${pageCount}" class="page-link" tabindex="-1">Previous</a>
		        			</li>
		        			<fmt:parseNumber integerOnly="true" type="number" var="totalPage" value="${bookCount%pageCount==0?bookCount/pageCount:(bookCount-1)/pageCount+1}"></fmt:parseNumber>
		        			<c:if test="${totalPage > 0}">
		        				<c:forEach var="index" begin="1" end="${totalPage}">
		        					<fmt:parseNumber var="start" integerOnly="true" value="${(index-1) * pageCount}"></fmt:parseNumber>
		        					<li class="page-item<c:if test="${currentPage==index}"> active</c:if>"><a href="/BookManage/bookSearch?type=${type}&keyword=${keyword}&start=${start}&offset=${pageCount}" class="page-link">${index}</a></li> 				
		        				</c:forEach>
		        			</c:if>
		        			<li class="page-item<c:if test="${currentPage==totalPage || totalPage==0}"> disabled</c:if>"><a class="page-link" href="/BookManage/bookSearch?type=${type}&keyword=${keyword}&start=${currentPage * pageCount}&offset=${pageCount}">Next</a></li>
		        		</ul>
		        	</nav>
        		</c:otherwise>
        	</c:choose>
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
	<script src="${pageContext.request.contextPath}/static/js/mine/index.js"></script>
  </body>
</html>
