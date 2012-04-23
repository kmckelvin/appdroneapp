App.modal_alert = function(opts) {
  var modal = $('<div/>').addClass('modal modal-discrete').attr('id','modal');
  var modal_header = $('<div>').addClass('modal-header').html('<h2>' + opts.header + '</h1>');
  var modal_body = $('<div/>').addClass('modal-body').css('font-size','16px').html(opts.body);
  var modal_footer = $('<div/>').addClass('modal-footer');
  modal_footer.html('<button class="btn btn-large btn-inverse" data-dismiss="modal">OK</button>')

  modal.append(modal_header).append(modal_body).append(modal_footer);
  modal.appendTo($('body'));
  modal.modal("show");
}
