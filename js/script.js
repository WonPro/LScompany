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

  /* Main.html */

  /* Section1 텍스트 스크롤효과 */
  $(window).scroll(function(){
    // 스크롤 이벤트가 감지되었을 때,

    $('#section1 .slideItem').each(function(i){
      // 경로에 위치한 모든 아이템들에게 각각 반복작업을 실행한다.
      // 여기서 i는 slideItem의 각 Index를 갖는다.

      let offsetVal = $(this).offset().top + 100, 
          // 각 Element별 Y좌표 값
          windowMid = $(window).height() / 2, 
          // 현재 보이는 화면의 절반값
          scrollVal = $(window).scrollTop(),
          // 현재 스크롤된 Y좌표 값

          opacityTopPoint1 = scrollVal + windowMid + 100,
          opacityTopPoint2 = scrollVal + windowMid + 150,
          opacityTopPoint3 = scrollVal + windowMid + 200,

          opacityBotPoint1 = scrollVal + windowMid - 100,
          opacityBotPoint2 = scrollVal + windowMid - 150,
          opacityBotPoint3 = scrollVal + windowMid - 200,
          
          hideTopPoint = scrollVal + windowMid + 250,
          hideBotPoint = scrollVal + windowMid - 250;
      
      ++i;
      // i값과 각 Elements의 클래스 카운팅차이 
      // i는 0부터시작, 우리의 클래스는 1부터 시작하는 차이를 매칭시켜줌


      if(offsetVal < opacityTopPoint1 || offsetVal > opacityBotPoint1){
        // 각 Element가 화면 중앙에 왔을때
        $('#section1 .item'+i).css("opacity", 1);
      }
      if(offsetVal >= opacityTopPoint1 || offsetVal <= opacityBotPoint1 ){
        // 각 Element가 화면 정중앙에 위아래로 50px 이상 멀어졌을때
        $('#section1 .item'+i).css({'opacity':0.3})
      }
      if(offsetVal >= opacityTopPoint2 || offsetVal <= opacityBotPoint2 ){
        // 각 Element가 화면 정중앙에 위아래로 100px 이상 멀어졌을때
        $('#section1 .item'+i).css({'opacity':0.1})
      }
      if(offsetVal >= opacityTopPoint3 || offsetVal <= opacityBotPoint3 ){
        // 각 Element가 화면 정중앙에 위아래로 150px 이상 멀어졌을때
        $('#section1 .item'+i).css({'opacity':0.001})
      }
      if(offsetVal >= hideTopPoint || offsetVal <= hideBotPoint ){
        // 각 Element가 화면 정중앙에 위아래로 200px 이상 멀어졌을때
        $('#section1 .item'+i).css({'opacity':0})
      }
    }); 
  });
  /* //Section1 텍스트 스크롤효과 */



  /* Section2 텍스트 스크롤효과 */
  const controller = new ScrollMagic.Controller();

  // 여행의 모든것,
  let tween1 = gsap.to('#section2 .rollingFrame .rollingItem.item1', {
    opacity: 1,
  });

  let scene1 = new ScrollMagic.Scene({
    triggerElement: "#section2",
    triggerHook:  0 ,
    offset: 0,
    duration: "40%",
  })
  .setTween(tween1)
  .addTo(controller)


  // 끊임없이 성장하는
  let tween2 = gsap.to('#section2 .rollingFrame .rollingItem.item2', {
    opacity: 1,
  });
  let scene2 = new ScrollMagic.Scene({
    triggerElement: "#section2",
    triggerHook:  0 ,
    offset: 400,
    duration: "40%",
  })
  .setTween(tween2)
  .addTo(controller)

  // 엘에스컴퍼니
  let tween3 = gsap.to('#section2 .rollingFrame .rollingItem.item3', {
    scale: "1",
    opacity: 1,
  });

  let scene3 = new ScrollMagic.Scene({
    triggerElement: "#section2",
    triggerHook:  0 , //0~1 ,
    offset: 800,
    duration: "40%",
  })
  .setTween(tween3)
  .addTo(controller)
  /* //Section2 텍스트 스크롤효과 */

  let tween4Data;

  winResize();

  $(window).resize(function(){
      winResize();
  });

  function winResize(){
    let winWidth = $(this).width();

    if(winWidth>767){ // Mobile
      tween4Data = '-400rem'


      if(winWidth>1279){ //PC(1280px ~)
        tween4Data = '-640rem'
      }
    } else { //Tablet(768px ~ 1279px)
      tween4Data = '-400rem'
    }
  }

  
  /* Section3 텍스트 스크롤효과 */
  let tween4 = gsap.to('#section3 .rollingFrame .slideContainer', { 
    
    x: tween4Data,
  });

  let scene4 = new ScrollMagic.Scene({
    triggerElement: "#section3",
    triggerHook:  0,
    offset: 100,
    duration: "100%",
  })
  .setTween(tween4)
  .addTo(controller)
  /* //Section3 텍스트 스크롤효과 */

  var isMobile = (function(a){return /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4));})(navigator.userAgent||navigator.vendor||window.opera);

  // we'd only like to use iScroll for mobile...
  if (isMobile) {
    // configure iScroll
    var myScroll = new IScroll('#example-wrapper',
          {
            // don't scroll horizontal
            scrollX: false,
            // but do scroll vertical
            scrollY: true,
            // show scrollbars
            scrollbars: true,
            // deactivating -webkit-transform because pin wouldn't work because of a webkit bug: https://code.google.com/p/chromium/issues/detail?id=20574
            // if you dont use pinning, keep "useTransform" set to true, as it is far better in terms of performance.
            useTransform: false,
            // deativate css-transition to force requestAnimationFrame (implicit with probeType 3)
            useTransition: false,
            // set to highest probing level to get scroll events even during momentum and bounce
            // requires inclusion of iscroll-probe.js
            probeType: 3,
            // pass through clicks inside scroll container
            click: true 
          }
        );
    
    // overwrite scroll position calculation to use child's offset instead of container's scrollTop();
    controller.scrollPos(function () {
      return -myScroll.y;
    });

    // thanks to iScroll 5 we now have a real onScroll event (with some performance drawbacks)
    myScroll.on("scroll", function () {
      controller.update(true);
    });

    // add indicators to scrollcontent so they will be moved with it.
    scene4.addIndicators({parent: ".scrollContent"});
  } else {
    // add indicators (requires plugin)
    scene4.addIndicators();						
  }

  
  


  /* Section4 목업 캐러셀 */

  $('#section4 #swiper').slick({
    infinite: true,
    autoplay: true,
    autoplaySpeed: 1500,
    arrows: false,
    dots: false,
  });

  /* //Section4 목업 캐러셀 */


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
  /* //Footer 패밀리사이트 애니메이션 */

  /* // Main.html */

  /*************************************
  *            Wheel Movement          *
  *************************************/

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
        }
      }
      /*동적 움직임을 구현*/
      $('html, body').stop().animate({scrollTop : moveTo+'px'}, {duration:300, complete:function(){}});
      //$("html, body").stop().animate({scrollTop : moveTo+"px"}, 시간);  => 각박스의 상단으로 이동동시키는 부분을 적용
      //{duration:700, complete:function(){}} : 소요되는 시간 0.7초,  도달하기까지의 함수구문으로 대기하라는 의미
    });
  });	

   /* DesignDev.html Section4 캐러셀 */

  $('#designDevSwiper').slick({
    arrows: false,
    dots: true,
    autoplay: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplaySpeed: 2000,
  });

  $('#thumbnailVideo').slick({
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
  })
	


  // AOS start
  // AOS.init();

});

