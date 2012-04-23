App.Drone = Ember.Object.extend({
  name: null,
  category: null,
  desc: 'description goes here',
  active: false,

  dependencies: [],
  dependants: [],
  pairs: [],
  params: [],

  status: function() {
    var active = this.get('active');
    var locked = this.get('locked');
    var available = this.get('available');

    if(active) { return locked ? 'locked' : 'active'; }
    else { return available ? 'available' : 'unavailable' }
  }.property('active','locked','available'),

  locked: function() {
    return this.get('active') && this.get('hasActiveDependants') }.property('active','hasActiveDependants'),

  available: function() {
    return !this.get('active') && this.get('dependenciesMet') }.property('active','dependenciesMet'),

  toggle: function() { if(this.get('active')) { this.deactivate() } else { this.activate() } },

  activate: function() {
    if(!this.get('dependenciesMet')) {
      var alert_msg = '<div class="alert alert-error">';
      alert_msg += '<strong>' + this.get('name') + '</strong>' + ' depends on drones that are not currently active:';
      alert_msg += '<br /><br />';
      alert_msg += '<ul>'
      var missingDependencyList = '';
      var missingDependencies = this.get('inactiveDependencies');
      missingDependencies.forEach(function(item) {
        alert_msg += '<li>' + item.get('name') + '</li>';
      });

      alert_msg += '</ul>';
      alert_msg += '</div>';
      App.modal_alert({ header: 'Missing Dependency', body: alert_msg });
      return false;
    }
    this._activate();
  },

  deactivate: function() {
    if(this.get('activeDependantCount') > 0) {
      var alert_msg = '<div class="alert alert-error">';
      alert_msg += '<strong>' + this.get('name') + '</strong>' + ' cannot be removed while it has active dependants:';
      alert_msg += '<br /><br />';
      alert_msg += '<ul>';

      var activeDependantList = '';
      var activeDependants = this.get('activeDependants');
      activeDependants.forEach(function(item) {
        alert_msg += '<li>' + item.get('name') + '</li>';
      });
      App.modal_alert({ header: 'Drone locked', body: alert_msg });
      return false;
    }
    this._deactivate();
  },
  _activate: function() { this.set('active',true) },
  _deactivate: function() { this.set('active',false) },

  dependencyCount: function() { return this.get('dependencies').length; }.property('dependencies'),
  hasDependencies: function() { return this.get('dependencyCount') > 0 }.property('dependencyCount'),

  pairCount: function() { return this.get('pairs').length; }.property('pairs'),
  hasPairs: function() { return this.get('pairCount') > 0 }.property('pairCount'),

  paramCount: function() { return this.get('params').length; }.property('params'),
  hasParams: function() { return this.get('paramCount') > 0 }.property('paramCount'),

  activeDependencyCount: function() {
    return this.get('dependencies').filterProperty('active',true).length;
  }.property('dependencies.@each.active'),

  dependenciesMet: function() {
    return this.get('activeDependencyCount') == this.get('dependencyCount') }.property('activeDependencyCount'),
 
  inactiveDependencies: function() {
    return this.get('dependencies').filterProperty('active',false) }.property('dependencies.@each.active'),

  dependantCount: function() { return this.get('dependants').length }.property('dependants'),
  hasDependants: function() { return this.get('dependantCount') > 0 }.property('dependantCount'),

  activeDependants: function() {
    return this.get('dependants').filterProperty('active',true)
  }.property('dependants.@each.active'),

  activeDependantCount: function() {
    return this.get('activeDependants').length;
  }.property('activeDependants'),

  hasActiveDependants: function() {
    return this.get('activeDependantCount') > 0 }.property('activeDependantCount'),


});
