App.SearchBoxView = Ember.TextField.extend({
  placeholder: 'Search&hellip;',
  valueBinding: 'App.dronesController.searchQuery',
  classNames: 'input-small search-query'
});
