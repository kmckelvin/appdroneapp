App.CategoryView = Ember.View.extend({
  templateName: 'ember/templates/category',
  filter: function() {
    App.DronesFilter.get('content').forEach(function(d) {
      d.set('active',false);
    });
    this.get('content').set('active',true);
    console.log('filter by ' + this.get('content').get('name'));
    App.DronesView.filter(this.get('content'));
  },

  buttonClass: function() {
    return this.get('content').get('active') ? 'btn btn-primary' : 'btn'
  }.property('content.active')
});
