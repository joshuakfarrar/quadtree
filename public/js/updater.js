define(function() {
  var Updater = Class.extend({
    init: function(app) {
      this.app = app;
    },

    update: function() {
      this.app.simulation.step();
    }
  });

  return Updater;
});