App.WizardView = Ember.View.create({
  templateName: 'ember/templates/wizard',
  activeState: null,
  classNames: ['btn-group','wizard-steps'],

  choosingDrones: function() { return this.get('activeState') == 'choose' }.property('activeState'),

  chooseDrones: function() {
    if(this.get('activeState') == 'choose') { return }
    App.DronesFilter.appendTo('#content');
    App.DronesDependencyView.appendTo('#content');
    App.DronesParamsView.remove();
    this.set('activeState','choose');
  },

  configureDrones: function() {
    if(this.get('activeState') == 'configure') { return }
    App.DronesDependencyView.remove();
    App.DronesFilter.remove();
    App.DronesParamsView.appendTo('#content');
    this.set('activeState','configure');
  },

  compileDrones: function() {
    if(this.get('activeState') == 'compile') { return }
    if(App.dronesController.get('activeDrones').length == 0) {
      $.gritter.add({
	title: 'Nothing to compile&hellip;',
	text: 'Choose some drones first.',
        time: 3000,
      });
      return
    }
    //App.DronesDependencyView.remove();
    //App.DronesFilter.remove();
    //App.DronesParamsView.remove();
    this.set('activeState','compile');
    App.compileController.compile();
  },

  activeButtonClasses: 'btn btn-large btn-danger',
  inactiveButtonClasses: 'btn btn-large btn-inverse active',

  chooseDronesClass: function() { return this.get('activeState') == 'choose' ? this.get('activeButtonClasses') : this.get('inactiveButtonClasses') }.property('activeState'),
  configureDronesClass: function() { return this.get('activeState') == 'configure' ? this.get('activeButtonClasses') : this.get('inactiveButtonClasses') }.property('activeState'),
  compileDronesClass: function() { return this.get('activeState') == 'compile' ? this.get('activeButtonClasses') : this.get('inactiveButtonClasses') }.property('activeState'),

});
