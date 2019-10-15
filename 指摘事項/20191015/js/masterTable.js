//-------------------------------------------------------------------------------------
// 概要 : 時間帯必要数の数を自動算出し値をセットする。
//        　※入力フォームに"/"が含まれていない場合は、処理が行われない。
//-------------------------------------------------------------------------------------

$(function () {


    //時間帯必要数に応じて算出
    $(".timeTableReflect").click(function () {
        try {
            //現在のテーブル項目のクラス名を取得
            var classColumnName = $(this).parent().attr("class");

            //時間帯必要数の番号を取得
            var requiredTimeTableName = classColumnName.split("-")[0];
            var requiredTimeTableNO = classColumnName.split("-")[1];
            var arryRequiredTimeTable = new Array();

            //入力画面の親要素を取得
            var idMasterTable = $(this).parents(".masterTable").find("tbody");
            var dailyNeedNumberValue = idMasterTable.find(".dailyNeedNumber").find("input[type = 'text']").val();

            // 時間帯必要数⑨～⑪は対象外のため、個別処理
            if (classColumnName === "requiredTimeTable-9" || classColumnName === "requiredTimeTable-10" || classColumnName === "requiredTimeTable-11") {
                aloneCalculation(classColumnName, idMasterTable);
                return false;
            }

            //前の合計時間帯必要数を取得する変数
            var beforeTotal = null;

            // 前の合計時間帯必要数のクラス名を取得
            var beforeTotalName = requiredTimeTableName + "-" + (parseInt(requiredTimeTableNO) - 1);

            // 時間帯必要数を自動入力判定用
            var inputAuto = true;

            //編集中の時間帯必要数のレコードの値を取得
            var requiredTimeTable = idMasterTable.find("." + classColumnName).find("input[type = 'text']").val();
            var requiredTimeTableLeft = null;
            var requiredTimeTableRight = null;

            if (!requiredTimeTable == "") {
                inputAuto = false;
                requiredTimeTableLeft = requiredTimeTable.split("/")[0].trim();
                requiredTimeTableRight = requiredTimeTable.split("/")[1].trim();
            }

            // 入力処理開始
            for (var i = parseInt(requiredTimeTableNO) - 1; i <= 7; i++) {

                // 時間帯必要数①の場合
                if (classColumnName === "requiredTimeTable-1") {
                    if (i == 0) {

                        // 自動入力の場合
                        if (inputAuto) {
                            requiredTimeTableRight = calculationTimeUnit(dailyNeedNumberValue);
                        }

                        arryRequiredTimeTable[i] = requiredTimeTableRight;
                        continue;
                    }

                    //時間帯必要数⑧の分子を算出
                    if (i == 7 && inputAuto) {
                        requiredTimeTableRight = calculationEightTimeUnit(dailyNeedNumberValue, requiredTimeTableRight);
                    }

                    // 現在の合計数を計算
                    arryRequiredTimeTable[i] = parseInt(arryRequiredTimeTable[i - 1]) + parseInt(requiredTimeTableRight);
                }

                // 時間帯必要数①以外の場合
                else {

                    // 前の合計時間帯必要数の合計を取得
                    beforeTotal = idMasterTable.find("." + beforeTotalName).find("input[type = 'text']").val().split("/")[1].trim();

                    if (i == parseInt(requiredTimeTableNO) - 1) {
                        // 現在の合計数を計算
                        arryRequiredTimeTable[i] = parseInt(requiredTimeTableLeft) + parseInt(beforeTotal);
                        // 値を入力フォームに代入
                        idMasterTable.find("." + classColumnName).find("input[type = 'text']").val(requiredTimeTableLeft + " / " + arryRequiredTimeTable[i]);
                        continue;
                    }

                    // 現在の合計数を計算
                    arryRequiredTimeTable[i] = parseInt(arryRequiredTimeTable[i - 1]) + parseInt(requiredTimeTableLeft);
                    //　値を入力フォームに代入
                    idMasterTable.find("." + requiredTimeTableName + "-" + (i + 1)).find("input[type = 'text']").val(requiredTimeTableLeft + " / " + arryRequiredTimeTable[i]);
                }
            }

            //class = "requiredTimeTable-1"の場合
            if (classColumnName === "requiredTimeTable-1") {
                idMasterTable.find(".requiredTimeTable-1").find("input[type = 'text']").val("0" + " / " + arryRequiredTimeTable[0]);
                idMasterTable.find(".requiredTimeTable-2").find("input[type = 'text']").val(arryRequiredTimeTable[0] + " / " + arryRequiredTimeTable[1]);
                idMasterTable.find(".requiredTimeTable-3").find("input[type = 'text']").val(arryRequiredTimeTable[0] + " / " + arryRequiredTimeTable[2]);
                idMasterTable.find(".requiredTimeTable-4").find("input[type = 'text']").val(arryRequiredTimeTable[0] + " / " + arryRequiredTimeTable[3]);
                idMasterTable.find(".requiredTimeTable-5").find("input[type = 'text']").val(arryRequiredTimeTable[0] + " / " + arryRequiredTimeTable[4]);
                idMasterTable.find(".requiredTimeTable-6").find("input[type = 'text']").val(arryRequiredTimeTable[0] + " / " + arryRequiredTimeTable[5]);
                idMasterTable.find(".requiredTimeTable-7").find("input[type = 'text']").val(arryRequiredTimeTable[0] + " / " + arryRequiredTimeTable[6]);
                idMasterTable.find(".requiredTimeTable-8").find("input[type = 'text']").val(requiredTimeTableRight + " / " + arryRequiredTimeTable[7]);
            }
        }
        catch (e) {
            alert("予期せぬエラーが発生しました\n" + "エラー内容 : " + e);
        }
    });

    //------------------------------------------------------------------------------------------------------------
    // 概要   : 時間帯必要数⑨～⑪の単体処理
    // 引数   : className, masterTable
    // 戻り値 : 無し 
    //------------------------------------------------------------------------------------------------------------
    function aloneCalculation(className, masterTable) {
        // 一つ前のクラス名を格納する変数
        var beforeClassName = null;

        // 一つ前のクラスの値を格納する変数
        var beforeClassValue = null;

        // 現在のクラスの時間帯必要数を取得
        var classValue = masterTable.find("." + className).find("input[type = 'text']").val();

        if (classValue.indexOf("/") == -1) { }
        else {
            classValue = classValue.split("/")[0].trim();
        }

        // 一つ前のクラス名を設定
        if (className === "requiredTimeTable-9") {
            beforeClassName = "requiredTimeTable-8";
        }
        else if (className === "requiredTimeTable-10") {
            beforeClassName = "requiredTimeTable-9";
        }
        else {
            beforeClassName = "requiredTimeTable-10";
        }

        // 一つ前のクラスの合計値を取得
        beforeClassValue = masterTable.find("." + beforeClassName).find("input[type = 'text']").val().split("/")[1].trim();

        //合計数を計算し入力フォームに値を代入
        masterTable.find("." + className).find("input[type = 'text']").val(classValue + " / " + (parseInt(beforeClassValue) + parseInt(classValue)));
    }

    //------------------------------------------------------------------------------------------------------------
    // 概要   : 時間単位の生産数を算出
    // 引数   : dailyTotalValue
    // 戻り値 : perUnitTimeCount 
    //------------------------------------------------------------------------------------------------------------
    function calculationTimeUnit(dailyTotalValue) {

        // 日当必要台数から時間単位の必要数を算出
        var perUnitTimeCount = Math.floor(dailyTotalValue / 8);
        // 余りを算出
        var perUnitTimeRemainder = parseInt(dailyTotalValue) % 8;

        // 余りがある場合は桁を繰り上げる
        if (perUnitTimeRemainder == "0") { }
        else {
            perUnitTimeCount = parseInt(perUnitTimeCount) + 1;
        }

        return perUnitTimeCount;
    }

    //------------------------------------------------------------------------------------------------------------
    // 概要   : 8時間目の生産数を算出
    // 引数   : dailyTotalValue, timeUnitValue
    // 戻り値 : eightUnitTimeCount
    //------------------------------------------------------------------------------------------------------------
    function calculationEightTimeUnit(dailyTotalValue, timeUnitValue) {

        // ８時間目の生産数を計算
        var eightUnitTimeCount = parseInt(dailyTotalValue) - (timeUnitValue * 7);

        return eightUnitTimeCount;
    }
});
