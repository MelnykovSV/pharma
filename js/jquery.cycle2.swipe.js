"use strict";
!(function (r) {
  (r.event.special.swipe = r.event.special.swipe || {
    scrollSupressionThreshold: 10,
    durationThreshold: 1e3,
    horizontalDistanceThreshold: 30,
    verticalDistanceThreshold: 75,
    setup: function () {
      var n = r(this);
      n.bind("touchstart", function (e) {
        function i(e) {
          if (o) {
            var i = e.originalEvent.touches ? e.originalEvent.touches[0] : e;
            (t = { time: new Date().getTime(), coords: [i.pageX, i.pageY] }),
              Math.abs(o.coords[0] - t.coords[0]) >
                r.event.special.swipe.scrollSupressionThreshold &&
                e.preventDefault();
          }
        }
        var t,
          s = e.originalEvent.touches ? e.originalEvent.touches[0] : e,
          o = {
            time: new Date().getTime(),
            coords: [s.pageX, s.pageY],
            origin: r(e.target),
          };
        n.bind("touchmove", i).one("touchend", function () {
          n.unbind("touchmove", i),
            o &&
              t &&
              t.time - o.time < r.event.special.swipe.durationThreshold &&
              Math.abs(o.coords[0] - t.coords[0]) >
                r.event.special.swipe.horizontalDistanceThreshold &&
              Math.abs(o.coords[1] - t.coords[1]) <
                r.event.special.swipe.verticalDistanceThreshold &&
              o.origin
                .trigger("swipe")
                .trigger(
                  o.coords[0] > t.coords[0] ? "swipeleft" : "swiperight"
                ),
            (o = t = void 0);
        });
      });
    },
  }),
    (r.event.special.swipeleft = r.event.special.swipeleft || {
      setup: function () {
        r(this).bind("swipe", r.noop);
      },
    }),
    (r.event.special.swiperight =
      r.event.special.swiperight || r.event.special.swipeleft);
})(jQuery);
