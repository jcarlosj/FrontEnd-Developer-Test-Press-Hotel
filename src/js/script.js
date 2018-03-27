/* script.js */
$( document ) .ready( function() {
  // Slider
  $('.carousel').carousel({
    interval: 8000
  });

  // Book Now (Datepicker)
  $( '#arrival-date' ) .datepicker();
  $( '#departure-date' ) .datepicker();
});
