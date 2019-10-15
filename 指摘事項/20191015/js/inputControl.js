//-------------------------------------------------------------
// 概要 : マスタテーブルの入力フォームに入力制限を設ける。
//        入力制限は文字コードによって制御する。
//-------------------------------------------------------------

//アルファベット           65～90
//0～9                     48～57
//テンキー0～9             96～105
//記号                     186～226
//テンキー記号             106～111


$(function () {

    // #region 半角制限

    // #region ラインNO
    //$("tbody").find(".lineNo").find("input[type = 'text']").keydown(function (e) {
    //    var k = e.keyCode;
    //    // アルファベット, 0～9, テンキー0～9, /, テンキー/
    //    //スペース, backspace, delete, →, ←, Tab　のみ入力可
    //    if (!((k >= 65 && k <= 90) || (k >= 48 && k <= 57) || (k >= 96 && k <= 105) || k == 191 || k == 111 || k == 32 || k == 8 || k == 46 || k == 39 || k == 37 || k == 9 || k == 244 || k == 115)) {
    //        return false;
    //    }
    //});
    // #endregion

    // #region ラインNO(表示)
    //$("tbody").find(".lineNoDisplay").find("input[type = 'text']").keydown(function (e) {
    //    var k = e.keyCode;
    //    // アルファベット, 0～9, テンキー0～9, /, テンキー/
    //    //スペース, backspace, delete, →, ←, Tab　のみ入力可
    //    if (!((k >= 65 && k <= 90) || (k >= 48 && k <= 57) || (k >= 96 && k <= 105) || k == 191 || k == 111 || k == 32 || k == 8 || k == 46 || k == 39 || k == 37 || k == 9 || k == 244 || k == 115)) {
    //        return false;
    //    }
    //});
    // #endregion

    // #region 車種
    // 制限無し
    // #endregion

    // #region ロケーション
    //制限なし
    // #endregion

    // #region 時間帯必要数①
    $("tbody").find(".requiredTimeTable-1").find("input[type = 'text']").keydown(function (e) {
        var k = e.keyCode;
        //0～9, テンキー0～9, /, テンキー/, スペース, backspace, delete, →, ←, Tab　のみ入力可
        if (!((k >= 48 && k <= 57) || (k >= 96 && k <= 105) || k == 111 || k == 191 || k == 32 || k == 8 || k == 46 || k == 39 || k == 37 || k == 9 || k == 244)) {
            return false;
        }

        aa = $(this).parent().attr("class");

        checkForm(aa);
    });
    // #endregion

    // #region 時間帯必要数②
    $("tbody").find(".requiredTimeTable-2").find("input[type = 'text']").keydown(function (e) {
        var k = e.keyCode;
        //0～9, テンキー0～9, /, テンキー/, スペース, backspace, delete, →, ←, Tab　のみ入力可
        if (!((k >= 48 && k <= 57) || (k >= 96 && k <= 105) || k == 111 || k == 191 || k == 32 || k == 8 || k == 46 || k == 39 || k == 37 || k == 9 || k == 244)) {
            return false;
        }
    });
    // #endregion

    // #region 時間帯必要数③
    $("tbody").find(".requiredTimeTable-3").find("input[type = 'text']").keydown(function (e) {
        var k = e.keyCode;
        //0～9, テンキー0～9, /, テンキー/, スペース, backspace, delete, →, ←, Tab　のみ入力可
        if (!((k >= 48 && k <= 57) || (k >= 96 && k <= 105) || k == 111 || k == 191 || k == 32 || k == 8 || k == 46 || k == 39 || k == 37 || k == 9 || k == 244)) {
            return false;
        }
    });
    // #endregion

    // #region 時間帯必要数④
    $("tbody").find(".requiredTimeTable-4").find("input[type = 'text']").keydown(function (e) {
        var k = e.keyCode;
        //0～9, テンキー0～9, /, テンキー/, スペース, backspace, delete, →, ←, Tab　のみ入力可
        if (!((k >= 48 && k <= 57) || (k >= 96 && k <= 105) || k == 111 || k == 191 || k == 32 || k == 8 || k == 46 || k == 39 || k == 37 || k == 9 || k == 244)) {
            return false;
        }
    });
    // #endregion

    // #region 時間帯必要数⑤
    $("tbody").find(".requiredTimeTable-5").find("input[type = 'text']").keydown(function (e) {
        var k = e.keyCode;
        //0～9, テンキー0～9, /, テンキー/, スペース, backspace, delete, →, ←, Tab　のみ入力可
        if (!((k >= 48 && k <= 57) || (k >= 96 && k <= 105) || k == 111 || k == 191 || k == 32 || k == 8 || k == 46 || k == 39 || k == 37 || k == 9 || k == 244)) {
            return false;
        }
    });
    // #endregion

    // #region 時間帯必要数⑥
    $("tbody").find(".requiredTimeTable-6").find("input[type = 'text']").keydown(function (e) {
        var k = e.keyCode;
        //0～9, テンキー0～9, /, テンキー/, スペース, backspace, delete, →, ←, Tab　のみ入力可
        if (!((k >= 48 && k <= 57) || (k >= 96 && k <= 105) || k == 111 || k == 191 || k == 32 || k == 8 || k == 46 || k == 39 || k == 37 || k == 9 || k == 244)) {
            return false;
        }
    });
    // #endregion

    // #region 時間帯必要数⑦
    $("tbody").find(".requiredTimeTable-7").find("input[type = 'text']").keydown(function (e) {
        var k = e.keyCode;
        //0～9, テンキー0～9, /, テンキー/, スペース, backspace, delete, →, ←, Tab　のみ入力可
        if (!((k >= 48 && k <= 57) || (k >= 96 && k <= 105) || k == 111 || k == 191 || k == 32 || k == 8 || k == 46 || k == 39 || k == 37 || k == 9 || k == 244)) {
            return false;
        }
    });
    // #endregion

    // #region 時間帯必要数⑧
    $("tbody").find(".requiredTimeTable-8").find("input[type = 'text']").keydown(function (e) {
        var k = e.keyCode;
        //0～9, テンキー0～9, /, テンキー/, スペース, backspace, delete, →, ←, Tab　のみ入力可
        if (!((k >= 48 && k <= 57) || (k >= 96 && k <= 105) || k == 111 || k == 191 || k == 32 || k == 8 || k == 46 || k == 39 || k == 37 || k == 9 || k == 244)) {
            return false;
        }
    });
    // #endregion

    // #region 時間帯必要数⑨
    $("tbody").find(".requiredTimeTable-9").find("input[type = 'text']").keydown(function (e) {
        var k = e.keyCode;
        //0～9, テンキー0～9, /, テンキー/, スペース, backspace, delete, →, ←, Tab　のみ入力可
        if (!((k >= 48 && k <= 57) || (k >= 96 && k <= 105) || k == 111 || k == 191 || k == 32 || k == 8 || k == 46 || k == 39 || k == 37 || k == 9 || k == 244)) {
            return false;
        }
    });
    // #endregion

    // #region 時間帯必要数⑩
    $("tbody").find(".requiredTimeTable-10").find("input[type = 'text']").keydown(function (e) {
        var k = e.keyCode;
        //0～9, テンキー0～9, /, テンキー/, スペース, backspace, delete, →, ←, Tab　のみ入力可
        if (!((k >= 48 && k <= 57) || (k >= 96 && k <= 105) || k == 111 || k == 191 || k == 32 || k == 8 || k == 46 || k == 39 || k == 37 || k == 9 || k == 244)) {
            return false;
        }
    });
    // #endregion

    // #region 時間帯必要数⑪
    $("tbody").find(".requiredTimeTable-11").find("input[type = 'text']").keydown(function (e) {
        var k = e.keyCode;
        //0～9, テンキー0～9, /, テンキー/, スペース, backspace, delete, →, ←, Tab　のみ入力可
        if (!((k >= 48 && k <= 57) || (k >= 96 && k <= 105) || k == 111 || k == 191 || k == 32 || k == 8 || k == 46 || k == 39 || k == 37 || k == 9 || k == 244)) {
            return false;
        }
    });
    // #endregion

    // #region 必要人工
    $("tbody").find(".needArtificial").find("input[type = 'text']").keydown(function (e) {
        var k = e.keyCode;
        //0～9, テンキー0～9, /, テンキー/, スペース, backspace, delete, →, ←, Tab　のみ入力可
        if (!((k >= 48 && k <= 57) || (k >= 96 && k <= 105) || k == 8 || k == 46 || k == 39 || k == 37 || k == 9 || k == 244 || k == 110 || k == 190)) {
            return false;
        }
    });
    // #endregion

    // #region 編成人工
    $("tbody").find(".organizationArtificial").find("input[type = 'text']").keydown(function (e) {
        var k = e.keyCode;
        //0～9, テンキー0～9, /, テンキー/, スペース, backspace, delete, →, ←, Tab　のみ入力可
        if (!((k >= 48 && k <= 57) || (k >= 96 && k <= 105) || k == 8 || k == 46 || k == 39 || k == 37 || k == 9 || k == 244 || k == 110 || k == 190)) {
            return false;
        }
    });
    // #endregion

    // #region 月度オーダー
    $("tbody").find(".monthOrder").find("input[type = 'text']").keydown(function (e) {
        var k = e.keyCode;
        //0～9, テンキー0～9, /, テンキー/, スペース, backspace, delete, →, ←, Tab　のみ入力可
        if (!((k >= 48 && k <= 57) || (k >= 96 && k <= 105) || k == 8 || k == 46 || k == 39 || k == 37 || k == 9 || k == 244 || k == 110 || k == 190)) {
            return false;
        }
    });
    // #endregion

    // #region 日当必要台数
    $("tbody").find(".dailyNeedNumber").find("input[type = 'text']").keydown(function (e) {
        var k = e.keyCode;
        //0～9, テンキー0～9, /, テンキー/, スペース, backspace, delete, →, ←, Tab　のみ入力可
        if (!((k >= 48 && k <= 57) || (k >= 96 && k <= 105) || k == 8 || k == 46 || k == 39 || k == 37 || k == 9 || k == 244 || k == 110 || k == 190)) {
            return false;
        }
    });
    // #endregion

    // #region 実行タクトタイム
    $("tbody").find(".executeTactTime").find("input[type = 'text']").keydown(function (e) {
        var k = e.keyCode;
        //0～9, テンキー0～9, /, テンキー/, スペース, backspace, delete, →, ←, Tab　のみ入力可
        if (!((k >= 48 && k <= 57) || (k >= 96 && k <= 105) || k == 8 || k == 46 || k == 39 || k == 37 || k == 9 || k == 244 || k == 110 || k == 190)) {
            return false;
        }
    });
    // #endregion

    // #region 前作業能率
    $("tbody").find(".previousWorkEfficiency").find("input[type = 'text']").keydown(function (e) {
        var k = e.keyCode;
        //0～9, テンキー0～9, /, テンキー/, スペース, backspace, delete, →, ←, Tab　のみ入力可
        if (!((k >= 48 && k <= 57) || (k >= 96 && k <= 105) || k == 8 || k == 46 || k == 39 || k == 37 || k == 9 || k == 244 || k == 110 || k == 190)) {
            return false;
        }
    });
    // #endregion

    // #region ３人
    $("tbody").find(".weightedAverage-3").find("input[type = 'text']").keydown(function (e) {
        var k = e.keyCode;
        //0～9, テンキー0～9, /, テンキー/, スペース, backspace, delete, →, ←, Tab　のみ入力可
        if (!((k >= 48 && k <= 57) || (k >= 96 && k <= 105) || k == 8 || k == 46 || k == 39 || k == 37 || k == 9 || k == 244 || k == 110 || k == 190)) {
            return false;
        }
    });
    // #endregion

    // #region ４人
    $("tbody").find(".weightedAverage-4").find("input[type = 'text']").keydown(function (e) {
        var k = e.keyCode;
        //0～9, テンキー0～9, /, テンキー/, スペース, backspace, delete, →, ←, Tab　のみ入力可
        if (!((k >= 48 && k <= 57) || (k >= 96 && k <= 105) || k == 8 || k == 46 || k == 39 || k == 37 || k == 9 || k == 244 || k == 110 || k == 190)) {
            return false;
        }
    });
    // #endregion

    // #region ５人
    $("tbody").find(".weightedAverage-5").find("input[type = 'text']").keydown(function (e) {
        var k = e.keyCode;
        //0～9, テンキー0～9, /, テンキー/, スペース, backspace, delete, →, ←, Tab　のみ入力可
        if (!((k >= 48 && k <= 57) || (k >= 96 && k <= 105) || k == 8 || k == 46 || k == 39 || k == 37 || k == 9 || k == 244 || k == 110 || k == 190)) {
            return false;
        }
    });
    // #endregion

    // #endregion

    // #region 全角入力制限
    var className = null;

    // #region 対象のクラス名を取得
    $("tbody").find("input[type = 'text']").on("input", function (e) {

        // 操作中のテキストの親要素のクラスを取得する。
        className = $(this).parent().attr("class");
        // 車種とロケーションは対象外
        switch (className) {
            case "model":
            case "location":
                return false;
        }

        checkForm(className);
    });
    // #endregion

    // 全角を禁止する
    function checkForm(name) {

        //現在入力されている値を取得
        var str = $("tbody").find("." + name).find("input[type = 'text']").val();

        //全角のみを除去する
        while (str.match(/[^A-Z^a-z\d\-]/)) {
            str = str.replace(/[^A-Z^a-z\d\-]/, "");
        }

        //全角を取り除いた値を代入
        $("tbody").find("." + name).find("input[type = 'text']").val(str);
    }
    // #endregion
});
