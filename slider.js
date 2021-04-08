 $( function() {
  $( "#slider-range1" ).slider({
    range: true,
    min: 0,
    max: 6,
    values: [ 3, 6 ],
    slide: function( event, ui ) {
      $( "#floor" ).val( ui.values[ 0 ] );
      $( "#floor1" ).val( ui.values[ 1 ] );
    }
  });
  $( "#floor" ).val( $( "#slider-range1" ).slider( "values", 0 ) );
  $( "#floor1" ).val( $( "#slider-range1" ).slider( "values", 1 ) );

} );


 $('.filter__btn-reset').click(function() {
   $( "#slider-range1" ).slider({
    values: [ 3, 6 ],
    slide: function( event, ui ) {
      $( "#floor" ).val( ui.values[ 0 ] );
      $( "#floor1" ).val( ui.values[ 1 ] );
    }
  });

 });




 $( function() {
  $( "#slider-range2" ).slider({
    range: true,
    min: 1891450,
    max: 4531340,
    values: [ 1891450, 4531340 ],
    slide: function( event, ui ) {
      $( "#price" ).val( ui.values[ 0 ] );
      $( "#price1" ).val( ui.values[ 1 ] );
    }
  });
  $( "#price" ).val( $( "#slider-range2" ).slider( "values", 0 ) );
  $( "#price1" ).val( $( "#slider-range2" ).slider( "values", 1 ) );

} );


 $('.filter__btn-reset').click(function() {
   $( "#slider-range2" ).slider({
    values: [ 1891450, 4531340 ],
    slide: function( event, ui ) {
      $( "#price" ).val( ui.values[ 0 ] );
      $( "#price1" ).val( ui.values[ 1 ] );
    }
  });

 });


 $( function() {
  $( "#slider-range3" ).slider({
    range: true,
    min: 0,
    max: 78.4,
    values: [ 25, 78.4 ],
    slide: function( event, ui ) {
      $( "#scq" ).val( ui.values[ 0 ] );
      $( "#scq1" ).val( ui.values[ 1 ] );
    }
  });
  $( "#scq" ).val( $( "#slider-range3" ).slider( "values", 0 ) );
  $( "#scq1" ).val( $( "#slider-range3" ).slider( "values", 1 ) );

} );


 $('.filter__btn-reset').click(function() {
   $( "#slider-range3" ).slider({
    values: [ 25, 78.4 ],
    slide: function( event, ui ) {
      $( "#scq" ).val( ui.values[ 0 ] );
      $( "#scq1" ).val( ui.values[ 1 ] );
    }
  });

 });


