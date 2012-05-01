#= require_self
#= require_tree ./models
#= require_tree ./controllers
#= require_tree ./views
#= require_tree ./helpers
#= require_tree ./templates

App = Ember.Application.create({
  ready: function() {
    this._super();
    App.dronesController.set('drones',drones);
    App.categoryController.set('categories',categories);
    App.categoryController.select(App.categoryController.get('categories')[0]);
    App.WizardView.appendTo('#mainNav');
    App.WizardView.chooseDrones();
  }
});
