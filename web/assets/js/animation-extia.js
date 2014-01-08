extiaAnim = {

  s: Snap("#EXTIA-animation"),
  elements: new Array(),
  extiaFactory: null,
  valueAnimStatus: false,
  riskInterval: null,

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
      extiaAnim.elements['risquePanneau'] = f.select("#risque-panneau"),
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
        bounce(extiaAnim.elements['valeurMini'], 700, 700, function() {
          bounce(extiaAnim.elements['risquesMini'], 700, 700, function() {
            bounce(extiaAnim.elements['amelioMini'], 700, 700, function() {
              colorPulse(extiaAnim.elements['logoExtia'], '#E3B57D', 600, 1000, function() {
                animPowerLines();
                animValue();
              });
            });
          });
        });
      });
    }

    function animPowerLines() {
      var len = extiaAnim.elements['filValeur'].getTotalLength();

        extiaAnim.elements['filValeur'].attr({strokeDasharray: "10, 20", strokeDashoffset: 0, 'stroke-width': 4, 'stroke': '#4EEE94'});
        extiaAnim.elements['filValeur'].animate({strokeDashoffset: len}, 10000);

        extiaAnim.elements['filRisque'].attr({strokeDasharray: "10, 20", strokeDashoffset: 0, 'stroke-width': 4, 'stroke': '#4EEE94'});
        extiaAnim.elements['filRisque'].animate({strokeDashoffset: len}, 10000);

        extiaAnim.elements['filAmelio'].attr({strokeDasharray: "10, 20", strokeDashoffset: 0, 'stroke-width': 4, 'stroke': '#4EEE94'});
        extiaAnim.elements['filAmelio'].animate({strokeDashoffset: len}, 10000, function() {
          animPowerLines();
        });
    }

    function animValue() {
      extiaAnim.elements['valeurDispatch'].animate({transform: 't0,s0,0'}, 500, function() {
        bounce(extiaAnim.elements['valeurKart'], 500, 500, function() {
          animRisk();
        });
      });
    }

    function animRisk() {
      extiaAnim.riskInterval = colorPulse(extiaAnim.elements['risquePanneau'], '#ff4a46', 600, 1000, function() {
        animImprove();
      });
    }

    function animImprove() {
      extiaAnim.elements['amelioKart'].attr({'fill-opacity': 0});
      bounce(extiaAnim.elements['amelioF1'], 1000, 1000, function() {
        extiaAnim.valueAnimStatus = true;
      });
    }

    function resetAnim() {
      // reset value elements
      extiaAnim.elements['valeurKart'].animate({'fill-opacity': 0}, 400);
      extiaAnim.elements['valeurMini'].attr({'fill-opacity': 0});
      extiaAnim.elements['valeurDispatch'].attr({transform: 't0,s1,1'});

      // reset improve elements
      extiaAnim.elements['amelioF1'].animate({'fill-opacity': 0}, 400);

      // reset risk elements
      extiaAnim.elements['risquesMini'].animate({'fill-opacity': 0}, 400);

      window.clearInterval(extiaAnim.riskInterval);

      setTimeout(function() {
        bounce(extiaAnim.elements['valeurMini'], 700, 700, function() {
          bounce(extiaAnim.elements['risquesMini'], 700, 700, function() {
            bounce(extiaAnim.elements['amelioKart'], 700, 700, function() {
              animValue();
            });
          });
        });
      }, 400);
    }

    startAnimation();
  }
}
Kilix.animations["extia"] = extiaAnim;