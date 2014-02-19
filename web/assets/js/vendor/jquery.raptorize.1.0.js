/*
 * jQuery Raptorize Plugin 1.0
 * www.ZURB.com/playground
 * Copyright 2010, ZURB
 * Free to use under the MIT license.
 * http://www.opensource.org/licenses/mit-license.php
 *
 * Modified
*/


(function ($) {
    var raptorCounter = 0;

    $.fn.raptorize = function () {

        var randomImageUrl = "/assets/img/raptor.png";

        return this.each(function () {

            var _this = $(this);
            var audioSupported = false;
            //Stupid Browser Checking which should be in jQuery Support
            // if ($.browser.mozilla && $.browser.version.substr(0, 5) >= "1.9.2" || $.browser.webkit) {
            //    audioSupported = true;
            // }

            $("#elRaptor").remove();
            //Raptor Vars
            var raptorImageMarkup = '<img style="display: none;z-index:30000" src="' + randomImageUrl + '" />';
            var raptorAudioMarkup = '<audio id="elRaptorShriek" preload="auto"><source src="/assets/music/raptor-sound.mp3" /><source src="/assets/music/raptor-sound.ogg" /></audio>';
            var locked = false;

            //Append Raptor and Style
            var raptor = $(raptorImageMarkup);
            $('body').append(raptor);

            if(!document.getElementById('elRaptorShriek')) {
                $('body').append(raptorAudioMarkup);
            }

            raptor.css({
                "position": "fixed",
                "bottom": "-310px",
                "right": "0",
                "display": "block"
            });

            init();

            function init() {
                var image = new Image();
                document.getElementById('elRaptorShriek').play();
                image.onload = function () { initAfterImageLoad() };
                image.src = randomImageUrl;
            }

            // Animating Code
            function initAfterImageLoad() {
                locked = true;

                // Movement Hilarity	
                raptor.animate({
                    "bottom": "0"
                }, function () {

                    $(this).animate({
                        "bottom": "-20px"
                    }, 100, function () {
                        var offset = (($(this).position().left) + 400);
                        $(this).delay(300).animate({
                            "right": offset
                        }, 2200, function () {
                            raptor.remove();
                            locked = false;
                        })
                    });
                });
            }


        }); //each call
    } //orbit plugin call
})(jQuery);