// ���X�N���[������������X�N���v�g

$(function () {
    //�X�N���[���X�s�[�h
    var speed = 60;
    $('.masterTable').mousewheel(function (event, mov) {
        //ie firefox
        $(this).scrollLeft($(this).scrollLeft() - mov * speed);
        //webkit
        $('body').scrollLeft($('body').scrollLeft() - mov * speed);
        return false;
    });
});