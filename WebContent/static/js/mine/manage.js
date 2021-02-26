/**
 * 公共js 文件 用于控制菜单跳转
 */

var content = $(".right_col");
var sideMenuLi = $(".side-menu li");
var length = sideMenuLi.length;
var pageCount = 5;            // 每页的数量

var isFullScreen = false;


$(".sidebar-footer a:nth-child(2)").on("click", function () {  
     var de = document.documentElement;
     if (!isFullScreen) {
          isFullScreen = true;
          requestFullScreen(de);
          $(this).attr("data-original-title", "窗口");
     } else {
          isFullScreen = false;
          exitFull();
          $(this).attr("data-original-title", "全屏");
     }
     
});

// 给标签添加index
$.each(sideMenuLi, function (indexInArray, valueOfElement) { 
     this.index = indexInArray;
});

function addForm(className = '', buttonName = "添加", isUser = true) {  
     content.empty();
     var user_form = $('<form class="'+ className +'">\
     <div class="form-group row">\
       <label for="username" class="col-sm-2 col-form-label">用户名</label>\
       <div class="col-sm-6">\
         <input type="text" maxlength="20" class="form-control" data-toggle="tooltip" data-placement="right" title="用户名不合法" id="username" placeholder="用户名：5到16位字母数字下划线的组合或2到4位汉字">\
       </div>\
     </div>\
     <div class="form-group row">\
       <label for="password" class="col-sm-2 col-form-label">密码</label\>\
       <div class="col-sm-6">\
         <input type="password" maxlength="20" class="form-control" data-toggle="tooltip" data-placement="right" title="密码不合法" id="password" placeholder="密码：5到18位字母数字和下划线的组合">\
       </div>\
     </div>\
     <div class="form-group row">\
       <label for="workplace" class="col-sm-2 col-form-label">所在学校或单位</label\>\
       <div class="col-sm-6">\
         <input type="text" maxlength="60" class="form-control"  id="workplace" placeholder="所在学校或单位">\
       </div>\
     </div>\
     <div class="form-group row">\
     <label for="address" class="col-sm-2 col-form-label">家庭住址</label\>\
     <div class="col-sm-6">\
       <input type="address" maxlength="60" class="form-control"  id="address" placeholder="家庭住址">\
     </div>\
   </div>\
     <div class="form-group row">\
     <label for="telephone" class="col-sm-2 col-form-label">联系方式</label\>\
     <div class="col-sm-6">\
       <input type="tel" maxlength="11" class="form-control" data-toggle="tooltip" data-placement="right" title="联系方式不合法" id="telephone" placeholder="联系方式:11位手机号">\
     </div>\
   </div>\
     <div class="form-group row">\
       <div class="col-sm-6">\
         <button type="submit" href="javascript:void(0);" class="btn btn-secondary">'+ buttonName +'</button>\
       </div>\
     </div>\
   </form>');

     var book_form = $('<form class="'+ className +'">\
     <div class="form-group row">\
       <label for="booktype" class="col-sm-2 col-form-label">图书类型</label>\
       <div class="col-sm-6">\
         <input type="text" maxlength="20" value="计算机" class="form-control" data-toggle="tooltip" data-placement"right" title="图书类型不合法" id="booktype" placeholder="图书类型：十个汉字以内 或20个字符以内">\
       </div>\
     </div>\
     <div class="form-group row">\
       <label for="bookname" class="col-sm-2 col-form-label">图书名称</label\>\
       <div class="col-sm-6">\
         <input type="text" maxlength="60" class="form-control" data-toggle="tooltip" data-placement="right" title="图书名称不合法" id="bookname" placeholder="图书名称：30个汉字以内或60个字符以内">\
       </div>\
     </div>\
     <div class="form-group row">\
       <label for="booknum" class="col-sm-2 col-form-label">馆藏数量</label\>\
       <div class="col-sm-6">\
         <input type="text" maxlength="4" value="200" class="form-control" data-toggle="tooltip" data-placement="right" title="馆藏数量不合法" id="booknum" placeholder="馆藏数量: 4位数以内">\
       </div>\
     </div>\
     <div class="form-group row">\
     <label for="writer" class="col-sm-2 col-form-label">作者</label\>\
     <div class="col-sm-6">\
       <input type="text" maxlength="20" data-toggle="tooltip" data-placement="right" title="作者不合法" class="form-control"  id="writer" placeholder="作者：10个汉字以内或20个字符以内">\
     </div>\
   </div>\
     <div class="form-group row">\
     <label for="public" class="col-sm-2 col-form-label">出版社</label\>\
     <div class="col-sm-6">\
       <input type="text" maxlength="30" class="form-control" data-toggle="tooltip" data-placement="right" title="出版社不合法" id="public" placeholder="出版社：15个汉字以内">\
     </div>\
   </div>\
     <div class="form-group row">\
       <div class="col-sm-6">\
         <button type="submit" href="javascript:void(0);" class="btn btn-secondary">'+ buttonName +'</button>\
       </div>\
     </div>\
   </form>');
     if (isUser)    content.append(user_form);
     else           content.append(book_form);
}


