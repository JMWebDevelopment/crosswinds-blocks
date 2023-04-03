/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';
import {
	useBlockProps,
	InspectorControls,
} from '@wordpress/block-editor';
import {
	PanelBody,
	SelectControl,
	TextControl,
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
		copyrightType,
		copyrightText,
	} = attributes;

	const currentYear = new Date().getFullYear();

	let innerText;

	if ( 'icon-text' === copyrightType ) {
		innerText = '\u00A9 ' + copyrightText + ' ' + currentYear;
	} else if ( 'icon-only' === copyrightType ) {
		innerText = '\u00A9 ' + currentYear;
	} else {
		innerText = copyrightText + ' ' + currentYear;
	}

	const copyrightTypeOptions = [
		{
			value: 'icon-text',
			label: __( 'Icon and Text', 'crosswinds-blocks' ),
		},
		{
			value: 'icon-only',
			label: __( 'Icon Only', 'crosswinds-blocks' ),
		},
		{
			value: 'text-only',
			label: __( 'Text Only', 'crosswinds-blocks' ),
		},
	];

	const inspectorControls = (
		<>
			<InspectorControls>
				<PanelBody title={ __( 'Copyright Settings', 'crosswinds-blocks' ) }>
					<SelectControl
						label={ __( 'Copyright Type', 'crosswinds-blocks' ) }
						value={ copyrightType }
						options={ copyrightTypeOptions }
						onChange={ ( option ) => setAttributes( {
							copyrightType: option,
						} ) }
					/>

					<TextControl
						label={ __( 'Tab Id', 'crosswinds-blocks' ) }
						value={ copyrightText }
						onChange={ ( value ) => setAttributes( {
							copyrightText: value,
						} ) }
					/>
				</PanelBody>
			</InspectorControls>
		</>
	);

	return (
		<>
			{ inspectorControls }
			<p { ...useBlockProps() }>
				{ innerText }
			</p>
		</>
	);
}
