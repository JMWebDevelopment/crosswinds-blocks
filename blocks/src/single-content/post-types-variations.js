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
