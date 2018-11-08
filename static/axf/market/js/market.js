var cate_toggle_tag = false;
var sort_toggle_tag = false;
$(function () {
//    给全部类型加点击事件
    $("#all_cate").click(cate_toggle);
    $("#cates").click(cate_toggle);

//    排序
    $("#all_sort").click(sort_toggle);
    $("#sorts").click(sort_toggle);

    $(".addShopping").click(function () {
        $current_bt = $(this);
        var g_id = $current_bt.attr("g_id");
        console.log(g_id);

        $.ajax({
            url:"/axf/cart_api",
            data:{
                g_id: g_id,
                type: "add"
            },
            method:"post",
            success:function (res) {
                console.log(res);
                if (res.code == 1){
                    $current_bt.prev().html(res.data)
                }
                if (res.code == 2){
                    window.open(res.data, target="_self")
                }
            }
        })
    })


    $(".subShopping").click(function () {
        $current_bt = $(this);
        var g_id = $current_bt.attr("g_id");
        console.log(g_id);
        if ($current_bt.next().html() == "0"){
            return
        }
        $.ajax({
            url:"/axf/cart_api",
            data:{
                g_id: g_id,
                type: "sub"
            },
            method:"post",
            success:function (res) {
                console.log(res);
                if (res.code == 1){
                    $current_bt.next().html(res.data)
                }
                if (res.code == 2){
                    window.open(res.data, target="_self")
                }
            }
        });
    });
})

function sort_toggle() {
    $("#sorts").toggle();
    if (sort_toggle_tag == false){
        $("#all_sort").find("span").removeClass("glyphicon glyphicon-chevron-down").addClass("glyphicon glyphicon-chevron-up");
        sort_toggle_tag = true;
    } else{
        $("#all_sort").find("span").removeClass("glyphicon glyphicon-chevron-up").addClass("glyphicon glyphicon-chevron-down");
        sort_toggle_tag = false;
    }
}

function cate_toggle() {
    $("#cates").toggle();
    // console.log($(this))
    if (cate_toggle_tag == false){
        $("#all_cate").find("span").removeClass("glyphicon glyphicon-chevron-down").addClass("glyphicon glyphicon-chevron-up");
        cate_toggle_tag = true;
    } else{
        $("#all_cate").find("span").removeClass("glyphicon glyphicon-chevron-up").addClass("glyphicon glyphicon-chevron-down");
        cate_toggle_tag = false;
    }

}