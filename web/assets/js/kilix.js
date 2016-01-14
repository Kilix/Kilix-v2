var Kilix = {

  currentScroll: null,
  currentPos: null,
  animSvg: !$('html').hasClass('no-anim-svg'),

  colors: {
    col1: '#61AFF0',
    col2: '#ff4a46',
    col3: '#009884',
    col4: '#e79027',
    col5: '#087ec2'
  },

  init: function() {
    Kilix.resize();
    Kilix.pushState();
    Kilix.switchSVG();
    Kilix.nav();

    setTimeout(function() {
      Kilix[$('.container').data('page')].init();
    }, 300);
  },

  resize: function() {
    Kilix.resizeLanding();
    $(window).resize(function() {
      Kilix.resizeLanding();
    });
  },

  resizeLanding: function() {
    var windowHeight = $(window).height();

    if (matchMedia('(min-width: 40em)').matches) {
      $('.landing-home').css('height', windowHeight);
      $('.home .intro.desktop').css('margin-top', windowHeight);
    } else {
      $('.landing-home').attr('style', '');
      $('.home .intro.desktop').attr('style', '');
    }
  },

  pushState: function() {
    // Check Location
    if (document.location.protocol === 'file:') {
      alert('The HTML5 History API (and thus History.js) do not work on files, please upload it to a server.');
    }

    // Establish Variable!
    var History = window.History, // Note: We are using a capital H instead of a lower h
    State = History.getState(),
    newPos,
    slideNext = true,
    pageToPosition = {
      home: 1,
      team: 2,
      agilite: 3,
      references: 4,
      contact: 5
    },
    pageTitle = {
      home: $('#link-home').attr('title'),
      team: $('#link-team').attr('title'),
      agilite: $('#link-agilite').attr('title'),
      references: $('#link-references').attr('title'),
      contact: $('#link-contact').attr('title')
    },
    animEndEventNames = {
      'WebkitAnimation': 'webkitAnimationEnd',
      'OAnimation': 'oAnimationEnd',
      'msAnimation': 'MSAnimationEnd',
      'animation': 'animationend'
    },
      // animation end event name
      animEndEventName = animEndEventNames[Modernizr.prefixed('animation')],
      // support css animations
      support = Modernizr.cssanimations;

      function loadAjaxContent(State) {
        var url = State.url;
        var oldPage = $('.container').data('page');

        $('title').html(pageTitle[State.title.toLowerCase()]);

        newPos = pageToPosition[State.title.toLowerCase()];
      // $(".wrapper:first-child").addClass('loading');

      $('.nav-link.current').removeClass('current');
      $('.nav-link[data-pos="' + newPos + '"]').addClass('current');


      slideNext = newPos > Kilix.currentPos ? true : false;
      $(".main-wrapper").append("<div class='wrapper wrapper-new'></div>");
      if (!slideNext) {
        $('.wrapper-new').addClass('wrapper-prev');
      }

      $(".wrapper-new").load(url + " .container", function(data) {

        Kilix[oldPage].destroy();
        Kilix.resizeLanding();
        Kilix.switchSVG();


        var $currPage = $(".wrapper:first-child");
        var $nextPage = $(".wrapper-new");
        var $wrapper = $(".main-wrapper");

        //$wrapper.addClass('page-perspective');

        // var outClass = 'page-fade';
        // var inClass = slideNext ? 'page-moveFromRight' : 'page-moveFromLeft';

        $('html, body').scrollTop(0);
        var outClass = slideNext ? 'page-moveToLeftEasing' : 'page-moveToRightEasing';
        var inClass = slideNext ? 'page-moveFromRight' : 'page-moveFromLeft';

        $currPage.addClass(outClass).addClass('page-ontop');
        $nextPage.addClass(inClass).on(animEndEventName, function() {
          $nextPage.off(animEndEventName);

          $wrapper.removeClass('page-perspective');
          $(".wrapper:first-child").remove();

          $('.wrapper').removeClass(inClass);
          $(".wrapper-new").removeClass('wrapper-new');
          $(".wrapper-prev").removeClass('wrapper-prev');
          $(".nav-links-wrapper a, .footer-links a").addClass('enabled');
          Pos = $(".container").data('pos');
          Kilix[State.title.toLowerCase()].init();
        });
      });
}

function updateContent(State) {
  loadAjaxContent(State);
}

    // Bind to State Change
    History.Adapter.bind(window, 'statechange', function() { // Note: We are using statechange instead of popstate
      // Log the State
      var State = History.getState(); // Note: We are using History.getState() instead of event.state
      //History.log('statechange:', State.data, State.title, State.url);
      if (State.title == "") {
        url = State.url;
        var baseUrlPattern = /^https?:\/\/[a-z\:0-9.\-\_]+/;
        var result = "";

        var match = baseUrlPattern.exec(url);
        if (match != null) {
          result = match[0];
        }

        if (result.length > 0) {
          url = url.replace(result, "");
          url = url.replace('/', "");
          if (url == '') {
            url = "home";
          }
        }

        State.title = url.toLowerCase();
      }
      updateContent(State);
    });

    if (history.pushState) $(".nav-links-wrapper a.enabled, .footer-links a.enabled").on("click", Kilix.bindPushState);
  },

  bindPushState: function(evt) {
    evt.preventDefault();
    if (!$(this).hasClass('enabled') || $(this).hasClass('current')) {
      return;
    }
    $(".nav-links-wrapper a, .footer-links a").removeClass('enabled');
    $('body').removeClass('unfolded');
    //Prevent the browsers default behaviour of navigating to the hyperlink
    Kilix.currentPos = $(".nav-link.current").data('pos');
    if ($(this).data('scroll') != undefined)
      Kilix.currentScroll = $(this).data('scroll');
    else
      Kilix.currentScroll = null;

    var title = $(this).attr('data-scroll') ? $(this).data('page-title') : this.textContent;

    History.pushState(null, title, this.href);
    evt.preventDefault();
  },

  switchSVG: function() {
    if (Modernizr.svg) {
      $('img.svg').each(function() {
        var $img = $(this);
        var imgID = $img.attr('id');
        var imgClass = $img.attr('class');
        var imgURL = $img.attr('src');
        $.get(imgURL, function(data) {
          // Get the SVG tag, ignore the rest
          var $svg = $(data).find('svg');
          // Add replaced image's ID to the new SVG
          if (typeof imgID !== 'undefined') {
            $svg = $svg.attr('id', imgID);
          }
          // Add replaced image's classes to the new SVG
          if (typeof imgClass !== 'undefined') {
            $svg = $svg.attr('class', imgClass + ' replaced-svg');
          }
          // Remove any invalid XML tags as per http://validator.w3.org
          $svg = $svg.removeAttr('xmlns:a');
          // Replace image with new SVG
          $img.replaceWith($svg);
        });
      });
    } else {
      $('img.svg[src*="svg"]').attr('src', function() {
        return $(this).attr('src').replace('.svg', '.png');
      });
    }
  },

  nav: function() {
    $('.toggle-menu').on('click', function() {
      $('.nav-links-wrapper').removeClass('nav-links-hidden');
      $('body').toggleClass('unfolded');
      window.setTimeout(function() {
        if (!$('body').hasClass('unfolded')) {
          $('.nav-links-wrapper').addClass('nav-links-hidden');
        }
      }, 605);
    });
    $('.back-to-top').on('click', function() {
      $('html, body').animate({
        scrollTop: 0
      }, 'slow');
    });
    $('.nav-link-contact').on('click', function() {
      $('html, body').animate({
        scrollTop: $('body').height()
      }, 'slow');
    });

  },

  wayPoints: function() {
    $('.intro').waypoint(function(direction) {
      $('.navbar').toggleClass('navbar-top');
      if (direction == "down") $(".back-to-top").addClass("show-back");
      else $(".back-to-top").removeClass('show-back');
    }, {
      offset: '100px'
    });

    $('.landing h1, .landing-main-text, #KILIX-logo').on('click', function() {
      $('html, body').animate({
        scrollTop: $(".intro").offset().top - 80
      }, 'slow');
    });

  },

  changeXColor: function($el, col) {
    if (col != 'none') {
      $('.logo').addClass('animated');
      setTimeout(function() {
        $('.logo').removeClass('animated');
      }, 2000);
      $el.each(function(i) {
        var poly = $(this);
        setTimeout(function() {
          poly.css('fill', col);
        }, (i + 1) * 100);
      });
    } else {
      $('.logo').addClass('animated');
      setTimeout(function() {
        $('.logo').removeClass('animated');
      }, 2000);
      $el.each(function(i) {
        var poly = $(this);
        setTimeout(function() {
          poly.attr('style', '');
        }, (i + 1) * 100);
      });
    }
  },

  animations: {
    //Prototyped by animations-*.js
  },


  /* -- PAGES -- */
  home: {
    init: function() {
      Kilix.wayPoints();
      Kilix.resize();

      $('.landing-home').addClass('play');
      setTimeout(function() {
        $('.landing-home').removeClass('play');
      }, 1000);

      var offsetSvgAnim = '50%';
      if (history.pushState) $(".svg-anim a.button.enabled").on("click", Kilix.bindPushState);

      $('.next-section').on('click', function() {
        $('html, body').animate({
          scrollTop: $(this).closest(".❤").next().offset().top - 90
        }, 'slow');
      });

      $('.losange').on('click', function() {
        $('html, body').animate({
          scrollTop: $('.svg-valeur').offset().top - 90
        }, 'slow');
      });

      $('.intro').waypoint({
        handler: function(direction) {
          /*Kilix.changeXColor($('.logo svg polygon'), '#FFF');*/
          Kilix.changeXColor($('.logo svg polygon'), 'none');
        },
        offset: '25%'
      });
      var slide = $('.❤');
      slide.waypoint({
        handler: function(direction) {
          var color = Kilix.colors[$(this).data('color')];
          Kilix.changeXColor($('.logo svg polygon'), color);
        },
        offset: '25%'
      });


      if (Kilix.animSvg) {

        // Start Risk Waypoint
        var risqueInit = false;
        Kilix.animations['risques'].setAnimStatus(false);
        $('.svg-risque').waypoint(function(direction) {
          if (risqueInit == false) {
            Kilix.animations['risques'].start();
          }
          risqueInit = true;
        }, {
          offset: offsetSvgAnim
        });


        // Start Value Waypoint
        var valueInit = false;
        Kilix.animations['valeur'].setValueAnimStatus(true);
        Kilix.animations['valeur'].setValueLoadingStatus(false);
        $('.svg-valeur').waypoint(function(direction) {
          if (valueInit == false) {
            Kilix.animations['valeur'].start();
          }
          valueInit = true;
        }, {
          offset: offsetSvgAnim
        });


        // Start Amelio Waypoint
        var amelioInit = false;
        Kilix.animations['amelioration'].setAnimStatus(false);
        $('.svg-amelio').waypoint(function(direction) {
          if (amelioInit == false) {
            Kilix.animations['amelioration'].start();
          }
          amelioInit = true;
        }, {
          offset: offsetSvgAnim
        });


        // Start Extia Waypoint
        var extiaInit = false;
        Kilix.animations['extia'].setAnimStatus(false);
        $('.svg-extia').waypoint(function(direction) {
          if (extiaInit == false) {
            Kilix.animations['extia'].start();
          }
          extiaInit = true;
        }, {
          offset: offsetSvgAnim
        });

        if (Kilix.currentScroll != null) {
          $('html, body').animate({
            scrollTop: $('.scroll-item').eq(Kilix.currentScroll).offset().top - 200
          }, 'slow');
        }

      }

      $('.png-anim').on('click', function() {
        var image = new Image();
        image.style.height = $(this).height() + "px";
        image.style.marginLeft = "auto";
        image.style.marginRight = "auto";
        image.style.marginTop = "-" + $(this).height() + "px";
        image.style.display = "none";

        $(this).off();

        $(this).after(image);

        image.onload = function(img, parent) {
          img.style.display = 'block';
          parent.css('opacity', 0);
        }(image, $(this));
        image.src = $(this).attr('data-gif');
      });


    },
    destroy: function() {
      Kilix.animations["extia"].freeIntervals();
      Kilix.animations["valeur"].freeIntervals();
      Kilix.animations["risques"].freeIntervals();
      $.waypoints('destroy');
      $(".svg-anim a.button.enabled").off();
      $('.next-section').off();
      $('.navbar').addClass('navbar-top');
      Kilix.changeXColor($('.logo svg polygon'), 'none');
      $('.landing h1, .landing-main-text, #KILIX-logo').off();
    }
  },

  agilite: {
    init: function() {

      Kilix.wayPoints();
      Kilix.switchSVG();
      $(".button-back").on("click", Kilix.bindPushState);

      $('.losange').on('click', function() {
        $('html, body').animate({
          scrollTop: $('.content.desktop').offset().top - 90
        }, 'slow');
      });

      setTimeout(function() {
        Kilix.changeXColor($('.logo svg polygon'), 'none');
      }, 300);

      var agiValInit = false;
      $('.svg-agilite').eq('0').waypoint(function(direction) {
        if (agiValInit == false) {
          setTimeout(function() {
            Kilix.animations['agilite'].startValueAnimation();
          }, 500);
          agiValInit = true;
        }
      }, {
        offset: '70%'
      });

      var agiRiskInit = false;
      $('.svg-agilite').eq('1').waypoint(function(direction) {
        if (agiRiskInit == false) {
          Kilix.animations['agilite'].startRiskAnimation();
          agiRiskInit = true;
        }
      }, {
        offset: '70%'
      });

      var agiAdaptInit = false;
      $('.svg-agilite').eq('2').waypoint(function(direction) {
        if (agiAdaptInit == false) {
          Kilix.animations['agilite'].startAdaptAnimation();
          agiAdaptInit = true;
        }
      }, {
        offset: '70%'
      });

      var agiVisInit = false;
      $('.svg-agilite').eq('3').waypoint(function(direction) {
        if (agiVisInit == false) {
          Kilix.animations['agilite'].startVisAnimation();
          agiVisInit = true;
        }
      }, {
        offset: '70%'
      });

      if (Kilix.currentScroll != null) {
        $('html, body').animate({
          scrollTop: $('.scroll-item').eq(Kilix.currentScroll).offset().top - 150
        }, 'slow');
      }

    },
    destroy: function() {
      $('.navbar').addClass('navbar-top');
      $.waypoints('destroy');
      Kilix.changeXColor($('.logo svg polygon'), 'none');
      $('.landing h1, .landing-main-text, #KILIX-logo').off();
      $(".button-back").off();
    }
  },

  team: {
    init: function() {

      Kilix.wayPoints();


      var offsetSvgAnim = '70%';

      $('.losange').on('click', function() {
        $('html, body').animate({
          scrollTop: $('.svg-anim').offset().top - 90
        }, 'slow');
      });

      if (Kilix.animSvg) {
        var teamInit = false;
        Kilix.animations['team'].setAnimStatus(false);
        $('.svg-team').waypoint(function(direction) {
          if (teamInit == false) {
            Kilix.animations['team'].start();
          }
          teamInit = true;
        }, {
          offset: offsetSvgAnim
        });
      }

      setTimeout(function() {
        Kilix.changeXColor($('.logo svg polygon'), Kilix.colors['col3']);
      }, 300);


      $('.raptor').on('click', function() {
        $('body').raptorize();
      });


    },
    destroy: function() {
      $.waypoints('destroy');
      $('.navbar').addClass('navbar-top');
      $('.landing h1, .landing-main-text, #KILIX-logo').off();
      Kilix.changeXColor($('.logo svg polygon'), 'none');
    }
  },
  references: {
    init: function() {
      Kilix.wayPoints();

      var offsetSvgAnim = '70%';

      setTimeout(function() {
        Kilix.changeXColor($('.logo svg polygon'), Kilix.colors['none']);
      }, 300);

    },
    destroy: function() {
      $.waypoints('destroy');
      $('.navbar').addClass('navbar-top');
      $('.landing h1, .landing-main-text, #KILIX-logo').off();
      Kilix.changeXColor($('.logo svg polygon'), 'none');
    }
  }
};

$(function() {
  Kilix.init();
});
