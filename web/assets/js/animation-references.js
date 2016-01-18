Kilix.animations["references"] = {
  init:function(){
    var self = this;
    $('.ref-btn').velocity({width: '0px'}, 0);
    $('.pictures .maquette-ref').velocity(
      { opacity: 0, skewX: ['25deg', '25deg'], translateY: '-20%' },
      { duration: 0, delay: 0 })
    $('.pictures').velocity(
      { width: '15%' },
      { duration: 0, delay: 0,
        begin: function(el){
          $(el).css('overflow', 'hidden')
        }
      })
  },
  open: function(p){
    var pictures = $(p).find('.pictures');
    $(pictures).velocity('stop').velocity(
      { width: '75%' },
      { duration: 800, delay: 0,
        complete: function(el){
          $(el).css('overflow', 'visible')
        }
      })
    $(p).find('.pictures .maquette-ref').velocity('stop').velocity(
      { opacity: 1, skewX: ['25deg', '25deg'], translateY: '0%' },
      { duration: 500, delay: 750 })

    $(p).find('.ref-btn').velocity('stop').velocity(
      {width: '50px'},
      {duration: 300, delay: 750});
    $(p).find('.ref-btn-mobile').velocity('stop').velocity(
      {opacity: 0},
      {duration:500, delay: 750});
  },
  close: function(p){
    var pictures = $(p).find('.pictures');
    $(p).find('.ref-btn').velocity('stop').velocity({width: '0px'}, 300);
    $(p).find('.pictures .maquette-ref').velocity('stop').velocity(
    {
      opacity: 0,
      skewX: ['25deg', '25deg'],
      translateY: '-20%'
    },{
      duration: 800,
      delay: 0
    })
    $(pictures).velocity('stop').velocity(
      { width: '15%' },
      { duration: 500, delay: 750,
        begin: function(el){
          $(pictures).css('overflow', 'hidden')
        }
      })
    $(p).find('.ref-btn-mobile').velocity('stop').velocity({opacity: 1}, 500);
  }
}
