App.DronesView = Ember.CollectionView.create({
  itemViewClass: 'App.DroneView',
  emptyView: Ember.View.extend({ template: Ember.Handlebars.compile("Nothing to show...") }),
  filter: function(category) {
    var filtered_array = App.drones.filterProperty('category',category);
    this.set('content', filtered_array);
  }
});
