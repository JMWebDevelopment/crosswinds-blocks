const fecthMasonry = function( container, items, columns ) {
	const containerElement = document.getElementsByClassName( container )[ 0 ] || '';
	const containerClassList = containerElement.className.split( ' ' );
	const containerClassListString = containerClassList.join( ' ' );
	console.log(containerClassListString);
	columns = containerClassListString.toString().match( /masonry-grid-has-\d+-desktop-columns/ )[0];
	columns = containerClassListString.toString().match( /\d+/ )[0];
	console.log(columns);
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
	console.log(newElement.classList);
	wrapperElement.appendChild( newElement );
	let countColumn = 1;
	for ( let i = 1; i <= columns; i++ ) {
		const newColumn = document.createElement( 'div' );
		newColumn.classList.add( 'masonry-column-' + i );
		newElement.appendChild( newColumn );
	}
	for ( let i = 0; i < masonryElements.length; i++ ) {
		const col = document.querySelector( '#' + container + ' > .masonry-column-' + countColumn );
		col.appendChild( masonryElements[ i ] );
		countColumn = countColumn < columns ? countColumn + 1 : 1;
	}
};
/* Pass data to generate masonry layout */
fecthMasonry( 'wp-block-crosswinds-blocks-masonry-grid', 'wp-block-crosswinds-blocks-masonry-grid-item', 4 );
