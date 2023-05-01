// 스크롤시 헤더 색상 변경
$(window).on('scroll',function(){
    if($(window).scrollTop()){
        $('header').addClass('active');
    }else{
        $('header').removeClass('active');
    }
});

// 제휴문의 클릭시 준비중입니다 오버레이
$(document).ready(function(){     
    $('.alliance').on('click', function() {
        $('.allianceOverlayWrap').addClass('on');
    });
    $('.close_icon, .allianceOverlayWrap').on('click', function() { 
        $('.allianceOverlayWrap').removeClass('on');
    });
    $('.alliance').on('click', function() {
        $('body').addClass('scrollLock');
    });
    $('.headerCloseIcon, .allianceOverlayWrap').on('click', function() { 
        $('body').removeClass('scrollLock');
    });
});