// 处理用户管理界面添加按钮点击事件 进行界面渲染
content.on("click", ".add-user", function () {
     addForm("add-user-form");
});


// 处理图书管理界面添加按钮点击事件 进行界面渲染
content.on("click", ".add-book", function () {
     addForm("add-book-form", "添加", false);
});


function bookFormCheck(book) {
     var flag = true;

     if (book.bType.length === 0) {
          $("#booktype").tooltip("show");

          setTimeout (function () {  
               $("#booktype").tooltip("dispose");
          }, 2000);
          flag = false;
     }

     if (book.bName.length === 0) {
          $("#bookname").tooltip("show");
          setTimeout (function () {  
               $("#bookname").tooltip("dispose");
          }, 2000);
          flag = false;
     }

     if (book.bNumber.length === 0) {
          $("#booknum").tooltip("show");
          setTimeout (function () {  
               $("#booknum").tooltip("dispose");
          }, 2000);
          flag = false;
     }

     if (book.bWriter.length === 0) {
          $("#writer").tooltip("show");
          setTimeout (function () {  
               $("#writer").tooltip("dispose");
          }, 2000);
          flag = false;
     }

     if (book.bPublic.length === 0) {
          $("#public").tooltip("show");
          setTimeout (function () {  
               $("#public").tooltip("dispose");
          }, 2000);
          flag = false;
     }

     return flag;
}



// 处理添加用户界面的提交按钮的点击事件
content.on("click", ".add-user-form button[type='submit']", function () {

     var username = $("#username").val();
     var password = $("#password").val();
     var workplace = $("#workplace").val();
     var address = $("#address").val();
     var telephone = $("#telephone").val();

     var user = {
          uName: username,
          uPassword: password,
          uWorkplace: workplace,
          uAddress: address,
          uTel: telephone
     };

     if (!userFormCheck(user)) return false;

     $.ajax({
          contentType: "application/json",
          type: "POST",
          url: "http://localhost:8080/BookManage/userManage/post",
          data: JSON.stringify(user),
          dataType: "JSON",
          success: function (response) {
               if (response.status == 100) {
                    // 该用户已存在
                    $(".modal-body").html("该用户已存在");
                    $("#myModal").modal("show");
               } else {
                    // 添加成功
                    $(".modal-body").html("添加成功");
                    $("#myModal").modal("show");

               }
               return false;
          }
     });
     return false;
});


// 处理添加图书界面的提交按钮的点击事件
content.on("click", ".add-book-form button[type='submit']", function () {

     var bType = $("#booktype").val();
     var bName = $("#bookname").val();
     var bNumber = $("#booknum").val();
     var bWriter = $("#writer").val();
     var bPublic = $("#public").val();

     var book = {
          bType: bType,
          bName: bName,
          bNumber: bNumber,
          bWriter: bWriter,
          bPublic: bPublic
     };

     if (!bookFormCheck(book)) return false;

     $.ajax({
          contentType: "application/json",
          type: "POST",
          url: "http://localhost:8080/BookManage/bookManage/post",
          data: JSON.stringify(book),
          dataType: "JSON",
          success: function (response) {
               if (response.status == 100) {
                    // 该图书已存在
                    $(".modal-body").html("该图书已存在");
                    $("#myModal").modal("show");
               } else {
                    // 添加成功
                    $(".modal-body").html("添加成功");
                    $("#myModal").modal("show");

               }
               return false;
          }
     });
     return false;
});


