var easingIn  = [.42, 0, 1, 1];
var easingOut = [0, 0,.58, 1];

Kilix.animations["references"] = {
  init:function(){
    $('.ref').hover(function(e){
      var el = e.currentTarget;
      var pictures = $(el).find('.logo-ref');
      var logo = $(el).find('.logo-ref');
      var maquette = $(el).find('.maquette-ref');
      var infos = $(el).find('.infos').children();

      logo.velocity('stop');
      maquette.velocity('stop');
      infos.velocity('stop');

      var seq = [
        { e: logo, p: 'transition.slideUpBigOut', o: { duration: 650, easing: easingIn, display: 'block'} },
        { e: maquette, p: 'transition.slideUpBigOut', o: { duration: 650, delay: 300, easing: easingIn, display: 'block', sequenceQueue: false } },
        { e: infos, p: 'transition.slideUpBigIn', o: { duration: 500, delay: 400, easing: easingIn, display: 'block', stagger: 150, sequenceQueue: false } },
      ];

      $.Velocity.RunSequence(seq);
    },
    function(e){
      var el = e.currentTarget;
      var logo = $(el).find('.logo-ref');
      var maquette = $(el).find('.maquette-ref');
      var infos = $(el).find('.infos').children();

      logo.velocity('stop');
      maquette.velocity('stop');
      infos.velocity('stop');

      var seq = [
        { e: infos, p: 'transition.slideDownBigOut', o: { duration: 500, easing: easingIn, display: 'block', backwards: true, stagger: 150} },
        { e: maquette, p: 'transition.slideDownBigIn', o: { duration: 650, delay: 250, easing: easingOut, display: 'block', sequenceQueue: false} },
        { e: logo, p: 'transition.slideDownBigIn', o: { duration: 650, delay: 300, easing: easingOut, display: 'block', sequenceQueue: false } },
      ];
      $.Velocity.RunSequence(seq);
    })
  }
}
