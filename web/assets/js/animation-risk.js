Kilix.animations['risques'] = {

  intervalEvents: new Array(),

  setAnimStatus: function(status) {
    Kilix.animations["risques"].animStatus = status;
  },

  freeIntervals: function() {
    for (var i = Kilix.animations['risques'].intervalEvents.length - 1; i >= 0; i--) {
      window.clearInterval(Kilix.animations['risques'].intervalEvents[i]);
    };
  },

  start: function () {

      var s = Snap("#RISK-dispatch"),
      elements = new Array(),
      elements2 = new Array(),
      delay = 50,
      duration = 100;

      $('#RISK-dispatch').on('click', function() {
        if (Kilix.animations["risques"].animStatus == true) {
          Kilix.animations["risques"].animStatus = false;
          resetRiskAnimation();
        }
      });

      function loadRiskSvg() {
        Snap.load("./assets/img/svg/kilix_anim_risque_1.svg", function(f) {
          getRiskElements(f);

          for (var element in elements) {
            elements[element].attr({'fill-opacity': 0});
            s.append(elements[element]);
          }

          startAnimRisk();
        });
      }

      function getRiskElements(f) {
        
        elements['kart']  = f.select("#kart2");
        elements['hole']  = f.select("#trou");
        elements['tree']  = f.select("#tree");
        elements['rocks'] = f.select("#rocks");
        elements['fence'] = f.select("#fence");
        elements['pole']  = f.select("#plot");
        elements2['roueBackRight'] = f.select("#roue-back-right-1");
        elements2['roueBackLeft'] = f.select("#roue-back-left-1");
        elements2['roueFrontRight'] = f.select("#roue-front-right-1");
        elements2['roueFrontLeft'] = f.select("#roue-front-left-1");
        elements['reload'] = f.select("#risk-reload");
      }

      function animRisk(svgElements, first) {

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
                                setTimeout(function(){
                                  removeWithBounce(svgElements['hole'], 500);

                                    Kilix.animations['risques'].freeIntervals();
                                    elements['reload'].animate({'fill-opacity': 1}, 400, function() {
                                      Kilix.animations["risques"].animStatus = true;
                                    });

                                },1450);

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

      function startAnimRisk() {
        animRisk(elements,true);

        Kilix.animations['risques'].intervalEvents[1] = window.setInterval(function(){
            roll(elements2['roueFrontLeft'], duration, 2);
            roll(elements2['roueFrontRight'], duration, 2);
            setTimeout(function(){
              roll(elements2['roueBackLeft'], duration, 2);
              roll(elements2['roueBackRight'], duration, 2);
            }, delay);
                
          },100);

        Kilix.animations['risques'].intervalEvents[2] = window.setInterval(function(){
            roll(elements2['roueFrontLeft'], duration, 8);
            roll(elements2['roueFrontRight'], duration, 8);
            setTimeout(function(){
              roll(elements2['roueBackLeft'], duration, 8);
              roll(elements2['roueBackRight'], duration, 8);
            }, delay);
          },3000);
      }

      function resetRiskAnimation() {

      elements['reload'].animate({'fill-opacity': 0}, 100, function() {

        for (var element in elements) {
          elements[element].attr({'fill-opacity': 0});
        }
          startAnimRisk();
        });
      }

      loadRiskSvg();
  }
}
