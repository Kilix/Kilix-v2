var Kilix = {


    init: function(){
    	//Kilix.pushState();
    	Kilix.switchSVG();
    	Kilix.nav();
    	Kilix.wayPoints();

    	
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
            slideNext = true;

        function loadAjaxContent(url){
         

            $('html, body').animate({  
                scrollTop:0  
            }, 500);

                if(newPos!="1") $('.navbar').removeClass('navbar-top') 
                else $('.navbar').addClass('navbar-top');

                slideNext = newPos>currentPos ? true : false;
                $(".nav-links-wrapper").addClass('disabled');
                $( ".main-wrapper" ).append( "<div class='wrapper wrapper-new'></div>" );
                if(!slideNext){$('.wrapper-new').addClass('wrapper-prev');}


                $(".wrapper-new").load(url+" .container", function(data){
                    $(".wrapper:first-child").transition({ x: slideNext?'-5%':'5%', opacity: 0, delay: 500 }, 1200);
                    $(".wrapper-new").css({opacity:0, x: slideNext?'-5%':'5%'}).transition({ x: '0%', opacity:1, delay:500 }, 1200, function(){
                        $(".wrapper:first-child").remove();
                        $(".wrapper-new").attr('style', '').removeClass('wrapper-new');
                        $(".wrapper-prev").attr('style', '').removeClass('wrapper-prev');
                        $(".nav-links-wrapper").removeClass('disabled');
                        Pos = $(".container").data('pos');
                    });
         
                });

        }

        function updateContent(State){

            loadAjaxContent(State.url);
        }
        // Bind to State Change
        History.Adapter.bind(window,'statechange',function(){ // Note: We are using statechange instead of popstate
            // Log the State
            var State = History.getState(); // Note: We are using History.getState() instead of event.state
            History.log('statechange:', State.data, State.title, State.url);
            updateContent(State);
        });

        $(".nav-links-wrapper a").on("click", function(evt) {
            //Prevent the browsers default behaviour of navigating to the hyperlink
            currentPos = $(".nav-link.current").data('pos');
            newPos = $(this).data('pos');

            $('.nav-link.current').removeClass('current');
            $(this).addClass('current');

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
    },

    wayPoints: function(){
    	$('.svg-valeur').waypoint(function(direction) {
			$('.navbar').toggleClass('navbar-top');
		}, { offset: '200px' });
    },

    animations:{
    	//Prototyped by animations-*.js
    },

    home: function(){
    	$('.landing-next-section-back, .landing-next-section-arrow').on('click',function(){
	        $('html, body').animate({  
	            scrollTop:750  
	        }, 'slow'); 
	    });

    	Kilix.animations['risques']();
    },

    agilite: function(){

    },

    contact:function(){

    }




}


$(function(){
	Kilix.init();
});
