//= require jquery
//= require jquery_ujs
//= require chosen-jquery
//= require bootstrap-tab
//= require bootstrap-dropdown
//= require bootstrap-button
//= require bootstrap-transition
//= require bootstrap-tooltip


$(document).ready ->
  $('.chzn-select').chosen();
  $('*[rel="tooltip"]').tooltip({ placement: 'top' })
