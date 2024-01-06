/**
 * External dependencies
 */
import classnames from 'classnames';

/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';
import {
	PanelBody,
	SelectControl,
	RangeControl,
	ComboboxControl,
} from '@wordpress/components';
import {
	useBlockProps,
	useInnerBlocksProps,
	InspectorControls,
} from '@wordpress/block-editor';
import { useSelect } from '@wordpress/data';
import {
	useState,
} from '@wordpress/element';


/**
 * Internal dependencies
 */
import './editor.scss';

export function Edit( props ) {
	const {
		attributes,
		setAttributes,
	} = props;

	const {
		postType,
	} = attributes;

	function getPostTypesList() {
		let options = [];
		options.push( { value: 'all', label: __( 'All Post Types' ) } );
		const postTypes = wp.data.select( 'core' ).getPostTypes( { per_page: -1 } );
		if ( null === postTypes ) {
			return options;
		}
		postTypes.forEach( ( post ) => {
			options.push( { value: post.slug, label: post.name } );
		} );
		return options;
	}

	const [ filteredOptions, setFilteredOptions ] = useState( getPostTypesList() );


	const inspectorControls = (
		<>
			<InspectorControls>
				<PanelBody title={ __( 'Search Filters Settings', 'crosswinds-blocks' ) }>
					<>
						<ComboboxControl
							label={ __( 'Select a Post Type', 'crosswinds-blocks' ) }
							value={ postType }
							onChange={ ( name ) => setAttributes( { postType: name } ) }
							options={ getPostTypesList() }
							onFilterValueChange={ ( inputValue ) =>
								setFilteredOptions(
									getPostTypesList().filter( ( option ) =>
										option.label
											.toLowerCase()
											.startsWith( inputValue.toLowerCase() )
									)
								)
							}
						/>
					</>
				</PanelBody>
			</InspectorControls>
		</>
	);

	const blockProps = useBlockProps();
	const innerBlocksProps = useInnerBlocksProps( blockProps,
		{
			template: [
				[ 'core/query', { query: { inherit: true } } ],
			],
		},
	);

	return (
		<>
			{ inspectorControls }
			<div { ...innerBlocksProps } />
		</>
	);
}

export default Edit;
