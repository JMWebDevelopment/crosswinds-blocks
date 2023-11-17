[ ...singleContent.postTypes ].forEach( function( postType, index, arr ) {
	console.log( postType.title );
	wp.blocks.registerBlockVariation(
		'crosswinds-blocks/single-content',
		{
			name: postType.slug,
			title: 'Single Content - ' + postType.title,
			attributes: {
				postType: postType.slug,
				postTypeTitle: postType.title,
			},
		}
	);
} );

( function() {
	const crosswindsBlocksSVG = <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="#171247" class="fa-primary" d="M64 32C64 14.3 49.7 0 32 0S0 14.3 0 32V480c0 17.7 14.3 32 32 32s32-14.3 32-32V32zM208 64.7V351.3L272 338V78L208 64.7zM368 318l64-13.3V111.3L368 98V318z"/><path fill="#8200ff" class="fa-secondary" d="M272 78V338l96-20V98L272 78zM486.5 293.3c14.8-3.1 25.5-16.2 25.5-31.3V154c0-15.2-10.6-28.2-25.5-31.3L432 111.3V304.7l54.5-11.4zM208 64.7L166.5 56c-19.9-4.1-38.5 11-38.5 31.3V96H64v48h64V272H64v48h64v8.6c0 20.3 18.7 35.5 38.5 31.3l41.5-8.6V64.7z"/></svg>;
	wp.blocks.updateCategory( 'crosswinds-blocks', { icon: crosswindsBlocksSVG } );
} )();
