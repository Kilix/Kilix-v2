extiaAnim = {

  s: Snap("#EXTIA-animation"),
  elements: new Array(),
  extiaFactory: null,
  valueAnimStatus: false,
  riskInterval: null,
  powerLinesColor: '#FFFFFF',
  powerLinesduration: 10000,
  powerLinesWidth: 4,

  setValueAnimStatus: function(status) {
    extiaAnim.valueAnimStatus = status;
  },

  loadExtiaSvg: function() {
      Snap.load("./assets/img/svg/kilix_anim_extia.svg", function(f) {
        extiaAnim.getelements(f);
        extiaAnim.s.append(extiaAnim.extiaFactory);
      });
  },

  getelements: function(f) {
      extiaAnim.extiaFactory = f.select("#extia-factory");

      extiaAnim.elements['logoExtia'] = f.select("#logo-extia").attr({"fill-opacity": 0}),
      extiaAnim.elements['valeurKart'] = f.select("#valeur-kart").attr({"fill-opacity": 0}),
      extiaAnim.elements['valeurDispatch'] = f.select("#valeur-dispatch"),
      extiaAnim.elements['amelioF1'] = f.select("#amelio-f1").attr({"fill-opacity": 0}),
      extiaAnim.elements['amelioKart'] = f.select("#amelio-kart"),
      extiaAnim.elements['risquePanneau'] = f.select("#risque-panneau").attr({"fill-opacity": 0}),
      extiaAnim.elements['risqueRock'] = f.select('#risque-rock').attr({"fill-opacity": 0}),
      extiaAnim.elements['risqueTrajectoire'] = f.select('#risque-trajectoire').attr({"fill-opacity": 0}),
      extiaAnim.elements['risquePointe'] = f.select('#risque-pointe').attr({"fill-opacity": 0}),
      extiaAnim.elements['filValeur'] = f.select("#fil-valeur").select("path"),
      extiaAnim.elements['filRisque'] = f.select("#fil-risque").select("path"),
      extiaAnim.elements['filAmelio'] = f.select("#fil-amelio").select("path"),
      extiaAnim.elements['risquesMini'] = f.select("#risques-mini").attr({"fill-opacity": 0}),
      extiaAnim.elements['valeurMini'] = f.select("#valeur-mini").attr({"fill-opacity": 0}),
      extiaAnim.elements['amelioMini'] = f.select("#amelio-mini").attr({"fill-opacity": 0});
  },

  start: function () {

    $('#EXTIA-animation').on('click', function() {
      if (extiaAnim.valueAnimStatus == true) {
        extiaAnim.valueAnimStatus = false;
        resetAnim();
      }
    });

    function startAnimation() {
      bounce(extiaAnim.elements['logoExtia'], 700, 700, function() {
        colorPulse(extiaAnim.elements['logoExtia'], extiaAnim.powerLinesColor, 1000, 700, function() {
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
        bounce(extiaAnim.elements['valeurMini'], 700, 700, function() {
          extiaAnim.elements['valeurDispatch'].animate({transform: 't0,s0,0'}, 500, function() {
            bounce(extiaAnim.elements['valeurKart'], 500, 500, function() {
              animRisk();
            });
          });
        });
      },400);
    }

    function animValuePowerLine() {
      var len = extiaAnim.elements['filValeur'].getTotalLength();

      extiaAnim.elements['filValeur'].attr({strokeDasharray: "10, 20", strokeDashoffset: 0, 'stroke-width': 4, 'stroke': extiaAnim.powerLinesColor});
      extiaAnim.elements['filValeur'].animate({strokeDashoffset: len}, extiaAnim.powerLinesduration, function() {
        animValuePowerLine();
      });
    }

    /*
    * Risk animation functions
    */

    function animRisk() {
      animRiskPowerLine();

      setTimeout(function(){
          bounce(extiaAnim.elements['risquesMini'], 700, 700, function() {
          extiaAnim.elements['risqueRock'].animate({'fill-opacity': 1}, 800, function() {
            bounce(extiaAnim.elements['risquePanneau'], 800);
            extiaAnim.riskInterval = scalePulse(extiaAnim.elements['risquePanneau'], 1.3, 600, 1000, function() {
              extiaAnim.elements['risquePointe'].animate({'fill-opacity': 1}, 800);
              extiaAnim.elements['risqueTrajectoire'].animate({'fill-opacity': 1}, 800, function() {
                animImprove();
              });
            });
          });
        });
      }, 400);
    }

    function animRiskPowerLine() {
      var len = extiaAnim.elements['filRisque'].getTotalLength();

      extiaAnim.elements['filRisque'].attr({strokeDasharray: "10, 20", strokeDashoffset: 0, 'stroke-width': extiaAnim.powerLinesWidth, 'stroke': extiaAnim.powerLinesColor});
      extiaAnim.elements['filRisque'].animate({strokeDashoffset: len}, extiaAnim.powerLinesduration, function() {
        animRiskPowerLine();
      });
    }

    /*
    * Improve animation functions
    */

    function animImprove() {
      animImprovePowerLine();

      setTimeout(function(){
        bounce(extiaAnim.elements['amelioKart'], 700, 750, function() {
          extiaAnim.elements['amelioKart'].attr({'fill-opacity': 0});
          bounce(extiaAnim.elements['amelioF1'], 1000, 1000, function() {
            extiaAnim.valueAnimStatus = true;
          });
        });
      }, 400);
    }

    function animImprovePowerLine() {
      var len = extiaAnim.elements['filAmelio'].getTotalLength();

      extiaAnim.elements['filAmelio'].attr({strokeDasharray: "10, 20", strokeDashoffset: 0, 'stroke-width': extiaAnim.powerLinesWidth, 'stroke': extiaAnim.powerLinesColor});
      extiaAnim.elements['filAmelio'].animate({strokeDashoffset: len}, extiaAnim.powerLinesduration, function() {
        animImprovePowerLine();
      });
    }

    function resetAnim() {
      // reset value elements
      extiaAnim.elements['valeurKart'].animate({'fill-opacity': 0}, 400);
      extiaAnim.elements['valeurMini'].attr({'fill-opacity': 0});
      extiaAnim.elements['valeurDispatch'].attr({transform: 't0,s1,1'});

      // reset risk elements
      extiaAnim.elements['risqueRock'].animate({'fill-opacity': 0}, 400);
      extiaAnim.elements['risquePointe'].animate({'fill-opacity': 0}, 400);
      extiaAnim.elements['risqueTrajectoire'].animate({'fill-opacity': 0}, 400);
      extiaAnim.elements['risquePanneau'].animate({'fill-opacity': 0}, 400);
      extiaAnim.elements['risquesMini'].animate({'fill-opacity': 0}, 400);

      // reset improve elements
      extiaAnim.elements['amelioF1'].animate({'fill-opacity': 0}, 400);
      window.clearInterval(extiaAnim.riskInterval);

      setTimeout(function() {
        animValue();
      }, 400);
    }

    startAnimation();
  }
}
Kilix.animations["extia"] = extiaAnim;