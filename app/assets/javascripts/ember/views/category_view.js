App.CategoryView = Ember.View.extend({
  templateName: 'ember/templates/category_view',
  tagName: 'li',
  classNameBindings: 'isActive:active',
  activate: function() { App.categoryController.select(this.get('content')); },
  isActive: function() {
    return this.get('content').get('active') && !App.dronesController.get('hasSearchQuery')
  }.property('content.active','App.dronesController.hasSearchQuery'),
  
})
