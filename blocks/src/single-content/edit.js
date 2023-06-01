/**
 * External dependencies
 */
import classnames from 'classnames';

/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';
import {
	useBlockProps,
	InspectorControls,
	InnerBlocks,
} from '@wordpress/block-editor';
import {
	SelectControl,
	PanelBody,
	ComboboxControl,
	ToggleControl,
} from '@wordpress/components';
import { useSelect } from '@wordpress/data';
import {
	useState,
} from '@wordpress/element';

/**
 * Internal dependencies
 */
import './editor.scss';

/**
 * The edit function describes the structure of your block in the context of the
 * editor. This represents what the editor will render when the block is used.
 *
 * @param {Object} props All props passed to this function.
 * @return {WPElement}   Element to render.
 */
export default function Edit( props ) {
	const {
		attributes,
		setAttributes,
	} = props;

	const {
		postId,
		postType,
		postTypeTitle,
		cbUseFlex,
		cbFillHeight,
	} = attributes;

	function getPosts() {
		let options = [];
		const posts = wp.data.select( 'core' ).getEntityRecords( 'postType', postType, { per_page: -1 } );
		if ( null === posts ) {
			return options;
		}
		posts.forEach( ( post ) => {
			options.push( { value: post.id, label: post.title.rendered } );
		} );
		return options;
	}

	const [ filteredOptions, setFilteredOptions ] = useState( getPosts() );

	const inspectorControls = (
		<>
			<InspectorControls>
				<PanelBody title={ __( 'Featured Content Settings', 'crosswinds-blocks' ) }>
					<>
						<ComboboxControl
							label={ __( 'Select', 'crosswinds-blocks' ) + ' ' + postTypeTitle }
							value={ postId }
							onChange={ ( id ) => props.setAttributes( { postId: parseInt( id ) } ) }
							options={ getPosts() }
							onFilterValueChange={ ( inputValue ) =>
								setFilteredOptions(
									getPosts().filter( ( option ) =>
										option.label
											.toLowerCase()
											.startsWith( inputValue.toLowerCase() )
									)
								)
							}
						/>

						<ToggleControl
							label={ __( 'Use Flexbox on Group?', 'crosswinds-blocks' ) }
							checked={ cbUseFlex }
							onChange={ ( value ) => setAttributes( {
								cbUseFlex: value,
							} ) }
						/>

						<ToggleControl
							label={ __( 'Have Group Fill Height of Parent Block?', 'crosswinds-blocks' ) }
							checked={ cbFillHeight }
							onChange={ ( value ) => setAttributes( {
								cbFillHeight: value,
							} ) }
						/>
					</>
				</PanelBody>
			</InspectorControls>
		</>
	);

	let flexClass;
	if ( cbUseFlex && cbFillHeight ) {
		flexClass = classnames( 'column-flex cb-fill-height-parent' );
	} else if ( cbUseFlex ) {
		flexClass = classnames( 'column-flex' );
	} else {
		flexClass = '';
	}

	const blockProps = useBlockProps( {
		className: flexClass,
	} );

	if ( 0 === postId ) {
		return (
			<>
				{ inspectorControls }
				<p { ...blockProps }>
					{ __(
						'Please select a post or other custom post type item from the right side',
						'crosswinds-blocks'
					)
					}
				</p>
			</>
		);
	}

	return (
		<>
			{ inspectorControls }
			<div { ...blockProps }>
				<InnerBlocks />
			</div>
		</>
	);
}
