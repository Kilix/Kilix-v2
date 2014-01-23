var Kilix = {

    colors: {
        col1: '#61AFF0',
        col2: '#ff4a46',
        col3: '#009884',
        col4: '#e79027',
        col5: '#087ec2'
    },

    init: function(){
        Kilix.resize();
    	Kilix.pushState();
    	Kilix.switchSVG();
    	Kilix.nav();

    	setTimeout(function(){Kilix[$('.container').data('page')].init();},300);
    },

    resize: function(){   

        Kilix.resizeLanding();
        $(window).resize(function() {
            Kilix.resizeLanding();
        });
    },

    resizeLanding: function(){
        var windowHeight = $(window).height();

        if (window.matchMedia("(min-width: 40em)").matches) {
            $('.landing-home').css('height', windowHeight);
            $('.home .intro.desktop').css('margin-top', windowHeight);
        } else {
             $('.landing-home').attr('style', '');
             $('.home .intro.desktop').attr('style', '');
        }
    },

    pushState: function(){
        // Check Location
        if ( document.location.protocol === 'file:' ) {
            alert('The HTML5 History API (and thus History.js) do not work on files, please upload it to a server.');
        }

        // Establish Variables
        var
            History = window.History, // Note: We are using a capital H instead of a lower h
            State = History.getState(),
            currentPos,
            newPos,
            slideNext = true,
            pageToPosition = { home:1,team:2,agilite:3,contact:4 };

        function loadAjaxContent(State){
            var url = State.url;       
            var oldPage = $('.container').data('page');
            $('html, body').animate({  
                scrollTop:0  
            });

            newPos = pageToPosition[State.title.toLowerCase()];

            $('.nav-link.current').removeClass('current');
            $('.nav-link[data-pos="'+newPos+'"]').addClass('current');

            slideNext = newPos>currentPos ? true : false;
            $( ".main-wrapper" ).append( "<div class='wrapper wrapper-new'></div>" );
            if(!slideNext){$('.wrapper-new').addClass('wrapper-prev');}

            $(".wrapper-new").load(url+" .container", function(data){

                Kilix[oldPage].destroy();
                Kilix.resizeLanding();

                $(".wrapper:first-child").transition({ x: slideNext?'-100%':'100%', opacity: 1, delay: 500 }, 1200);
                $(".wrapper-new").css({opacity:0, x: '0%'}).transition({ x: '0%', opacity:1, delay:500 }, 1200, function(){

                    $(".wrapper:first-child").remove();
                    $(".wrapper-new").attr('style', '').removeClass('wrapper-new');
                    $(".wrapper-prev").attr('style', '').removeClass('wrapper-prev');
                    $(".nav-links-wrapper a, .footer-links a").addClass('enabled');
                    Pos = $(".container").data('pos');

                    Kilix[State.title.toLowerCase()].init();
                });
                   
            });

        }

        function updateContent(State){

            loadAjaxContent(State);
        }

        // Bind to State Change
        History.Adapter.bind(window,'statechange',function(){ // Note: We are using statechange instead of popstate
            // Log the State
            var State = History.getState(); // Note: We are using History.getState() instead of event.state
            History.log('statechange:', State.data, State.title, State.url);
            updateContent(State);
        });

        $(".nav-links-wrapper a.enabled, .footer-links a.enabled").on("click", function(evt) {
            evt.preventDefault();
            if(!$(this).hasClass('enabled')) {
                return;
            }
            $(".nav-links-wrapper a, .footer-links a").removeClass('enabled');
            $('body').removeClass('unfolded');
            //Prevent the browsers default behaviour of navigating to the hyperlink
            currentPos = $(".nav-link.current").data('pos');

            History.pushState(null, this.textContent, this.href);
            evt.preventDefault();
       });
    },

    switchSVG: function(){

        if (Modernizr.svg) {
            $('img.svg').each(function(){
                var $img = $(this);
                var imgID = $img.attr('id');
                var imgClass = $img.attr('class');
                var imgURL = $img.attr('src');
                $.get(imgURL, function(data) {
                    // Get the SVG tag, ignore the rest
                    var $svg = $(data).find('svg');
                    // Add replaced image's ID to the new SVG
                    if(typeof imgID !== 'undefined') {
                        $svg = $svg.attr('id', imgID);
                    }
                    // Add replaced image's classes to the new SVG
                    if(typeof imgClass !== 'undefined') {
                        $svg = $svg.attr('class', imgClass+' replaced-svg');
                    }
                    // Remove any invalid XML tags as per http://validator.w3.org
                    $svg = $svg.removeAttr('xmlns:a');
                    // Replace image with new SVG
                    $img.replaceWith($svg);
                });
            });
        }
        else{
            $('img.svg[src*="svg"]').attr('src', function() {
                return $(this).attr('src').replace('.svg', '.png');
            });
        }
    },

    nav: function(){
    	$('.toggle-menu').on('click',function(){
		$('.nav-links-wrapper').removeClass('nav-links-hidden');
			$('body').toggleClass('unfolded');
			window.setTimeout(function(){
				if(!$('body').hasClass('unfolded')) {
					$('.nav-links-wrapper').addClass('nav-links-hidden');
				}
			}
			,605);
		});
        $('.back-to-top').on('click',function(){
            $('html, body').animate({  
                scrollTop:0   
            }, 'slow');
        });
        $('.nav-link-contact').on('click',function(){
            $('html, body').animate({  
                scrollTop:$('body').height()
            }, 'slow');
        });

        
    },

    wayPoints: function(){
            console.log("ThisIsAWayPoint");
            $('footer').waypoint({
                handler: function (direction) {
                    if(direction=="down")$(".back-to-top").addClass("force-opacity");
                    else $(".back-to-top").removeClass('force-opacity');
                },
                offset: 'bottom-in-view'
            });


            $('.intro').waypoint(function(direction) {
                $('.navbar').toggleClass('navbar-top');
            }, { offset: '100px' });

            $('.landing h1, .landing-main-text, #KILIX-logo').on('click',function(){
                $('html, body').animate({  
                    scrollTop:$(".intro").offset().top - 80    
                }, 'slow');
            });

    },

    changeXColor: function($el, col){
        if(col!='none'){
            $('.logo').addClass('animated');
            setTimeout(function(){
                $('.logo').removeClass('animated'); 
            },2000);
            $el.each(function(i){
                var poly = $(this);
                setTimeout(function () {
                    poly.css('fill',col);
                }, (i + 1) * 100);
            });
        }else{
            $('.logo').addClass('animated');
            setTimeout(function(){
                $('.logo').removeClass('animated'); 
            },2000);
            $el.each(function(i){
                var poly = $(this);
                setTimeout(function () {
                    poly.attr('style','');
                }, (i + 1) * 100);
            });
        }
    },

    loadKilixSvg: function(){
        var s = Snap("#KILIX-logo");

        Snap.load("", function(f) {
            s.append(f.select("#kilixSvg"));
        });
    },

    animations:{
   	    //Prototyped by animations-*.js
    },

    /* -- PAGES -- */
    home: {
        init: function(){

            Kilix.wayPoints();
            Kilix.resize();
            Kilix.loadKilixSvg();

            $('.landing-home').addClass('play');
            setTimeout(function(){$('.landing-home').removeClass('play');},1000);

            var offsetSvgAnim = '50%';


            $('.next-section').on('click',function(){
                $('html, body').animate({ 
                    scrollTop:$(this).closest(".❤").next().offset().top - 90
                }, 'slow');
            });

            $('.losange').on('click',function(){
                $('html, body').animate({ 
                    scrollTop:$('.svg-valeur').offset().top - 90
                }, 'slow');
            });

            var slide = $('.❤');
            slide.waypoint({
                handler: function ( direction) {
                    var color = Kilix.colors[$(this).data('color')];
                    Kilix.changeXColor($('.logo svg polygon'), color);
                },
                offset: '25%'
            });


            // Start Risk Waypoint
            var risqueInit = false;
            Kilix.animations['risques'].setAnimStatus(false);
            $('.svg-risque').waypoint(function(direction) {
                if(risqueInit == false) {
                    Kilix.animations['risques'].start();
                }
                risqueInit = true;
            }, { offset: offsetSvgAnim });


            // Start Value Waypoint
            var valueInit = false;
            Kilix.animations['valeur'].setValueAnimStatus(true);
            Kilix.animations['valeur'].setValueLoadingStatus(false);
            $('.svg-valeur').waypoint(function(direction) {
                if (valueInit == false) {
                    Kilix.animations['valeur'].start();
                }
                valueInit = true;
            }, { offset: offsetSvgAnim });


            // Start Amelio Waypoint
            var amelioInit = false;
            Kilix.animations['amelioration'].setAnimStatus(false);
            $('.svg-amelio').waypoint(function(direction) {
                if(amelioInit == false) {
                    Kilix.animations['amelioration'].start();
                }
                amelioInit = true;
            }, { offset: offsetSvgAnim });

            
            // Start Extia Waypoint
            var extiaInit = false;
            Kilix.animations['extia'].setAnimStatus(false);
            $('.svg-extia').waypoint(function(direction) {
                if(extiaInit == false) {
                    Kilix.animations['extia'].start();
                }
                extiaInit = true;
            }, { offset: offsetSvgAnim });


            console.log('Init Home');
        },
        destroy: function(){
            Kilix.animations["extia"].freeIntervals();

            console.log('Destroy Home');
            $.waypoints('destroy');
            $('.next-section').off();
            $('.navbar').addClass('navbar-top');  
            Kilix.changeXColor($('.logo svg polygon'), 'none');     
            $('.landing h1, .landing-main-text, #KILIX-logo').off();
        }
    },

    agilite: {
        init: function(){

            Kilix.wayPoints();
            Kilix.switchSVG();

            $('.losange').on('click',function(){
                $('html, body').animate({ 
                    scrollTop:$('.content.desktop').offset().top - 90
                }, 'slow');
            });

            setTimeout(function(){Kilix.changeXColor($('.logo svg polygon'), '#FFAD00');},300);

            var agiOneInit = false;
            $('.svg-agilite').waypoint(function(direction) {
                if(agiOneInit == false) {
                    Kilix.animations['agilite'].start();
                    agiOneInit = true;
                }
                 }, { offset: '50%' });

            var agiTwoInit = false;
            $('.svg-agilite').waypoint(function(direction) {
                if(agiTwoInit == false) {
                    Kilix.animations['agilite'].startSecond();
                    agiTwoInit = true;
                }
                 }, { offset: '25%' });


            console.log('Init AGILITY');
        },
        destroy: function(){
            console.log('Destroy AGILITY');
            $('.navbar').addClass('navbar-top');
            $.waypoints('destroy');
            Kilix.changeXColor($('.logo svg polygon'), 'none');
            $('.landing h1, .landing-main-text, #KILIX-logo').off();
        }
    },

    team: {
        init: function(){

            Kilix.wayPoints();
            console.log('Init Team');

            var offsetSvgAnim = '70%';

            $('.losange').on('click',function(){
                $('html, body').animate({ 
                    scrollTop:$('.svg-anim').offset().top - 90
                }, 'slow');
            });

            var teamInit = false;
            Kilix.animations['team'].setAnimStatus(false);
            $('.svg-anim').waypoint(function(direction) {
                if(teamInit == false) {
                    Kilix.animations['team'].start();
                }
                teamInit = true;
            }, { offset: offsetSvgAnim });

            setTimeout(function(){Kilix.changeXColor($('.logo svg polygon'), Kilix.colors['col3']);},300);
            
        },
        destroy: function(){
            console.log('Destroy Team');
            $.waypoints('destroy');
            $('.navbar').addClass('navbar-top');
            $('.landing h1, .landing-main-text, #KILIX-logo').off();
            Kilix.changeXColor($('.logo svg polygon'), 'none');    
        }
    }
};

$(function(){
    console.log('init');
	Kilix.init();
});
