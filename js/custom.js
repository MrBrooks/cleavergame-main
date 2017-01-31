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

  var menu = new Menu();
  var menu_with_btn = new Menu({
    selector: "#cg-menu-with-btn",
    btn: "#cg-menu-btn"
  });

  ScrollButton();
});

function Menu(config){
  var defs = {
    selector: "#cg-menu",
    btn: false,
    speed: 300
  };
  var opts = $.extend(defs, config),
      current = 0;

  var menu = $(opts.selector);
  var level1_btn = menu.find(".cg-menu__label-1"),
      wrapper = menu.find(".cg-menu__level-2"),
      submenus = menu.find(".cg-menu__submenu");

  if(opts.btn){
    $(opts.btn).on('click',toggle);
  }
  level1_btn.on('click',showSubmenu);

  function toggle(){
    $(this).toggleClass('active');
    menu.slideToggle(opts.speed);
  }

  function showSubmenu(){
    var index = parseInt($(this).attr("data-cg-menu-index"));
    var diff = index !== current;
    var anti_delay = current? 0 : opts.speed;

    if(diff){
      wrapper.slideUp(opts.speed);
      setTimeout(function(){
        current = index;
        submenus.removeClass('active').filter("[data-cg-submenu-index='"+current+"']").addClass("active");
        wrapper.slideDown(opts.speed);
      },opts.speed - anti_delay);
    } else{
      wrapper.slideUp(opts.speed);
      current = 0;
    }
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