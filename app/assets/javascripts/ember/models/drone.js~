App.Drone = Ember.Object.extend({
  name: null,
  category: null,
  active: false,

  dependencies: ['a','b','c'],
  pairs: ['d'],
  params: [],

  status: function() {
    var active = this.get('active');
    return active ? 'active' : 'inactive'
  }.property('active'),

  toggle: function() {
    if(this.get('active')) { this.deactivate() } else { this.activate() }
  },

  activate: function() { this.set('active',true) },
  deactivate: function() { this.set('active',false) },

  dependencyCount: function() { return this.get('dependencies').length; }.property('dependencies'),
  pairCount: function() { return this.get('pairs').length; }.property('pairs'),
  paramCount: function() { return this.get('params').length; }.property('params'),

  // active dependencies
  // active dependants (cannot unload without 
  // active pairs
  // 
  // 
  

});
