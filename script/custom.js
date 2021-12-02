
/* 메뉴 */
$('.menu li').mouseenter(function(){
  $(this).children('.sub-menu').stop().slideDown();
})
$('.menu li').mouseleave(function(){
  $(this).children('.sub-menu').stop().slideUp();
})

/* 팝업 */
$('.open-modal').click(function(){
  $('.modal').fadeIn();
})
$('.close-modal').click(function(){
  $('.modal').fadeOut();
})
