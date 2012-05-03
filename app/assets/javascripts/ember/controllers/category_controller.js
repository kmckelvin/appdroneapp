App.categoryController = Ember.Object.create({
  categories: [],

  select: function(category) {
    this.get('categories').forEach(function(c) {
      var match = c == category;
      c.set('active',match);
    });
    App.dronesController.set('searchQuery', '');
    this.set('activeCategory',category);
  }
});
