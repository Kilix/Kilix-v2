Kilix.animations["team"] = {

  setAnimStatus: function(status) {
    Kilix.animations["team"].animStatus = status;
  },

  start: function () {
      var s = Snap("#TEAM-f1"),
          elementsKart = new Array(),
          elementsFormula = new Array()
          formulaOne = null,
          delay = 50,
          duration = 500;

      $('#TEAM-f1').on('click', function() {
        if (Kilix.animations['team'].animStatus == true) {
          Kilix.animations['team'].animStatus = false;
          resetImproveAnimation();
        }
      });

      function loadImproveSvg() {

        Snap.load("./assets/img/svg/kilix_anim_team_f1.svg", function(f) {
          getFormulaElements(f);
          formulaOne = f.select("#F1");
          formulaOne.attr({'fill-opacity': 0});

          for (var element in elementsFormula) {
            elementsFormula[element].attr({'fill-opacity': 0});
          }
          s.append(formulaOne);
        });
      }

      function getFormulaElements(f) {
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
        move(formulaOne, 'right', 'bot', 1500, 1000, 2000, function() {

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
      }

      function improveAnimation() {
        setTimeout(function(){
          bounce(elementsFormula['roueBackLeft'], 600, 'undefined', function() {});
          bounce(elementsFormula['roueFrontLeft'], 600, 'undefined', function() {});
          bounce(elementsFormula['roueBackRight'], 600, 'undefined', function() {});
          bounce(elementsFormula['roueFrontRight'], 600, 100, function() {});
        },1000);
        setTimeout(function(){
          bounce(elementsFormula['pilote'], 200, delay);
          bounce(elementsFormula['carrosserie'], duration, 100, function() {
            bounce(elementsFormula['siege'], duration, 100, function() {
              bounce(elementsFormula['aileronFront'], duration, 100, function() {
                bounce(elementsFormula['priseAir'], duration, 100, function() {
                  bounce(elementsFormula['aileronBack'], duration, 1000, function() {
                    Kilix.animations['amelioration'].animStatus = true;
                  });
                });
              });
            });
          });
        },1400);
    }
    loadImproveSvg();
    improveAnimation();
  }
}