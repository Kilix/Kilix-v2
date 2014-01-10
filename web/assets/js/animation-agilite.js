Kilix.animations["agilite"] = {

  setAnimStatus: function(status) {
    Kilix.animations["agilite"].animStatus = status;
  },

  start: function () {
      var s = Snap("#AGI-One"),
          elementsAgiOne = new Array(),
          agiOne = null,
          delay = 50,
          duration = 500;

      $('#AGI-One').on('click', function() {
        if (Kilix.animations['agilite'].animStatus == true) {
          Kilix.animations['agilite'].animStatus = false;
          resetImproveAnimation();
        }
      });

      function loadImproveSvg() {

        Snap.load("./assets/img/svg/cbe.svg", function(f) {
          getAgiOneElements(f);
          agiOne = f.select("#AGI-One");
          agiOne.attr({'fill-opacity': 0});

          for (var element in elementsAgiOne) {
            elementsAgiOne[element].attr({'fill-opacity': 0});
          }
          s.append(agiOne);
        });
      }

      function getAgiOneElements(f) {
        elementsAgiOne['roueBackLeft'] = f.select("#roue-back-left"),
        elementsAgiOne['roueBackRight'] = f.select("#roue-back-right");

      }

      function resetImproveAnimation() {
        move(agiOne, 'right', 'bot', 1500, 1000, 2000, function() {

          for (var element in elementsAgiOne) {
            elementsAgiOne[element].attr({transform: 't'+[0, 0], 'fill-opacity': 0});
          };

          agiOne.attr({transform: 't'+[0, 0],'fill-opacity': 0}, function() {
            improveAnimation();
          });

          window.setTimeout(function() {
            improveAnimation();
          }, 100);
        }, mina.backin);
      }

      function improveAnimation() {
        //animation
    }
    loadImproveSvg();
    improveAnimation();
  }
}