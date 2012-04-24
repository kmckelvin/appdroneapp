App.DroneView = Ember.View.extend({
  templateName: 'ember/templates/drone',
  //droneBinding: 'content',

  toggle: function(event) {
    var drone = event.view.get('content');
    drone.toggle();
  },

  droneClass: function() {
    var classes = 'drone';
    var drone = this.get('content');
    if(drone.get('active')) { classes += ' active' }
    return classes;
  }.property('content.status'),

  toggleText: function() {
    var drone = this.get('drone');
    return drone.get('status');
  }.property('content.status'),

  toggleButtonClass: function() {
    var classes = 'btn btn-large toggle';
    var drone = this.get('content');
    if(drone.get('active')) {
      classes += ' active';
      classes += drone.get('locked') ? ' btn-danger' : ' btn-success';
    } else {
      if(drone.get('available')) { classes += ' btn-inverse' }
    }
    return classes;
  }.property('content.status'),

  toggleIconClass: function() {
    var drone = this.get('content');
    switch(drone.get('status')) {
      case 'unavailable': return 'icon-external-link'; break;
      case 'available': return 'icon-heart-empty'; break;
      case 'active': return 'icon-heart'; break;
      case 'locked': return 'icon-lock'; break;
    }
    return drone.get('active') ? 'icon-heart' : 'icon-heart-empty';
  }.property('content.status'),

});
