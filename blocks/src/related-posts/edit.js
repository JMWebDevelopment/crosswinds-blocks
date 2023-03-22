/**
 * External dependencies
 */
import classnames from 'classnames';

/**
 * WordPress dependencies
 */
import { memo, useMemo, useState } from '@wordpress/element';
import { useSelect, useDispatch } from '@wordpress/data';
import { __ } from '@wordpress/i18n';
import {
	BlockContextProvider,
	__experimentalUseBlockPreview as useBlockPreview,
	useBlockProps,
	useInnerBlocksProps,
	store as blockEditorStore,
	InspectorControls,
} from '@wordpress/block-editor';
import {
	Spinner,
	RangeControl,
	PanelBody,
} from '@wordpress/components';
import { store as coreStore } from '@wordpress/core-data';

/**
 * Internal dependencies
 */
import './editor.scss';

const TEMPLATE = [
	[ 'core/post-title' ],
	[ 'core/post-date' ],
	[ 'core/post-excerpt' ],
];

function PostTemplateInnerBlocks() {
	const innerBlocksProps = useInnerBlocksProps(
		{ className: 'wp-block-post' },
		{ template: TEMPLATE, __unstableDisableLayoutClassNames: true }
	);
	return <div { ...innerBlocksProps } />;
}

function PostTemplateBlockPreview( {
	blocks,
	blockContextId,
	isHidden,
	setActiveBlockContextId,
} ) {
	const blockPreviewProps = useBlockPreview( {
		blocks,
		props: {
			className: 'wp-block-post',
		},
	} );

	const handleOnClick = () => {
		setActiveBlockContextId( blockContextId );
	};

	const style = {
		display: isHidden ? 'none' : undefined,
	};

	return (
		<div
			{ ...blockPreviewProps }
			tabIndex={ 0 }
			// eslint-disable-next-line jsx-a11y/no-noninteractive-element-to-interactive-role
			role="button"
			onClick={ handleOnClick }
			onKeyPress={ handleOnClick }
			style={ style }
		/>
	);
}

const MemoizedPostTemplateBlockPreview = memo( PostTemplateBlockPreview );

export default function Edit( {
	clientId,
	attributes,
	setAttributes,
	__unstableLayoutClassNames,
} ) {
	const {
		numColumns,
		numPosts,
	} = attributes;
	const [ activeBlockContextId, setActiveBlockContextId ] = useState();
	let { posts, blocks } = useSelect(
		( select ) => {
			const { getEntityRecords } = select( coreStore );
			const { getBlocks } = select( blockEditorStore );
			return {
				posts: getEntityRecords( 'postType', 'post', {
					per_page: numPosts,
				} ),
				blocks: getBlocks( clientId ),
			};
		},
		[
			clientId,
		]
	);
	const blockContexts = useMemo(
		() =>
			posts?.map( ( post ) => ( {
				postType: post.type,
				postId: post.id,
			} ) ),
		[ posts ]
	);
	const blockProps = useBlockProps( {
		className: classnames( { [ `columns-${ numColumns }` ]: true } ),
	} );

	if ( ! posts ) {
		return (
			<p { ...blockProps }>
				<Spinner />
			</p>
		);
	}

	if ( ! posts.length ) {
		return <p { ...blockProps }> { __( 'No results found.' ) }</p>;
	}

	const { invalidateResolution } = useDispatch( 'core/data' );

	function updateNumPosts( value ) {
		setAttributes( { numPosts: value } );
	}

	const inspectorControls = (
		<>
			<InspectorControls>
				<PanelBody title={ __( 'Related Posts Settings', 'crosswinds-blocks' ) }>
					<div className="related-posts-settings__width">
						<RangeControl
							label={ __( 'Number of related posts', 'crosswinds-blocks' ) }
							onChange={ ( value ) =>
								updateNumPosts( value )
							}
							value={ numPosts || '' }
							min={ 1 }
							max={ 10 }
							initialPosition={ 3 }
							allowReset={ true }
							resetFallbackValue={ 3 }
						/>
					</div>

					<div className="related-posts-settings__speed">
						<RangeControl
							label={ __( 'Columns', 'crosswinds-blocks' ) }
							onChange={ ( value ) =>
								setAttributes( { numColumns: value } )
							}
							value={ numColumns || '' }
							min={ 1 }
							max={ 4 }
							initialPosition={ 1 }
							allowReset={ true }
							resetFallbackValue={ 1 }
						/>
					</div>
				</PanelBody>
			</InspectorControls>
		</>
	);

	// To avoid flicker when switching active block contexts, a preview is rendered
	// for each block context, but the preview for the active block context is hidden.
	// This ensures that when it is displayed again, the cached rendering of the
	// block preview is used, instead of having to re-render the preview from scratch.
	return (
		<>
			{ inspectorControls }
			<div { ...blockProps }>
				{ blockContexts &&
					blockContexts.map( ( blockContext ) => (
						<BlockContextProvider
							key={ blockContext.postId }
							value={ blockContext }
						>
							{ blockContext.postId ===
							( activeBlockContextId ||
								blockContexts[ 0 ]?.postId ) ? (
								<PostTemplateInnerBlocks />
							) : null }
							<MemoizedPostTemplateBlockPreview
								blocks={ blocks }
								blockContextId={ blockContext.postId }
								setActiveBlockContextId={ setActiveBlockContextId }
								isHidden={
									blockContext.postId ===
									( activeBlockContextId ||
										blockContexts[ 0 ]?.postId )
								}
							/>
						</BlockContextProvider>
					) ) }
			</div>
		</>
	);
}
