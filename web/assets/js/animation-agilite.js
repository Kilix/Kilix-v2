Kilix.animations["agilite"] = {

  setAnimStatus: function(status) {
    Kilix.animations["agilite"].animStatus = status;
  },

  initAnimElements: function(elements, svg, scales, callback, node) {
    for (var element in elements) {
      elements[element].attr({'opacity': 0});
      svg.append(elements[element]);
    }

    scales.animate({'opacity':1}, 500);

    if(navigator.userAgent.toLowerCase().indexOf('firefox') > -1) {
      for (var element in elements) {
        elements[element].animate({'opacity': 1}, 500);
      }

      node.find('li').find('path').css({'opacity':'1', 'stroke-dasharray': '0'});
    } else {
      setTimeout(callback(), 400);
    }
  },

  startValueAnimation: function () {
    var svg = Snap("#AGI-value"),
        elements = new Array();

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

    function loadSvg() {

      Snap.load("./assets/img/svg/agiValue.svg", function(f) {
        elements['scales'] = f.select("#v-scales"),
        elements['pointilles1'] = f.select("#v-pointilles1"),
        elements['pointilles2'] = f.select("#v-pointilles2"),
        elements['courbeBleue'] = f.select("#v-courbe-bleue"),
        elements['oldGris'] = f.select("#v-old-gris"),
        elements['time'] = f.select("#v-time"),
        elements['plan'] = f.select("#v-plan"),
        elements['tps'] = f.select("#tps"),
        elements['val'] = f.select("#val"),
        elements['plan2'] = f.select("#v-plan-2"),
        elements['text'] = f.select("#v-valeur"),
        elements['pointBleu'] = f.select("#v-point-bleu");

        Kilix.animations["agilite"].initAnimElements(elements, svg, elements['scales'], valAnimation, $('.agility-item:eq(0)'));

      });
    }


    function valAnimation() {
      showCheckmark($('.agility-item:eq(0)'));
      scale(elements['plan'], 1, 500, 200, function(){});
      scale(elements['plan2'], 1, 500, 200, function() {
        drawPath(svg, elements['oldGris'], 1600, 1500, mina.easeout, function(){
          drawPath(svg, elements['courbeBleue'], 1400, 1300, mina.easeinout, function(){
            
              elements['text'].animate({opacity:1} ,400 );
              alterBounce(elements['time'], 600, 400, function() {
                $('#tps').text("0");
                elements['tps'].animate({opacity: 1}, 200, function() {});
                incrementNumber($('#tps'), 0, 50, 700, 'swing', function(){});
                drawLine(svg, elements['pointilles1'], 900, 1300, mina.easeout, function(){
                  $('#val').text("0");
                  elements['val'].animate({opacity: 1}, 200, function() {});
                  incrementNumber($('#val'), 0, 80, 900, 'swing', function(){});
                  drawLine(svg, elements['pointilles2'], 900, 500, mina.easeout, function(){
                    drawCircle(svg, elements['pointBleu'], 400); 
                  });
                });
              });
            });
          });
        });
      }

    loadSvg();
  },

  startRiskAnimation: function() {
    var svg = Snap("#AGI-risk"),
        elements = new Array();

    function loadSvg() {

      Snap.load("./assets/img/svg/agiRisk.svg", function(f) {
        elements['scales'] = f.select("#r-scales"),
        elements['courbeBleue'] = f.select("#r-courbe-bleue"),
        elements['oldGris'] = f.select("#r-old-gris"),
        elements['time'] = f.select("#r-time"),
        elements['plan'] = f.select("#r-plan"),
        elements['plan2'] = f.select("#r-plan-2"),
        elements['text'] = f.select("#r-valeur");

        Kilix.animations["agilite"].initAnimElements(elements, svg, elements['scales'], riskAnimation, $('.agility-item:eq(1)'));
      });
    }

    function riskAnimation() {
      showCheckmark($('.agility-item:eq(1)'));
      scale(elements['plan'], 1, 500, 200, function(){});
      scale(elements['plan2'], 1, 500, 200, function() {
         drawPath(svg, elements['oldGris'], 1600, 1500, mina.easeout, function(){
           drawPath(svg, elements['courbeBleue'], 1400, 1300, mina.easeinout, function(){
              elements['text'].animate({opacity:1}, 400);
              alterBounce(elements['time'], 600, 400);
           });
         });
       });
    }

    loadSvg();
  },

  startAdaptAnimation: function() {
    var svg = Snap("#AGI-adapt"),
        elements = new Array();

    function loadSvg() {

      Snap.load("./assets/img/svg/agiAdaptability.svg", function(f) {
        elements['scales'] = f.select("#a-scales"),
        elements['courbeBleue'] = f.select("#a-courbe-bleue"),
        elements['oldGris'] = f.select("#a-old-gris"),
        elements['time'] = f.select("#a-time"),
        elements['plan'] = f.select("#a-plan"),
        elements['plan2'] = f.select("#a-plan-2"),
        elements['text'] = f.select("#a-valeur");

        Kilix.animations["agilite"].initAnimElements(elements, svg, elements['scales'], adaptabilityAnimation, $('.agility-item:eq(2)'));
      });
    }

    function adaptabilityAnimation() {
      showCheckmark($('.agility-item:eq(2)'));
      scale(elements['plan'], 1, 500, 200, function(){});
      scale(elements['plan2'], 1, 500, 200, function() {
        drawPath(svg, elements['oldGris'], 1600, 1500, mina.easeout, function(){
          drawPath(svg, elements['courbeBleue'], 1400, 1300, mina.easeinout, function(){
            elements['text'].animate({opacity:1}, 400);
            alterBounce(elements['time'], 600, 400);
          });
        });
      });
    }

    loadSvg();
  },

  startVisAnimation: function() {
    var svg = Snap("#AGI-vis"),
        elements = new Array();

    function loadSvg() {

      Snap.load("./assets/img/svg/agiVisibility.svg", function(f) {
        elements['scales'] = f.select("#vis-scales"),
        elements['courbeBleue'] = f.select("#vis-courbe-bleue"),
        elements['oldGris'] = f.select("#vis-old-gris"),
        elements['time'] = f.select("#vis-time"),
        elements['plan'] = f.select("#vis-plan"),
        elements['plan2'] = f.select("#vis-plan-2"),
        elements['text'] = f.select("#vis-valeur");

        Kilix.animations["agilite"].initAnimElements(elements, svg, elements['scales'], visibilityAnimation, $('.agility-item:eq(3)'));
      });
    }

    function visibilityAnimation() {
      showCheckmark($('.agility-item:eq(3)'));
      scale(elements['plan'], 1, 500, 200, function(){});
      scale(elements['plan2'], 1, 500, 200, function() {
        drawPath(svg, elements['oldGris'], 1600, 1500, mina.easeout, function(){
          drawPath(svg, elements['courbeBleue'], 1400, 1300, mina.easeinout, function(){
            elements['text'].animate({opacity:1}, 400);
            alterBounce(elements['time'], 600, 400);
          });
        });
      });
    }

    loadSvg();
  }
}
