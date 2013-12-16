function gatherPiece(kartElement, piece, delay, callback)
{
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

function getDispatchElements(file)
{
  elements = new Array();
  elements['roueBackRight'] = file.select("#roue-back-right"),
  elements['roueBackLeft'] = file.select("#roue-back-left"),
  elements['carenageRight'] = file.select("#carenage-right"),
  elements['carenageLeft'] = file.select("#carenage-left"),
  elements['roueFrontRight'] = file.select("#roue-front-right"),
  elements['roueFrontLeft'] = file.select("#roue-front-left"),
  elements['moteur'] = file.select("#moteur"),
  elements['moteurElec'] = file.select("#moteur-elec"),
  elements['siege'] = file.select("#siege"),
  elements['carenageFront'] = file.select("#carenage-front"),
  elements['klaxon'] = file.select("#klaxon"),
  elements['phare1'] = file.select("#phare1"),
  elements['phare2'] = file.select("#phare2"),
  elements['aileron'] = file.select("#aileron"),
  elements['janteBackLeft'] = file.select("#jante-back-left"),
  elements['janteFrontLeft'] = file.select("#jante-front-left"),
  elements['janteBackRight'] = file.select("#jante-back-right"),
  elements['janteFrontRight'] = file.select("#jante-front-right");
  return elements;
}

function getGreenElements(file)
{
  greenElements = new Array()
  greenElements['carenageRight'] = file.select('#carenage-right-vert');
  greenElements['carenageLeft'] = file.select('#carenage-left');
  greenElements['siege'] = file.select('#siege-vert');
  greenElements['siege'] = file.select('#siege-vert');
  greenElements['roueBackLeft'] = file.select('#roue-back-left-vert');
  greenElements['roueFrontLeft'] = file.select('#roue-front-left-vert');
  greenElements['roueBackRight'] = file.select('#roue-back-right-vert');
  greenElements['roueFrontRight'] = file.select('#roue-front-right-vert');
  greenElements['moteurElec'] = file.select('#moteur-elec-green');
  greenElements['carenageFront'] = file.select('#carenage-front-vert');
  return greenElements;
}

function getKartElements(file)
{
  kartElements = new Array();
  kartElements['moteurElec'] = file.select('#moteur-elec');
  kartElements['roueBackRight'] = file.select('#roue-back-right');
  kartElements['roueBackLeft'] = file.select('#roue-back-left');
  kartElements['carenageRight'] = file.select('#carenage-right');
  kartElements['carenageLeft'] = file.select('#carenage-left');
  kartElements['roueFrontRight'] = file.select('#roue-front-right');
  kartElements['roueFrontLeft'] = file.select('#roue-front-left');
  kartElements['siege'] = file.select('#siege');
  kartElements['pilote'] = file.select('#pilote');
  kartElements['carenageFront'] = file.select('#carenage-front');
  return kartElements;
}

function valueAnimation() {

  var s = Snap("#VALEUR-dispatch");
  Snap.load("./assets/img/svg/kilix_valeur_dispatch.svg", function(f) {

      var elements = getDispatchElements(f),
          delay = 50,
          duration = 500
          animation = false;

      for (var element in elements) {
        elements[element].attr({'fill-opacity': 0});
        s.append(elements[element]);
      }

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
                                      bounceAllElements(elements['moteur'].selectAll("g"), 900);
                                      bounce(elements['moteur'], duration, 600, function() {

                                        // STEP 2, we change color of kart elements and set opacity of other at null
                                        Snap.load("./assets/img/svg/kilix_valeur_green.svg", function(greenFile) {

                                          var greenElements = getGreenElements(f);
                                          for (var element in greenElements) {
                                            greenElements[element].attr({'fill-opacity': 0});
                                            s.append(greenElements[element]);
                                            greenElements[element].animate({'fill-opacity': 0.3}, 400);
                                          };

                                          elements['janteBackLeft'].animate({'fill-opacity': 0}, duration);
                                          elements['janteFrontRight'].animate({'fill-opacity': 0}, duration);
                                          elements['aileron'].animate({'fill-opacity': 0}, duration);
                                          elements['janteFrontLeft'].animate({'fill-opacity': 0}, duration);
                                          elements['janteBackRight'].animate({'fill-opacity': 0}, duration);
                                          elements['phare2'].animate({'fill-opacity': 0}, duration);
                                          elements['phare1'].animate({'fill-opacity': 0}, duration);
                                          elements['klaxon'].animate({'fill-opacity': 0}, duration);
                                          elements['moteur'].animate({opacity: 0}, duration);

                                          // STEP 3, we change position of elements, translation on top
                                          window.setTimeout(function() {
                                            
                                            var topTransDuration = 100,
                                                topTransValue = -40,
                                                topTransDelay = 50;

                                            moveTop(greenElements['siege'], topTransValue, topTransDuration);
                                            moveTop(elements['siege'], topTransValue, topTransDuration, topTransDelay, function() {
                                              moveTop(greenElements['carenageLeft'], topTransValue, topTransDuration);
                                              moveTop(elements['carenageLeft'], topTransValue, topTransDuration, topTransDelay, function() {
                                                moveTop(greenElements['roueBackLeft'], topTransValue, topTransDuration);
                                                moveTop(elements['roueBackLeft'], topTransValue, topTransDuration, topTransDelay, function() {
                                                  moveTop(greenElements['roueFrontRight'], topTransValue, topTransDuration);
                                                  moveTop(elements['roueFrontRight'], topTransValue, topTransDuration, topTransDelay, function() {
                                                    moveTop(greenElements['roueFrontLeft'], topTransValue, topTransDuration);
                                                    moveTop(elements['roueFrontLeft'], topTransValue, topTransDuration, topTransDelay, function() {
                                                      moveTop(greenElements['carenageRight'], topTransValue, topTransDuration);
                                                      moveTop(elements['carenageRight'], topTransValue, topTransDuration, topTransDelay, function() {
                                                        moveTop(greenElements['roueBackRight'], topTransValue, topTransDuration);
                                                        moveTop(elements['roueBackRight'], topTransValue, topTransDuration, topTransDelay, function() {
                                                          moveTop(greenElements['moteurElec'], topTransValue, topTransDuration);
                                                          moveTop(elements['moteurElec'], topTransValue, topTransDuration, topTransDelay, function() {
                                                            moveTop(greenElements['carenageFront'], topTransValue, topTransDuration);
                                                            moveTop(elements['carenageFront'], topTransValue, topTransDuration, topTransDelay, function() {

                                                              for (var element in greenElements) {
                                                                greenElements[element].animate({'fill-opacity': 0}, 100, function () {
                                                                  greenElements[element].remove();
                                                                });
                                                              }

                                                              Snap.load("./assets/img/svg/kilix_valeur_kart.svg", function(kartFile) {

                                                                // STEP 4, pilote appear and elements moves to create the kart 
                                                                var kartElements = getKartElements(kartFile);

                                                                for (var element in kartElements) {
                                                                  kartElements[element].attr({'fill-opacity': 0});
                                                                  s.append(kartElements[element]);
                                                                  kartElements[element].attr({transform: 't'+[0, topTransValue]});
                                                                }

                                                                kartElements['pilote'].animate({'fill-opacity': 1}, 300, function() {
                                                                  gatherPiece(kartElements['carenageRight'], elements['carenageRight']);
                                                                  gatherPiece(kartElements['roueBackRight'], elements['roueBackRight']);
                                                                  gatherPiece(kartElements['carenageLeft'], elements['carenageLeft']);
                                                                  gatherPiece(kartElements['roueBackLeft'], elements['roueBackLeft']);
                                                                  gatherPiece(kartElements['roueFrontRight'], elements['roueFrontRight']);
                                                                  gatherPiece(kartElements['roueFrontLeft'], elements['roueFrontLeft']);
                                                                  gatherPiece(kartElements['siege'], elements['siege']);
                                                                  gatherPiece(kartElements['carenageFront'], elements['carenageFront']);
                                                                  gatherPiece(kartElements['moteurElec'], elements['moteurElec'], 200, function() {

                                                                    for (var element in kartElements) {
                                                                      kartElements[element].attr({'fill-opacity': 1});
                                                                    }

                                                                    // We remove useless elements of dispatched kart
                                                                    for (var element in elements) {
                                                                      elements[element].remove();
                                                                    }

                                                                    window.setTimeout(function() {
                                                                      for (var element in kartElements) {
                                                                        kartElements[element].animate({transform: 't'+[0, -topTransValue]}, 500, mina.bounce);
                                                                      }
                                                                    }, 300);

                                                                  });
                                                                }); // STEP - 4
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
                                          }, 700); // STEP - 3
                                        }); // STEP - 2
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
  });
}

valueAnimation();