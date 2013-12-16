(function(window,undefined){

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

            if(newPos!="1") $('.navbar').removeClass('navbar-top');
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
})(window);