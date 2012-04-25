App.Param = Ember.Object.extend({
  toggleClass: function() {
    this.get('value') == true ? 'btn-primary' : '';
  }.property('value'),

  toggle: function() {
    this.set('value',!this.get('value'));
  }
});
