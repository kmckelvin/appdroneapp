App.DronesFilter = Ember.View.create({
  templateName: 'ember/templates/drones_filter',
  category: "none",
  categories: ["a","b"],
  filterA: function() {
    this.set('category','a');
    App.DronesView.filter('a');
  },
  filterB: function() {
    this.set('category','b');
    App.DronesView.filter('b');
  }
});
