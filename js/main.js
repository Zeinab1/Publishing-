(function($) {
  "use strict";
  //
  $(".nav-item").on("click", function() {
    var isAlreadySelected = $(this).hasClass("active");
    $(".nav-item").removeClass("active");
    if (!isAlreadySelected) {
      $(this).addClass("active");
    }
  });
  $(window).stellar({
    responsive: true,
    parallaxBackgrounds: true,
    parallaxElements: true,
    horizontalScrolling: false,
    hideDistantElements: false,
    scrollProperty: "scroll"
  });

  // loader
  var loader = function() {
    setTimeout(function() {
      if ($("#ftco-loader").length > 0) {
        $("#ftco-loader").removeClass("show");
      }
    }, 1);
    console.log($("#ftco-loader").length)
  };
  loader();

  var counter = function() {
    $("#section-counter").waypoint(
      function(direction) {
        if (
          direction === "down" &&
          !$(this.element).hasClass("ftco-animated")
        ) {
          var comma_separator_number_step = $.animateNumber.numberStepFactories.separator(
            ","
          );
          $(".number").each(function() {
            var $this = $(this),
              num = $this.data("number");
            $this.animateNumber(
              {
                number: num,
                numberStep: comma_separator_number_step
              },
              {
                duration: 3000
              }
            );
          });
        }
      },
      { offset: "90%" }
    );
  };
  counter();

  // var contentWayPoint = function() {
  //   $(".animate").waypoint(
  //     function(direction) {
  //       if (direction === "down" && !$(this.element).hasClass("animated")) {
  //         $(this.element).addClass("checked");
  //         $(".animate.checked").each(function(k) {
  //           var el = $(this);

  //           var effect = el.data("role");
  //           if (effect === "fadeIn") {
  //             el.addClass("fadeIn ftco-animated");
  //           } else if (effect === "fadeInLeft") {
  //             el.addClass("fadeInLeft ftco-animated");
  //           } else if (effect === "fadeInRight") {
  //             el.addClass("fadeInRight ftco-animated");
  //           } else {
  //             el.addClass("fadeInUp ftco-animated");
  //           }
  //           el.removeClass("checked");
  //         });
  //       }
  //     },
  //     { offset: "90%" }
  //   );
  // };
  // contentWayPoint();
  var contentWayPoint = function() {
    var i = 0;
    $(".animate").waypoint(
      function(direction) {
        if (
          direction === "down" &&
          !$(this.element).hasClass("ftco-animated")
        ) {
          i++;

          $(this.element).addClass("item-animate");
          setTimeout(function() {
            $("body .animate.item-animate").each(function(k) {
              var el = $(this);
              setTimeout(
                function() {
                  var effect = el.data("animate-effect");
                  if (effect === "fadeIn") {
                    el.addClass("fadeIn ftco-animated");
                  } else if (effect === "fadeInLeft") {
                    el.addClass("fadeInLeft ftco-animated");
                  } else if (effect === "fadeInRight") {
                    el.addClass("fadeInRight ftco-animated");
                  } else {
                    el.addClass("fadeInUp ftco-animated");
                  }
                  el.removeClass("item-animate");
                },
                k * 50,
                "easeInOutExpo"
              );
            });
          }, 100);
        }
      },
      { offset: "95%" }
    );
  };
  contentWayPoint();

  var carousel = function() {
    $(".carousel-testimony").owlCarousel({
      center: true,
      loop: true,
      autoplay: true,
      autoplaySpeed: 2000,
      items: 1,
      margin: 30,
      stagePadding: 0,
      nav: false,
      navText: [
        '<span class="ion-ios-arrow-back">',
        '<span class="ion-ios-arrow-forward">'
      ],
      responsive: {
        0: {
          items: 1
        },
        600: {
          items: 2
        },
        1000: {
          items: 3
        }
      }
    });
  };
  carousel();
})(jQuery);
