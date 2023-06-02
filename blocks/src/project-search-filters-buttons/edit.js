/**
 * External dependencies
 */
import classnames from 'classnames';

/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';
import {
	RangeControl,
	PanelBody,
	SelectControl,
} from '@wordpress/components';
import {
	useBlockProps,
	InspectorControls,
	ContrastChecker,
	withColors,
	__experimentalPanelColorGradientSettings as PanelColorGradientSettings, // eslint-disable-line
	__experimentalUseGradient as useGradient, // eslint-disable-line
} from '@wordpress/block-editor';

/**
 * Internal dependencies
 */
import './editor.scss';
import classNames from 'classnames';

export function Edit( props ) {

	const {
		attributes,
		setAttributes,
		setClearBackgroundColor,
		setClearHoverBackgroundColor,
		setSubmitHoverBackgroundColor,
		setSubmitBackgroundColor,
		clearBackgroundColor,
		clearHoverBackgroundColor,
		submitBackgroundColor,
		submitHoverBackgroundColor,
	} = props;

	const {
		clearBackgroundColorValue,
		clearHoverBackgroundColorValue,
		submitHoverBackgroundColorValue,
		submitBackgroundColorValue,
	} = attributes;

	const inspectorControls = (
		<>
			<InspectorControls>
				<div>
					<PanelColorGradientSettings
						className="outermost-crosswinds-blocks__color-settings"
						title={ __( 'Clear Background Color', 'crosswinds-blocks' ) }
						initialOpen={ true }
						enableAlpha={ true }
						settings={ [
							{
								colorValue: clearBackgroundColor.color || clearBackgroundColorValue,
								onColorChange: ( colorValue ) => {
									setClearBackgroundColor( colorValue );
									setAttributes( {
										clearBackgroundColorValue: colorValue,
									} );
								},
								label: __( 'Clear Background color', 'crosswinds-blocks' ),
							},
						] }
						__experimentalHasMultipleOrigins={ true }
					>
					</PanelColorGradientSettings>
					<PanelColorGradientSettings
						className="outermost-crosswinds-blocks__color-settings"
						title={ __( 'Submit Background Color', 'crosswinds-blocks' ) }
						initialOpen={ true }
						enableAlpha={ true }
						settings={ [
							{
								colorValue: submitBackgroundColor.color || submitBackgroundColorValue,
								onColorChange: ( colorValue ) => {
									setSubmitBackgroundColor( colorValue );
									setAttributes( {
										submitBackgroundColorValue: colorValue,
									} );
								},
								label: __( 'Submit Background color', 'crosswinds-blocks' ),
							},
						] }
						__experimentalHasMultipleOrigins={ true }
					>
					</PanelColorGradientSettings>
				</div>
			</InspectorControls>
		</>
	);
	const clearClasses = classnames(
		`has-${ clearBackgroundColor.slug }-background-color`,
	);

	const submitClasses = classnames(
		`has-${ submitBackgroundColor.slug }-background-color`,
	);

	return (
		<>
			{ inspectorControls }
			<div { ...useBlockProps() }>
				<input className={ clearClasses } type="submit" value={ __( 'Clear', 'crosswinds-blocks' ) } />
				<input className={ submitClasses } type="submit" value={ __( 'Search', 'crosswinds-blocks' ) } />
			</div>
		</>
	);
}

const buttonColorAttributes = {
	clearBackgroundColor: 'clear-color',
	submitBackgroundColor: 'submit-color',
};

export default withColors( buttonColorAttributes )( Edit );
