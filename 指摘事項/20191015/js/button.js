//-------------------------------------------------------------------------------------
// �T�v : �ǉ��{�^���A�ύX�{�^���A�폜�{�^������
//        �@�����̓t�H�[����"/"���܂܂�Ă��Ȃ��ꍇ�́A�������s���Ȃ��B
//-------------------------------------------------------------------------------------

$(function () {
    $(".add, .change, .delete").on("click", function () {
        $(".popup-overlay, .popup-content").addClass("active");
    });

    $(".close, .popup-overlay").on("click", function () {
        $(".popup-overlay, .popup-content").removeClass("active");
    });

});