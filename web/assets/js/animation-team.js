Kilix.animations["team"] = {

  setAnimStatus: function(status) {
    Kilix.animations["team"].animStatus = status;
  },

  start: function () {
      var s = Snap("#TEAM-f1"),
          elementsFormula = new Array(),
          formulaOne = null,
          delay = 50,
          duration = 500;

      function loadImproveSvg() {

        Snap.load("./assets/img/svg/kilix_anim_team_f1.svg", function(f) {
          getFormulaElements(f);
          formulaOne = f.select("#F1");

          elementsFormula['contourF1'].selectAll("path").attr({'stroke-width':0});
          elementsFormula['contourF1'].selectAll("path").attr({'stroke-width':0});
          elementsFormula['contourPilote'].attr({'stroke-width':0});
          elementsFormula['infosKilix'].select("polyline").attr({'stroke-width':0});
          elementsFormula['infosClient'].select("polyline").attr({'stroke-width':0});

          for (var element in elementsFormula) {
            elementsFormula[element].attr({'fill-opacity': 0});
          }
          s.append(formulaOne);
        });
      }

      function getFormulaElements(f) {
        elementsFormula['reload'] = f.select("#reload"),
        elementsFormula['roueBackLeft'] = f.select("#roue-back-left"),
        elementsFormula['roueFrontLeft'] = f.select("#roue-front-left"),
        elementsFormula['aileronFront'] = f.select("#aileron-front"),
        elementsFormula['carrosserie'] = f.select("#carrosserie"),
        elementsFormula['priseAir'] = f.select("#prise-air"),
        elementsFormula['siege'] = f.select("#siege-pilote"),
        elementsFormula['pilote'] = f.select("#pilote"),
        elementsFormula['aileronBack'] = f.select("#aileron-back"),
        elementsFormula['roueFrontRight'] = f.select("#roue-front-right"),
        elementsFormula['roueBackRight'] = f.select("#roue-back-right"),

        elementsFormula['contourPilote'] = f.select("#contourpilote"),
        elementsFormula['contourF1'] = f.select("#contour-f1"),
        elementsFormula['infosClient'] = f.select("#infos-client"),
        elementsFormula['infosKilix'] = f.select("#infos-kilix");
        elementsFormula['moustache'] = f.select("#Moustache");
        elementsFormula['moustache'].click(function(e){
            e.stopPropagation();
            $('body').raptorize();

        });

        elementsFormula['reload'].click(function() {
          if (Kilix.animations['team'].animStatus == true) {
            Kilix.animations['team'].animStatus = false;
            resetTeamAnimation();
          }
        });
      }

      function resetTeamAnimation() {
        elementsFormula['reload'].animate({'fill-opacity': 0}, 100, function() {

          elementsFormula['contourF1'].attr({'fill-opacity': 1}).select("path:first-child").animate({'stroke-width': 0},300);
          elementsFormula['contourF1'].attr({'fill-opacity': 1}).select("path:last-child").animate({'stroke-width': 0},300);

          elementsFormula['contourF1'].selectAll("path").attr({'stroke-width':0});
          elementsFormula['contourF1'].selectAll("path").attr({'stroke-width':0});
          elementsFormula['contourPilote'].attr({'stroke-width':0});
          elementsFormula['infosKilix'].select("polyline").animate({'stroke-width':0},300);
          elementsFormula['infosKilix'].animate({'fill-opacity':0},300);
          elementsFormula['infosClient'].select("polyline").attr({'stroke-width':0});
          elementsFormula['infosClient'].animate({'fill-opacity':0},300);

          elementsFormula['infosClient'].select("polyline").animate({'stroke-width':0},600,function(){

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
            });
        });
      }

      function improveAnimation() {
        setTimeout(function(){
          bounce(elementsFormula['roueBackLeft'], 600, 'undefined', function() {});
          bounce(elementsFormula['roueFrontLeft'], 600, 'undefined', function() {});
          bounce(elementsFormula['roueBackRight'], 600, 'undefined', function() {});
          bounce(elementsFormula['roueFrontRight'], 600, 100, function() {});
        },1000);
        setTimeout(function(){

          bounce(elementsFormula['carrosserie'], duration, 100, function() {
            bounce(elementsFormula['siege'], duration, 100, function() {
              bounce(elementsFormula['aileronFront'], duration, 100, function() {
                bounce(elementsFormula['priseAir'], duration, 100, function() {
                  bounce(elementsFormula['aileronBack'], duration, 100, function() {

                    elementsFormula['contourF1'].attr({'fill-opacity': 1}).select("path:first-child").animate({'stroke-width': 10},300);
                    elementsFormula['contourF1'].attr({'fill-opacity': 1}).select("path:last-child").animate({'stroke-width': 10},300, function(){

                        elementsFormula['contourF1'].attr({'fill-opacity': 1}).select("path:first-child").animate({'stroke-width': 10},300,function(){
                          elementsFormula['infosClient'].select("polyline").animate({'stroke-width':5},300);
                          elementsFormula['infosClient'].animate({'fill-opacity':1},300, function(){

                            setTimeout(function(){

                              bounce(elementsFormula['pilote'], 600, 500, function(){

                                elementsFormula['contourPilote'].animate({'stroke-width': 10},300,function(){

                                elementsFormula['infosKilix'].select("polyline").animate({'stroke-width':5},300);
                                elementsFormula['infosKilix'].animate({'fill-opacity':1},600, function(){
                                    bounce(elementsFormula['moustache'], 600, 500,function(){

                                    elementsFormula['reload'].animate({'fill-opacity': 1}, 400);
                                    Kilix.animations['team'].animStatus = true;

                                  });
                                });
                              });
                            });
                            },1000);
                          });
                        });
                    });
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
