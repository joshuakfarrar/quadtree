define(['entity'], function(Entity) {
  var Rect = Entity.extend({
    init: function(x, y, width, height) {
      this.x = x;
      this.y = y;

      this.width = width || 10;
      this.height = height || 10;
    }
  });

  return Rect;
});