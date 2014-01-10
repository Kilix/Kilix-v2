var Kilix = {

    colors: {
        col1: '#61AFF0',
        col2: '#ff4a46',
        col3: '#009884',
        col4: '#e79027',
        col5: '#087ec2'
    },

    init: function(){
    	Kilix.pushState();
    	Kilix.switchSVG();
    	Kilix.nav();
    	Kilix.wayPoints();

    	Kilix[$('.container').data('page')].init();
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
            }, 500);

            newPos = pageToPosition[State.title.toLowerCase()];

            $('.nav-link.current').removeClass('current');
            $('.nav-link[data-pos="'+newPos+'"]').addClass('current');

            slideNext = newPos>currentPos ? true : false;
            // $(".nav-links-wrapper").addClass('disabled');
            $( ".main-wrapper" ).append( "<div class='wrapper wrapper-new'></div>" );
            if(!slideNext){$('.wrapper-new').addClass('wrapper-prev');}


            $(".wrapper-new").load(url+" .container", function(data){
                $(".wrapper:first-child").transition({ x: slideNext?'-5%':'5%', opacity: 0, delay: 500 }, 1200);
                $(".wrapper-new").css({opacity:0, x: slideNext?'-5%':'5%'}).transition({ x: '0%', opacity:1, delay:500 }, 1200, function(){
                    $(".wrapper:first-child").remove();
                    $(".wrapper-new").attr('style', '').removeClass('wrapper-new');
                    $(".wrapper-prev").attr('style', '').removeClass('wrapper-prev');
                    $(".nav-links-wrapper a, .footer-links a").addClass('enabled');
                    Pos = $(".container").data('pos');
                });

                Kilix[oldPage].destroy();
                Kilix[State.title.toLowerCase()].init();         
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
    },

    wayPoints: function(){

        $('footer').waypoint({
            handler: function (direction) {
                if(direction=="down")$(".back-to-top").addClass("force-opacity");
                else $(".back-to-top").removeClass('force-opacity');
            },
            offset: 'bottom-in-view'
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
        Snap.load("./assets/img/logo_big.svg", function(f) {
            s.append(f.select("#kilixSvg"));
        });
    },

    animations:{
   	    //Prototyped by animations-*.js
    },

    /* -- PAGES -- */
    home: {
        init: function(){

            Kilix.loadKilixSvg();
            Kilix.animations['extia'].loadExtiaSvg();

            var offsetSvgAnim = '25%';

            $('.landing-main-text').on('click',function(){
                $('html, body').animate({  
                    scrollTop:$(".svg-valeur").offset().top - 90
                }, 'slow');
            });

            $('.next-section').on('click',function(){
                $('html, body').animate({  
                    scrollTop:$(this).closest(".❤").next().offset().top - 90
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

            $('.svg-valeur').waypoint(function(direction) {
                $('.navbar').toggleClass('navbar-top');
            }, { offset: '400px' });

            // Start Risk Waypoint
            var risqueInit = false;
            $('.svg-risque').waypoint(function(direction) {
                if(risqueInit == false) {
                    Kilix.animations['risques'].start();
                }
                risqueInit = true;
            }, { offset: offsetSvgAnim });

            // Stop Risk Waypoint
            // $('.svg-risque').waypoint(function(direction) {
            // }, { offset: '-'+$('.svg-risque').height()+"px" });

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

            // Stop Value Waypoint
            // $('.svg-valeur').waypoint(function(direction) {
            // }, { offset: '-'+$('.svg-valeur').height()+"px" });

            // Start Amelio Waypoint
            var amelioInit = false;
            Kilix.animations['amelioration'].setAnimStatus(false);
            $('.svg-amelio').waypoint(function(direction) {
                if(amelioInit == false) {
                    Kilix.animations['amelioration'].start();
                }
                amelioInit = true;
            }, { offset: offsetSvgAnim });

            // Stop Amelio Waypoint
            // $('.svg-amelioration').waypoint(function(direction) {
            // }, { offset: '-'+$('.svg-amelioration').height()+"px" });
            
            // Start Extia Waypoint
            var extiaInit = false;
            Kilix.animations['extia'].setValueAnimStatus(false);
            $('.svg-extia').waypoint(function(direction) {
                if(extiaInit == false) {
                    Kilix.animations['extia'].start();
                }
                extiaInit = true;
            }, { offset: offsetSvgAnim });

            // Stop ExtiaS Waypoint
            // $('.svg-extia').waypoint(function(direction) {
            // }, { offset: '-'+$('.svg-extia').height()+"px" });

            console.log('Init Home');
        },
        destroy: function(){
            console.log('Destroy Home');
            $('.svg-valeur').waypoint('destroy');
            $('.svg-amelio').waypoint('destroy');
            $('.svg-risque').waypoint('destroy');
            $('.landing-main-text').off();
            $('.next-section').off();
            $('.navbar').addClass('navbar-top');  
            Kilix.changeXColor($('.logo svg polygon'), 'none');     
        }
    },

    agilite: {
        init: function(){

            Kilix.switchSVG();

            $('.landing h1').on('click',function(){
                $('html, body').animate({  
                    scrollTop:$(".content").offset().top - 100    
                }, 'slow');
            });

            $('.agility-item').waypoint({
                handler: function ( direction) {

                    if(!$(this).hasClass('checked')) {
                        $(this).find('li path').each(function(i){
                            $(this).css('-webkit-transition-delay', i*0.3+'s');
                        });
                        $(this).addClass('checked');

                    }
                },
                offset: '60%'
            });

            $('.content').waypoint(function(direction) {
                $('.navbar').toggleClass('navbar-top');
            }, { offset: '300px' });
            console.log('Init AGILITY');
        },
        destroy: function(){
            console.log('Destroy AGILITY');
            $('.landing h1').off();
            $('.navbar').addClass('navbar-top');
            $('.content').waypoint('destroy');  
        }
    },

    team: {
        init: function(){
            console.log('Init Team');

            var offsetSvgAnim = '25%';

            $('.cene').waypoint(function(direction) {
                $('.navbar').toggleClass('navbar-top');
            }, { offset: '400px' });

             var teamInit = false;
            $('.cene').waypoint(function(direction) {
                if(teamInit == false) {
                    Kilix.animations['team'].start();
                }
                teamInit = true;
            }, { offset: offsetSvgAnim });
        },
        destroy: function(){
            console.log('Destroy Team');
            $('.cene').waypoint('destroy');
        }
    }
};

$(function(){
    console.log('init');
	Kilix.init();
});
