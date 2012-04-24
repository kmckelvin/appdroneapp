App.dronesController = Ember.Object.create({
  drones: [],

  activeDrones: function() {
    return this.get('drones').filterProperty('active',true);
  }.property('drones.@each.active'),

  activeDronesWithParams: function() {
    return this.get('drones').filterProperty('active',true).filterProperty('hasParams',true);
  }.property('drones.@each.active'),


});