// 渲染用户界面的表格数据
function userManageTexture(response) {  
     var users = response.users;
     // var userCount = response.userCount;
     var tbody = $("[my-data='user-table'] tbody");
     var currentPage = $("[my-data='user-nav'] .active").children().html();
     currentPage = parseInt(currentPage);

     // 如果用户为空将光标定位到上一页  将当前页删除
     if (users.length === 0) {
          // 当前页是第一页
          if(currentPage === 1) {
               $("[my-data='user-table']").remove();
               content.append($("<h2>暂无用户记录</h2>"));
          } else {            // 不是第一页 将当前页删除
               // 获取它的前一个元素
               var prev = $("[my-data='user-nav'] .active").prev();
               if (prev.nextAll().length === 2) {      // 如果它是最后一页  将下一个解禁
                    prev.next().next().removeClass("disabled");
               }

               // 如果prev是第一页 给第一页添加禁用样式
               if (prev.children().html() === '1') {
                    prev.prev().addClass("disabled");
               }

               prev.next().remove();
               prev.addClass("active");
               prev.click();
          }
     }

     tbody.empty();

     for (var j = 0; j < users.length; j++) {
          var tr = $("<tr></tr>");
          tr.append($("<td></td>").html(users[j].uId));
          tr.append($("<td></td>").html(users[j].uType == 0 ? "管理员": "普通用户"));
          tr.append($("<td></td>").html(users[j].uName));
          tr.append($("<td></td>").html(users[j].uPassword));
          tr.append($("<td></td>").html(users[j].uWorkplace));
          tr.append($("<td></td>").html(users[j].uAddress));
          tr.append($("<td></td>").html(users[j].uTel));
          var td = $("<td></td>");
          td.append($("<a></a>").addClass("btn glyphicon glyphicon-pencil").attr("type", "button").attr("title", "修改").attr("href", "javascript:void(0);"));
          if (users[j].uType !== 0) {
               var del_a = $("<a></a>");
               del_a.addClass("btn glyphicon glyphicon-trash").attr("type", "button").attr("title", "删除").attr("href", "javascript:void(0);");
               td.append(del_a);
          }
          tr.append(td);
          tbody.append(tr);
     }
}

// 渲染图书界面的表格数据
function bookManageTexture(response) {  
     var books = response.books;
     // var userCount = response.userCount;
     var tbody = $("[my-data='book-table'] tbody");
     var currentPage = $("[my-data='book-nav'] .active").children().html();
     currentPage = parseInt(currentPage);

     // 如果用户为空将光标定位到上一页  将当前页删除
     if (books.length === 0) {
          // 当前页是第一页
          if(currentPage === 1) {
               $("[my-data='book-table']").remove();
               content.append($("<h2>暂无图书记录</h2>"));
          } else {            // 不是第一页 将当前页删除
               // 获取它的前一个元素
               var prev = $("[my-data='book-nav'] .active").prev();
               if (prev.nextAll().length === 2) {      // 如果它是最后一页  将下一个解禁
                    prev.next().next().removeClass("disabled");
               }

               // 如果prev是第一页 给第一页添加禁用样式
               if (prev.children().html() === '1') {
                    prev.prev().addClass("disabled");
               }

               prev.next().remove();
               prev.addClass("active");
               prev.click();
          }
     }

     tbody.empty();

     for (var j = 0; j < books.length; j++) {
          var tr = $("<tr></tr>");
          tr.append($("<td></td>").html(books[j].bId));
          tr.append($("<td></td>").html(books[j].bType));
          tr.append($("<td></td>").html(books[j].bName));
          tr.append($("<td></td>").html(books[j].bNumber));
          tr.append($("<td></td>").html(books[j].bWriter));
          tr.append($("<td></td>").html(books[j].bPublic));
          tr.append($("<td></td>").html(books[j].bState));
          var td = $("<td></td>");
          td.append($("<a></a>").addClass("btn glyphicon glyphicon-pencil").attr("type", "button").attr("title", "修改").attr("href", "javascript:void(0);"));
          var del_a = $("<a></a>");
          del_a.addClass("btn glyphicon glyphicon-trash").attr("type", "button").attr("title", "删除").attr("href", "javascript:void(0);");
          td.append(del_a);
          tr.append(td);
          tbody.append(tr);
     }
}

