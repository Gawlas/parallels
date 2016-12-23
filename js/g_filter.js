var Filter = function filter() {
  var filter_namespace;
  var filter_btns = [];
  var filter_items = [];

  var filter = function(key) {
    if(key === "all"){
      filter_items.forEach(function(current) {
        current.item.css("display", "inline-block");
      });

      return;
    }

    filter_items.forEach(function(current) {
      if(current.filter === key)
        current.item.css("display", "inline-block");
      else
        current.item.css("display", "none");
    });
  };


  var start = function (id) {
    filter_namespace = $(id);
    filter_btns = filter_namespace.find("[data-filter-target]");
    
    filter_btns.each(function (index) {
      var btn = $(this);
      var target = btn.attr('data-filter-target')
      btn.click( function() {
        filter_btns.removeClass("js-filter-active");
        btn.addClass("js-filter-active");
        filter(target);
      });
    });

    var targets =  filter_namespace.find("[data-filter]");
    targets.each(function() {
      var _this = $(this);
      var object  = {};
      object.item = _this;
      object.filter = _this.attr('data-filter')

      filter_items.push(object);
    });
  };

  return {
    init: start
  };
};