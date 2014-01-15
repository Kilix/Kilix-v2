Kilix.animations["agilite"] = {

  setAnimStatus: function(status) {
    Kilix.animations["agilite"].animStatus = status;
  },

  start: function () {
      var valSVG = Snap("#AGI-value"),
          riskSVG = Snap("#AGI-risk"),
          elementsValue = new Array(),
          elementsRisk = new Array(),
          delay = 50,
          duration = 500;

      function loadValSvg() {

        Snap.load("./assets/img/svg/agi1.svg", function(f) {
          full = f.select("#full"),
          elementsValue['valueScales'] = f.select("#v-scales"),
          elementsValue['valuePointilles1'] = f.select("#v-pointilles1"),
          elementsValue['valuePointilles2'] = f.select("#v-pointilles2"),
          elementsValue['valueCourbeBleue'] = f.select("#v-courbe-bleue"),
          elementsValue['valueOldGris'] = f.select("#v-old-gris"),
          elementsValue['valuePointBleu'] = f.select("#v-point-bleu"),
          elementsValue['valueTime'] = f.select("#v-time"),
          elementsValue['valuePlan'] = f.select("#v-plan"),
          elementsValue['valuePlan2'] = f.select("#v-plan-2"),
          elementsValue['valueFleches'] = f.select("#v-fleches"),
          elementsValue['valueText'] = f.select("#v-valeur");

          for (var element in elementsValue) {
              elementsValue[element].attr({'opacity': 0});
              valSVG.append(elementsValue[element]);
          }

          elementsValue['valueScales'].animate({'opacity':1}, 500, function() {});

        });
      }

      function valAnimation() {
        showCheckmark($('.agility-item:eq(0)'));
        scale(elementsValue['valuePlan'], 1, 500, 200, function(){});
        scale(elementsValue['valuePlan2'], 1, 500, 200, function() {
          drawPath(valSVG, elementsValue['valueOldGris'], 900, 1200, mina.easeout, function(){
            drawPath(valSVG, elementsValue['valueCourbeBleue'], 780, 800, mina.easeinout, function(){
              alterBounce(elementsValue['valuePointBleu'], 400, 400, function() {
                elementsValue['valueText'].animate({opacity:1} ,400 );
                alterBounce(elementsValue['valueTime'], 600, 400, function() {
                  drawLine(valSVG, elementsValue['valuePointilles1'], 500, 700, mina.easeout, function(){
                    drawLine(valSVG, elementsValue['valuePointilles2'], 500, 1200, mina.easeout, function(){
                      riskAnimation();
                    });
                  });
                });
              });
            });
          });
        });
      }

      function loadRiskSvg() {

        Snap.load("./assets/img/svg/agi2.svg", function(f) {
          elementsRisk['riskScales'] = f.select("#r-scales"),
          elementsRisk['riskCourbeBleue'] = f.select("#r-courbe-bleue"),
          elementsRisk['riskOldGris'] = f.select("#r-old-gris"),
          elementsRisk['riskTime'] = f.select("#r-time"),
           elementsRisk['riskPlan'] = f.select("#r-plan"),
           elementsRisk['riskPlan2'] = f.select("#r-plan-2"),
          elementsRisk['riskText'] = f.select("#r-valeur");

          for (var element in elementsRisk) {
              elementsRisk[element].attr({'opacity': 0});
              riskSVG.append(elementsRisk[element]);
          }

          elementsRisk['riskScales'].animate({'opacity':1}, 500, function() {});

        });
      }

      function riskAnimation() {
        showCheckmark($('.agility-item:eq(1)'));
        scale(elementsRisk['riskPlan'], 1, 500, 200, function(){});
        scale(elementsRisk['riskPlan2'], 1, 500, 200, function() {
           drawPath(riskSVG, elementsRisk['riskOldGris'], 900, 1200, mina.easeout, function(){
             drawPath(riskSVG, elementsRisk['riskCourbeBleue'], 780, 800, mina.easeinout, function(){
                elementsRisk['riskText'].animate({opacity:1} ,400 );
                  alterBounce(elementsRisk['riskTime'], 600, 400, function() {
                });
             });
           });
         });
      }

    loadValSvg();
    loadRiskSvg();

    setTimeout(function(){valAnimation()}, 600);

  },

  startSecond: function() {
    var   adaptSVG = Snap("#AGI-adapt"),
          visSVG = Snap("#AGI-vis"),
          elementsAdapt = new Array(),
          elementsVis = new Array(),
          delay = 50,
          duration = 500;


      function loadAdaptabilitySvg() {

        Snap.load("./assets/img/svg/agi3.svg", function(f) {
          elementsAdapt['adaptScales'] = f.select("#a-scales"),
          elementsAdapt['adaptCourbeBleue'] = f.select("#a-courbe-bleue"),
          elementsAdapt['adaptOldGris'] = f.select("#a-old-gris"),
          elementsAdapt['adaptTime'] = f.select("#a-time"),
          elementsAdapt['adaptPlan'] = f.select("#a-plan"),
          elementsAdapt['adaptPlan2'] = f.select("#a-plan-2"),
          elementsAdapt['adaptText'] = f.select("#a-valeur");

          for (var element in elementsAdapt) {
              elementsAdapt[element].attr({'opacity': 0});
              adaptSVG.append(elementsAdapt[element]);
          }

          elementsAdapt['adaptScales'].animate({'opacity':1}, 500, function() {});

        });
      }

      function adaptabilityAnimation() {
        showCheckmark($('.agility-item:eq(2)'));
        scale(elementsAdapt['adaptPlan'], 1, 500, 200, function(){});
        scale(elementsAdapt['adaptPlan2'], 1, 500, 200, function() {
           drawPath(adaptSVG, elementsAdapt['adaptOldGris'], 900, 1200, mina.easeout, function(){
             drawPath(adaptSVG, elementsAdapt['adaptCourbeBleue'], 780, 800, mina.easeinout, function(){
                elementsAdapt['adaptText'].animate({opacity:1} ,400 );
                  alterBounce(elementsAdapt['adaptTime'], 600, 400, function() {
                    visibilityAnimation();
                });
             });
           });
         });
      }

      function loadVisibilitySvg() {

        Snap.load("./assets/img/svg/agi4.svg", function(f) {
          elementsVis['visScales'] = f.select("#vis-scales"),
          elementsVis['visCourbeBleue'] = f.select("#vis-courbe-bleue"),
          elementsVis['visOldGris'] = f.select("#vis-old-gris"),
          elementsVis['visTime'] = f.select("#vis-time"),
           elementsVis['visPlan'] = f.select("#vis-plan"),
           elementsVis['visPlan2'] = f.select("#vis-plan-2"),
          elementsVis['visText'] = f.select("#vis-valeur");

          for (var element in elementsVis) {
              elementsVis[element].attr({'opacity': 0});
              visSVG.append(elementsVis[element]);
          }

          elementsVis['visScales'].animate({'opacity':1}, 500, function() {});

        });
      }

      function visibilityAnimation() {
        showCheckmark($('.agility-item:eq(3)'));
        scale(elementsVis['visPlan'], 1, 500, 200, function(){});
        scale(elementsVis['visPlan2'], 1, 500, 200, function() {
           drawPath(visSVG, elementsVis['visOldGris'], 900, 1200, mina.easeout, function(){
             drawPath(visSVG, elementsVis['visCourbeBleue'], 780, 800, mina.easeinout, function(){
                elementsVis['visText'].animate({opacity:1} ,400 );
                  alterBounce(elementsVis['visTime'], 600, 400, function() {
                });
             });
           });
         });
      }

    loadAdaptabilitySvg();
    loadVisibilitySvg();
    setTimeout(function(){adaptabilityAnimation()}, 600);
  }
}