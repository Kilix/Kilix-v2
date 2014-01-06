Kilix.animations['valeur'] = {

  valueLoadingStatus: false,
  valueAnimStatus: false,

  setValueLoadingStatus: function(value) {
    Kilix.animations['valeur'].valueLoadingStatus = value;
  },

  setValueAnimStatus: function(value) {
    Kilix.animations['valeur'].valueAnimStatus = value;
  },

  start: function() {

    var s = Snap("#VALEUR-dispatch"),
              elements = new Array(),
              greenElements = new Array(),
              kartElements = new Array(),
              intervalEvents = new Array(),
              kart = null,
              delay = 50,
              duration = 500
              topTransDuration = 200,
              topTransValue = -40,
              topTransDelay = 100,
              scatterDuration = 500;

      Kilix.animations['valeur'].valueAnimStatus = false;
      if (!Kilix.animations['valeur'].valueLoadingStatus) {
        loadValueSvg();
      }
      else {
        resetValueAnimation();
      }

      $('#VALEUR-dispatch').on('click', function() {
        if (Kilix.animations['valeur'].valueAnimStatus == true) {
          Kilix.animations['valeur'].valueAnimStatus = false;
          resetValueAnimation();
        }
      });

    function loadValueSvg() {

      Snap.load("./assets/img/svg/kilix_valeur_kart.svg", function(f) {
        getKartElements(f);
        kart = f.select("#valeur-kart");
        kart.attr({'fill-opacity': 0});

        for (var element in kartElements) {
          kartElements[element].attr({'fill-opacity': 0});
        }
        s.append(kart);

      });

      Snap.load("./assets/img/svg/kilix_valeur_dispatch.svg", function(f) {
        getDispatchElements(f);

        for (var element in elements) {
          elements[element].attr({'fill-opacity': 0});
          s.append(elements[element]);
        }

        for (var element in greenElements) {
          greenElements[element].attr({'fill-opacity': 0});
          s.append(greenElements[element]);
        }
        valueAnimationBootstrap();
      });
      Kilix.animations['valeur'].valueLoadingStatus = true;
    }

    function getDispatchElements(file) {
      elements['roueBackRight'] = file.select("#dispatch-roue-back-right"),
      elements['roueBackLeft'] = file.select("#dispatch-roue-back-left"),
      elements['carenageRight'] = file.select("#dispatch-carenage-right"),
      elements['carenageLeft'] = file.select("#dispatch-carenage-left"),
      elements['roueFrontRight'] = file.select("#dispatch-roue-front-right"),
      elements['roueFrontLeft'] = file.select("#dispatch-roue-front-left"),
      elements['moteur'] = file.select("#dispatch-moteur"),
      elements['moteurElec'] = file.select("#dispatch-moteur-elec"),
      elements['siege'] = file.select("#dispatch-siege"),
      elements['carenageFront'] = file.select("#dispatch-carenage-front"),
      elements['klaxon'] = file.select("#dispatch-klaxon"),
      elements['phare1'] = file.select("#dispatch-phare1"),
      elements['phare2'] = file.select("#dispatch-phare2"),
      elements['aileron'] = file.select("#dispatch-aileron"),
      elements['janteBackLeft'] = file.select("#dispatch-jante-back-left"),
      elements['janteFrontLeft'] = file.select("#dispatch-jante-front-left"),
      elements['janteBackRight'] = file.select("#dispatch-jante-back-right"),
      elements['janteFrontRight'] = file.select("#dispatch-jante-front-right");

      greenElements['carenageRight'] = file.select('#dispatch-carenage-right-vert');
      greenElements['carenageLeft'] = file.select('#dispatch-carenage-left-vert');
      greenElements['siege'] = file.select('#dispatch-siege-vert');
      greenElements['roueBackLeft'] = file.select('#dispatch-roue-back-left-vert');
      greenElements['roueFrontLeft'] = file.select('#dispatch-roue-front-left-vert');
      greenElements['roueBackRight'] = file.select('#dispatch-roue-back-right-vert');
      greenElements['roueFrontRight'] = file.select('#dispatch-roue-front-right-vert');
      greenElements['moteurElec'] = file.select('#dispatch-moteur-elec-green');
      greenElements['carenageFront'] = file.select('#dispatch-carenage-front-vert');
    }

    function getKartElements(file) {
      kartElements['pilote'] = file.select('#valeur-pilote');
      kartElements['moteurElec'] = file.select('#valeur-moteur-elec');
      kartElements['roueBackRight'] = file.select('#valeur-roue-back-right-1');
      kartElements['roueBackRight2'] = file.select('#valeur-roue-back-right-2');
      kartElements['roueBackLeft'] = file.select('#valeur-roue-back-left-1');
      kartElements['roueBackLeft2'] = file.select('#valeur-roue-back-left-2');
      kartElements['carenageRight'] = file.select('#valeur-carenage-right');
      kartElements['carenageLeft'] = file.select('#valeur-carenage-left');
      kartElements['roueFrontRight'] = file.select('#valeur-roue-front-right-1');
      kartElements['roueFrontRight2'] = file.select('#valeur-roue-front-right-2');
      kartElements['roueFrontLeft'] = file.select('#valeur-roue-front-left-1');
      kartElements['roueFrontLeft2'] = file.select('#valeur-roue-front-left-2');
      kartElements['siege'] = file.select('#valeur-siege');
      kartElements['carenageFront'] = file.select('#valeur-carenage-front');
    }

    function resetValueAnimation() {
      // We clear setInterval events
      for (var i = intervalEvents.length - 1; i >= 0; i--) {
        window.clearInterval(intervalEvents[i]);
      };
      kart = s.select("#valeur-kart");

      var x = 1000,
          y = 1000/2;

      kart.animate({transform: "t"+[x, y]}, 1000, mina.backin);

      window.setTimeout(function() {
        resetValueGroup();
        valueAnimationBootstrap();
      }, 2000);
    }

    function valueAnimationBootstrap() {

        // STEP 1, all elements pop in the page with bounce effect
        bounce(elements['siege'], duration, delay, function() {
          bounce(elements['carenageLeft'], duration, delay, function() {
            bounce(elements['roueBackLeft'], duration, delay, function() {
              bounceAllElements(elements['moteurElec'].selectAll("g"), duration);
              bounce(elements['moteurElec'], duration);
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
                                        bounceAllElements(elements['moteur'].selectAll("g"), 600, 700, function() {
                                          
                                        });
                                        bounce(elements['moteur'], duration, 600, function() {

                                          // STEP 2
                                          showValuablePiecesAndCreateKart();
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
        }); // STEP - 1
      }

    function showValuablePiecesAndCreateKart() {

      

          // STEP 3, we built the kart and change position of elements, translation on top
          window.setTimeout(function() {

            raiseColouredElement(greenElements['siege'], topTransValue, topTransDuration);
            raisePiece(elements['siege'], topTransValue, topTransDuration, topTransDelay, function() {
              raiseColouredElement(greenElements['carenageLeft'], topTransValue, topTransDuration);
              raisePiece(elements['carenageLeft'], topTransValue, topTransDuration, topTransDelay, function() {
                raiseColouredElement(greenElements['roueBackLeft'], topTransValue, topTransDuration);
                raisePiece(elements['roueBackLeft'], topTransValue, topTransDuration, topTransDelay, function() {
                  raiseColouredElement(greenElements['roueFrontRight'], topTransValue, topTransDuration);
                  raisePiece(elements['roueFrontRight'], topTransValue, topTransDuration, topTransDelay, function() {
                    raiseColouredElement(greenElements['roueFrontLeft'], topTransValue, topTransDuration);
                    raisePiece(elements['roueFrontLeft'], topTransValue, topTransDuration, topTransDelay, function() {
                      raiseColouredElement(greenElements['carenageRight'], topTransValue, topTransDuration);
                      raisePiece(elements['carenageRight'], topTransValue, topTransDuration, topTransDelay, function() {
                        raiseColouredElement(greenElements['roueBackRight'], topTransValue, topTransDuration);
                        raisePiece(elements['roueBackRight'], topTransValue, topTransDuration, topTransDelay, function() {
                          raiseColouredElement(greenElements['moteurElec'], topTransValue, topTransDuration);
                          raisePiece(elements['moteurElec'], topTransValue, topTransDuration, topTransDelay, function() {
                            raiseColouredElement(greenElements['carenageFront'], topTransValue, topTransDuration);
                            raisePiece(elements['carenageFront'], topTransValue, topTransDuration, topTransDelay, function() {

                              window.setTimeout(function () {

                                move(elements['moteur'], 'left', 'top', 600, scatterDuration-100, 100, function() {
                                  elements['moteur'].animate({'fill-opacity': 0}, duration);
                                  var engineGroups = elements['moteur'].selectAll("g");
                                  for (var i = engineGroups.length - 1; i >= 0; i--) {
                                    engineGroups[i].animate({'fill-opacity': 0}, duration);
                                  };
                                }, mina.backin);

                                // ... and we scatter elements
                                move(elements['janteBackLeft'], 'right', 'top', 500, scatterDuration, 100, 'undefined', mina.backin);
                                move(elements['janteFrontRight'], 'left', 'bot', 500, scatterDuration, 100, 'undefined', mina.backin);
                                move(elements['aileron'], 'left', 'top', 600, scatterDuration-100, 100, 'undefined', mina.backin);
                                move(elements['janteFrontLeft'], 'right', 'top', 500, scatterDuration, 100, 'undefined', mina.backin);
                                move(elements['janteBackRight'], 'left', 'bot', 500, scatterDuration, 100, 'undefined', mina.backin);
                                move(elements['phare2'], 'right', 'bot', 500, scatterDuration, 100, 'undefined', mina.backin);
                                move(elements['phare1'], 'right', 'bot', 500, scatterDuration, 100, 'undefined', mina.backin);
                                move(elements['klaxon'], 'right', 'bot', 700, scatterDuration, 800, function () {

                                  for (var element in greenElements) {
                                    greenElements[element].animate({'fill-opacity': 0}, 100);
                                  }

                                  // STEP 4
                                  animatePilotAndWheel();

                                }, mina.backin);
                                

                              }, 500);
                            });
                          });
                        });
                      });
                    });
                  });
                });
              });
            });
          }, 300); // STEP - 3
    } // STEP - 2

    function animatePilotAndWheel() {

      // STEP 4, pilote appear and elements moves to create the kart 
      for (var element in kartElements) {
        kartElements[element].attr({transform: 't'+[0, topTransValue]});
      }
      elements['siege'].attr({'fill-opacity': 0});
      kartElements['siege'].attr({'fill-opacity': 1});
      kartElements['pilote'].animate({'fill-opacity': 1}, 300, function() {
        gatherPiece(kartElements['carenageRight'], elements['carenageRight']);
        gatherPiece(kartElements['roueBackRight'], elements['roueBackRight']);
        gatherPiece(kartElements['carenageLeft'], elements['carenageLeft']);
        gatherPiece(kartElements['roueBackLeft'], elements['roueBackLeft']);
        gatherPiece(kartElements['roueFrontRight'], elements['roueFrontRight']);
        gatherPiece(kartElements['roueFrontLeft'], elements['roueFrontLeft']);
        gatherPiece(kartElements['carenageFront'], elements['carenageFront']);
        gatherPiece(kartElements['moteurElec'], elements['moteurElec'], 200, function() {

          for (var element in kartElements) {
            kartElements[element].attr({'fill-opacity': 1});
          }

          for (var element in elements) {
            elements[element].attr({'fill-opacity': 0});

            if (element == 'moteurElec') {
              var elementGroup = elements['moteurElec'].selectAll("g");
              for (var i = elementGroup.length - 1; i >= 0; i--) {
                elementGroup[i].attr({'fill-opacity': 0});
              };
            }
          }

          window.setTimeout(function() {

            // Element fall to their initial position
            for (var element in kartElements) {
              kartElements[element].animate({transform: 't'+[0, -topTransValue]}, 500, mina.bounce);
            }

            var littleRoll = topTransValue+2,
                bigRoll = topTransValue+8;

            // STEP 5, animation of wheels
            window.setTimeout(function() {

              intervalEvents[0] = window.setInterval(function(){
                roll(kartElements['roueFrontLeft'], duration, (littleRoll));
                roll(kartElements['roueFrontRight'], duration, (littleRoll));
                setTimeout(function(){
                  roll(kartElements['roueBackLeft'], duration, (littleRoll));
                  roll(kartElements['roueBackRight'], duration, (littleRoll));
                }, delay);  
              },250);
              intervalEvents[1] = window.setInterval(function(){
                roll(kartElements['roueFrontLeft2'], duration, (littleRoll));
                roll(kartElements['roueFrontRight2'], duration, (littleRoll));
                setTimeout(function(){
                  roll(kartElements['roueBackLeft2'], duration, (littleRoll));
                  roll(kartElements['roueBackRight2'], duration, (littleRoll));
                }, delay);  
              },250);
              intervalEvents[2] = window.setInterval(function(){
                roll(kartElements['roueFrontLeft'], duration, (bigRoll));
                roll(kartElements['roueFrontRight'], duration, (bigRoll));
                setTimeout(function(){
                  roll(kartElements['roueBackLeft'], duration, (bigRoll));
                  roll(kartElements['roueBackRight'], duration, (bigRoll));
                }, delay);  
              },3000);
              intervalEvents[3] = window.setInterval(function(){
                roll(kartElements['roueFrontLeft2'], duration, (bigRoll));
                roll(kartElements['roueFrontRight2'], duration, (bigRoll));
                setTimeout(function(){
                  roll(kartElements['roueBackLeft2'], duration, (bigRoll));
                  roll(kartElements['roueBackRight2'], duration, (bigRoll));
                }, delay); 
              },3000);
              intervalEvents[4] = window.setInterval(function(){
                                kartElements['roueBackRight2'].attr({'fill-opacity': 0});
                                kartElements['roueBackLeft2'].attr({'fill-opacity': 0});
                                kartElements['roueFrontRight2'].attr({'fill-opacity': 0});
                                kartElements['roueFrontLeft2'].attr({'fill-opacity': 0});
                                kartElements['roueBackRight'].attr({'fill-opacity': 1});
                                kartElements['roueBackLeft'].attr({'fill-opacity': 1});
                                kartElements['roueFrontRight'].attr({'fill-opacity': 1});
                                kartElements['roueFrontLeft'].attr({'fill-opacity': 1});
                                setTimeout(function(){
                                  kartElements['roueBackRight2'].attr({'fill-opacity': 1});
                                  kartElements['roueBackLeft2'].attr({'fill-opacity': 1});
                                  kartElements['roueFrontRight2'].attr({'fill-opacity': 1});
                                  kartElements['roueFrontLeft2'].attr({'fill-opacity': 1});
                                  kartElements['roueBackRight'].attr({'fill-opacity': 0});
                                  kartElements['roueBackLeft'].attr({'fill-opacity': 0});
                                  kartElements['roueFrontRight'].attr({'fill-opacity': 0});
                                  kartElements['roueFrontLeft'].attr({'fill-opacity': 0});
                                }, delay);
                              }, 200);
              Kilix.animations['valeur'].valueAnimStatus = true;
            }, 500); // STEP - 5
          }, 300);
        });
      }); // STEP - 4
    }

    function resetValueGroup() {

      for (var element in kartElements) {
        kartElements[element].attr({transform: 't'+[0, 0], 'fill-opacity': 0});
      }

      for (var element in greenElements) {
        greenElements[element].attr({transform: 't'+[0, 0], 'fill-opacity': 0});
      };

      for (var element in elements) {
        elements[element].attr({transform: 't'+[0, 0], 'fill-opacity': 0});
      }

      kart.attr({transform: 't'+[0, 0],'fill-opacity': 0});
    }

    function gatherPiece(kartElement, piece, delay, callback) {

      var kartBBox = kartElement.getBBox(),
          pieceBBox = piece.getBBox();

      var kartX = kartBBox.x,
          kartY = kartBBox.y,
          pieceX = kartX - pieceBBox.x,
          pieceY = kartY - pieceBBox.y;

      piece.animate({transform: 't'+[pieceX, pieceY]}, 300, mina.backin);

      if (delay != 'undefined' && typeof callback !== 'undefined') {
        window.setTimeout(callback, delay);
      }
    }

    function raisePiece(element, px, duration, delay, callback) {

      element.animate({transform: 't'+[0, px]}, duration);

        if (delay != 'undefined' && typeof callback !== 'undefined') {
        window.setTimeout(callback, delay);
      }
    }

    function raiseColouredElement(element, px, duration) {
      element.animate({transform: 't'+[0, px], 'fill-opacity': 0.4}, duration);
    }
  }
}
