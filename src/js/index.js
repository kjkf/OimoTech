$(document).ready( function() {
  $('#pills-tab a').on('click', function (e) {
    e.preventDefault();
    $(this).tab('show');
  });
})
