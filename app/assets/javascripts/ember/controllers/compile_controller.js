App.compileController = Ember.Object.create({
  compile: function(event) {
    var d = {};
    //console.log(App.dronesController.get('activeDrones').length);
    App.dronesController.get('activeDrones').forEach(function(drone) {
      var p = { something: 'otherwise-it-breaks' }; // TODO fix me
      drone.get('params').forEach(function(param) {
        p = $.extend(p,param.get('asJSON'));
      });
      //console.log(p);
      d[drone.get('name')] = p;
    });

    this.set('isBusy',true);

    $.ajax({
      type: 'POST',
      url: '/build',
      data: { drones: d },
      success: function(path) {
        window.location = path;
      },
      error: function() { alert('Ruh oh.. something went wrong :('); }
    });
  }
  
});
