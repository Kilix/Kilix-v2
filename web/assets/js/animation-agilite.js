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
          elementsValue['valueTime'] = f.select("#v-time"),
          elementsValue['valuePlan'] = f.select("#v-plan"),
          elementsValue['valuePlan2'] = f.select("#v-plan-2"),
          elementsValue['valueTps'] = f.select("#tps"),
          elementsValue['valueVal'] = f.select("#val"),
          elementsValue['valuePointBleu'] = f.select("#v-point-bleu"),
          elementsValue['valueText'] = f.select("#v-valeur");

          for (var element in elementsValue) {
              elementsValue[element].attr({'opacity': 0});
              valSVG.append(elementsValue[element]);
          }

          elementsValue['valueScales'].animate({'opacity':1}, 500);

        });
      }

      //Incrémente un nombre
      function incrementNumber(el, start, end, duration, easing, f){
        $({someValue: start}).animate({someValue: end}, {
            duration: duration,
            easing:easing,
            step: function() { 
            el.text(Math.ceil(this.someValue)+"%")        
            },
            done: function() {
              el.text(end+"%");
              f();
            }
        });
      }

      function valAnimation() {
        showCheckmark($('.agility-item:eq(0)'));
        scale(elementsValue['valuePlan'], 1, 500, 200, function(){});
        scale(elementsValue['valuePlan2'], 1, 500, 200, function() {
          drawPath(valSVG, elementsValue['valueOldGris'], 900, 1200, mina.easeout, function(){
            drawPath(valSVG, elementsValue['valueCourbeBleue'], 780, 800, mina.easeinout, function(){
              elementsValue['valueText'].animate({opacity:1} ,400 );
              alterBounce(elementsValue['valueTime'], 600, 400, function() {
                $('#tps').text("0");
                elementsValue['valueTps'].animate({opacity: 1}, 200, function() {});
                incrementNumber($('#tps'), 0, 50, 700, 'swing', function(){});
                drawLine(valSVG, elementsValue['valuePointilles1'], 700, 1200, mina.easeout, function(){
                  $('#val').text("0");
                  elementsValue['valueVal'].animate({opacity: 1}, 200, function() {});
                  incrementNumber($('#val'), 0, 80, 900, 'swing', function(){});
                  drawLine(valSVG, elementsValue['valuePointilles2'], 900, 500, mina.easeout, function(){
                    alterBounce(elementsValue['valuePointBleu'], 400, 400, function() {
                      riskAnimation();
                    });
                  });
                });
              });
            });
          });
        });
      }

      function loadRiskSvg(callback) {

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

          elementsRisk['riskScales'].animate({'opacity':1}, 500, function() {
            callback();
          });

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
    loadRiskSvg(function() {
      if(navigator.userAgent.toLowerCase().indexOf('firefox') > -1) {

        showCheckmark($('.agility-item:eq(0)'));
        for (var element in elementsValue) {
          elementsValue[element].animate({'opacity': 1}, 500);
        }

        showCheckmark($('.agility-item:eq(1)'));
        for (var element in elementsRisk) {
            elementsRisk[element].animate({'opacity': 1}, 500);
        }
      } else {
        setTimeout(function(){valAnimation()}, 600);
      }
    });

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

      function loadVisibilitySvg(callback) {

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

          elementsVis['visScales'].animate({'opacity':1}, 500, callback());

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
    loadVisibilitySvg(function() {

      if(navigator.userAgent.toLowerCase().indexOf('firefox') > -1) {

        showCheckmark($('.agility-item:eq(2)'));
        for (var element in elementsAdapt) {
          elementsAdapt[element].animate({'opacity': 1}, 500);
        }

        showCheckmark($('.agility-item:eq(3)'));
        for (var element in elementsVis) {
            elementsVis[element].animate({'opacity': 1}, 500);
        }
      } else {
        setTimeout(function(){adaptabilityAnimation()}, 600);
      }
    });
    
  }
}