App.DronesDependencyView = Ember.CollectionView.create({
  itemViewClass: 'App.DroneView',
  emptyView: Ember.View.extend({ template: Ember.Handlebars.compile("Nothing to show...") }),
  contentBinding: 'App.dronesController.drones'
});
