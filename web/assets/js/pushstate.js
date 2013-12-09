(function(window,undefined){

    // Check Location
    if ( document.location.protocol === 'file:' ) {
        alert('The HTML5 History API (and thus History.js) do not work on files, please upload it to a server.');
    }

    // Establish Variables
    var
        History = window.History, // Note: We are using a capital H instead of a lower h
        State = History.getState();
        Pos = $(".container").data('pos');

    function loadAjaxContent(url){
        /*REFACTORABLE*/
        $(".nav-links-wrapper").addClass('disabled');
        $( ".main-wrapper" ).append( "<div class='wrapper2'></div>" );
        $(".wrapper2").load(url+" .container", function(data){
            var newPos = $(data).find(".container").data("pos");
            if (newPos > Pos) 
            {
                $(".wrapper").transition({ x: '-100%' }, 1200);
                $(".wrapper2").transition({ x: '0%' }, 1200, function(){
                    $(".wrapper").remove();
                    $(".wrapper2:first-child").removeClass('wrapper2').addClass('wrapper');
                    $(".nav-links-wrapper").removeClass('disabled');
                    Pos = $(".container").data('pos');
               });
            }
            else
            {
                $(".wrapper2").removeClass('wrapper2').addClass('wrapper2rev');
                $(".wrapper").transition({ x: '100%' }, 1200);
                $(".wrapper2rev").transition({ x: '0%' }, 1200, function(){
                    $(".wrapper").remove();
                    $(".wrapper2rev:first-child").removeClass('wrapper2rev').addClass('wrapper');
                    $(".nav-links-wrapper").removeClass('disabled');
                    Pos = $(".container").data('pos');
                });
            }    
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
            History.pushState(null, this.textContent, this.href);
            evt.preventDefault();
       });

})(window);