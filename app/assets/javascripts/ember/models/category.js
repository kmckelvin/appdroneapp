App.Category = Ember.Object.extend({
  name: null,
  active: false,
  buttonClass: function() {
    return this.get('active') ? 'btn btn-primary' : 'btn'
  }.property('active')
})
