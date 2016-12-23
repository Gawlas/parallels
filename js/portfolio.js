$(function portfolio_load_more() {
  var load_more_btn = $("#js-portfolio-load-btn");
  var spinner = $("#js-portfolio-spinner");
  var items_to_load = $(".portfolio--item__not-loaded");

  load_more_btn.click(function() {
    spinner.show();

    setTimeout(function () {
      spinner.hide();
      load_more_btn.hide();
      items_to_load.removeClass("portfolio--item__not-loaded")
    }, 3000);
  });
});

$(function portfolio_init_filter() {
  var ftr = Filter();
  ftr.init("#portfolio01");
});