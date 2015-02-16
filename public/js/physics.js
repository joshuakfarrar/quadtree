define(['body'], function(Body) {
  var Physics = Class.extend({
    init: function() {
    },

    enable: function(entity) {
      entity.body = new Body(entity);
    }
  });

  return Physics;
});