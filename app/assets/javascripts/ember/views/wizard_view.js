App.WizardView = Ember.View.create({
  templateName: 'ember/templates/wizard',
  activeState: null,

  chooseDrones: function() {
    App.DronesDependencyView.appendTo('#content');
    App.DronesParamsView.remove();
    App.DronesCompileView.remove();
    this.set('activeState','choose');
  },

  configureDrones: function() {
    App.DronesDependencyView.remove();
    App.DronesParamsView.appendTo('#content');
    App.DronesCompileView.remove();
    this.set('activeState','configure');
  },

  compileDrones: function() {
    App.DronesDependencyView.remove();
    App.DronesParamsView.remove();
    App.DronesCompileView.appendTo('#content');
    this.set('activeState','compile');
  },

  chooseDronesClass: function() { return this.get('activeState') == 'choose' ? 'btn btn-primary' : 'btn' }.property('activeState'),
  configureDronesClass: function() { return this.get('activeState') == 'configure' ? 'btn btn-primary' : 'btn' }.property('activeState'),
  compileDronesClass: function() { return this.get('activeState') == 'compile' ? 'btn btn-primary' : 'btn' }.property('activeState'),

});
