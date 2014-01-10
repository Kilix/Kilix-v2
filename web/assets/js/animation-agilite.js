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

      function loadImproveSvg() {
        Snap.load("./assets/img/svg/cbe.svg", function(f) {
          elementsAgiOne['full'] = f.select("#full");
          s.append(elementsAgiOne['full']);

        });
      }

      function improveAnimation() {
        //animation
    }
    loadImproveSvg();
    improveAnimation();
  }
}