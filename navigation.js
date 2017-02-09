$(document).ready(function(){
  $('.js--hamburger-menu').click(function(){
    if($('nav').hasClass('open')){
      $('nav').addClass('close');
      $('nav').removeClass('open');
    } else {
      $('nav').removeClass('close');
      $('nav').addClass('open');
    }
  })
})
