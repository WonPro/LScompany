'use strict';

/*********************************************************
*                    Modal Popup Event                   *
*********************************************************/

  // Open Modal Event
  function openPopup(popupName) {
    let modalWrap = document.getElementById('popupWrap');
    let popup = document.getElementById('popup' + popupName);

    modalWrap.classList.add('on');
    popup.classList.add('on');
  }


  // Close Modal Event
  function closePopup(popupName) {
    let modalWrap = document.getElementById('popupWrap');
    let popup = document.getElementById('popup' + popupName);

    popup.classList.remove('on');
    modalWrap.classList.remove('on');
  }



/*********************************************************
*                    Document Loaded                     *
*********************************************************/

$(function(){

  /* Section1 텍스트 스크롤효과 */
  $(window).scroll(function(){
    // 스크롤 이벤트가 감지되었을 때,

    $('#section1 .slideItem').each(function(i){
      // 경로에 위치한 모든 아이템들에게 각각 반복작업을 실행한다.
      // 여기서 i는 slideItem의 각 Index를 갖는다.

      let offsetVal = $(this).offset().top + 50, 
          // 각 Element별 Y좌표 값
          windowMid = $(window).height() / 2, 
          // 현재 보이는 화면의 절반값
          scrollVal = $(window).scrollTop(),
          // 현재 스크롤된 Y좌표 값

          opacityTopPoint1 = scrollVal + windowMid + 50,
          opacityTopPoint2 = scrollVal + windowMid + 100,
          opacityTopPoint3 = scrollVal + windowMid + 150,

          opacityBotPoint1 = scrollVal + windowMid - 50,
          opacityBotPoint2 = scrollVal + windowMid - 100,
          opacityBotPoint3 = scrollVal + windowMid - 150,
          
          hideTopPoint = scrollVal + windowMid + 200,
          hideBotPoint = scrollVal + windowMid - 200;
      
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


  
  /* Section3 텍스트 스크롤효과 */
  let tween4 = gsap.to('#section3 .rollingFrame .slideContainer', {
    x: "-390%",
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


  /* Section4 목업 캐러셀 */

  $('#swiper').slick({
    infinite: true,
    autoplay: true,
    autoplaySpeed: 1500,
  });

  /* //Section4 목업 캐러셀 */


  $('.familySiteBtn').click(function(){
		let active = $(this).hasClass('active')
		if(!active){
			$(this).addClass('active');
			$('.siteList').slideDown(200);
		} else {
			$(this).removeClass('active');
			$('.siteList').slideUp(200);
		}
	});

  $('#fullpage').fullpage({
    //options here
    autoScrolling: true,
    scrollHorizontally: true,
    normalScrollElements: '.dealpage, .allianceOverlayWrap, .sec5Overlay',
    anchors:['1stPage', '2ndPage', '3rdPage', '4thPage', '5thPage','footer'],
  });
  // AOS start
  // AOS.init();

});