// 处理用户管理的界面渲染
function handleUserManage(response, currentPage) {
     var users = response.users;
     var userCount = response.userCount;

     content.append($("<button></button>").html("添加用户").attr("type", "button").addClass("btn btn-secondary add-user"));

     // 表格渲染
     content.append($("<table></table>").addClass("table table-hover").attr("my-data", "user-table"));
     var table = $(".right_col table");
     var thead = $("<thead></thead>");
     var tbody = $("<tbody></tbody>");

     var head_tr = $("<tr></tr>");
     var title = ["用户ID", "用户类型", "用户名", "密码", "所在学校或单位", "家庭住址", "联系电话", "操作"];

     for (var index = 0; index < title.length; index++) {
          head_tr.append($("<th></th>").attr("scope", "col").html(title[index]));
     }
     thead.append(head_tr);

     for (var j = 0; j < users.length; j++) {
         var tr = $("<tr></tr>");
          tr.append($("<td></td>").html(users[j].uId));
          tr.append($("<td></td>").html(users[j].uType == 0 ? "管理员": "普通用户"));
          tr.append($("<td></td>").html(users[j].uName));
          tr.append($("<td></td>").html(users[j].uPassword));
          tr.append($("<td></td>").html(users[j].uWorkplace));
          tr.append($("<td></td>").html(users[j].uAddress));
          tr.append($("<td></td>").html(users[j].uTel));
          var td = $("<td></td>");
          td.append($("<a></a>").addClass("btn glyphicon glyphicon-pencil").attr("type", "button").attr("title", "修改").attr("href", "javascript:void(0);"));
          if (users[j].uType !== 0) {
               var del_a = $("<a></a>");
               del_a.addClass("btn glyphicon glyphicon-trash").attr("type", "button").attr("title", "删除").attr("href", "javascript:void(0);");
               td.append(del_a);
          }
          tr.append(td);
          tbody.append(tr);
     }
          
     table.append(thead);
     table.append(tbody);

     // 底部分页导航
     var nav = $('<nav aria-label="Page navigation example" my-data="user-nav">\
     <ul class="pagination justify-content-center">\
       <li class="page-item disabled">\
         <a class="page-link" href="#" tabindex="-1">Previous</a>\
       </li>\
     </ul>\
   </nav>');

     content.append(nav);

     // 总页数
     var totalPage = parseInt(userCount % pageCount) == 0 ? parseInt(userCount / pageCount) : (parseInt(userCount / pageCount) + 1);

     for (var j = 0; j < totalPage; j++) {
          var page_li = $("<li></li>").addClass("page-item").append($("<a></a>").addClass("page-link").attr("href", "javascript:void(0);").html(j+1));
          if (j === currentPage - 1) page_li.addClass("active");
          $("[my-data='user-nav'] ul").append(page_li);
     }

     $("[my-data='user-nav'] ul").append($('<li class="page-item"><a class="page-link" href="javascript:void(0);">Next</a></li>'));

     if (totalPage === 1) 
          $("[my-data='user-nav'] ul li:last-child").addClass("disabled");
}

