$(function initNav() {
  var menuButton = $("#js-navMenuButton");
  var menu = $("#js-navMenu");
  var wnd = $(window);
  var menuBreakpoint =  750;

  menuButton.click(function() {
    menu.slideToggle('slow');
  });


  wnd.resize(function() {
    if(wnd.width() >= menuBreakpoint ) {
      menu.show();
    } else {
      menu.hide();
    }
  });

  //Scroll
  var scroll = scroller();
  scroll.init();
  scroll.add({
    selector: "#js-nav",
    from: 600,
    className: "nav--scrolled"
  });
});