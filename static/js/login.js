//--ラインＮＯが未入力時の警告表示--
function OnButtonClick() {
  var line_no_form = document.forms.login_form.line_no.value;
  var error_message = document.getElementById("error_message_line_no");

  if(line_no_form == ""){
    error_message.innerHTML = "ラインＮＯが入力されていません。"
    return false;    //送信ボタン本来の動作をキャンセルする
  }
  else{
    return true;  //送信ボタン本来の動作をする
  }
}
