//半角判定用関数
function isHankaku(value){
    return !value.match(/[^\x01-\x7E]/) || !value.match(/[^\uFF65-\uFF9F]/);
}

//--生産管理板へのログインボタンを押したときの処理--
function OnButtonClickLineNo() {
  var line_no_form = document.forms.login_form_1.line_no.value;
  var error_message_line_no = document.getElementById("error_message_line_no");

  //ラインＮＯ未入力表示
  if(line_no_form == ""){
    error_message_line_no.innerHTML = "ラインＮＯが入力されていません。"
    return false;    //送信ボタン本来の動作をキャンセルする
  }
  //入力制限（入力されたラインＮＯが5文字でなければ警告表表示）
  else if(line_no_form.length != 5){
    error_message_line_no.innerHTML = "ラインＮＯは5文字で入力してください。"
    return false;    //送信ボタン本来の動作をキャンセルする
  }
  //入力制限（入力されたラインＮＯが半角でなければ警告表示）
  else if(isHankaku(line_no_form) == false){
    error_message_line_no.innerHTML = "ラインＮＯは半角で入力してください。"
    return false;
  }
  else{
    return true;  //送信ボタン本来の動作をする
  }
}

//--管理者画面へのログインボタンを押したときの処理--
function OnButtonClickLoginMaster() {
  var login_id_form = document.forms.login_form_2.login_id.value;
  var password_form = document.forms.login_form_2.password.value;
  var error_message_login_master = document.getElementById("error_message_login_master");

  //ログインＩＤ・パスワード未入力表示
  if(login_id_form == "" && password_form == ""){
    error_message_login_master.innerHTML = "ログインＩＤとパスワードが入力されていません。"
    return false;    //送信ボタン本来の動作をキャンセルする
  }
  //ログインＩＤ未入力表示
  else if (login_id_form == ""){
    error_message_login_master.innerHTML = "ログインＩＤが入力されていません。"
    return false;    //送信ボタン本来の動作をキャンセルする
  }
  //パスワード未入力表示
  else if(password_form == ""){
    error_message_login_master.innerHTML = "パスワードが入力されていません。"
    return false;    //送信ボタン本来の動作をキャンセルする
  }
  else{
    return true;  //送信ボタン本来の動作をする
  }
}
