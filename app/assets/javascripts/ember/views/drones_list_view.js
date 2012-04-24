App.DronesListView = Ember.CollectionView.create({
  itemViewClass: 'App.DroneCompactView',
  emptyView: Ember.View.extend({ template: Ember.Handlebars.compile("Nothing to show...") }),
  contentBinding: 'App.dronesController.activeDronesWithParams'
});
