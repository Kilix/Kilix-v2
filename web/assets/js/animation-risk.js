$(function () {
    var s = Snap("#RISK-dispatch");
    Snap.load("./assets/img/svg/kilix_anim_risque_1.svg", function(f) {

      var elements = new Array(),
          delay = 50,
          duration = 500;

      elements['kart'] = f.select("#kart1");
      elements['hole'] = f.select("#trou");
      elements['tree'] = f.select("#tree");
      elements['rocks'] = f.select("#rocks");
      elements['fence'] = f.select("#fence");
      elements['pole'] = f.select("#plot");

      for (var element in elements) {
        elements[element].attr({'fill-opacity': 1});
        s.append(elements[element]);
      }

      bounce(elements['kart'], duration, duration, function() {
        move(elements['kart'],'left','top', 200, 1000, 1000, function(){
          bounce(elements['tree'], duration, duration, function(){
            move(elements['tree'],'right','top', 900, 2000,500,function(){
              move(elements['kart'],'left','top', 450, 500);
              move(elements['hole'],'left','bot', 450, 500);

              setTimeout(function(){removeWithBounce(elements['tree'],500)},2000);
            });
          });
        });
      });

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
