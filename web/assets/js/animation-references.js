Kilix.animations["references"] = {
  init:function(){
    $('.ref').hover(function(e){
      var pictures = $(el).find('.logo-ref');
      var logo = $(el).find('.logo-ref');
      var maquette = $(el).find('.maquette-ref');

      var seq = [
        { e: logo, $:{'transition.slideUpBigOut'}, o: { duration: 800, delay: 0, easing: [.55,0,.1,1], display: 'block'} },
        { e: maquette, $:{'transition.slideUpBigOut'}, o: { duration: 800, delay: 0, easing: [.55,0,.1,1], display: 'block'} }
      ];

      $.Velocity.RunSequence(seq);
    },
    function(e){
      var el = e.currentTarget;
      var logo = $(el).find('.logo-ref');
      var maquette = $(el).find('.maquette-ref');
      var seq = [
        { e: logo, $:{'transition.slideDownBigIn'}, o: { duration: 800, delay: 0, easing: [.55,0,.1,1], display: 'block'} },
        { e: maquette, $:{'transition.slideDownBigIn'}, o: { duration: 800, delay: 0, easing: [.55,0,.1,1], display: 'block'} }
      ];
    })
  }
}
