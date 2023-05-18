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
	TextControl,
	RangeControl,
	__experimentalNumberControl as NumberControl
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
		addressLineOne,
		addressLineTwo,
		city,
		stateProvince,
		country,
		zipCode,
		mapContainerSize,
		mapHeight,
	} = attributes;

	let heightControls;
	let mapStyles;

	if ( 'set-height' === mapContainerSize ) {
		heightControls = (
			<NumberControl
				label={ __( 'Map Height', 'crosswinds-blocks' ) }
				onChange={ ( value ) => setAttributes( { mapHeight: value } ) }
				value={ mapHeight }
			/>
		);
		mapStyles = {
			height: mapHeight + 'px',
		};
	} else {
		heightControls = '';
		mapStyles = '';
	}

	const inspectorControls = (
		<>
			<InspectorControls>
				<PanelBody title={ __( 'Google Maps Settings', 'crosswinds-blocks' ) }>

					<TextControl
						label={ __( 'Address Line One', 'crosswinds-blocks' ) }
						value={ addressLineOne }
						onChange={ ( value ) => setAttributes( { addressLineOne: value } ) }
					/>

					<TextControl
						label={ __( 'Address Line Two', 'crosswinds-blocks' ) }
						value={ addressLineTwo }
						onChange={ ( value ) => setAttributes( { addressLineTwo: value } ) }
					/>

					<TextControl
						label={ __( 'City', 'crosswinds-blocks' ) }
						value={ city }
						onChange={ ( value ) => setAttributes( { city: value } ) }
					/>

					<TextControl
						label={ __( 'State/Province', 'crosswinds-blocks' ) }
						value={ stateProvince }
						onChange={ ( value ) => setAttributes( { stateProvince: value } ) }
					/>

					<TextControl
						label={ __( 'Country', 'crosswinds-blocks' ) }
						value={ country }
						onChange={ ( value ) => setAttributes( { country: value } ) }
					/>

					<TextControl
						label={ __( 'ZIP Code', 'crosswinds-blocks' ) }
						value={ zipCode }
						onChange={ ( value ) => setAttributes( { zipCode: value } ) }
					/>

					<SelectControl
						label="Size"
						value={ mapContainerSize }
						options={ [
							{ label: 'Specific Height', value: 'set-height' },
							{ label: 'Fill Parent Container', value: 'fill-parent-container' },
						] }
						onChange={ ( value ) => setAttributes( { mapContainerSize: value } ) }
					/>

					{ heightControls }
				</PanelBody>
			</InspectorControls>
		</>
	);

	return (
		<>
			{ inspectorControls }
			<div { ...useBlockProps(
				{
					style: mapStyles,
					className: 'map-block-' + mapContainerSize,
				}
			) }>
				<img src={ '/wp-content/plugins/crosswinds-blocks/admin/images/placeholder-map.jpg' } alt={ __( 'Placeholder Google Map', 'crosswinds-blocks' ) } />
			</div>
		</>
	);
}
