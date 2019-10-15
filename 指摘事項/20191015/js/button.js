//-------------------------------------------------------------------------------------
// 概要 : 追加ボタン、変更ボタン、削除ボタン処理
//        　※入力フォームに"/"が含まれていない場合は、処理が行われない。
//-------------------------------------------------------------------------------------

$(function () {
    $(".add, .change, .delete").on("click", function () {
        $(".popup-overlay, .popup-content").addClass("active");
    });

    $(".close, .popup-overlay").on("click", function () {
        $(".popup-overlay, .popup-content").removeClass("active");
    });

});