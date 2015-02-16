define(['renderer', 'updater', 'physics', 'simulation'], function(Renderer, Updater, Physics, Simulation) {
  var App = Class.extend({
    init: function() {
      this.hasNeverStarted = true;
      this.started = false;

      this.objects = [];
    },

    setup: function(canvas) {
      this.setRenderer(new Renderer(this, canvas));
    },

    setRenderer: function(renderer) {
      this.renderer = renderer;
    },

    run: function() {
      this.setUpdater(new Updater(this));
      this.setPhysics(new Physics());
      this.setSimulation(new Simulation(this));

      this.started = true;
      this.tick();
      this.hasNeverStarted = false;
    },

    setUpdater: function(updater) {
      this.updater = updater;
    },

    setPhysics: function(physics) {
      this.physics = physics;
    },

    setSimulation: function(simulation) {
      this.simulation = simulation;
    },

    tick: function() {
      this.currentTime = new Date().getTime();

      if (this.started) {
        this.updater.update();
        this.renderer.renderFrame();
      }

      if(!this.isStopped) {
        requestAnimFrame(this.tick.bind(this));
      }
    },

    addObject: function(object) {
      this.objects.push(object);
    }
  });

  return App;
});