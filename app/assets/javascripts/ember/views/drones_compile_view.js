App.DronesCompileView = Ember.View.create({
  templateName: 'ember/templates/compile',
  compile: function() {
    var drones = App.dronesController.get('activeDrones');
    alert('ajax request to server with params, response is a URL');
  }
});
