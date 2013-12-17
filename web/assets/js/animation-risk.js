$(function () {
    var s = Snap("#RISK-dispatch");
    Snap.load("./assets/img/svg/kilix_anim_risque_1.svg", function(f) {

      var elements = new Array(),
          elementss = new Array(),
          delay = 50,
          duration = 100;

      elements['kart']  = f.select("#kart2");
      elements['hole']  = f.select("#trou");
      elements['tree']  = f.select("#tree");
      elements['rocks'] = f.select("#rocks");
      elements['fence'] = f.select("#fence");
      elements['pole']  = f.select("#plot");
      elementss['roueBackRight'] = f.select("#roue-back-right-1");
      elementss['roueBackLeft'] = f.select("#roue-back-left-1");
      // elements['roueBackRight2'] = f.select("#roue-back-right-2");
      // elements['roueBackLeft2'] = f.select("#roue-back-left-2");
      // elements['roueFrontRight2'] = f.select("#roue-front-right-2");
      // elements['roueFrontLeft2'] = f.select("#roue-front-left-2");
      elementss['roueFrontRight'] = f.select("#roue-front-right-1");
      elementss['roueFrontLeft'] = f.select("#roue-front-left-1");


      for (var element in elements) {
        elements[element].attr({'fill-opacity': 0});
        s.append(elements[element]);
      }

    function startAnimRisk(svgElements, first) {
      console.log('hoh');
      if(first === true) {
        bounce(svgElements['kart'], duration);
      }

      setTimeout(function() {
        bounce(svgElements['fence'], duration, duration, function(){
          moveWithBounce(svgElements['fence'],'right','top', 1350, 2250, 700, function(){
            setTimeout(function(){removeWithBounce(svgElements['fence'],500)},1450);

            moveWithBounce(svgElements['kart'],'left','top', -250, 400);
            bounce(svgElements['pole'], duration, duration, function(){
              moveWithBounce(svgElements['pole'],'right','top', 1350, 2250, 500, function(){
                setTimeout(function(){removeWithBounce(svgElements['pole'],500)},1450);

                moveWithBounce(svgElements['kart'],'left','top', 0, 500);
                bounce(svgElements['rocks'], duration, duration, function(){
                  moveWithBounce(svgElements['rocks'],'right','top', 1350, 2250, 500, function(){
                    setTimeout(function(){removeWithBounce(svgElements['rocks'],500)},1450);

                    moveWithBounce(svgElements['kart'],'left','top', 200, 500);
                    bounce(svgElements['tree'], duration, duration, function(){
                      moveWithBounce(svgElements['tree'],'right','top', 1350, 2250,500,function(){ // Arbre Avance
                        setTimeout(function(){removeWithBounce(svgElements['tree'],500)},1500);
                        
                        moveWithBounce(svgElements['kart'],'left','top', -250, 800);

                        setTimeout(function(){
                          bounce(svgElements['hole'], duration, duration, function(){
                            moveWithBounce(svgElements['hole'],'right','top', 1350, 2250, 500, function(){
                              setTimeout(function(){removeWithBounce(svgElements['hole'],500)},1450);

                              moveWithBounce(svgElements['kart'],'left','top', 0, 500);
                            });
                          });
                        },600);
                      });
                    });
                  });
                });
              });
            });
          });
        });
      },duration);      
    }

    startAnimRisk(elements,true);
    setInterval(function(){startAnimRisk(elements)},4500);

    window.setInterval(function(){
      roll(elementss['roueFrontLeft'], duration, 10, 2);
      roll(elementss['roueFrontRight'], duration, 20, 2);
      setTimeout(function(){
        roll(elementss['roueBackLeft'], duration, 40, 2);
        roll(elementss['roueBackRight'], duration, 50, 2);
      }, delay);
          
    },100);

    window.setInterval(function(){
      roll(elementss['roueFrontLeft'], duration, 10, 8);
      roll(elementss['roueFrontRight'], duration, 20, 8);
      setTimeout(function(){
        roll(elementss['roueBackLeft'], duration, 40, 8);
        roll(elementss['roueBackRight'], duration, 50, 8);
      }, delay);
    },3000);

  });
});