// 处理图书管理的界面渲染
function handleBookManage(response, currentPage) {
     var books = response.books;
     var bookCount = response.bookCount;

     content.append($("<button></button>").html("添加图书").attr("type", "button").addClass("btn btn-secondary add-book"));

     // 表格渲染
     content.append($("<table></table>").addClass("table table-hover").attr("my-data", "book-table"));
     var table = $(".right_col table");
     var thead = $("<thead></thead>");
     var tbody = $("<tbody></tbody>");

     var head_tr = $("<tr></tr>");
     var title = ["图书编号", "图书类型", "图书名称", "馆藏数量", "作者", "出版社", "借阅状态", "操作"];

     for (var index = 0; index < title.length; index++) {
          head_tr.append($("<th></th>").attr("scope", "col").html(title[index]));
     }
     thead.append(head_tr);

     for (var j = 0; j < books.length; j++) {
         var tr = $("<tr></tr>");
          tr.append($("<td></td>").html(books[j].bId));
          tr.append($("<td></td>").html(books[j].bType));
          tr.append($("<td></td>").html(books[j].bName));
          tr.append($("<td></td>").html(books[j].bNumber));
          tr.append($("<td></td>").html(books[j].bWriter));
          tr.append($("<td></td>").html(books[j].bPublic));
          tr.append($("<td></td>").html(books[j].bState));
          var td = $("<td></td>");
          td.append($("<a></a>").addClass("btn glyphicon glyphicon-pencil").attr("type", "button").attr("title", "修改").attr("href", "javascript:void(0);"));
          var del_a = $("<a></a>");
          del_a.addClass("btn glyphicon glyphicon-trash").attr("type", "button").attr("title", "删除").attr("href", "javascript:void(0);");
          td.append(del_a);
          tr.append(td);
          tbody.append(tr);
     }
          
     table.append(thead);
     table.append(tbody);

     // 底部分页导航
     var nav = $('<nav aria-label="Page navigation example" my-data="book-nav">\
     <ul class="pagination justify-content-center">\
       <li class="page-item disabled">\
         <a class="page-link" href="#" tabindex="-1">Previous</a>\
       </li>\
     </ul>\
   </nav>');

     content.append(nav);

     // 总页数
     var totalPage = parseInt(bookCount % pageCount) == 0 ? parseInt(bookCount / pageCount) : (parseInt(bookCount / pageCount) + 1);

     for (var j = 0; j < totalPage; j++) {
          var page_li = $("<li></li>").addClass("page-item").append($("<a></a>").addClass("page-link").attr("href", "javascript:void(0);").html(j+1));
          if (j === currentPage - 1) page_li.addClass("active");
          $("[my-data='book-nav'] ul").append(page_li);
     }

     $("[my-data='book-nav'] ul").append($('<li class="page-item"><a class="page-link" href="javascript:void(0);">Next</a></li>'));

     if (totalPage === 1) 
          $("[my-data='book-nav'] ul li:last-child").addClass("disabled");
}



// 处理用户管理界面翻页的点击事件
// 用户前一页
content.on("click", "[my-data='user-nav'] ul li:first-child", function () {
     $("[my-data='user-nav'] ul li:first-child").blur();
     var nav_li = $("[my-data='user-nav'] ul li.active");
     // 当前页
     var currentPage = $("[my-data='user-nav'] ul li.active a").html();
     currentPage = parseInt(currentPage);
     // 如果当前是第一页就返回
     if (currentPage === 1) 
          return false;
     nav_li.prev().addClass('active');
     nav_li.removeClass('active');

     // 如果原来是最后一页 给下一个解除禁用
     if (nav_li.nextAll().length === 1) {
          $("[my-data='user-nav'] ul li:last-child").removeClass("disabled");
     }

     // 它的前一页是第一页  给第一页添加禁用样式
     if (currentPage === 2) {
          $("[my-data='user-nav'] ul li:first-child").addClass("disabled");
     }
     currentPage -= 1;

     var start = (currentPage - 1) * pageCount;

     $.ajax({
          type: "GET",
          url: "http://localhost:8080/BookManage/userManage/" + start + "/" + pageCount,
          data: "",
          dataType: "",
          success: function (response) {
               if (response.status != 200)   return;
               userManageTexture(response);
          }
     });
     return false;
});


// 用户中间页的选择
content.on("click", "[my-data='user-nav'] ul li:not(':first-child'):not(':last-child')", function () {  

     var lastObj = $("[my-data='user-nav'] .active");
     var lastPage = lastObj.children().html();
     lastPage = parseInt(lastPage);

     var currentPage = $(this).children().html();
     currentPage = parseInt(currentPage);

     lastObj.removeClass("active");
     $(this).addClass("active");
     
     // 如果原来是第一页 给第一页解除禁用
     if (lastPage === 1) {
          lastObj.prev().removeClass("disabled");  
     }
     
     // 上一个是最后一页
     else if (lastObj.nextAll().length === 1) {
          lastObj.next().removeClass("disabled");
     }

     // 如果当前是第一页 给前一个添加禁用
     if (currentPage === 1) {
          $(this).prev().addClass("disabled");  
     }

     // 如果当前是最后一页 给下一个添加禁用
     else if ($(this).nextAll().length === 1) {
          $(this).next().addClass("disabled");
     }

     var start = (currentPage - 1) * pageCount;

     $.ajax({
          type: "GET",
          url: "http://localhost:8080/BookManage/userManage/" + start + "/" + pageCount,
          data: "",
          dataType: "",
          success: function (response) {
               userManageTexture(response);
          }
     });

})

