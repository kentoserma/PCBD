//-------------------------------------------------------------
// �T�v : �}�X�^�e�[�u���̓��̓t�H�[���ɓ��͐�����݂���B
//        ���͐����͕����R�[�h�ɂ���Đ��䂷��B
//-------------------------------------------------------------

//�A���t�@�x�b�g           65�`90
//0�`9                     48�`57
//�e���L�[0�`9             96�`105
//�L��                     186�`226
//�e���L�[�L��             106�`111


$(function () {

    // #region ���p����

    // #region ���C��NO
    //$("tbody").find(".lineNo").find("input[type = 'text']").keydown(function (e) {
    //    var k = e.keyCode;
    //    // �A���t�@�x�b�g, 0�`9, �e���L�[0�`9, /, �e���L�[/
    //    //�X�y�[�X, backspace, delete, ��, ��, Tab�@�̂ݓ��͉�
    //    if (!((k >= 65 && k <= 90) || (k >= 48 && k <= 57) || (k >= 96 && k <= 105) || k == 191 || k == 111 || k == 32 || k == 8 || k == 46 || k == 39 || k == 37 || k == 9 || k == 244 || k == 115)) {
    //        return false;
    //    }
    //});
    // #endregion

    // #region ���C��NO(�\��)
    //$("tbody").find(".lineNoDisplay").find("input[type = 'text']").keydown(function (e) {
    //    var k = e.keyCode;
    //    // �A���t�@�x�b�g, 0�`9, �e���L�[0�`9, /, �e���L�[/
    //    //�X�y�[�X, backspace, delete, ��, ��, Tab�@�̂ݓ��͉�
    //    if (!((k >= 65 && k <= 90) || (k >= 48 && k <= 57) || (k >= 96 && k <= 105) || k == 191 || k == 111 || k == 32 || k == 8 || k == 46 || k == 39 || k == 37 || k == 9 || k == 244 || k == 115)) {
    //        return false;
    //    }
    //});
    // #endregion

    // #region �Ԏ�
    // ��������
    // #endregion

    // #region ���P�[�V����
    //�����Ȃ�
    // #endregion

    // #region ���ԑѕK�v���@
    $("tbody").find(".requiredTimeTable-1").find("input[type = 'text']").keydown(function (e) {
        var k = e.keyCode;
        //0�`9, �e���L�[0�`9, /, �e���L�[/, �X�y�[�X, backspace, delete, ��, ��, Tab�@�̂ݓ��͉�
        if (!((k >= 48 && k <= 57) || (k >= 96 && k <= 105) || k == 111 || k == 191 || k == 32 || k == 8 || k == 46 || k == 39 || k == 37 || k == 9 || k == 244)) {
            return false;
        }

        aa = $(this).parent().attr("class");

        checkForm(aa);
    });
    // #endregion

    // #region ���ԑѕK�v���A
    $("tbody").find(".requiredTimeTable-2").find("input[type = 'text']").keydown(function (e) {
        var k = e.keyCode;
        //0�`9, �e���L�[0�`9, /, �e���L�[/, �X�y�[�X, backspace, delete, ��, ��, Tab�@�̂ݓ��͉�
        if (!((k >= 48 && k <= 57) || (k >= 96 && k <= 105) || k == 111 || k == 191 || k == 32 || k == 8 || k == 46 || k == 39 || k == 37 || k == 9 || k == 244)) {
            return false;
        }
    });
    // #endregion

    // #region ���ԑѕK�v���B
    $("tbody").find(".requiredTimeTable-3").find("input[type = 'text']").keydown(function (e) {
        var k = e.keyCode;
        //0�`9, �e���L�[0�`9, /, �e���L�[/, �X�y�[�X, backspace, delete, ��, ��, Tab�@�̂ݓ��͉�
        if (!((k >= 48 && k <= 57) || (k >= 96 && k <= 105) || k == 111 || k == 191 || k == 32 || k == 8 || k == 46 || k == 39 || k == 37 || k == 9 || k == 244)) {
            return false;
        }
    });
    // #endregion

    // #region ���ԑѕK�v���C
    $("tbody").find(".requiredTimeTable-4").find("input[type = 'text']").keydown(function (e) {
        var k = e.keyCode;
        //0�`9, �e���L�[0�`9, /, �e���L�[/, �X�y�[�X, backspace, delete, ��, ��, Tab�@�̂ݓ��͉�
        if (!((k >= 48 && k <= 57) || (k >= 96 && k <= 105) || k == 111 || k == 191 || k == 32 || k == 8 || k == 46 || k == 39 || k == 37 || k == 9 || k == 244)) {
            return false;
        }
    });
    // #endregion

    // #region ���ԑѕK�v���D
    $("tbody").find(".requiredTimeTable-5").find("input[type = 'text']").keydown(function (e) {
        var k = e.keyCode;
        //0�`9, �e���L�[0�`9, /, �e���L�[/, �X�y�[�X, backspace, delete, ��, ��, Tab�@�̂ݓ��͉�
        if (!((k >= 48 && k <= 57) || (k >= 96 && k <= 105) || k == 111 || k == 191 || k == 32 || k == 8 || k == 46 || k == 39 || k == 37 || k == 9 || k == 244)) {
            return false;
        }
    });
    // #endregion

    // #region ���ԑѕK�v���E
    $("tbody").find(".requiredTimeTable-6").find("input[type = 'text']").keydown(function (e) {
        var k = e.keyCode;
        //0�`9, �e���L�[0�`9, /, �e���L�[/, �X�y�[�X, backspace, delete, ��, ��, Tab�@�̂ݓ��͉�
        if (!((k >= 48 && k <= 57) || (k >= 96 && k <= 105) || k == 111 || k == 191 || k == 32 || k == 8 || k == 46 || k == 39 || k == 37 || k == 9 || k == 244)) {
            return false;
        }
    });
    // #endregion

    // #region ���ԑѕK�v���F
    $("tbody").find(".requiredTimeTable-7").find("input[type = 'text']").keydown(function (e) {
        var k = e.keyCode;
        //0�`9, �e���L�[0�`9, /, �e���L�[/, �X�y�[�X, backspace, delete, ��, ��, Tab�@�̂ݓ��͉�
        if (!((k >= 48 && k <= 57) || (k >= 96 && k <= 105) || k == 111 || k == 191 || k == 32 || k == 8 || k == 46 || k == 39 || k == 37 || k == 9 || k == 244)) {
            return false;
        }
    });
    // #endregion

    // #region ���ԑѕK�v���G
    $("tbody").find(".requiredTimeTable-8").find("input[type = 'text']").keydown(function (e) {
        var k = e.keyCode;
        //0�`9, �e���L�[0�`9, /, �e���L�[/, �X�y�[�X, backspace, delete, ��, ��, Tab�@�̂ݓ��͉�
        if (!((k >= 48 && k <= 57) || (k >= 96 && k <= 105) || k == 111 || k == 191 || k == 32 || k == 8 || k == 46 || k == 39 || k == 37 || k == 9 || k == 244)) {
            return false;
        }
    });
    // #endregion

    // #region ���ԑѕK�v���H
    $("tbody").find(".requiredTimeTable-9").find("input[type = 'text']").keydown(function (e) {
        var k = e.keyCode;
        //0�`9, �e���L�[0�`9, /, �e���L�[/, �X�y�[�X, backspace, delete, ��, ��, Tab�@�̂ݓ��͉�
        if (!((k >= 48 && k <= 57) || (k >= 96 && k <= 105) || k == 111 || k == 191 || k == 32 || k == 8 || k == 46 || k == 39 || k == 37 || k == 9 || k == 244)) {
            return false;
        }
    });
    // #endregion

    // #region ���ԑѕK�v���I
    $("tbody").find(".requiredTimeTable-10").find("input[type = 'text']").keydown(function (e) {
        var k = e.keyCode;
        //0�`9, �e���L�[0�`9, /, �e���L�[/, �X�y�[�X, backspace, delete, ��, ��, Tab�@�̂ݓ��͉�
        if (!((k >= 48 && k <= 57) || (k >= 96 && k <= 105) || k == 111 || k == 191 || k == 32 || k == 8 || k == 46 || k == 39 || k == 37 || k == 9 || k == 244)) {
            return false;
        }
    });
    // #endregion

    // #region ���ԑѕK�v���J
    $("tbody").find(".requiredTimeTable-11").find("input[type = 'text']").keydown(function (e) {
        var k = e.keyCode;
        //0�`9, �e���L�[0�`9, /, �e���L�[/, �X�y�[�X, backspace, delete, ��, ��, Tab�@�̂ݓ��͉�
        if (!((k >= 48 && k <= 57) || (k >= 96 && k <= 105) || k == 111 || k == 191 || k == 32 || k == 8 || k == 46 || k == 39 || k == 37 || k == 9 || k == 244)) {
            return false;
        }
    });
    // #endregion

    // #region �K�v�l�H
    $("tbody").find(".needArtificial").find("input[type = 'text']").keydown(function (e) {
        var k = e.keyCode;
        //0�`9, �e���L�[0�`9, /, �e���L�[/, �X�y�[�X, backspace, delete, ��, ��, Tab�@�̂ݓ��͉�
        if (!((k >= 48 && k <= 57) || (k >= 96 && k <= 105) || k == 8 || k == 46 || k == 39 || k == 37 || k == 9 || k == 244 || k == 110 || k == 190)) {
            return false;
        }
    });
    // #endregion

    // #region �Ґ��l�H
    $("tbody").find(".organizationArtificial").find("input[type = 'text']").keydown(function (e) {
        var k = e.keyCode;
        //0�`9, �e���L�[0�`9, /, �e���L�[/, �X�y�[�X, backspace, delete, ��, ��, Tab�@�̂ݓ��͉�
        if (!((k >= 48 && k <= 57) || (k >= 96 && k <= 105) || k == 8 || k == 46 || k == 39 || k == 37 || k == 9 || k == 244 || k == 110 || k == 190)) {
            return false;
        }
    });
    // #endregion

    // #region ���x�I�[�_�[
    $("tbody").find(".monthOrder").find("input[type = 'text']").keydown(function (e) {
        var k = e.keyCode;
        //0�`9, �e���L�[0�`9, /, �e���L�[/, �X�y�[�X, backspace, delete, ��, ��, Tab�@�̂ݓ��͉�
        if (!((k >= 48 && k <= 57) || (k >= 96 && k <= 105) || k == 8 || k == 46 || k == 39 || k == 37 || k == 9 || k == 244 || k == 110 || k == 190)) {
            return false;
        }
    });
    // #endregion

    // #region �����K�v�䐔
    $("tbody").find(".dailyNeedNumber").find("input[type = 'text']").keydown(function (e) {
        var k = e.keyCode;
        //0�`9, �e���L�[0�`9, /, �e���L�[/, �X�y�[�X, backspace, delete, ��, ��, Tab�@�̂ݓ��͉�
        if (!((k >= 48 && k <= 57) || (k >= 96 && k <= 105) || k == 8 || k == 46 || k == 39 || k == 37 || k == 9 || k == 244 || k == 110 || k == 190)) {
            return false;
        }
    });
    // #endregion

    // #region ���s�^�N�g�^�C��
    $("tbody").find(".executeTactTime").find("input[type = 'text']").keydown(function (e) {
        var k = e.keyCode;
        //0�`9, �e���L�[0�`9, /, �e���L�[/, �X�y�[�X, backspace, delete, ��, ��, Tab�@�̂ݓ��͉�
        if (!((k >= 48 && k <= 57) || (k >= 96 && k <= 105) || k == 8 || k == 46 || k == 39 || k == 37 || k == 9 || k == 244 || k == 110 || k == 190)) {
            return false;
        }
    });
    // #endregion

    // #region �O��Ɣ\��
    $("tbody").find(".previousWorkEfficiency").find("input[type = 'text']").keydown(function (e) {
        var k = e.keyCode;
        //0�`9, �e���L�[0�`9, /, �e���L�[/, �X�y�[�X, backspace, delete, ��, ��, Tab�@�̂ݓ��͉�
        if (!((k >= 48 && k <= 57) || (k >= 96 && k <= 105) || k == 8 || k == 46 || k == 39 || k == 37 || k == 9 || k == 244 || k == 110 || k == 190)) {
            return false;
        }
    });
    // #endregion

    // #region �R�l
    $("tbody").find(".weightedAverage-3").find("input[type = 'text']").keydown(function (e) {
        var k = e.keyCode;
        //0�`9, �e���L�[0�`9, /, �e���L�[/, �X�y�[�X, backspace, delete, ��, ��, Tab�@�̂ݓ��͉�
        if (!((k >= 48 && k <= 57) || (k >= 96 && k <= 105) || k == 8 || k == 46 || k == 39 || k == 37 || k == 9 || k == 244 || k == 110 || k == 190)) {
            return false;
        }
    });
    // #endregion

    // #region �S�l
    $("tbody").find(".weightedAverage-4").find("input[type = 'text']").keydown(function (e) {
        var k = e.keyCode;
        //0�`9, �e���L�[0�`9, /, �e���L�[/, �X�y�[�X, backspace, delete, ��, ��, Tab�@�̂ݓ��͉�
        if (!((k >= 48 && k <= 57) || (k >= 96 && k <= 105) || k == 8 || k == 46 || k == 39 || k == 37 || k == 9 || k == 244 || k == 110 || k == 190)) {
            return false;
        }
    });
    // #endregion

    // #region �T�l
    $("tbody").find(".weightedAverage-5").find("input[type = 'text']").keydown(function (e) {
        var k = e.keyCode;
        //0�`9, �e���L�[0�`9, /, �e���L�[/, �X�y�[�X, backspace, delete, ��, ��, Tab�@�̂ݓ��͉�
        if (!((k >= 48 && k <= 57) || (k >= 96 && k <= 105) || k == 8 || k == 46 || k == 39 || k == 37 || k == 9 || k == 244 || k == 110 || k == 190)) {
            return false;
        }
    });
    // #endregion

    // #endregion

    // #region �S�p���͐���
    var className = null;

    // #region �Ώۂ̃N���X�����擾
    $("tbody").find("input[type = 'text']").on("input", function (e) {

        // ���쒆�̃e�L�X�g�̐e�v�f�̃N���X���擾����B
        className = $(this).parent().attr("class");
        // �Ԏ�ƃ��P�[�V�����͑ΏۊO
        switch (className) {
            case "model":
            case "location":
                return false;
        }

        checkForm(className);
    });
    // #endregion

    // �S�p���֎~����
    function checkForm(name) {

        //���ݓ��͂���Ă���l���擾
        var str = $("tbody").find("." + name).find("input[type = 'text']").val();

        //�S�p�݂̂���������
        while (str.match(/[^A-Z^a-z\d\-]/)) {
            str = str.replace(/[^A-Z^a-z\d\-]/, "");
        }

        //�S�p����菜�����l����
        $("tbody").find("." + name).find("input[type = 'text']").val(str);
    }
    // #endregion
});
