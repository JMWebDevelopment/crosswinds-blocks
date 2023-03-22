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
	PanelBody
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

export function Edit( props ) {
	const {
		attributes,
		setAttributes,
		setSliderColor,
		setSliderBackgroundColor,
		sliderBackgroundColor,
		sliderColor,
	} = props;

	const {
		sliderWidth,
		sliderHeight,
		sliderBackgroundColorValue,
		sliderColorValue,
	} = attributes;
	const { gradientClass, gradientValue, setGradient } = useGradient();

	const inspectorControls = (
		<>
			<InspectorControls>
				<PanelBody title={ __( 'Skill Slider Settings', 'crosswinds-blocks' ) }>
					<div className="slider-settings__width">
						<RangeControl
							label={ __( 'Slider width', 'crosswinds-blocks' ) }
							onChange={ ( value ) =>
								setAttributes( { sliderWidth: value } )
							}
							value={ sliderWidth || '' }
							min={ 1 }
							max={ 100 }
							initialPosition={ 50 }
							allowReset={ true }
							resetFallbackValue={ 50 }
						/>
					</div>

					<div className="slider-settings__height">
						<RangeControl
							label={ __( 'Slider height', 'crosswinds-blocks' ) }
							onChange={ ( value ) =>
								setAttributes( { sliderHeight: value } )
							}
							value={ sliderHeight || '' }
							min={ 1 }
							max={ 100 }
							initialPosition={ 5 }
							allowReset={ true }
							resetFallbackValue={ 5 }
						/>
					</div>
				</PanelBody>
				<div>
					<PanelColorGradientSettings
						className="outermost-crosswinds-blocks__color-settings"
						title={ __( 'Color', 'crosswinds-blocks' ) }
						initialOpen={ true }
						enableAlpha={ true }
						settings={ [
							{
								colorValue: sliderColor.color || sliderColorValue,
								onColorChange: ( colorValue ) => {
									setSliderColor( colorValue );
									setAttributes( {
										sliderColorValue: colorValue,
									} );
								},
								gradientValue,
								onGradientChange: setGradient,
								label: __( 'Slider color', 'crosswinds-blocks' ),
							},
							{
								colorValue:
									sliderBackgroundColor.color ||
									sliderBackgroundColorValue,
								onColorChange: ( colorValue ) => {
									setSliderBackgroundColor( colorValue );
									setAttributes( {
										sliderBackgroundColorValue: colorValue,
									} );
								},
								label: __( 'Background color', 'crosswinds-blocks' ),
							},
						] }
						__experimentalHasMultipleOrigins={ true }
					>
					</PanelColorGradientSettings>
				</div>
			</InspectorControls>
		</>
	);

	const sliderBackgroundClasses = classnames( 'slider-container', {
		'has-background-gradient': gradientValue,
		[ gradientClass ]: gradientClass,
		'has-slider-background-color':
			sliderBackgroundColor.color ||
			sliderBackgroundColorValue ||
			gradientValue,
		[ `has-${ sliderBackgroundColor.slug }-background-color` ]: sliderBackgroundColor.slug,
	} );

	const sliderWidthPercent = `${ sliderWidth }%`;
	const sliderHeightPixels = `${ sliderHeight }px`;

	const sliderBackgroundStyles = {
		background: gradientValue,
		backgroundColor: sliderBackgroundColorValue,
		height: sliderHeightPixels,
	};

	const sliderClasses = classnames( 'slider', {
		'has-slider-color':
			sliderColor.color ||
			sliderColorValue,
		[ `has-${ sliderColor.slug }-background-color` ]: sliderColor.slug,
	} );

	const sliderStyles = {
		width: sliderWidthPercent,
		height: sliderHeightPixels,
		backgroundColor: sliderColorValue,
	};

	return (
		<>
			{ inspectorControls }
			<div { ...useBlockProps() }>
				<div
					className={ sliderBackgroundClasses }
					style={ sliderBackgroundStyles }
				>
					<div
						className={ sliderClasses }
						style={ sliderStyles }
					>
					</div>
				</div>
			</div>
		</>
	);
}

const sliderColorAttributes = {
	sliderColor: 'slider-color',
	sliderBackgroundColor: 'slider-background-color',
};

export default withColors( sliderColorAttributes )( Edit );
