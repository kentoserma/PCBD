//-------------------------------------------------------------
//概要：引数に指定された値が半角かどうかをチェックする関数
//-------------------------------------------------------------
function isHankaku(value){
    return !value.match(/[^\x01-\x7E]/) || !value.match(/[^\uFF65-\uFF9F]/);
}

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

//-------------------------------------------------------------
//概要：追加ボタン押下時の入力制限表示のプログラム
//-------------------------------------------------------------

function OnButtonClickAddMaster() {

  // #region 日当必要台数
  var k = document.getElementById("lineNoContent").value;

  //未入力チェック
  if(k == ""){
      alert("ラインNoが未入力です。")
      return false;
    }

  //文字数チェック
  else if(k.length != 6){
      alert("6文字で入力してください。")
      return false;
    }
  //全角チェック
  else if(isHankaku(k) == false){
      alert("半角で入力してください。")
      return false;
    }
  // #endregion

  // #region 日当必要台数
  var k = document.getElementById("dailyNeedNumberContent").value;

  //入力制限（未入力の場合警告表示して処理をストップ)
  if(k == ""){
      alert("日当必要台数が未入力です。")
      return false;
    }
  //入力制限（数値以外で入力され場合、警告表示して処理をストップ)
  else if(isNaN(beforeValue) == true){
      alert("日当必要台数は数値で入力してください。")
      return false;
    }
  //入力制限（数値以外で入力され場合、警告表示して処理をストップ)
  else if(beforeValue.length != 6){
      alert("6mozipls")
      return false;
    }
  // #endregion



}
