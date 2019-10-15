//-------------------------------------------------------------------------------------
// �T�v : ���ԑѕK�v���̐��������Z�o���l���Z�b�g����B
//        �@�����̓t�H�[����"/"���܂܂�Ă��Ȃ��ꍇ�́A�������s���Ȃ��B
//-------------------------------------------------------------------------------------

$(function () {


    //���ԑѕK�v���ɉ����ĎZ�o
    $(".timeTableReflect").click(function () {
        try {
            //���݂̃e�[�u�����ڂ̃N���X�����擾
            var classColumnName = $(this).parent().attr("class");

            //���ԑѕK�v���̔ԍ����擾
            var requiredTimeTableName = classColumnName.split("-")[0];
            var requiredTimeTableNO = classColumnName.split("-")[1];
            var arryRequiredTimeTable = new Array();

            //���͉�ʂ̐e�v�f���擾
            var idMasterTable = $(this).parents(".masterTable").find("tbody");
            var dailyNeedNumberValue = idMasterTable.find(".dailyNeedNumber").find("input[type = 'text']").val();

            // ���ԑѕK�v���H�`�J�͑ΏۊO�̂��߁A�ʏ���
            if (classColumnName === "requiredTimeTable-9" || classColumnName === "requiredTimeTable-10" || classColumnName === "requiredTimeTable-11") {
                aloneCalculation(classColumnName, idMasterTable);
                return false;
            }

            //�O�̍��v���ԑѕK�v�����擾����ϐ�
            var beforeTotal = null;

            // �O�̍��v���ԑѕK�v���̃N���X�����擾
            var beforeTotalName = requiredTimeTableName + "-" + (parseInt(requiredTimeTableNO) - 1);

            // ���ԑѕK�v�����������͔���p
            var inputAuto = true;

            //�ҏW���̎��ԑѕK�v���̃��R�[�h�̒l���擾
            var requiredTimeTable = idMasterTable.find("." + classColumnName).find("input[type = 'text']").val();
            var requiredTimeTableLeft = null;
            var requiredTimeTableRight = null;

            if (!requiredTimeTable == "") {
                inputAuto = false;
                requiredTimeTableLeft = requiredTimeTable.split("/")[0].trim();
                requiredTimeTableRight = requiredTimeTable.split("/")[1].trim();
            }

            // ���͏����J�n
            for (var i = parseInt(requiredTimeTableNO) - 1; i <= 7; i++) {

                // ���ԑѕK�v���@�̏ꍇ
                if (classColumnName === "requiredTimeTable-1") {
                    if (i == 0) {

                        // �������͂̏ꍇ
                        if (inputAuto) {
                            requiredTimeTableRight = calculationTimeUnit(dailyNeedNumberValue);
                        }

                        arryRequiredTimeTable[i] = requiredTimeTableRight;
                        continue;
                    }

                    //���ԑѕK�v���G�̕��q���Z�o
                    if (i == 7 && inputAuto) {
                        requiredTimeTableRight = calculationEightTimeUnit(dailyNeedNumberValue, requiredTimeTableRight);
                    }

                    // ���݂̍��v�����v�Z
                    arryRequiredTimeTable[i] = parseInt(arryRequiredTimeTable[i - 1]) + parseInt(requiredTimeTableRight);
                }

                // ���ԑѕK�v���@�ȊO�̏ꍇ
                else {

                    // �O�̍��v���ԑѕK�v���̍��v���擾
                    beforeTotal = idMasterTable.find("." + beforeTotalName).find("input[type = 'text']").val().split("/")[1].trim();

                    if (i == parseInt(requiredTimeTableNO) - 1) {
                        // ���݂̍��v�����v�Z
                        arryRequiredTimeTable[i] = parseInt(requiredTimeTableLeft) + parseInt(beforeTotal);
                        // �l����̓t�H�[���ɑ��
                        idMasterTable.find("." + classColumnName).find("input[type = 'text']").val(requiredTimeTableLeft + " / " + arryRequiredTimeTable[i]);
                        continue;
                    }

                    // ���݂̍��v�����v�Z
                    arryRequiredTimeTable[i] = parseInt(arryRequiredTimeTable[i - 1]) + parseInt(requiredTimeTableLeft);
                    //�@�l����̓t�H�[���ɑ��
                    idMasterTable.find("." + requiredTimeTableName + "-" + (i + 1)).find("input[type = 'text']").val(requiredTimeTableLeft + " / " + arryRequiredTimeTable[i]);
                }
            }

            //class = "requiredTimeTable-1"�̏ꍇ
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
            alert("�\�����ʃG���[���������܂���\n" + "�G���[���e : " + e);
        }
    });

    //------------------------------------------------------------------------------------------------------------
    // �T�v   : ���ԑѕK�v���H�`�J�̒P�̏���
    // ����   : className, masterTable
    // �߂�l : ���� 
    //------------------------------------------------------------------------------------------------------------
    function aloneCalculation(className, masterTable) {
        // ��O�̃N���X�����i�[����ϐ�
        var beforeClassName = null;

        // ��O�̃N���X�̒l���i�[����ϐ�
        var beforeClassValue = null;

        // ���݂̃N���X�̎��ԑѕK�v�����擾
        var classValue = masterTable.find("." + className).find("input[type = 'text']").val();

        if (classValue.indexOf("/") == -1) { }
        else {
            classValue = classValue.split("/")[0].trim();
        }

        // ��O�̃N���X����ݒ�
        if (className === "requiredTimeTable-9") {
            beforeClassName = "requiredTimeTable-8";
        }
        else if (className === "requiredTimeTable-10") {
            beforeClassName = "requiredTimeTable-9";
        }
        else {
            beforeClassName = "requiredTimeTable-10";
        }

        // ��O�̃N���X�̍��v�l���擾
        beforeClassValue = masterTable.find("." + beforeClassName).find("input[type = 'text']").val().split("/")[1].trim();

        //���v�����v�Z�����̓t�H�[���ɒl����
        masterTable.find("." + className).find("input[type = 'text']").val(classValue + " / " + (parseInt(beforeClassValue) + parseInt(classValue)));
    }

    //------------------------------------------------------------------------------------------------------------
    // �T�v   : ���ԒP�ʂ̐��Y�����Z�o
    // ����   : dailyTotalValue
    // �߂�l : perUnitTimeCount 
    //------------------------------------------------------------------------------------------------------------
    function calculationTimeUnit(dailyTotalValue) {

        // �����K�v�䐔���玞�ԒP�ʂ̕K�v�����Z�o
        var perUnitTimeCount = Math.floor(dailyTotalValue / 8);
        // �]����Z�o
        var perUnitTimeRemainder = parseInt(dailyTotalValue) % 8;

        // �]�肪����ꍇ�͌����J��グ��
        if (perUnitTimeRemainder == "0") { }
        else {
            perUnitTimeCount = parseInt(perUnitTimeCount) + 1;
        }

        return perUnitTimeCount;
    }

    //------------------------------------------------------------------------------------------------------------
    // �T�v   : 8���Ԗڂ̐��Y�����Z�o
    // ����   : dailyTotalValue, timeUnitValue
    // �߂�l : eightUnitTimeCount
    //------------------------------------------------------------------------------------------------------------
    function calculationEightTimeUnit(dailyTotalValue, timeUnitValue) {

        // �W���Ԗڂ̐��Y�����v�Z
        var eightUnitTimeCount = parseInt(dailyTotalValue) - (timeUnitValue * 7);

        return eightUnitTimeCount;
    }
});