// 用户后一页
content.on("click", "[my-data='user-nav'] ul li:last-child", function () {
     $(this).blur();
     var nav_li = $("[my-data='user-nav'] ul li.active");
     // 当前页
     var currentPage = $("[my-data='user-nav'] ul li.active a").html();
     currentPage = parseInt(currentPage);
     // 如果当前是最后一页就返回
     if (nav_li.nextAll().length === 1) 
          return false;
     nav_li.next().addClass('active');
     nav_li.removeClass('active');

     // 如果当前是第一页 给前一个解除禁用
     if (currentPage === 1) {
          $("[my-data='user-nav'] ul li:first-child").removeClass("disabled").children("a").attr("href", "javascript:void(0);");  
     }

     // 它的后一页是最后一页  给后一页添加禁用样式
     if (nav_li.nextAll().length === 2) {
          $("[my-data='user-nav'] ul li:last-child").addClass("disabled").children("a").attr("href", "javascript:void(0);");
     }

     currentPage += 1;


     var start = (currentPage - 1) * pageCount;

     $.ajax({
          type: "GET",
          url: "http://localhost:8080/BookManage/userManage/" + start + "/" + pageCount,
          data: "",
          dataType: "",
          success: function (response) {
               if (response.status != 200)   return;
               userManageTexture(response);
          }
     });
     return false;
});


// 处理图书管理界面翻页的点击事件
// 图书前一页
content.on("click", "[my-data='book-nav'] ul li:first-child", function () {
     $("[my-data='book-nav'] ul li:first-child").blur();
     var nav_li = $("[my-data='user-nav'] ul li.active");
     // 当前页
     var currentPage = $("[my-data='book-nav'] ul li.active a").html();
     currentPage = parseInt(currentPage);
     // 如果当前是第一页就返回
     if (currentPage === 1) 
          return false;
     nav_li.prev().addClass('active');
     nav_li.removeClass('active');

     // 如果原来是最后一页 给下一个解除禁用
     if (nav_li.nextAll().length === 1) {
          $("[my-data='book-nav'] ul li:last-child").removeClass("disabled");
     }

     // 它的前一页是第一页  给第一页添加禁用样式
     if (currentPage === 2) {
          $("[my-data='book-nav'] ul li:first-child").addClass("disabled");
     }
     currentPage -= 1;

     var start = (currentPage - 1) * pageCount;

     $.ajax({
          type: "GET",
          url: "http://localhost:8080/BookManage/bookManage/" + start + "/" + pageCount,
          data: "",
          dataType: "",
          success: function (response) {
               if (response.status != 200)   return;
               bookManageTexture(response);
          }
     });
     return false;
});


// 图书中间页的选择
content.on("click", "[my-data='book-nav'] ul li:not(':first-child'):not(':last-child')", function () {  

     var lastObj = $("[my-data='book-nav'] .active");
     var lastPage = lastObj.children().html();
     lastPage = parseInt(lastPage);

     var currentPage = $(this).children().html();
     currentPage = parseInt(currentPage);

     lastObj.removeClass("active");
     $(this).addClass("active");
     
     // 如果原来是第一页 给第一页解除禁用
     if (lastPage === 1) {
          lastObj.prev().removeClass("disabled");  
     }
     
     // 上一个是最后一页
     else if (lastObj.nextAll().length === 1) {
          lastObj.next().removeClass("disabled");
     }

     // 如果当前是第一页 给前一个添加禁用
     if (currentPage === 1) {
          $(this).prev().addClass("disabled");  
     }

     // 如果当前是最后一页 给下一个添加禁用
     else if ($(this).nextAll().length === 1) {
          $(this).next().addClass("disabled");
     }

     var start = (currentPage - 1) * pageCount;

     $.ajax({
          type: "GET",
          url: "http://localhost:8080/BookManage/bookManage/" + start + "/" + pageCount,
          data: "",
          dataType: "",
          success: function (response) {
               bookManageTexture(response);
          }
     });

})

