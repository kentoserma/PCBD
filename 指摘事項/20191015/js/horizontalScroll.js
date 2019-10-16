// 横スクロールを実装するスクリプト

$(function () {
    //スクロールスピード
    var speed = 60;
    $('.masterTable').mousewheel(function (event, mov) {
        //ie firefox
        $(this).scrollLeft($(this).scrollLeft() - mov * speed);
        //webkit
        $('body').scrollLeft($('body').scrollLeft() - mov * speed);
        return false;
    });
});