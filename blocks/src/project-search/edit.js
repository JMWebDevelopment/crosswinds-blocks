/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-i18n/
 */
import { __ } from '@wordpress/i18n';

/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-block-editor/#useblockprops
 */
import {
	useBlockProps,
	InspectorControls,
} from '@wordpress/block-editor';
import {
	SelectControl,
	PanelBody,
	TextControl,
	DatePicker,
	ContrastChecker,
	withColors,
	__experimentalPanelColorGradientSettings as PanelColorGradientSettings, // eslint-disable-line
	__experimentalUseGradient as useGradient, // eslint-disable-line
} from '@wordpress/components';

/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * Those files can contain any CSS code that gets applied to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */
import './editor.scss';

/**
 * The edit function describes the structure of your block in the context of the
 * editor. This represents what the editor will render when the block is used.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/#edit
 *
 * @return {WPElement} Element to render.
 */
export default function Edit( props ) {
	const {
		setAttributes,
		attributes,
	} = props;
	const {
		label,
	} = attributes;

	const inspector = (
		<>
			<InspectorControls>
				<PanelBody title={ __( 'Search Settings', 'crosswinds-blocks' ) }>
					<TextControl
						label={ __( 'Label', 'crosswinds-blocks' ) }
						value={ label }
						onChange={ ( value ) => setAttributes( {
							label: value,
						} ) }
					/>
				</PanelBody>

			</InspectorControls>
		</>
	);

	return (
		<>
			{ inspector }
			<div { ...useBlockProps() }>
				<label htmlFor="project-search">{ label }</label>
				<input type="text" id="project-search" />
			</div>
		</>
	);
}
