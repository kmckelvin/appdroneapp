//= require jquery
//= require jquery_ujs
//= require jquery.zclip
//= require chosen-jquery
//= require ember
//= require gritter
//= require bootstrap-tab
//= require bootstrap-modal
//= require bootstrap-dropdown
//= require bootstrap-button
//= require bootstrap-transition
//= require bootstrap-tooltip


$(document).ready ->
  $('.chzn-select').chosen();
  $('*[rel="tooltip"]').tooltip({ placement: 'top' })
