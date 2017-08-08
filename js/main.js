/*折叠*/
$(function(){
    var winH = $(window).height();
    var $btn1 = $('.offers-btn'), $inner = $btn1.next('.offers-list'), $parent = $btn1.parent('.special-offers');
    var innerH = $inner.data('height');
    var categorySpace = 10;

    if($('.offers-list p').length<=3){
        $btn1.hide();
    }else{
        $btn1.show();
        $btn1.on('click', function(){
           // bear = $page;
            if(!innerH){
                $inner.css('height', 'auto');
                innerH = $inner.height();
                $inner.removeAttr('style');
                $inner.data('height', innerH);
            }
            if($parent.hasClass('js_show')){
                $parent.removeClass('js_show');
            }else{
                //$parent.siblings().removeClass('js_show');
                $parent.addClass('js_show');
                if(this.offsetTop + this.offsetHeight + innerH > $parent.scrollTop() + winH){
                    var scrollTop = this.offsetTop + this.offsetHeight + innerH - winH + categorySpace;

                    if(scrollTop > this.offsetTop){
                        scrollTop = this.offsetTop - categorySpace;
                    }
                    $parent.scrollTop(scrollTop);
                }
            }
        });
    }



});
/*弹出框*/
$(function(){
    var $Dialog1 = $('#Dialog1'),
        $Dialog2 = $('#Dialog2'),
        $Dialog3 = $('#Dialog3');

    $('#dialogs').on('click', '.close-pop', function(){
        $(this).parents('.dialog-pop').fadeOut(200);
    });

    $('.showDialog1').on('click', function(){
        $Dialog1.fadeIn(200);
    });
    $('.showDialog2').on('click', function(){
        $Dialog2.fadeIn(200);
    });
    $('.showDialog3').on('click', function(){
        $Dialog3.fadeIn(200);
    });

});
/*tab切换*/
$(function(){
    $("#tabList li").on('click', function () {
        $(this).addClass("active").siblings(".active").removeClass("active");
        var _index=$(this).index();
        var _content=$("#tabContent .tab-item");
        _content.hide();
        _content.eq(_index).show().siblings().hide()
    });
});
/*会员卡*/
$(function () {
    $('#pay-card-btn').on('click',function () {
        var _checkBtnBox = $(this).find(".cuuju-cell-ft");
        var _checkBtn = _checkBtnBox.find("input[name='radio1']");
        if(_checkBtn.is(':checked')){
            $("#pay-card-box").slideDown();

        }
    })
})
/*修改电话号码*/
$(function () {
    $('#number-input').hide();
    $("#change-number").on('click',function () {
        $('#number-input').show().focus();
        $('#number-box').hide();
        $(this).hide();
    })
})
/*取消订单*/
$(function () {
    $(".dele-order").on('click',function () {
        $('.dele-order-box').show().delay(2000).fadeOut(100);
    })
})


