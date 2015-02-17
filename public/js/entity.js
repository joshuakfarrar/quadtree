define(['point'], function(Point) {
  var Entity = Class.extend({
    init: function() {
      this.position = new Point(0, 0);
    },

    setPosition: function(point) {
      if (point instanceof Point) {
        this.position = point;
      }
    },

    setAngle: function(angle) {
      this.angle = angle;
    }
  });

  return Entity;
});