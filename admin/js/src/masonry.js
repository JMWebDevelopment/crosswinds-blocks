const fecthMasonry = function( container, items, columns ) {
	const containerElement = document.getElementsByClassName( container )[ 0 ] || '';
	const containerClassList = containerElement.className.split( ' ' );
	const containerStyles = containerElement.style;
	if ( ! containerElement ) {
		return;
	}
	const wrapperElement = containerElement.parentNode;
	const masonryElements = document.querySelectorAll( '.' + items );
	containerElement.parentNode.removeChild( containerElement );
	const newElement = document.createElement( 'div' );
	newElement.setAttribute( 'id', container );
	for ( let i = 0; i < containerClassList.length; i++ ) {
		newElement.classList.add( containerClassList[ i ] );
	}
	newElement.classList.add( 'masonry-layout', 'columns-' + columns );
	newElement.style.columnGap = containerStyles.columnGap;
	newElement.style.rowGap = containerStyles.rowGap;
	wrapperElement.appendChild( newElement );
	let countColumn = 1;
	for ( let i = 1; i <= columns; i++ ) {
		const newColumn = document.createElement( 'div' );
		newColumn.classList.add( 'masonry-column-' + i );
		newColumn.classList.add( 'masonry-column' );
		newElement.appendChild( newColumn );
	}
	for ( let i = 0; i < masonryElements.length; i++ ) {
		const col = document.querySelector( '#' + container + ' > .masonry-column-' + countColumn );
		col.appendChild( masonryElements[ i ] );
		countColumn = countColumn < columns ? countColumn + 1 : 1;
	}
};

const fecthUpdatedMasonry = function( container, items, columns ) {
	const containerElement = document.getElementsByClassName( container )[ 0 ] || '';
	const masonryElements = document.querySelectorAll( '.' + items );
	containerElement.innerHTML = '';
	let countColumn = 1;
	for ( let i = 1; i <= columns; i++ ) {
		const newColumn = document.createElement( 'div' );
		newColumn.classList.add( 'masonry-column-' + i );
		newColumn.classList.add( 'masonry-column' );
		containerElement.appendChild( newColumn );
	}
	for ( let i = 0; i < masonryElements.length; i++ ) {
		const col = document.querySelector( '#' + container + ' > .masonry-column-' + countColumn );
		col.appendChild( masonryElements[ i ] );
		countColumn = countColumn < columns ? countColumn + 1 : 1;
	}
};

jQuery( document ).ready( function( $ ) {
	let numCols;
	if ( $( window ).width() > 1000 ) {
		const parentClass = $( '.wp-block-crosswinds-blocks-masonry-grid' ).attr( 'class' ).match( /masonry-grid-has-\d+-desktop-columns/ )[ 0 ];
		numCols = parentClass.match( /\d+/ )[ 0 ];
	} else if ( $( window ).width() > 650 ) {
		const parentClass = $( '.wp-block-crosswinds-blocks-masonry-grid' ).attr( 'class' ).match( /masonry-grid-has-\d+-tablet-columns/ )[ 0 ];
		numCols = parentClass.match( /\d+/ )[ 0 ];
	} else {
		const parentClass = $( '.wp-block-crosswinds-blocks-masonry-grid' ).attr( 'class' ).match( /masonry-grid-has-\d+-mobile-columns/ )[ 0 ];
		numCols = parentClass.match( /\d+/ )[ 0 ];
	}
	fecthMasonry( 'wp-block-crosswinds-blocks-masonry-grid', 'wp-block-crosswinds-blocks-masonry-grid-item', numCols );

	$( window ).resize( function() {
		let newNumCols;
		if ( $( window ).width() > 1000 ) {
			const parentClass = $( '.wp-block-crosswinds-blocks-masonry-grid' ).attr( 'class' ).match( /masonry-grid-has-\d+-desktop-columns/ )[ 0 ];
			newNumCols = parentClass.match( /\d+/ )[ 0 ];
		} else if ( $( window ).width() > 650 ) {
			const parentClass = $( '.wp-block-crosswinds-blocks-masonry-grid' ).attr( 'class' ).match( /masonry-grid-has-\d+-tablet-columns/ )[ 0 ];
			newNumCols = parentClass.match( /\d+/ )[ 0 ];
		} else {
			const parentClass = $( '.wp-block-crosswinds-blocks-masonry-grid' ).attr( 'class' ).match( /masonry-grid-has-\d+-mobile-columns/ )[ 0 ];
			newNumCols = parentClass.match( /\d+/ )[ 0 ];
		}
		fecthUpdatedMasonry( 'wp-block-crosswinds-blocks-masonry-grid', 'wp-block-crosswinds-blocks-masonry-grid-item', newNumCols );
	} );
} );
