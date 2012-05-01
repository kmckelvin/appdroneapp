App.categoryController = Ember.Object.create({
  select: function(category) {
    App.categories.forEach(function(c) {
      var match = c == category
      c.set('active',match);
    });
    this.set('activeCategory',category);
  },
});
