// Move a group on an isometric axis
function move(element, xAxis, yAxis, px, duration, delay, callback) {

  var x = px,
      y = px/2;

  (yAxis == 'top') ? y = -y : y = y;
  (xAxis == 'right') ? x = x : x = -x;

  element.animate({transform: "t"+[x, y]}, duration);

  if (delay != 'undefined') {
    window.setTimeout(callback, delay);
  }
}

// Trigger bounce effect on svg element
function bounce(element, duration, delay, callback) {
    var x = element.getBBox().x;
    offset = x/2 + 25;

    element.attr({
      transform: "t"+offset+"s0.7, 0.7"
    });

    element.animate({opacity:1,transform:"t0s1,1,0,0"}, duration, mina.elastic);

  if (delay != 'undefined') {
    window.setTimeout(callback, delay);
  }
}

// Trigger bounce effect on each svg element
function bounceAllElements(collection, duration) {
    j = 0;
    function cycle() {
        bounce(collection[j], duration);
        j++;
        if (j < collection.length) setTimeout(cycle, 10);
    }
    cycle();
}

$(function () {
    var s = Snap("#VALEUR-dispatch");
    Snap.load("./assets/img/svg/kilix_valeur_dispatch.svg", function(f) {

        var elements = new Array(),
            delay = 50,
            duration = 600;

        elements['roueBackRight'] = f.select("#roue-back-right"),
        elements['roueBackLeft'] = f.select("#roue-back-left"),
        elements['carenageRight'] = f.select("#carenage-right"),
        elements['carenageLeft'] = f.select("#carenage-left"),
        elements['roueFrontRight'] = f.select("#roue-front-right"),
        elements['roueFrontLeft'] = f.select("#roue-front-left"),
        elements['moteur'] = f.select("#moteur"),
        elements['siege'] = f.select("#siege"),
        elements['carenageFront'] = f.select("#carenage-front"),
        elements['klaxon'] = f.select("#klaxon"),
        elements['phare1'] = f.select("#phare1"),
        elements['phare2'] = f.select("#phare2"),
        elements['aileron'] = f.select("#aileron"),
        elements['janteBackLeft'] = f.select("#jante-back-left"),
        elements['janteFrontLeft'] = f.select("#jante-front-left"),
        elements['janteBackRight'] = f.select("#jante-back-right"),
        elements['janteFrontRight'] = f.select("#jante-front-right"),
        elements['moteurElec'] = f.select("#moteur-elec");

        for (var element in elements) {
          elements[element].attr({opacity: 0});
          s.append(elements[element]);
        }
          
        bounce(elements['siege'], duration, delay, function() {
          bounce(elements['carenageLeft'], duration, delay, function() {
            bounce(elements['roueBackLeft'], duration, delay, function() {
              bounce(elements['moteurElec'], duration);
              bounceAllElements(elements['moteurElec'].selectAll("g"), duration);
              bounce(elements['roueFrontLeft'], duration, delay, function() {
                bounce(elements['klaxon'], duration, delay, function() {
                  bounce(elements['roueBackRight'], duration, delay, function() {
                    bounce(elements['carenageRight'], duration, delay, function() {
                      bounce(elements['roueFrontRight'], duration, delay, function() {
                        bounce(elements['carenageFront'], duration, delay, function() {
                          bounce(elements['janteBackLeft'], duration, delay, function() {
                            bounce(elements['phare2'], duration, delay, function() {
                              bounce(elements['janteFrontRight'], duration, delay, function() {
                                bounce(elements['aileron'], duration, delay, function() {
                                  bounce(elements['phare1'], duration, delay, function() {
                                    bounce(elements['janteFrontLeft'], duration, delay, function() {
                                      bounce(elements['janteBackRight'], duration, delay, function() {
                                        bounce(elements['moteur'], duration);
                                        bounceAllElements(elements['moteur'].selectAll("g"), 900);
                                      }); 
                                    });
                                  });
                                });
                              });
                            });
                          });
                        });
                      });
                    });
                  });
                });
              });
            });
          });
        });
    });
});