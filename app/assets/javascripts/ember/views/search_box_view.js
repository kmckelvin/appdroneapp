App.SearchBoxView = Ember.TextField.extend({
  placeholder: 'Search',
  valueBinding: 'App.dronesController.searchQuery',
  classNames: 'input-small search-query'
});
