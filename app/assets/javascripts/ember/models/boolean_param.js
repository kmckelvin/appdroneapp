App.BooleanParam = Ember.Object.extend({
  isBooleanParam: true,
  value: false,

  toggleClass: function() {
    return this.get('value') == true ? 'btn btn-success active' : 'btn btn-inverse';
  }.property('value'),

  toggle: function() {
    this.set('value',!this.get('value'));
  },

  asJSON: function() {
    var json = {};
    json[this.get('name')] = this.get('value');
    return json;
  }.property('value'),

});
