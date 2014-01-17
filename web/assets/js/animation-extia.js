Kilix.animations["extia"] = {

  animStatus: false,
  powerLinesIntervals: new Array(),
  colorInterval: null,
  riskInterval: null,

  setAnimStatus: function(status) {
    Kilix.animations["extia"].animStatus = status;
  },

  freeIntervals: function() {
    clearInterval(Kilix.animations["extia"].riskInterval);
    clearInterval(Kilix.animations["extia"].colorInterval);
    for (var powerLine in Kilix.animations["extia"].powerLinesIntervals) {
      clearInterval(powerLine);
    }
  },

  start: function () {

    var s = Snap("#EXTIA-animation"),
    elements = new Array(),
    extiaFactory = null,
    powerLinesColor = '#FFFFFF',
    extiaColor = '#E6B171',
    animStatus = null;

    $('#EXTIA-animation').on('click', function() {
      if (Kilix.animations["extia"].animStatus == true) {
        Kilix.animations["extia"].animStatus = false;
        resetAnim();
      }
    });

    function loadExtiaSvg() {
      Snap.load("./assets/img/svg/kilix_anim_extia.svg", function(f) {
        getElements(f);
        s.append(extiaFactory);
        s.append(elements['valeurText']);
        s.append(elements['risqueText']);
        s.append(elements['amelioText']);
        startAnimation();
      });
    }

    function getElements(f) {
      extiaFactory = f.select("#extia-factory");

      elements['reload'] = f.select("#extia-reload").attr({"fill-opacity": 0}),
      elements['logoExtia'] = f.select("#logo-extia").attr({"fill-opacity": 0}),
      elements['valeurText'] = f.select("#text-valeur").attr({"fill-opacity": 0}),
      elements['valeurKart'] = f.select("#valeur-kart").attr({"fill-opacity": 0}),
      elements['valeurDispatch'] = f.select("#valeur-dispatch"),
      elements['amelioText'] = f.select("#text-amelio").attr({"fill-opacity": 0}),
      elements['amelioF1'] = f.select("#amelio-f1").attr({"fill-opacity": 0}),
      elements['amelioKart'] = f.select("#amelio-kart"),
      elements['risqueText'] = f.select("#text-risques").attr({"fill-opacity": 0}),
      elements['risquePanneau'] = f.select("#risque-panneau").attr({"fill-opacity": 0}),
      elements['risqueRock'] = f.select('#risque-rock').attr({"fill-opacity": 0}),
      elements['risqueTrajectoire'] = f.select('#risque-trajectoire').attr({"fill-opacity": 0}),
      elements['risquePointe'] = f.select('#risque-pointe').attr({"fill-opacity": 0}),
      elements['filValeur'] = f.select("#fil-valeur").select("path"),
      elements['filRisque'] = f.select("#fil-risque").select("path"),
      elements['filAmelio'] = f.select("#fil-amelio").select("path"),
      elements['risquesMini'] = f.select("#risques-mini").attr({"fill-opacity": 0}),
      elements['valeurMini'] = f.select("#valeur-mini").attr({"fill-opacity": 0}),
      elements['amelioMini'] = f.select("#amelio-mini").attr({"fill-opacity": 0});
    }

    function startAnimation() {
      bounce(elements['logoExtia'], 700, 700, function() {
        Kilix.animations["extia"].colorInterval = colorPulse(elements['logoExtia'], extiaColor, 600, 700, function() {
          animValue();
        });
      });
    }

    /*
    * Value animation functions
    */

    function animValue() {
      animValuePowerLine();

      setTimeout(function(){
        bounce(elements['valeurMini'], 700, 700);

        setTimeout(function(){
          elements['valeurDispatch'].animate({transform: 't0,s0,0'}, 100, function() {
            bounce(elements['valeurKart'], 500, 500, function() {
              elements['valeurText'].animate({fillOpacity: 1}, 500);
              setTimeout(function(){animRisk();},500);
            });
          });

        },1000);
        
      },400);
    }

    function animValuePowerLine() {
      $("#fil-valeur path").css({'stroke': powerLinesColor});
      Kilix.animations["extia"].powerLinesIntervals[0] = setInterval(function() {
        $("#fil-valeur path").css({'stroke': powerLinesColor});
      }, 500);
    }

    /*
    * Risk animation functions
    */

    function animRisk() {
      animRiskPowerLine();

      setTimeout(function(){
          bounce(elements['risquesMini'], 700, 700, function() {
          elements['risqueRock'].animate({'fill-opacity': 1}, 600, function() {
            bounce(elements['risquePanneau'], 800);
            Kilix.animations["extia"].riskInterval = scalePulse(elements['risquePanneau'], '1.2', 500, 1000, function() {
              elements['risquePointe'].animate({'fill-opacity': 1}, 500);
              elements['risqueTrajectoire'].animate({'fill-opacity': 1}, 500, function() {
                elements['risqueText'].animate({fillOpacity: 1}, 500);
                setTimeout(function(){animImprove();},500);
              });
            });
          });
        });
      }, 400);
    }

    function animRiskPowerLine() {
      $("#fil-risque path").css({'stroke': powerLinesColor});
      Kilix.animations["extia"].powerLinesIntervals[1] = setInterval(function(){
        $("#fil-risque path").css({'stroke': powerLinesColor});
      }, 500);
    }

    /*
    * Improve animation functions
    */

    function animImprove() {
      animImprovePowerLine();

      setTimeout(function(){
        bounce(elements['amelioKart'], 700, 750, function() {
          elements['amelioKart'].attr({'fill-opacity': 0});
          bounce(elements['amelioF1'], 1000, 1000, function() {
            elements['amelioText'].animate({fillOpacity: 1}, 500);
            Kilix.animations["extia"].animStatus = true;
            elements['reload'].animate({'fill-opacity': 1}, 400);
          });
        });
      }, 400);
    }

    function animImprovePowerLine() {
      $("#fil-amelio path").css({'stroke': powerLinesColor});
      Kilix.animations["extia"].powerLinesIntervals[2] = setInterval(function(){
        $("#fil-amelio path").css({'stroke': powerLinesColor});
      }, 500);
    }

    function resetAnim() {
      elements['reload'].animate({'fill-opacity': 0}, 100, function() {
        // reset value elements
        elements['valeurKart'].animate({'fill-opacity': 0}, 400);
        elements['valeurText'].animate({'fill-opacity': 0}, 400);
        elements['valeurMini'].attr({'fill-opacity': 0});
        elements['valeurDispatch'].attr({transform: 't0,s1,1'});

        // reset risk elements
        elements['risqueRock'].animate({'fill-opacity': 0}, 400);
        elements['risquePointe'].animate({'fill-opacity': 0}, 400);
        elements['risqueTrajectoire'].animate({'fill-opacity': 0}, 400);
        elements['risquePanneau'].animate({'fill-opacity': 0}, 400);
        elements['risquesMini'].animate({'fill-opacity': 0}, 400);
        elements['risqueText'].animate({'fill-opacity': 0}, 400);

        // reset improve elements
        elements['amelioF1'].animate({'fill-opacity': 0}, 400);
        elements['amelioText'].animate({'fill-opacity': 0}, 400);
        
        Kilix.animations["extia"].freeIntervals();

        setTimeout(function() {
          animValue();
        }, 400);
      });
    }

    loadExtiaSvg();
  }
}