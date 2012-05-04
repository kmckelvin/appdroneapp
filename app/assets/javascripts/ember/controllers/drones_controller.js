App.dronesController = Ember.Object.create({
  drones: [],

  activeDrones: function() {
    return this.get('drones').filterProperty('active',true);
  }.property('drones.@each.active'),

  dronesForFocusedTab: function() {
    if(this.get('hasSearchQuery')) {
      var query = this.get('searchQuery');
      return this.get('drones').filter(function(item) {
        return item.get('name').toLowerCase().indexOf(query.toLowerCase()) >= 0;
      });
    } else {      
      return this.get('drones').filterProperty('category',App.categoryController.get('activeCategory'));
    }    
  }.property('drones','App.categoryController.activeCategory', 'searchQuery', 'hasSearchQuery'),

  activeDronesWithParams: function() {
    return this.get('drones').filterProperty('active',true).filterProperty('hasParams',true);
  }.property('activeDrones'),
  
  hasSearchQuery: function() {
    return this.get('searchQuery') != undefined && this.get('searchQuery').length > 0
  }.property('searchQuery'),

});
