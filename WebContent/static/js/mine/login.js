$(".login_form form a.submit").on("click", function() {
	// console.log(1);
	// 验证用户名与密码是否符合规范
	var username = $(".login_form form input")[0].value;
	var password = $(".login_form form input")[1].value; 

	if (!checkUser(username, password)) {
		$("[name='username']").tooltip("show");
		$("[name='password']").tooltip("show");

		setTimeout(function () {  
			$("[name='username']").tooltip("dispose");
			$("[name='password']").tooltip("dispose");
		}, 2000)
	}

	var user = {
		uName: username,
		uPassword: password
	}

	$.ajax({
		contentType: "application/json",
		type: "POST",
		url: "http://localhost:8080/BookManage/tologin",
		data: JSON.stringify(user),
		dataType: "JSON",
		success: function (response) {
			// console.log(response.status);
			if (response.status == 404) {
				
				$("[name='username']").tooltip("show");
				$("[name='password']").tooltip("show");

				setTimeout(function () {  
					$("[name='username']").tooltip("dispose");
					$("[name='password']").tooltip("dispose");
				}, 2000);
			} else {
				$(location).attr("href", "http://localhost:8080/BookManage/index");
			}
		}
			
	});
});

$("#myModal").on("hide.bs.modal", function () {  
	$(".to_login").click();
})


$("#register form a.submit").on("click", function () {  
	var uName = $("#username").val();
	var uPassword = $("#password").val();
	var uWorkplace = $("#workplace").val();
	var uAddress = $("#address").val();
	var uTel = $("#telephone").val();

	var user = {
		uName:  uName,
		uPassword: uPassword,
		uWorkplace: uWorkplace,
		uAddress: uAddress,
		uTel: uTel
	}

	if (!userFormCheck(user)) return false;

	$.ajax({
		contentType: "application/json",
		type: "POST",
		url: "http://localhost:8080/BookManage/toregister",
		data: JSON.stringify(user),
		dataType: "JSON",
		success: function (response) {
			if (response.status == 100) {
				$("#username").attr("title", "该用户已存在").tooltip("show");
				setTimeout(function () {  
					$("#username").tooltip("dispose");
				}, 2000)
			} else {
				$(".modal-body").html("注册成功");
				$("#myModal").modal("show");
			}
		}
	});
})