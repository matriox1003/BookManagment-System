
$("#myModal").on("hide.bs.modal", function () {  
    window.location.reload();
});


$("[my-data='book-table'] button").on("click", function () {  
    var button_val = $(this).html();
    var bId = $(this).parents("tr").children(":first-child").html();

    if (button_val === '借阅')  {
        $.ajax({
            type: "GET",
            url: "http://localhost:8080/BookManage/borrow/" + bId,
            data: "",
            dataType: "",
            success: function (response) {
                if (response.status != 200) {
                    $(".modal-body").html("借阅失败");
                } else {
                    $(".modal-body").html("借阅成功");
                }
                $("#myModal").modal("show");
            }
        });
    } else {
        $.ajax({
            type: "GET",
            url: "http://localhost:8080/BookManage/return/" + bId,
            data: "",
            dataType: "",
            success: function (response) {
                if (response.status != 200) {
                    $(".modal-body").html("还书失败");
                } else {
                    $(".modal-body").html("还书成功 罚款金额：" + response.penalty);
                }
                $("#myModal").modal("show");
            }
        });
    }

});

