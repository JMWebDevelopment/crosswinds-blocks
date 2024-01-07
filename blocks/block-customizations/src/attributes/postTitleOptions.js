/* Add custom attribute to image block, in Sidebar */
const { __ } = wp.i18n;

// Enable custom attributes on Image block
const enableSidebarSelectOnBlocks = [
    'core/post-title',
];

const { createHigherOrderComponent } = wp.compose;
const { Fragment } = wp.element;
const { AlignmentControl,
	BlockControls,
	InspectorControls,
	useBlockProps,
	PlainText,
	HeadingLevelDropdown,
	useBlockEditingMode, } = wp.blockEditor;
const { ToggleControl, TextControl, PanelBody } = wp.components;
const { createBlock, getDefaultBlockName } = wp.blocks;
const { useEntityProp } = wp.coreData;

import { useCanEditEntity } from './hooks';

import classnames from 'classnames';

/**
 * Add Custom Select to Image Sidebar
 */
const withQueryFlexOption = createHigherOrderComponent( ( BlockEdit ) => {

    return ( props ) => {

        // If current block is not allowed
    	if ( ! enableSidebarSelectOnBlocks.includes( props.name ) ) {
            return (
                <BlockEdit { ...props } />
            );
        }

        const { attributes, setAttributes, context, insertBlocksAfter } = props;
        const { level, textAlign, isLink, rel, linkTarget } = attributes;
		const { postType, postId, queryId } = context;

		const HEADING_LEVELS = [ 0, 1, 2, 3, 4, 5, 6 ];

        const TagName = level === 0 ? 'p' : `h${ level }`;
		const isDescendentOfQueryLoop = Number.isFinite( queryId );
		/**
		 * Hack: useCanEditEntity may trigger an OPTIONS request to the REST API via the canUser resolver.
		 * However, when the Post Title is a descendant of a Query Loop block, the title cannot be edited.
		 * In order to avoid these unnecessary requests, we call the hook without
		 * the proper data, resulting in returning early without making them.
		 */
		const userCanEdit = useCanEditEntity(
			'postType',
			! isDescendentOfQueryLoop && postType,
			postId
		);
		const [ rawTitle = '', setTitle, fullTitle ] = useEntityProp(
			'postType',
			postType,
			'title',
			postId
		);
		const [ link ] = useEntityProp( 'postType', postType, 'link', postId );
		const onSplitAtEnd = () => {
			insertBlocksAfter( createBlock( getDefaultBlockName() ) );
		};
		const blockProps = useBlockProps( {
			className: classnames( {
				[ `has-text-align-${ textAlign }` ]: textAlign,
			} ),
		} );
		const blockEditingMode = useBlockEditingMode();

		let titleElement = <TagName { ...blockProps }>{ __( 'Title' ) }</TagName>;

		if ( postType && postId ) {
			titleElement = userCanEdit ? (
				<PlainText
					tagName={ TagName }
					placeholder={ __( 'No Title' ) }
					value={ rawTitle }
					onChange={ setTitle }
					__experimentalVersion={ 2 }
					__unstableOnSplitAtEnd={ onSplitAtEnd }
					{ ...blockProps }
				/>
			) : (
				<TagName
					{ ...blockProps }
					dangerouslySetInnerHTML={ { __html: fullTitle?.rendered } }
				/>
			);
		}

		if ( isLink && postType && postId ) {
			titleElement = userCanEdit ? (
				<TagName { ...blockProps }>
					<PlainText
						tagName="a"
						href={ link }
						target={ linkTarget }
						rel={ rel }
						placeholder={ ! rawTitle.length ? __( 'No Title' ) : null }
						value={ rawTitle }
						onChange={ setTitle }
						__experimentalVersion={ 2 }
						__unstableOnSplitAtEnd={ onSplitAtEnd }
					/>
				</TagName>
			) : (
				<TagName { ...blockProps }>
					<a
						href={ link }
						target={ linkTarget }
						rel={ rel }
						onClick={ ( event ) => event.preventDefault() }
						dangerouslySetInnerHTML={ {
							__html: fullTitle?.rendered,
						} }
					/>
				</TagName>
			);
		}

		return (
			<>
				{ blockEditingMode === 'default' && (
					<BlockControls group="block">
						<HeadingLevelDropdown
							options={ HEADING_LEVELS }
							value={ level }
							onChange={ ( newLevel ) =>
								setAttributes( { level: newLevel } )
							}
						/>
						<AlignmentControl
							value={ textAlign }
							onChange={ ( nextAlign ) => {
								setAttributes( { textAlign: nextAlign } );
							} }
						/>
					</BlockControls>
				) }
				<InspectorControls>
					<PanelBody title={ __( 'Settings' ) }>
						<ToggleControl
							__nextHasNoMarginBottom
							label={ __( 'Make title a link' ) }
							onChange={ () => setAttributes( { isLink: ! isLink } ) }
							checked={ isLink }
						/>
						{ isLink && (
							<>
								<ToggleControl
									__nextHasNoMarginBottom
									label={ __( 'Open in new tab' ) }
									onChange={ ( value ) =>
										setAttributes( {
											linkTarget: value ? '_blank' : '_self',
										} )
									}
									checked={ linkTarget === '_blank' }
								/>
								<TextControl
									__nextHasNoMarginBottom
									label={ __( 'Link rel' ) }
									value={ rel }
									onChange={ ( newRel ) =>
										setAttributes( { rel: newRel } )
									}
								/>
							</>
						) }
					</PanelBody>
				</InspectorControls>
				{ titleElement }
			</>
		);
    };
}, 'withQueryFlexOption' );

wp.hooks.addFilter(
    'editor.BlockEdit',
    'crosswinds-blocks/with-query-flex-option',
    withQueryFlexOption
);
