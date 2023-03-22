/**
 * External dependencies
 */
import classnames from 'classnames';

/**
 * WordPress dependencies
 */
import { useBlockProps } from '@wordpress/block-editor';

export default function save( props ) {
	const {
		sliderBackgroundColor,
		sliderColor,
		sliderWidth,
		sliderHeight,
		sliderBackgroundColorValue,
		sliderColorValue,
		gradient,
		customGradient,
	} = props.attributes;

	const sliderBackgroundClasses = classnames( 'slider-container', {
		'has-slider-background-color':
			sliderBackgroundColor ||
			sliderBackgroundColorValue ||
			gradient ||
			customGradient,
		[ `has-${ sliderBackgroundColor }-background-color` ]: sliderBackgroundColor,
	} );

	const sliderWidthPercent = `${ sliderWidth }%`;
	const sliderHeightPixels = `${ sliderHeight }px`;

	const sliderBackgroundStyles = {
		background: ! gradient ? customGradient : undefined,
		backgroundColor: sliderBackgroundColorValue,
		height: sliderHeightPixels,
	};

	const sliderClasses = classnames( 'slider', {
		'has-slider-color': sliderColorValue,
		[ `has-${ sliderColor }-background-color` ]: sliderColor,
	} );

	const sliderStyles = {
		width: sliderWidthPercent,
		height: sliderHeightPixels,
		backgroundColor: sliderColorValue,
	};

	return (
		<div { ...useBlockProps.save() }>
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
	);
}
