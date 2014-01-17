Kilix.animations["amelioration"] = {

  setAnimStatus: function(status) {
    Kilix.animations["amelioration"].animStatus = status;
  },

  start: function () {
      var s = Snap("#AMELIO-transform"),
          elementsKart = new Array(),
          elementsFormula = new Array()
          formulaOne = null,
          delay = 50,
          duration = 600;

      $('#AMELIO-transform').on('click', function() {
        if (Kilix.animations['amelioration'].animStatus == true) {
          Kilix.animations['amelioration'].animStatus = false;
          resetImproveAnimation();
        }
      });

      function loadImproveSvg() {
        Snap.load("./assets/img/svg/kilix_anim_amelio_kart.svg", function(f) {
          getKartElement(f);

          for (var element in elementsKart) {
            elementsKart[element].attr({'fill-opacity': 0});
            s.append(elementsKart[element]);
          }
          for (var element in elementsKart) {
            elementsKart[element].animate({'fill-opacity': 1}, 800);
          }

        });

        Snap.load("./assets/img/svg/kilix_anim_amelio_f1.svg", function(f) {
          getFormulaElements(f);
          formulaOne = f.select("#F1");
          formulaOne.attr({'fill-opacity': 0});

          for (var element in elementsFormula) {
            elementsFormula[element].attr({'fill-opacity': 0});
          }
          s.append(formulaOne);
        });
      }

      function getKartElement(f) {
        elementsKart['moteurElec'] = f.select("#moteur-elec"),
        elementsKart['roueBackRight'] = f.select("#roue-back-right"),
        elementsKart['roueBackLeft'] = f.select("#roue-back-left"),
        elementsKart['carenageRight'] = f.select("#carenage-right"),
        elementsKart['carenageLeft'] = f.select("#carenage-left"),
        elementsKart['roueFrontRight'] = f.select("#roue-front-right"),
        elementsKart['roueFrontLeft'] = f.select("#roue-front-left"),
        elementsKart['siege'] = f.select("#siege"),
        elementsKart['carenageFront'] = f.select("#carenage-front"),
        elementsKart['pilote'] = f.select("#pilote");
      }

      function getFormulaElements(f) {
        elementsFormula['reload'] = f.select("#amelio-reload"),
        elementsFormula['roueBackLeft'] = f.select("#roue-back-left"),
        elementsFormula['roueFrontLeft'] = f.select("#roue-front-left"),
        elementsFormula['aileronFront'] = f.select("#aileron-front"),
        elementsFormula['carrosserie'] = f.select("#carrosserie"),
        elementsFormula['priseAir'] = f.select("#prise-air"),
        elementsFormula['siege'] = f.select("#siege-pilote"),
        elementsFormula['pilote'] = f.select("#pilote"),
        elementsFormula['aileronBack'] = f.select("#aileron-back"),
        elementsFormula['roueFrontRight'] = f.select("#roue-front-right"),
        elementsFormula['roueBackRight'] = f.select("#roue-back-right");

      }

      function resetImproveAnimation() {
        elementsFormula['reload'].animate({'fill-opacity': 0}, 100, function() {
          move(formulaOne, 'right', 'bot', 1500, 1000, 2000, function() {
            for (var element in elementsKart) {
              elementsKart[element].attr({transform: 't'+[0, 0], 'fill-opacity': 0});
              elementsKart[element].animate({'fill-opacity': 1}, 700);
            }

            for (var element in elementsFormula) {
              elementsFormula[element].attr({transform: 't'+[0, 0], 'fill-opacity': 0});
            };

            formulaOne.attr({transform: 't'+[0, 0],'fill-opacity': 0}, function() {
              improveAnimation();
            });

            window.setTimeout(function() {
              improveAnimation();
            }, 100);
          }, mina.backin);
        });
      }

      function improveAnimation() {
        setTimeout(function(){
          move(elementsKart['carenageRight'], "left", "bottom", 80, 400, 'undefined', function(){}, mina.easeinout);
          move(elementsKart['carenageLeft'], "right", "top", 80, 400, 'undefined', function(){}, mina.easeinout);
          move(elementsKart['carenageFront'], "right", "bottom", 120, 400, 'undefined', function(){}, mina.easeinout);
          move(elementsKart['moteurElec'], "left", "top", 80, 400, 'undefined', function(){}, mina.easeout);
          setTimeout(function(){
            elementsKart['carenageRight'].animate({'fill-opacity': 0}, 200);
            elementsKart['carenageLeft'].animate({'fill-opacity': 0}, 200);
            elementsKart['carenageFront'].animate({'fill-opacity': 0}, 200);
            elementsKart['moteurElec'].animate({'fill-opacity': 0}, 200);
          },400);
          setTimeout(function(){
            move(elementsKart['roueBackLeft'], "right", "top", 50, 250, 'undefined', function(){}, mina.linear);
            move(elementsKart['roueFrontLeft'], "right", "top", 30, 250, 'undefined', function(){}, mina.linear);
            move(elementsKart['roueBackRight'], "left", "bottom", 30, 250, 'undefined', function(){}, mina.linear);
            move(elementsKart['roueFrontRight'], "left", "bottom", 30, 250, 'undefined', function(){}, mina.linear);
          },200);
          setTimeout(function(){
            move(elementsKart['roueBackLeft'], "left", "top", 270, 500, 'undefined', function(){}, mina.easeout);
            move(elementsKart['roueFrontLeft'], "right", "bottom", 220, 500, 'undefined', function(){}, mina.easeout);
            move(elementsKart['roueBackRight'], "left", "top", 280, 500, 'undefined', function(){}, mina.easeout);
            move(elementsKart['roueFrontRight'], "right", "bottom", 220, 500, 'undefined', function(){}, mina.easeout);
          },500);
          setTimeout(function(){
            bounce(elementsFormula['roueBackLeft'], 600, 'undefined', function() {});
            bounce(elementsFormula['roueFrontLeft'], 600, 'undefined', function() {});
            bounce(elementsFormula['roueBackRight'], 600, 'undefined', function() {});
            bounce(elementsFormula['roueFrontRight'], 600, 100, function() {
            elementsKart['roueBackLeft'].attr({'fill-opacity': 0});
            elementsKart['roueFrontLeft'].attr({'fill-opacity': 0});
            elementsKart['roueBackRight'].attr({'fill-opacity': 0});
            elementsKart['roueFrontRight'].attr({'fill-opacity': 0});
            });
          },1000);

          setTimeout(function(){
            elementsFormula['pilote'].attr({'fill-opacity': 1});
            elementsKart['pilote'].attr({'fill-opacity': 0});
            elementsKart['siege'].attr({'fill-opacity': 0});
            bounce(elementsFormula['carrosserie'], duration, 300, function() {
              elementsFormula['siege'].attr({'fill-opacity': 1});
                bounce(elementsFormula['aileronFront'], duration, 400, function() {
                  bounce(elementsFormula['priseAir'], duration, 400, function() {
                    bounce(elementsFormula['aileronBack'], duration, 1000, function() {
                      Kilix.animations['amelioration'].animStatus = true;
                      elementsFormula['reload'].animate({'fill-opacity': 1}, 400);
                    });
                    
                });
              });
            });
          },1400);
        },500);
      }

      loadImproveSvg();
      improveAnimation();
  }
}