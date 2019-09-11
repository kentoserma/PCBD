//稼働状況変更ボタン(ストップ)
function OnButtonClickOut(){
  var on_out = document.getElementById("on_out_js");

  //表示を「停止中」に変え、色を「赤色」にする
  on_out.textContent = '停　止　中';
  on_out.style.color = '#FF3300';
}

//稼働状況変更ボタン(リスタート)
function OnButtonClickOn(){
  var on_out = document.getElementById("on_out_js");

  //表示を「稼働中」に変え、色を「青色」にする
  on_out.textContent = '稼　働　中';
  on_out.style.color = '#33CCFF';
}
