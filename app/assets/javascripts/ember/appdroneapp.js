#= require_self
#= require_tree ./models
#= require_tree ./controllers
#= require_tree ./views
#= require_tree ./helpers
#= require_tree ./templates

window.App = Ember.Application.create({
  ready: function() {
    // create drones
    App.drones = [
      App.Drone.create({ name: 'myName', category: "a" }),
      App.Drone.create({ name: 'myName2', category: "a" }),
      App.Drone.create({ name: 'myName3', dependencies: ['myName'], category: "b" })
    ]

    // create filter
    App.DronesFilter.append();

    // show the list
    App.DronesView.append();

  }
});
