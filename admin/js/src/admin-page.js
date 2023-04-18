jQuery( document ).ready( function( $ ) {
	$( '.enable-all' ).click( function( event ) {
		event.preventDefault();
		$( this ).parents( '.cb-options-section' ).find( 'input[type="checkbox"]:not([disabled])' ).prop( 'checked', 'checked' );
	} );

	$( '.disable-all' ).click( function( event ) {
		event.preventDefault();
		$( this ).parents( '.cb-options-section' ).find( 'input[type="checkbox"]:not([disabled])' ).prop( 'checked', '' );
	} );
} );