// 图书后一页
content.on("click", "[my-data='book-nav'] ul li:last-child", function () {
     $(this).blur();
     var nav_li = $("[my-data='book-nav'] ul li.active");
     // 当前页
     var currentPage = $("[my-data='book-nav'] ul li.active a").html();
     currentPage = parseInt(currentPage);
     // 如果当前是最后一页就返回
     if (nav_li.nextAll().length === 1) 
          return false;
     nav_li.next().addClass('active');
     nav_li.removeClass('active');

     // 如果当前是第一页 给前一个解除禁用
     if (currentPage === 1) {
          $("[my-data='book-nav'] ul li:first-child").removeClass("disabled").children("a").attr("href", "javascript:void(0);");  
     }

     // 它的后一页是最后一页  给后一页添加禁用样式
     if (nav_li.nextAll().length === 2) {
          $("[my-data='book-nav'] ul li:last-child").addClass("disabled").children("a").attr("href", "javascript:void(0);");
     }

     currentPage += 1;


     var start = (currentPage - 1) * pageCount;

     $.ajax({
          type: "GET",
          url: "http://localhost:8080/BookManage/bookManage/" + start + "/" + pageCount,
          data: "",
          dataType: "",
          success: function (response) {
               if (response.status != 200)   return;
               bookManageTexture(response);
          }
     });
     return false;
});

//用户修改提交按钮点击事件 
content.on("click", ".put-user-form [type='submit']", function () {
     
     var username = $("#username").val();
     var password = $("#password").val();
     var workplace = $("#workplace").val();
     var address = $("#address").val();
     var telephone = $("#telephone").val();

     var user = {
          uName: username,
          uPassword: password,
          uWorkplace: workplace,
          uAddress: address,
          uTel: telephone
     };

     // 用户信息验证
     if (!userFormCheck(user)) return false;

     $.ajax({
          contentType: "application/json",
          type: "PUT",
          url: "http://localhost:8080/BookManage/userManage/put/",
          data: JSON.stringify(user),
          dataType: "JSON",
          success: function (response) {
               if (response.status !== 200) {
                    // 修改失败
                    $(".modal-body").html("修改失败");
               } else {
                    $(".modal-body").html("修改成功");
               }
               $("#myModal").modal("show");
          }
     });

     return false;

});


//图书修改提交按钮点击事件 
content.on("click", ".put-book-form [type='submit']", function () {
     
     var bType = $("#booktype").val();
     var bName = $("#bookname").val();
     var bNumber = $("#booknum").val();
     var bWriter = $("#writer").val();
     var bPublic = $("#public").val();


     var book = {
          bType: bType,
          bName: bName,
          bNumber: bNumber,
          bWriter: bWriter,
          bPublic: bPublic
     };


     // 用户信息验证
     if (!bookFormCheck(book)) {
          return false;
     }

     $.ajax({
          contentType: "application/json",
          type: "PUT",
          url: "http://localhost:8080/BookManage/bookManage/put/",
          data: JSON.stringify(book),
          dataType: "JSON",
          success: function (response) {
               if (response.status != 200) {
                    // 修改失败
                    $(".modal-body").html("修改失败");
               } else {
                    $(".modal-body").html("修改成功");
               }
               $("#myModal").modal("show");
               return false;
          }
     });

     return false;

});


// 图书修改按钮的点击事件
content.on("click", "[my-data='book-table'] a[title='修改']", function () {

     var tds = $(this).parents("tr").children(); //td
     var bType = tds.siblings(":nth-child(2)").html();
     var bName = tds.siblings(":nth-child(3)").html();
     var bNumber = tds.siblings(":nth-child(4)").html();
     var bWriter = tds.siblings(":nth-child(5)").html();
     var bPublic = tds.siblings(":nth-child(6)").html();

     var book = {
          bType: bType,
          bName: bName,
          bNumber: bNumber,
          bWriter: bWriter,
          bPublic: bPublic
     };
     
     addForm("put-book-form", "修改", false);

     $("#booktype").val(book.bType);
     $("#bookname").val(book.bName);
     $("#booknum").val(book.bNumber);
     $("#writer").val(book.bWriter);
     $("#public").val(book.bPublic);

     return false;
});


