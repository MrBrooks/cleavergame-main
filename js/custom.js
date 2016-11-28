/**************************************/
/* Custom JavaScript files supervisor */
/**************************************/

$(document).ready(function() {
  $('#cg-comment__slider').owlCarousel({
      items: 1,
      loop: true,
      nav: true,
      dots: false,
      navText: ['<div class="svg-sprite--arrow"></div>','<div class="svg-sprite--arrow"></div>']
    });
  var menu = new MenuBtn();
  ScrollButton();
});

function MenuBtn(){
  var btn = $('#cg-menu-btn'),
      drop = $('#cg-menu');

  btn.on('click', toggle);

  function toggle(){
    btn.toggleClass('active');
    drop.slideToggle(300);
  }
}

function ScrollButton(){
  var btn = $('.cg-scroll-btn');
  btn.on('click',onClick);

  function onClick(){
    var target = $(this).attr('data-scroll-target');
    $('html, body').animate({
        scrollTop: $(target).offset().top
    }, 1000);
  }
}