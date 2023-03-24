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
* External dependencies
*/
import { MultiSelectControl } from '@codeamp/block-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import {
	faFacebookF,
	faTwitter,
	faMastodon,
	faReddit,
	faPinterest
} from '@fortawesome/free-brands-svg-icons';

/**
 * Internal dependencies
 */
import { socialIconsSVG } from './icons';
import './editor.scss';

export function Edit( props ) {
	const {
		attributes,
		setAttributes,
		setIconBackgroundColor,
		setIconHoverBackgroundColor,
		setIconHoverColor,
		setIconColor,
		iconBackgroundColor,
		iconHoverBackgroundColor,
		iconHoverColor,
		iconColor,
	} = props;

	const {
		socialIcons,
		iconStyle,
		iconsDirection,
		iconsStretch,
		iconBackgroundColorValue,
		iconHoverBackgroundColorValue,
		iconHoverColorValue,
		iconColorValue,
	} = attributes;
	const { gradientClass, gradientValue, setGradient } = useGradient();

	const socialIconsArray = [
		{
			value: 'facebook',
			label: __( 'Facebook', 'crosswinds-blocks' ),
		},
		{
			value: 'twitter',
			label: __( 'Twitter', 'crosswinds-blocks' ),
		},
		{
			value: 'mastodon',
			label: __( 'Mastodon', 'crosswinds-blocks' ),
		},
		{
			value: 'reddit',
			label: __( 'Reddit', 'crosswinds-blocks' ),
		},
		{
			value: 'pinterest',
			label: __( 'Pinterest', 'crosswinds-blocks' ),
		},
		{
			value: 'email',
			label: __( 'Email', 'crosswinds-blocks' ),
		},
	];

	const iconsStylesArray = [
		{
			value: 'show-icon-label',
			label: __( 'Show Icons and Labels', 'crosswinds-blocks' ),
		},
		{
			value: 'show-icon',
			label: __( 'Show Icons Only', 'crosswinds-blocks' ),
		},
		{
			value: 'show-label',
			label: __( 'Show Labels Only', 'crosswinds-blocks' ),
		},
	];

	const iconsDirectionArray = [
		{
			value: 'horizontal',
			label: __( 'Horizontal', 'crosswinds-blocks' ),
		},
		{
			value: 'vertical',
			label: __( 'Vertical', 'crosswinds-blocks' ),
		},
	];

	const iconsStretchArray = [
		{
			value: 'full-width',
			label: __( 'Full Width', 'crosswinds-blocks' ),
		},
		{
			value: 'auto-width',
			label: __( 'Auto Width', 'crosswinds-blocks' ),
		},
	];

	const socialSites = [
		{
			site: 'facebook',
			label: __( 'Facebook', 'crosswinds-blocks' ),
			icon: faFacebookF,
		},
		{
			site: 'twitter',
			label: __( 'Twitter', 'crosswinds-blocks' ),
			icon: faTwitter,
		},
		{
			site: 'mastodon',
			label: __( 'Mastodon', 'crosswinds-blocks' ),
			icon: faMastodon,
		},
		{
			site: 'reddit',
			label: __( 'Reddit', 'crosswinds-blocks' ),
			icon: faReddit,
		},
		{
			site: 'pinterest',
			label: __( 'Pinterest', 'crosswinds-blocks' ),
			icon: faPinterest,
		},
		{
			site: 'email',
			label: __( 'Email', 'crosswinds-blocks' ),
			icon: faEnvelope,
		},
	];

	const inspectorControls = (
		<>
			<InspectorControls>
				<PanelBody title={ __( 'Social Share Content Settings', 'crosswinds-blocks' ) }>
					<MultiSelectControl
						label={ __( 'Social Icons', '' ) }
						value={ socialIcons }
						onChange={ ( selectedOptions ) => props.setAttributes( { socialIcons: selectedOptions } ) }
						options={ socialIconsArray }
					/>
					<SelectControl
						label={ __( 'Icon Styles', 'crosswinds-blocks' ) }
						value={ iconStyle }
						options={ iconsStylesArray }
						onChange={ ( style ) => setAttributes( {
							iconStyle: style,
						} ) }
					/>
					<SelectControl
						label={ __( 'Icons Direction', 'crosswinds-blocks' ) }
						value={ iconsDirection }
						options={ iconsDirectionArray }
						onChange={ ( style ) => setAttributes( {
							iconsDirection: style,
						} ) }
					/>
					<SelectControl
						label={ __( 'Icons Stretch', 'crosswinds-blocks' ) }
						value={ iconsStretch }
						options={ iconsStretchArray }
						onChange={ ( style ) => setAttributes( {
							iconsStretch: style,
						} ) }
					/>
				</PanelBody>
				<div>
					<PanelColorGradientSettings
						className="outermost-crosswinds-blocks__color-settings"
						title={ __( 'Icon Color', 'crosswinds-blocks' ) }
						initialOpen={ true }
						enableAlpha={ true }
						settings={ [
							{
								colorValue: iconColor.color || iconColorValue,
								onColorChange: ( colorValue ) => {
									setIconColor( colorValue );
									setAttributes( {
										iconColorValue: colorValue,
									} );
								},
								gradientValue,
								onGradientChange: setGradient,
								label: __( 'Icon color', 'crosswinds-blocks' ),
							},
							{
								colorValue:
								iconHoverColor.color ||
								iconHoverColorValue,
								onColorChange: ( colorValue ) => {
									setIconHoverColor( colorValue );
									setAttributes( {
										iconHoverColorValue: colorValue,
									} );
								},
								label: __( 'Icon Hover color', 'crosswinds-blocks' ),
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
								colorValue: iconBackgroundColor.color || iconBackgroundColorValue,
								onColorChange: ( colorValue ) => {
									setIconBackgroundColor( colorValue );
									setAttributes( {
										iconBackgroundColorValue: colorValue,
									} );
								},
								gradientValue,
								onGradientChange: setGradient,
								label: __( 'Icon Background color', 'crosswinds-blocks' ),
							},
							{
								colorValue:
								iconHoverBackgroundColor.color ||
								iconHoverBackgroundColorValue,
								onColorChange: ( colorValue ) => {
									setIconHoverBackgroundColor( colorValue );
									setAttributes( {
										iconHoverBackgroundColorValue: colorValue,
									} );
								},
								label: __( 'Icon Background Hover color', 'crosswinds-blocks' ),
							},
						] }
						__experimentalHasMultipleOrigins={ true }
					>
					</PanelColorGradientSettings>
				</div>
			</InspectorControls>
		</>
	);

	const socialIconsDisplay = socialSites.map( ( site ) => {
		if ( socialIcons.includes( site.site ) ) {
			if ( 'show-label-icon' === iconStyle ) {
				return (
					<div className={ 'social-icon' }>
						<span><FontAwesomeIcon icon={ site.icon } /> { site.label }</span>
					</div>
				);
			} else if ( 'show-icon' === iconStyle ) {
				return (
					<div className={ 'social-icon' }>
						<span><FontAwesomeIcon icon={ site.icon } /></span>
					</div>
				);
			} else {
				return (
					<div className={ 'social-icon' }>
						<span>{ site.label }</span>
					</div>
				);
			}
		}
	} );

	/*const sliderBackgroundStyles = {
		background: gradientValue,
		backgroundColor: sliderBackgroundColorValue,
	};

	const sliderClasses = classnames( 'slider', {
		'has-slider-color':
			sliderColor.color ||
			sliderColorValue,
		[ `has-${ sliderColor.slug }-background-color` ]: sliderColor.slug,
	} );

	const sliderStyles = {
		backgroundColor: sliderColorValue,
	};*/

	return (
		<>
			{ inspectorControls }
			<div { ...useBlockProps() }>
				{ socialIconsDisplay }
			</div>
		</>
	);
}

const sliderColorAttributes = {
	iconColor: 'icon-color',
	iconBackgroundColor: 'icon-background-color',
	iconHoverColor: 'icon-hovercolor',
	iconHoverBackgroundColor: 'icon-hover-background-color',
};

export default withColors( sliderColorAttributes )( Edit );
