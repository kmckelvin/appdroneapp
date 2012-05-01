#= require_self
#= require_tree ./models
#= require_tree ./controllers
#= require_tree ./views
#= require_tree ./helpers
#= require_tree ./templates

App = Ember.Application.create({
  ready: function() {
    this._super();
    App.categoryController.select(App.get('categories')[0]);
    App.WizardView.appendTo('#content');
    App.WizardView.chooseDrones();
  }
});
