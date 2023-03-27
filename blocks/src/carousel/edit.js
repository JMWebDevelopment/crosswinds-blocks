/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-i18n/
 */
import { __ } from '@wordpress/i18n';
import {
	useInnerBlocksProps,
	useBlockProps,
	InspectorControls,
	ContrastChecker,
	withColors,
	__experimentalPanelColorGradientSettings as PanelColorGradientSettings, // eslint-disable-line
	__experimentalUseGradient as useGradient, // eslint-disable-line
} from '@wordpress/block-editor';
import {
	PanelBody,
	ToggleControl,
	SelectControl,
} from '@wordpress/components';

/**
* External dependencies
*/
import { MultiSelectControl } from '@codeamp/block-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
	faAngleLeft,
	faAngleRight,
} from '@fortawesome/free-solid-svg-icons';

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
		setArrowsColor,
		setArrowsBackgroundColor,
		setArrowsHoverColor,
		setArrowsHoverBackgroundColor,
		arrowsColor,
		arrowsBackgroundColor,
		arrowsHoverColor,
		arrowsHoverBackgroundColor,
	} = props;

	const {
		arrowsLocation,
		showDots,
		arrowsColorValue,
		arrowsBackgroundColorValue,
		arrowsHoverColorValue,
		arrowsHoverBackgroundColorValue,
	} = attributes;

	const arrowsLocations = [
		{
			value: 'bottom-right',
			label: __( 'Bottom Right', 'crosswinds-blocks' ),
		},
		{
			value: 'bottom-left',
			label: __( 'Bottom Left', 'crosswinds-blocks' ),
		},
		{
			value: 'top-right',
			label: __( 'Top Right', 'crosswinds-blocks' ),
		},
		{
			value: 'top-left',
			label: __( 'Top Left', 'crosswinds-blocks' ),
		},
		{
			value: 'sides',
			label: __( 'Sides', 'crosswinds-blocks' ),
		},
	];

	const inspectorControls = (
		<>
			<InspectorControls>
				<PanelBody title={ __( 'Slider Settings', 'crosswinds-blocks' ) }>
					<SelectControl
						label={ __( 'Arrows Locations', 'crosswinds-blocks' ) }
						value={ arrowsLocation }
						options={ arrowsLocations }
						onChange={ ( style ) => setAttributes( {
							arrowsLocation: style,
						} ) }
					/>

					<ToggleControl
						label="Fixed Background"
						checked={ showDots }
						onChange={ ( value ) => setAttributes( {
							showDots: value,
						} ) }
					/>
				</PanelBody>
				<PanelBody title={ __( 'Arrow Settings', 'crosswinds-blocks' ) }>
					<PanelColorGradientSettings
						className="outermost-crosswinds-blocks__color-settings"
						title={ __( 'Icon Color', 'crosswinds-blocks' ) }
						initialOpen={ true }
						enableAlpha={ true }
						settings={ [
							{
								colorValue: arrowsColor.color || arrowsColorValue,
								onColorChange: ( colorValue ) => {
									setArrowsColor( colorValue );
									setAttributes( {
										arrowsColorValue: colorValue,
									} );
								},
								label: __( 'Arrows color', 'crosswinds-blocks' ),
							},
							{
								colorValue:
								arrowsHoverColor.color ||
								arrowsHoverColorValue,
								onColorChange: ( colorValue ) => {
									setArrowsHoverColor( colorValue );
									setAttributes( {
										arrowsHoverColorValue: colorValue,
									} );
								},
								label: __( 'Arrows Hover color', 'crosswinds-blocks' ),
							},
						] }
						__experimentalHasMultipleOrigins={ true }
					>
					</PanelColorGradientSettings>
					<PanelColorGradientSettings
						className="outermost-crosswinds-blocks__color-settings"
						title={ __( 'Icon Background Color', 'crosswinds-blocks' ) }
						initialOpen={ true }
						enableAlpha={ true }
						settings={ [
							{
								colorValue: arrowsBackgroundColor.color || arrowsBackgroundColorValue,
								onColorChange: ( colorValue ) => {
									setArrowsBackgroundColor( colorValue );
									setAttributes( {
										arrowsBackgroundColorValue: colorValue,
									} );
								},
								label: __( 'Arrows Background color', 'crosswinds-blocks' ),
							},
							{
								colorValue:
								arrowsHoverBackgroundColor.color ||
								arrowsHoverBackgroundColorValue,
								onColorChange: ( colorValue ) => {
									setArrowsHoverBackgroundColor( colorValue );
									setAttributes( {
										arrowsHoverBackgroundColorValue: colorValue,
									} );
								},
								label: __( 'Arrows Background Hover color', 'crosswinds-blocks' ),
							},
						] }
						__experimentalHasMultipleOrigins={ true }
					>
					</PanelColorGradientSettings>
				</PanelBody>
			</InspectorControls>
		</>
	);

	let slideInner;

	if ( 'sides' === arrowsLocation ) {
		slideInner = (
			<>
				<div className="slide-previous-button">
					<FontAwesomeIcon icon={ faAngleLeft } />
				</div>
				<div className="slides"></div>
				<div className="slide-next-button">
					<FontAwesomeIcon icon={ faAngleRight } />
				</div>
			</>
		);
	} else {
		slideInner = (
			<>
				<div className="slide-buttons">
					<div className="slide-previous-button">
						<FontAwesomeIcon icon={ faAngleLeft } />
					</div>
					<div className="slide-next-button">
						<FontAwesomeIcon icon={ faAngleRight } />
					</div>
				</div>
				<div className="slides"></div>
			</>
		);
	}

	return (
		<>
			{ inspectorControls }
			<div { ...useBlockProps() }>
				{ slideInner }
			</div>
		</>
	);
}
