
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
        if($(window).scrollTop() <= $(window).height()-1){ //offset().top undefined error잡기
          e.preventDefault()
        }else if($(this).prev() != undefined){  //이전으로 이동하려는 섹션이 존재하는 경우
          moveTo = $(this).prev().offset().top;
          if($(this).prev().offset().top == undefined){
            e.preventDefault()
          }
        }else {
          e.preventDefault()
        }
      }
      /*동적 움직임을 구현*/
      $('html, body').stop().animate({
        scrollTop : moveTo+'px'
      }, {
        duration:600,
        complete: function(){

        }
      });
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
});

