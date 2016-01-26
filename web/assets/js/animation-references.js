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
    var pictures = $(p).find('.pictures');
    $(p).find('.pictures .maquette-ref').velocity('stop').velocity(
      { opacity: 1, skewX: ['25deg', '25deg'], translateY: '0%' },
      { duration: 1000, delay: 950, easing: [0.215, 0.610, 0.355, 1.000],
      begin: function(el){
        $(pictures).css('overflow', 'visible')
      }
    })

    $(p).find('.ref-btn').velocity('stop').velocity(
      {width: '50px'},
      {duration: 500, delay: 1250, easing: [0.550, 0.055, 0.675, 0.190]});
    $(p).find('.ref-btn-mobile').velocity('stop').velocity(
      {opacity: 0},
      {duration:500, delay: 950, easing: [0.215, 0.610, 0.355, 1.000]});
  },
  close: function(p){
    var pictures = $(p).find('.pictures');
    $(p).find('.ref-btn').velocity('stop').velocity({width: '0px'}, {duration:500, easing: [0.550, 0.055, 0.675, 0.190]});
    $(p).find('.pictures .maquette-ref').velocity('stop').velocity(
      { opacity: 0, skewX: ['25deg', '25deg'], translateY: '-20%' },
      { duration: 850, delay: 450, easing: [0.215, 0.610, 0.355, 1.000],
      complete: function(el){
        $(pictures).css('overflow', 'hidden')
      }
    })
    $(p).find('.ref-btn-mobile').velocity('stop').velocity({opacity: 1}, {duration: 500, easing: [0.215, 0.610, 0.355, 1.000]});
  }
}