// 用户修改按钮的点击事件
content.on("click", "[my-data='user-table'] a[title='修改']", function () {

     var tds = $(this).parents("tr").children(); //td
     var uName = tds.siblings(":nth-child(3)").html();
     var uPassword = tds.siblings(":nth-child(4)").html();
     var uWorkplace = tds.siblings(":nth-child(5)").html();
     var uAddress = tds.siblings(":nth-child(6)").html();
     var uTel = tds.siblings(":nth-child(7)").html();

     var user = {
          uName: uName,
          uPassword: uPassword,
          uWorkplace: uWorkplace,
          uAddress: uAddress,
          uTel: uTel
     }
     
     addForm("put-user-form", "修改");

     $("#username").val(uName);
     $("#password").val(uPassword);
     $("#workplace").val(uWorkplace);
     $("#address").val(uAddress);
     $("#telephone").val(uTel);

     return false;
});


// 用户删除按钮的点击事件
content.on("click", "[my-data='book-table'] a[title='删除']", function () {  
     var bId = $(this).parents("tr").children(":first-child").html();
     bId = parseInt(bId);

     var book = {
          bId: bId
     }

     $.ajax({
          contentType: "application/json",
          type: "DELETE",
          url: "http://localhost:8080/BookManage/bookManage/delete/",
          data: JSON.stringify(book),
          dataType: "JSON",
          success: function (response) {
               if (response.status != 200) {
                    $(".modal-body").html("删除失败");
                    $("#myModal").modal("show");
               } else {
                    $(".modal-body").html("删除成功");
                    $("[my-data='book-nav'] .active").click();
                    $("#myModal").modal("show");
               }
               
          }
     });
     return false;
});

// 图书删除按钮的点击事件
content.on("click", "[my-data='user-table'] a[title='删除']", function () {  
     var uId = $(this).parents("tr").children(":first-child").html();
     uId = parseInt(uId);

     var user = {
          uId: uId
     }

     $.ajax({
          contentType: "application/json",
          type: "DELETE",
          url: "http://localhost:8080/BookManage/userManage/delete/",
          data: JSON.stringify(user),
          dataType: "JSON",
          success: function (response) {
               if (response.status != 200) {
                    $(".modal-body").html("删除失败");
                    $("#myModal").modal("show");
               } else {
                    $(".modal-body").html("删除成功");
                    $("[my-data='user-nav'] .active").click();
                    $("#myModal").modal("show");
               }
               
          }
     });
     return false;
});


$(sideMenuLi).on("click", function () {
     $(this).addClass("active")
     content.empty();

     if (this.index == 0) {                  // 主页
          content.append("<h2>欢迎来到图书管理系统</h2>");
     } else if (this.index == 1) {           // 个人信息
          $.ajax({
               type: "GET",
               url: "http://localhost:8080/BookManage/userinfo/",
               data: "",
               dataType: "",
               success: function (response) {
                    addForm("put-user-form", "修改");
                    var user = response.user;
                    $("#username").val(user.uName);
                    $("#password").val(user.uPassword);
                    $("#workplace").val(user.uWorkplace);
                    $("#address").val(user.uAddress);
                    $("#telephone").val(user.uTel);
               }
          });
          
     } else if(this.index == 2) {            // 图书管理

          // 获取所有图书
          $.ajax({
               contentType: "application/json",
               type: "GET",
               url: "http://localhost:8080/BookManage/bookManage/0/" + pageCount,
               data: "",
               dataType: "",
               success: function (response) {
                    if (response.status != 200) return;
                    handleBookManage(response, 1);
               }
          });
     } else if (this.index == 3) {           // 用户管理
          $.ajax({
               contentType: "application/json",
               type: "GET",
               url: "http://localhost:8080/BookManage/userManage/0/" + pageCount,
               data: "",
               dataType: "",
               success: function (response) {
                    if (response.status != 200)   return;
                    // 渲染页面
                    handleUserManage(response, 1);
               }
          });
     }
});

