define(['quadtree', 'rect'], function(Quadtree, Rect) {
  var Simulation = Class.extend({
    init: function(app) {
      this.app = app;
      this.canvas = this.app.renderer.canvas;

      this.t = 0;
      this.rects = [];

      var bounds = new Rect(0, 0, this.app.renderer.canvas.width, this.app.renderer.canvas.height);

      this.tree = new Quadtree(bounds);
    },

    step: function() {
      if (this.t % 10 === 0) {
        x = Math.floor(Math.random() * this.canvas.width);
        y = Math.floor(Math.random() * this.canvas.height);

        this.addObject(new Rect(x, y));
      }

      if (this.t % 20 === 0) {
        var i = Math.floor(Math.random() * this.rects.length);
        this.rects.splice(i, 1);
      }

      this.tree.clear();
      this.tree.insert(this.rects);

      this.t++;
    },

    addObject: function(object) {
      this.rects.push(object);
    }
  });

  return Simulation;
});