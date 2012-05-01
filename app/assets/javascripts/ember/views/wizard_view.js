App.WizardView = Ember.View.create({
  templateName: 'ember/templates/wizard',
  activeState: null,

  choosingDrones: function() { return this.get('activeState') == 'choose' }.property('activeState'),

  chooseDrones: function() {
    if(this.get('activeState') == 'choose') { return }
    App.DronesDependencyView.appendTo('#content');
    App.DronesParamsView.remove();
    this.set('activeState','choose');
  },

  configureDrones: function() {
    if(this.get('activeState') == 'configure') { return }
    App.DronesDependencyView.remove();
    App.DronesParamsView.appendTo('#content');
    this.set('activeState','configure');
  },

  compileDrones: function() {
    if(this.get('activeState') == 'compile') { return }
    App.DronesDependencyView.remove();
    App.DronesParamsView.remove();
    this.set('activeState','compile');
    App.compileController.compile();
  },

  chooseDronesClass: function() { return this.get('activeState') == 'choose' ? 'btn btn-large btn-inverse active' : 'btn btn-large' }.property('activeState'),
  configureDronesClass: function() { return this.get('activeState') == 'configure' ? 'btn btn-large btn-inverse active' : 'btn btn-large' }.property('activeState'),
  compileDronesClass: function() { return this.get('activeState') == 'compile' ? 'btn btn-large btn-inverse active' : 'btn btn-large' }.property('activeState'),

});
