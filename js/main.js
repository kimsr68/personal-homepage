jQuery(document).ready(function(){
    
    //메뉴 버튼 클릭하면 주메뉴(nav) 나옴
    $('.menu_btn').click(function(){
        //nav영역이 보여진 후에 function 다음의 명령어 실행(메뉴 페이드인)
        $('nav').show(function(){
            $('nav ul li').each(function(){
               var indexNum=$(this).index();
              $(this).delay(indexNum*300).fadeIn();
            });
        });
    });
    //메뉴의 닫기 버튼을 클릭하면 주메뉴 안보임
    $('nav .close').click(function(){
        $('nav').hide();
    });
    
    //주메뉴를 클릭하면 해당 section으로 이동
    $('nav ul li a').click(function(){
        $('nav').hide();
        var menu_attr=$(this).attr('href');
        $('html,body').animate({scrollTop:$(menu_attr).offset().top},1000);
    });
    //스킬바
	jQuery('.skillbar').each(function(){
		jQuery(this).find('.skillbar-bar').animate({
			width:jQuery(this).attr('data-percent')
		},3000);
	});
    //swiper 슬라이드(웹 포트폴리오)
        var swiper = new Swiper('.swiper-container', {
            loop:true,
            autoplay: {delay: 5000,
 },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    });
    //팝업갤러리 (lightbox)
    var $gallery = new SimpleLightbox('.small-demo a', {} );
    
    
    
    
    
    
    
    
    
    
});