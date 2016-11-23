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