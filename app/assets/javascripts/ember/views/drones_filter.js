App.DronesFilter = Ember.CollectionView.create({
  itemViewClass: 'App.CategoryView',
  emptyView: Ember.View.extend({ template: Ember.Handlebars.compile("Nothing to show...") }),
  filter: function(category) {
    App.DronesView.filter(category);
  }
});
