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
import ServerSideRender from '@wordpress/server-side-render';

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
		fieldName,
		fieldType,
	} = attributes;

	let dateTimeControl;

	const inspectorControls = (
		<>
			<InspectorControls>
				<PanelBody title={ __( 'ACF Field Block Settings', 'crosswinds-blocks' ) }>

					<TextControl
						label={ __( 'Field Name', 'crosswinds-blocks' ) }
						value={ fieldName }
						onChange={ ( value ) => setAttributes( { fieldName: value } ) }
					/>

					<SelectControl
						label="Size"
						value={ fieldType }
						options={ [
							{ label: 'Text', value: 'text' },
							{ label: 'Text Area', value: 'text-area' },
							{ label: 'Email', value: 'email' },
							{ label: 'Number', value: 'number' },
							{ label: 'URL', value: 'url' },
							{ label: 'Select', value: 'select' },
							{ label: 'Image', value: 'image' },
							{ label: 'Oembed', value: 'oembed' },
							{ label: 'Date/Time', value: 'date-time' },
						] }
						onChange={ ( value ) => setAttributes( { fieldType: value } ) }
					/>

					{ dateTimeControl }
				</PanelBody>
			</InspectorControls>
		</>
	);

	return (
		<>
			{ inspectorControls }
			<div { ...useBlockProps() }>
				<ServerSideRender
					block="crosswinds-blocks/acf-block"
					attributes={ {
						fieldName: fieldName,
						fieldType: fieldType,
					} }
				/>
			</div>

		</>
	);
}
