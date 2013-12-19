Kilix.animations["improve"] = {

  start: function () {
      var s = Snap("#AMELIO-transform");
      Snap.load("./assets/img/svg/kilix_anim_amelio_kart.svg", function(f) {
        Snap.load("./assets/img/svg/kilix_anim_amelio_f1.svg", function(g) {

          var elementsKart = new Array(),
              elementsFormula = new Array(),
              delay = 50,
              duration = 500;

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


          elementsFormula['roueBackLeft'] = g.select("#roue-back-left"),
          elementsFormula['roueFrontLeft'] = g.select("#roue-front-left"),
          elementsFormula['aileronFront'] = g.select("#aileron-front"),
          elementsFormula['carrosserie'] = g.select("#carrosserie"),
          elementsFormula['priseAir'] = g.select("#prise-air"),
          elementsFormula['siege'] = g.select("#siege-pilote"),
          elementsFormula['pilote'] = g.select("#pilote"),
          elementsFormula['aileronBack'] = g.select("#aileron-back"),
          elementsFormula['roueFrontRight'] = g.select("#roue-front-right"),
          elementsFormula['roueBackRight'] = g.select("#roue-back-right");
          

          for (var element in elementsKart) {
            s.append(elementsKart[element]);
            elementsKart[element].animate({transform:"t0,0"},0, mina.elastic);
          }

          for (var element in elementsFormula) {
            elementsFormula[element].attr({'fill-opacity': 0});
            s.append(elementsFormula[element]);
          }

          setTimeout(function(){
            move(elementsKart['carenageRight'], "left", "bottom", 80, 400, 200, function(){}, mina.easeinout);
            move(elementsKart['carenageLeft'], "right", "top", 80, 400, 200, function(){}, mina.easeinout);
            move(elementsKart['carenageFront'], "right", "bottom", 120, 400, 200, function(){}, mina.easeinout);
            move(elementsKart['moteurElec'], "left", "top", 80, 400, 200, function(){}, mina.easeout);
            setTimeout(function(){
              elementsKart['carenageRight'].animate({'fill-opacity': 0}, 200);
              elementsKart['carenageLeft'].animate({'fill-opacity': 0}, 200);
              elementsKart['carenageFront'].animate({'fill-opacity': 0}, 200);
              elementsKart['moteurElec'].animate({'fill-opacity': 0}, 200);
            },400);
            setTimeout(function(){
              move(elementsKart['roueBackLeft'], "right", "top", 50, 250, 200, function(){}, mina.linear);
              move(elementsKart['roueFrontLeft'], "right", "top", 30, 250, 200, function(){}, mina.linear);
              move(elementsKart['roueBackRight'], "left", "bottom", 30, 250, 200, function(){}, mina.linear);
              move(elementsKart['roueFrontRight'], "left", "bottom", 30, 250, 200, function(){}, mina.linear);
            },200);
            setTimeout(function(){
              move(elementsKart['roueBackLeft'], "left", "top", 270, 500, 200, function(){}, mina.easeout);
              move(elementsKart['roueFrontLeft'], "right", "bottom", 220, 500, 200, function(){}, mina.easeout);
              move(elementsKart['roueBackRight'], "left", "top", 280, 500, 200, function(){}, mina.easeout);
              move(elementsKart['roueFrontRight'], "right", "bottom", 220, 500, 200, function(){}, mina.easeout);
            },500);
            setTimeout(function(){
              bounce(elementsFormula['roueBackLeft'], 600, 400, function() {});
              bounce(elementsFormula['roueFrontLeft'], 600, 400, function() {});
              bounce(elementsFormula['roueBackRight'], 600, 400, function() {});
              bounce(elementsFormula['roueFrontRight'], 600, 100, function() {
              elementsKart['roueBackLeft'].attr({'fill-opacity': 0});
              elementsKart['roueFrontLeft'].attr({'fill-opacity': 0});
              elementsKart['roueBackRight'].attr({'fill-opacity': 0});
              elementsKart['roueFrontRight'].attr({'fill-opacity': 0});
              });
            },1000);
             
            setTimeout(function(){
              for (var element in elementsFormula) {
                s.append(elementsFormula[element]);
            }
            bounce(elementsFormula['pilote'], 200, delay);
            bounce(elementsFormula['carrosserie'], duration, 100, function() {
              bounce(elementsFormula['siege'], duration, 100, function() {
                bounce(elementsFormula['aileronFront'], duration, 100, function() {
                  bounce(elementsFormula['priseAir'], duration, 100, function() {
                  bounce(elementsFormula['aileronBack'], duration);
                     
                  });
                });
              });
            });
          },1400);
        },500);
      });
    });
  }
}