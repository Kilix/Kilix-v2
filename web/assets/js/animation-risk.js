$(function () {
    var s = Snap("#RISK-dispatch");
    Snap.load("./assets/img/svg/kilix_anim_risque_1.svg", function(f) {

      var elements = new Array(),
          delay = 50,
          duration = 100;

      elements['kart']  = f.select("#kart2");
      elements['hole']  = f.select("#trou");
      elements['tree']  = f.select("#tree");
      elements['rocks'] = f.select("#rocks");
      elements['fence'] = f.select("#fence");
      elements['pole']  = f.select("#plot");

      for (var element in elements) {
        elements[element].attr({'fill-opacity': 0});
        s.append(elements[element]);
      }

    function startAnimRisk(svgElements, first) {
      console.log('hoh');
      if(first === true) {
        bounce(svgElements['kart'], duration);
      }

      setTimeout(function() {
        bounce(svgElements['fence'], duration, duration, function(){
          moveWithBounce(svgElements['fence'],'right','top', 1350, 2250, 700, function(){
            setTimeout(function(){removeWithBounce(svgElements['fence'],500)},1450);

            moveWithBounce(svgElements['kart'],'left','top', -250, 400);
            bounce(svgElements['pole'], duration, duration, function(){
              moveWithBounce(svgElements['pole'],'right','top', 1350, 2250, 500, function(){
                setTimeout(function(){removeWithBounce(svgElements['pole'],500)},1450);

                moveWithBounce(svgElements['kart'],'left','top', 0, 500);
                bounce(svgElements['rocks'], duration, duration, function(){
                  moveWithBounce(svgElements['rocks'],'right','top', 1350, 2250, 500, function(){
                    setTimeout(function(){removeWithBounce(svgElements['rocks'],500)},1450);

                    moveWithBounce(svgElements['kart'],'left','top', 200, 500);
                    bounce(svgElements['tree'], duration, duration, function(){
                      moveWithBounce(svgElements['tree'],'right','top', 1350, 2250,500,function(){ // Arbre Avance
                        setTimeout(function(){removeWithBounce(svgElements['tree'],500)},1500);
                        
                        moveWithBounce(svgElements['kart'],'left','top', -250, 800);

                        setTimeout(function(){
                          bounce(svgElements['hole'], duration, duration, function(){
                            moveWithBounce(svgElements['hole'],'right','top', 1350, 2250, 500, function(){
                              setTimeout(function(){removeWithBounce(svgElements['hole'],500)},1450);

                              moveWithBounce(svgElements['kart'],'left','top', 0, 500);
                            });
                          });
                        },600);
                      });
                    });
                  });
                });
              });
            });
          });
        });
      },duration);      
    }
    startAnimRisk(elements,true);
    setInterval(function(){startAnimRisk(elements)},4500);
 



      //   moveWithBounce(elements['kart'],'left','top', 200, 500, 320, function(){
      //     bounce(elements['tree'], duration, duration, function(){
      //       moveWithBounce(elements['tree'],'right','top', 900, 2000,500,function(){ // Arbre Avance
      //         setTimeout(function(){removeWithBounce(elements['tree'],500)},1500);
              
      //         moveWithBounce(elements['kart'],'left','top', 450, 500);

      //         bounce(elements['rocks'], duration, duration, function(){
      //           moveWithBounce(elements['rocks'],'right','top', 900, 1500, 500, function(){ // Caillaisses avancent
      //             setTimeout(function(){removeWithBounce(elements['rocks'],500)},1000);
                  
      //             moveWithBounce(elements['kart'],'left','top', 0, 500);

      //             bounce(elements['hole'], duration, duration, function(){
      //               moveWithBounce(elements['hole'],'right','top', 900, 1500, 500, function(){
      //                 setTimeout(function(){removeWithBounce(elements['hole'],500)},1000);

      //                 moveWithBounce(elements['kart'],'left','top', 450, 500);

      //                   bounce(elements['pole'], duration, duration, function(){
      //                     moveWithBounce(elements['pole'],'right','top', 900, 1500, 500, function(){ // Pole avance
      //                       setTimeout(function(){removeWithBounce(elements['pole'],500)},1000);
                            
      //                       moveWithBounce(elements['kart'],'left','top', 200, 500);


      //                     });
      //                   });
      //               });
      //             });

      //           });
      //         });
      //       });
      //     });
      //   });
      // });

    //     elements['roueBackRight'] = f.select("#roue-back-right"),
    //     elements['roueBackLeft'] = f.select("#roue-back-left"),
    //     elements['carenageRight'] = f.select("#carenage-right"),
    //     elements['carenageLeft'] = f.select("#carenage-left"),
    //     elements['roueFrontRight'] = f.select("#roue-front-right"),
    //     elements['roueFrontLeft'] = f.select("#roue-front-left"),
    //     elements['moteur'] = f.select("#moteur"),
    //     elements['siege'] = f.select("#siege"),
    //     elements['carenageFront'] = f.select("#carenage-front"),
    //     elements['klaxon'] = f.select("#klaxon"),
    //     elements['phare1'] = f.select("#phare1"),
    //     elements['phare2'] = f.select("#phare2"),
    //     elements['aileron'] = f.select("#aileron"),
    //     elements['janteBackLeft'] = f.select("#jante-back-left"),
    //     elements['janteFrontLeft'] = f.select("#jante-front-left"),
    //     elements['janteBackRight'] = f.select("#jante-back-right"),
    //     elements['janteFrontRight'] = f.select("#jante-front-right"),
    //     elements['moteurElec'] = f.select("#moteur-elec");

    //     for (var element in elements) {
    //       elements[element].attr({'fill-opacity': 0});
    //       s.append(elements[element]);
    //     }

    //     bounce(elements['siege'], duration, delay, function() {
    //       bounce(elements['carenageLeft'], duration, delay, function() {
    //         bounce(elements['roueBackLeft'], duration, delay, function() {
    //           bounce(elements['moteurElec'], duration);
    //           bounceAllElements(elements['moteurElec'].selectAll("g"), duration);
    //           bounce(elements['roueFrontLeft'], duration, delay, function() {
    //             bounce(elements['klaxon'], duration, delay, function() {
    //               bounce(elements['roueBackRight'], duration, delay, function() {
    //                 bounce(elements['carenageRight'], duration, delay, function() {
    //                   bounce(elements['roueFrontRight'], duration, delay, function() {
    //                     bounce(elements['carenageFront'], duration, delay, function() {
    //                       bounce(elements['janteBackLeft'], duration, delay, function() {
    //                         bounce(elements['phare2'], duration, delay, function() {
    //                           bounce(elements['janteFrontRight'], duration, delay, function() {
    //                             bounce(elements['aileron'], duration, delay, function() {
    //                               bounce(elements['phare1'], duration, delay, function() {
    //                                 bounce(elements['janteFrontLeft'], duration, delay, function() {
    //                                   bounce(elements['janteBackRight'], duration, delay, function() {
    //                                     bounce(elements['moteur'], duration);
    //                                     bounceAllElements(elements['moteur'].selectAll("g"), 900);

    //                                   }); 
    //                                 });
    //                               });
    //                             });
    //                           });
    //                         });
    //                       });
    //                     });
    //                   });
    //                 });
    //               });
    //             });
    //           });
    //         });
    //       });
    //     });
    });
});
