App.DroneView = Ember.View.extend({
  templateName: 'ember/templates/drone',
  classNames: 'drone',
  classNameBindings: 'content.active:active',

  droneBinding: 'content',

  toggle: function(event) { this.get('drone').toggle(); },

  toggleButtonClass: function() {
    var classes = 'btn btn-large toggle';
    var drone = this.get('content');
    if(drone.get('active')) {
      classes += ' active';
      classes += drone.get('locked') ? ' btn-danger' : ' btn-success';
    } else {
      if(!drone.get('available')) { classes += ' disabled' }
    }
    return classes;
  }.property('drone.status'),

  toggleIconClass: function() {
    switch(this.get('drone').get('status')) {
      case 'unavailable': return 'icon-external-link'; break;
      case 'available': return 'icon-heart-empty'; break;
      case 'active': return 'icon-heart'; break;
      case 'locked': return 'icon-lock'; break;
    }
    return this.get('drone').get('active') ? 'icon-heart' : 'icon-heart-empty';
  }.property('drone.status'),

});
