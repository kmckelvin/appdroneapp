App.dronesController = Ember.Object.create({
  dronesBinding: 'App.drones',

  activeDrones: function() {
    return this.get('drones').filterProperty('active',true);
  }.property('drones.@each.active'),

  dronesForFocusedTab: function() {
    return this.get('drones').filterProperty('category',App.categoryController.get('activeCategory'));
  }.property('drones','App.categoryController.activeCategory'),

  activeDronesWithParams: function() {
    return this.get('drones').filterProperty('active',true).filterProperty('hasParams',true);
  }.property('activeDrones'),



});
