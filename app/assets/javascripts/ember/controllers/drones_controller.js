App.dronesController = Ember.Object.create({
  drones: [],

  activeDrones: function() {
    return this.get('drones').filterProperty('active',true);
  }.property('drones.@each.active'),

  dronesForFocusedTab: function() {
    var query = this.get('searchQuery');
    if (query == undefined || query.length == 0) {
      return this.get('drones').filterProperty('category',App.categoryController.get('activeCategory'));
    }

    return this.get('drones').filter(function(item) {
      return item.get('name').toLowerCase().indexOf(query.toLowerCase()) >= 0;
    });
    App.categoryController.clear();
  }.property('drones','App.categoryController.activeCategory', 'searchQuery'),

  activeDronesWithParams: function() {
    return this.get('drones').filterProperty('active',true).filterProperty('hasParams',true);
  }.property('activeDrones'),

});
