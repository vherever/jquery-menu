var main = function() {
  $('.icon-menu').click(function() {
    $('.menu').animate({
      left: '0px'
    }, 200);
    
    $('body').animate({
      left: '250px'
    }, 200);
  });
  
  $('.icon-close').click(function() {
    $('.menu').animate({
      left: '-250px'
    },200);
    
    $('body').animate({
      left: '0px'
    }, 200);
  });
}

$(document).ready(main);