'use strict';

/*********************************************************
*                    Modal Popup Event                   *
*********************************************************/

  // Open Modal Event
  function openPopup(popupName) {
    let modalWrap = document.getElementById('popupWrap');
    let popup = document.getElementById('popup' + popupName);

    document.body.style.overflow = 'hidden';
    modalWrap.classList.add('on');
    popup.classList.add('on');
  }


  // Close Modal Event
  function closePopup(popupName) {
    let modalWrap = document.getElementById('popupWrap');
    let popup = document.getElementById('popup' + popupName);

    document.body.style.removeProperty('overflow');
    popup.classList.remove('on');
    modalWrap.classList.remove('on');
  }



/*********************************************************
*                    Document Loaded                     *
*********************************************************/

$(function(){

  /********* Common *********/

    /* Header 햄버거메뉴 및 GNB 스타일 변경 */
    $('#mobileGnb').on('click', function(){
      let active = $(this).hasClass('active');
      if(!active){
        $(this).addClass('active');
        $('#gnb').addClass('active');
      } else {
        $(this).removeClass('active');
        $('#gnb').removeClass('active');
      }
    });

    /* 마우스휠 이벤트 */
    $('.wheelSection').each(function(){
      $(this).on('mousewheel DOMMousewheel', function(e){
      //mousewheel : 크롬, 오페라, 익스엣지 적용되는 이벤트(또는 이벤트 핸들러)
      //DOMMousewheel : 파이어 폭스, 익스 9+
        e.preventDefault();  //초기화되는 부분을 방지
        let delta = 0;  //브라우저가 로딩되면서 마우스 휠을 돌리지 않은 상태
        if(!event){  //마우스 휠을 돌리지 않아서 이벤트가 발생하지 않은 상태
          event=window.event;  //어떠한 이벤트도 발생하지 않았을 경우, 윈도의 브라우저 초기 로딩상태를 유지시킴			
        }
        //event.wheelDelta(크롬, 익스엣지)
        //휠을 내렸을 경우 -120   /   휠을 올렸을 경우 120
        //event.wheelDelta(오페라)
        //휠을 내렸을 경우 120   /   휠을 올렸을 경우 -120
        //event.detail(파이어폭스)
        //휠을 내렸을 경우 4 / 휠을 올렸을 경우 -4
        if(event.wheelDelta){
          delta = event.wheelDelta;
          //휠을 내렸을 경우 -120   /   휠을 올렸을 경우 120
          if(window.opera){
            delta = -delta;  //오페라 브라우저의 경우 마우스 휠로부터 이벤트 적용시 반대의 값을 받아오기 때문에 역으로 반환
          }
        }else if(event.detail){
          delta = -event.detail;
        }
        
        let moveTo = null; //휠 이벤트에 대한 값을 초기화. 값이 null값(값이 없음을 이야기함)
        //마우스 휠을 내렸을 경우
        if(delta<0){   //마우스 휠을 내렸을 때 [음의 정수] 값을 받아오는 경우
          if($(this).next() != undefined){  //다음으로 이동하려는 섹션이 존재하는 경우
            moveTo = $(this).next().offset().top;
          }
        }else{  //마우스 휠을 올렸을 때, [양의 정수] 값을 받아오는 경우
          if($(this).prev() != undefined){  //이전으로 이동하려는 섹션이 존재하는 경우
            moveTo = $(this).prev().offset().top;
            if($(this).prev().offset().top == undefined){
              e.preventDefault()
            }
          }
        }
        /*동적 움직임을 구현*/
        $('html, body').stop().animate({scrollTop : moveTo+'px'}, {duration:300, complete:function(){}});
        //$("html, body").stop().animate({scrollTop : moveTo+"px"}, 시간);  => 각박스의 상단으로 이동동시키는 부분을 적용
        //{duration:700, complete:function(){}} : 소요되는 시간 0.7초,  도달하기까지의 함수구문으로 대기하라는 의미
      });
    });	

    /* Footer 패밀리사이트 애니메이션 */
    $('.familySiteBtn').on('click', function(){
      let active = $(this).hasClass('active')
      if(!active){
        $(this).addClass('active');
        $('.siteList').slideDown(200);
      } else {
        $(this).removeClass('active');
        $('.siteList').slideUp(200);
      }
    });

  /********* Common *********/



  /********* Main.html *********/

    /* Section1 텍스트 스크롤효과 */
    $(window).scroll(function(){
      // 스크롤 이벤트가 감지되었을 때,

      $('#main #section1 .slideItem').each(function(i){
        // 선택된 모든 Elements에게 각각 반복작업을 실행한다.
        // 여기서 i는 slideItem의 각 Index를 갖는다.

        let offsetVal = $(this).offset().top + 84, 
            // 각 Element별 Y좌표 값
            windowMid = $(window).height() / 2, 
            // 현재 보이는 화면의 절반값
            scrollVal = $(window).scrollTop(),
            // 현재 스크롤된 Y좌표 값

            opacityTopPoint1 = scrollVal + windowMid + 100,
            opacityTopPoint2 = scrollVal + windowMid + 200,
            opacityTopPoint3 = scrollVal + windowMid + 250,

            opacityBotPoint1 = scrollVal + windowMid - 100,
            opacityBotPoint2 = scrollVal + windowMid - 200,
            opacityBotPoint3 = scrollVal + windowMid - 250,
            
            hideTopPoint = scrollVal + windowMid + 300,
            hideBotPoint = scrollVal + windowMid - 300;
        
        ++i;
        // i값과 각 Elements의 클래스 카운팅차이 
        // i는 0부터시작, 우리의 클래스는 1부터 시작하는 차이를 매칭시켜줌


        if(offsetVal < opacityTopPoint1 || offsetVal > opacityBotPoint1){
          // 각 Element가 화면 중앙에 왔을때
          $('#main #section1 .item'+i).css("opacity", 1);
        }
        if(offsetVal >= opacityTopPoint1 || offsetVal <= opacityBotPoint1 ){
          // 각 Element가 화면 정중앙에 위아래로 50px 이상 멀어졌을때
          $('#main #section1 .item'+i).css({'opacity':0.3})
        }
        if(offsetVal >= opacityTopPoint2 || offsetVal <= opacityBotPoint2 ){
          // 각 Element가 화면 정중앙에 위아래로 100px 이상 멀어졌을때
          $('#main #section1 .item'+i).css({'opacity':0.1})
        }
        if(offsetVal >= opacityTopPoint3 || offsetVal <= opacityBotPoint3 ){
          // 각 Element가 화면 정중앙에 위아래로 150px 이상 멀어졌을때
          $('#main #section1 .item'+i).css({'opacity':0.001})
        }
        if(offsetVal >= hideTopPoint || offsetVal <= hideBotPoint ){
          // 각 Element가 화면 정중앙에 위아래로 200px 이상 멀어졌을때
          $('#main #section1 .item'+i).css({'opacity':0})
        }
      }); 
    });

    /* Section2 텍스트 스크롤효과 */
    const controller = new ScrollMagic.Controller();

    // 여행의 모든것,
    let tween1 = gsap.to('#main #section2 .rollingFrame .rollingItem.item1', {
      opacity: 1,
    });

    let scene1 = new ScrollMagic.Scene({
      triggerElement: "#main #section2",
      triggerHook:  0 ,
      offset: 0,
      duration: "40%",
    })
    .setTween(tween1)
    .addTo(controller)
    // .addIndicators({
    //   name: "tween1"
    // });

    // 끊임없이 성장하는
    let tween2 = gsap.to('#main #section2 .rollingFrame .rollingItem.item2', {
      opacity: 1,
    });
    let scene2 = new ScrollMagic.Scene({
      triggerElement: "#main #section2",
      triggerHook:  0 ,
      offset: 325,
      duration: "40%",
    })
    .setTween(tween2)
    .addTo(controller)
    // .addIndicators({
    //   name: "tween2"
    // });

    // 엘에스컴퍼니
    let tween3 = gsap.to('#main #section2 .rollingFrame .rollingItem.item3', {
      scale: "1",
      opacity: 1,
    });

    let scene3 = new ScrollMagic.Scene({
      triggerElement: "#main #section2",
      triggerHook:  0 , //0~1 ,
      offset: 650,
      duration: "40%",
      
    })
    .setTween(tween3)
    .addTo(controller)
    // .addIndicators({
    //   name: "tween3"
    // });

    
    /* Section3 가로 스크롤효과 */

		let wipeAnimation = new TimelineMax()
    // animate to 2nd list
    .to("#main #section3 .slideContainer", 0.5, {z: -150})				// move back to origin in 3D space
    .to("#main #section3 .slideContainer", 1,   {x: "-16.666667%"})	// move in to first panel
    .to("#main #section3 .slideContainer", 0.5, {z: -0})		// move back in 3D space
    // animate to 3rd list
    .to("#main #section3 .slideContainer", 0.5, {z: -150, delay: 1})
    .to("#main #section3 .slideContainer", 1,   {x: "-33.333334%"})
    .to("#main #section3 .slideContainer", 0.5, {z: 0})
    // animate to 4th list
    .to("#main #section3 .slideContainer", 0.5, {z: -150, delay: 1})
    .to("#main #section3 .slideContainer", 1,   {x: "-50%"})
    .to("#main #section3 .slideContainer", 0.5, {z: 0})
    // animate to 5th list
    .to("#main #section3 .slideContainer", 0.5, {z: -150, delay: 1})
    .to("#main #section3 .slideContainer", 1,   {x: "-66.666667%"})
    .to("#main #section3 .slideContainer", 0.5, {z: 0})
    // animate to 6th list
    .to("#main #section3 .slideContainer", 0.5, {z: -150, delay: 1})
    .to("#main #section3 .slideContainer", 1,   {x: "-83.333334%"})
    .to("#main #section3 .slideContainer", 0.5, {z: 0});

    // create scene to pin and link animation
		new ScrollMagic.Scene({
      triggerElement: "#main #section3",
      triggerHook: "onLeave",
      duration: "1200%",
      scrub: 3,
    })
    .setPin("#main #section3")
    .setTween(wipeAnimation)
    //.addIndicators() // add indicators (requires plugin)
    .addTo(controller);



    /* Section4 목업 캐러셀 */
    $('#main #section4 #swiper').slick({
      infinite: true,
      autoplay: true,
      autoplaySpeed: 1500,
      arrows: false,
      dots: false,
    });
  /********* // Main.html *********/	



  /********* DesignDev.html *********/

    /*  Section4 캐러셀 */
    $('#designDev #designDevSwiper').slick({
      arrows: false,
      dots: true,
      autoplay: true,
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplaySpeed: 2000,
      responsive: [
        {
          breakpoint: 1280,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1
          }
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1
          }
        }
        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
      ]
    });

    $('#designDev #thumbnailVideo').slick({
      vertical: true,
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 500,
      arrows: false,
      verticalSwiping: false,
      speed: 3000,
      draggable: false,
      pauseOnFocus: false,
      pauseOnHover: false,
    });
});

