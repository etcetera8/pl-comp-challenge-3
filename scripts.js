$('#hamburger-div').on('click', function() {
  $('.navbar').slideToggle('slow');
})

$('.fa-chevron-circle-up').on('click', function() {
  $('#graph-display, .buttons').slideToggle('slow');
})

$('.navbar').on('click', function() {
  $('.navbar').slideToggle('fast')
})