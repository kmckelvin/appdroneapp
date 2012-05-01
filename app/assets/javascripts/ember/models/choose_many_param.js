App.ChooseManyParam = Ember.Object.extend({
  isChooseManyParam: true,
  activeChoices: function() {
    return this.get('choices').filterProperty('value',true);
  }.property('choices.@each.value'),

  activeChoiceNames: function() {
    return this.get('activeChoices').map(function(e) { return e.get('name') });
  }.property('activeChoices'),

  asJSON: function() {
    var json = {};
    json[this.get('name')] = this.get('activeChoiceNames');
    return json;
  }.property('activeChoiceNames'),

});
