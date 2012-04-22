App.DroneView = Ember.View.extend({
  templateName: 'ember/templates/drone',

  toggle: function(event) {
    var drone = event.view.get('content');
    drone.toggle();
  },

  droneClass: function() {
    var classes = 'drone';
    if(this.get('content').get('active')) { classes += ' active' }
    return classes;
  }.property('content.status'),

  toggleText: function() {
    var drone = this.get('drone');
    return drone.get('status');
  }.property('content.status'),

  toggleButtonClass: function() {
    var classes = 'btn toggle';
    var drone = this.get('content');
    if(drone.get('active')) {
      classes += ' btn-primary active';
    }
    return classes;
  }.property('content.status'),

  toggleIconClass: function() {
    var drone = this.get('content');
    return drone.get('active') ? 'icon-heart' : 'icon-heart-empty';
  }.property('content.status'),

});
