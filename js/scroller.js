function scroller() {
  // PRIVATE
  ////////////////////////////////////////////////////////////
  var didScroll = false;
  var events = [];
  var doc = document.documentElement;

  var isNumber = function (n) {
    return /^-?[\d.]+(?:e-?\d+)?$/.test(n);
  };

  var scrollPosition = function() {
    return (window.pageYOffset || doc.scrollTop) - (doc.clientTop || 0);
  };

  var onScroll = function () {
    events.forEach(function scroller_forEach(event) {
      if (scrollPosition() > event.from && scrollPosition() < event.to) {
        event.selector.addClass(event.className)
      } else {
        event.selector.removeClass(event.className);
      }
    });
  };

  // API FUNCTIONS
  ////////////////////////////////////////////////////////////

  //Function init()
  //Parameters:
  //  interval: interval (in ms) of checking scroll event
  var init = function (interval) {
    if (!isNumber(interval)) {
      interval = 250;
    }

    $(window).scroll(function () {
      didScroll = true;
    });

    setInterval(function () {
      if (didScroll) {
        didScroll = false;
        onScroll();
      }
    }, interval)
  };

  // Function add()
  // Parameters:
  //  object: js object with values
  //    selector:
  //    from:
  //    to
  //    className:
  var add = function (object) {
    var obj = {};

    //selector
    if (object.selector && (typeof object.selector === "string"))
      obj.selector = $(object.selector);
    else {
      console.log("Scroller Error: not selector provided");
    }

    //range
    if (typeof object.from === "number") {
      obj.from = object.from;
    } else {
      obj.from = Infinity;
    }

    if (typeof object.to === "number") {
      obj.to = object.to;
    } else {
      obj.to = Infinity;
    }

    //class
    if (typeof object.className === "string") {
      obj.className = object.className;
    } else {
      console.log("Scroller Error: not class provided");
    }

    events.push(obj);
  };

  return {
    init: init,
    add: add
  };
}