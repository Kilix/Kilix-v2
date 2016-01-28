Kilix.animations["references"] = {
  init:function(){
    var self = this;
    $('.ref-btn').velocity({width: '0px'}, 0);
    $('.pictures .maquette-ref').velocity(
      { opacity: 0, skewX: ['25deg', '25deg'], translateY: '-20%' },
      { duration: 0, delay: 0,
        complete: function(el){
          $('.pictures').css('overflow', 'hidden')
        }
      })
  },
  open: function(p){
    var easing = [.55,0,.1,1];
    var pictures = $(p).find('.pictures');
    $(p).find('.pictures .maquette-ref').velocity('stop').velocity(
      { opacity: 1, skewX: ['25deg', '25deg'], translateY: '0%' },
      { duration: 1000, delay: 950, easing: easing,
      begin: function(el){
        $(pictures).css('overflow', 'visible')
      }
    })

    $(p).find('.ref-btn').velocity('stop').velocity(
      {width: '70px'},
      {duration: 500, delay: 1850, easing: easing});
    $(p).find('.ref-btn-mobile').velocity('stop').velocity(
      {opacity: 0},
      {duration:500, delay: 950, easing: easing});
  },
  close: function(p){
    var easing = [.55,0,.1,1];
    var pictures = $(p).find('.pictures');
    $(p).find('.ref-btn').velocity('stop').velocity({width: '0px'}, {duration:300, easing: easing});
    $(p).find('.pictures .maquette-ref').velocity('stop').velocity(
      { opacity: 0, skewX: ['25deg', '25deg'], translateY: '-20%' },
      { duration: 500, delay: 250, easing: easing,
      complete: function(el){
        $(pictures).css('overflow', 'hidden')
      }
    })
    $(p).find('.ref-btn-mobile').velocity('stop').velocity({opacity: 1}, {duration: 500, easing: easing});
  }
}
