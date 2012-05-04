App.SearchBoxView = Ember.TextField.extend({
  placeholder: 'Search',
  valueBinding: 'App.dronesController.searchQuery'
});
