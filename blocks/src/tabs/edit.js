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
	Button,
	IconButton,
	TextControl,
	SelectControl,
} from '@wordpress/components';
import {
	useBlockProps,
	InspectorControls,
	ContrastChecker,
	withColors,
	__experimentalPanelColorGradientSettings as PanelColorGradientSettings, // eslint-disable-line
	__experimentalUseGradient as useGradient, // eslint-disable-line
	useInnerBlocksProps,
	InnerBlocks,
} from '@wordpress/block-editor';

/**
 * Internal dependencies
 */
import './editor.scss';

export function Edit( props ) {
	const {
		attributes,
		setAttributes,
		separatorColor,
		tabsBorderColor,
		tabTextColor,
		tabTextHoverColor,
		tabBackgroundColor,
		tabBackgroundHoverColor,
		setSeparatorColor,
		setTabsBorderColor,
		setTabTextColor,
		setTabTextHoverColor,
		setTabBackgroundColor,
		setTabBackgroundHoverColor,
	} = props;

	const {
		tabs,
		tabsAlign,
		tabsSpacing,
		tabsBorderWidth,
		separatorWidth,
		separatorColorValue,
		tabsBorderColorValue,
		tabTextColorValue,
		tabTextHoverColorValue,
		tabBackgroundColorValue,
		tabBackgroundHoverColorValue,
	} = attributes;

	const blockProps = useBlockProps(
		{
			className: 'align-tabs-' + tabsAlign + ' space-tabs-' + tabsSpacing,
		}
	);
	const innerBlocksProps = useInnerBlocksProps( {
		allowedBlocks: [ 'crosswinds-blocks/tab-section' ],
		template: [
			[ 'crosswinds-blocks/tab-section', {} ],
		],
	} );

	const tabsAlignOptions = [
		{
			value: 'horizontal',
			label: __( 'Horizontal', 'crosswinds-blocks' ),
		},
		{
			value: 'vertical',
			label: __( 'Vertical', 'crosswinds-blocks' ),
		},
	];

	const tabsSpacingOptions = [
		{
			value: 'start',
			label: __( 'Start (Top/Left)', 'crosswinds-blocks' ),
		},
		{
			value: 'end',
			label: __( 'End (Bottom/Right)', 'crosswinds-blocks' ),
		},
		{
			value: 'center',
			label: __( 'Center', 'crosswinds-blocks' ),
		},
		{
			value: 'equal',
			label: __( 'Equal', 'crosswinds-blocks' ),
		},
	];

	const handleAddLocation = () => {
		const updatedTabs = [ ...tabs ];
		updatedTabs.push( {
			text: '',
			target: '',
		} );
		setAttributes( { tabs: updatedTabs } );
	};

	const handleRemoveLocation = ( index ) => {
		const updatedTabs = [ ...tabs ];
		updatedTabs.splice( index, 1 );
		setAttributes( { tabs: updatedTabs } );
	};

	const handleTextChange = ( text, index ) => {
		const updatedTabs = [ ...tabs ];
		updatedTabs[ index ].text = text;
		setAttributes( { tabs: updatedTabs } );
	};

	const handleTargetChange = ( target, index ) => {
		const updatedTabs = [ ...tabs ];
		target = target.replace( /\s+/g, '-' ).toLowerCase();
		updatedTabs[ index ].target = target;
		setAttributes( { tabs: updatedTabs } );
	};

	const tabStyles = {
		backgroundColor: tabBackgroundColorValue,
		color: tabTextColorValue,
		borderWidth: tabsBorderWidth,
		borderColor: tabsBorderColorValue,
		borderStyle: 'solid',
	};

	let tabsFields,
		tabsDisplay;

	if ( tabs.length ) {
		tabsFields = tabs.map( ( tab, index ) => {
			return <div key={ index }>
				<TextControl
					className="grf__location-address"
					placeholder=""
					label="Link Text"
					value={ tabs[ index ].text }
					onChange={ ( text ) => handleTextChange( text, index ) }
				/>
				<TextControl
					className="grf__location-address"
					placeholder=""
					label="Link Target"
					value={ tabs[ index ].target }
					onChange={ ( target ) => handleTargetChange( target, index ) }
				/>
				<IconButton
					className="grf__remove-location-address"
					icon="no-alt"
					label="Delete location"
					onClick={ () => handleRemoveLocation( index ) }
				/>
			</div>;
		} );

		tabsDisplay = tabs.map( ( tab, index ) => {
			return <li key={ index } style={ tabStyles }><a href={ '#' + tab.target }>{ tab.text }</a></li>;
		} );
	}

	const inspectorControls = (
		<>
			<InspectorControls>
				<PanelBody title={ __( 'Tabs Settings', 'crosswinds-blocks' ) }>
					{ tabsFields }
					<Button
						onClick={ handleAddLocation.bind( this ) }
					>
						{ __( 'Add Tab', 'crosswinds-blocks' ) }
					</Button>

					<SelectControl
						label={ __( 'Align Tabs', 'crosswinds-blocks' ) }
						value={ tabsAlign }
						options={ tabsAlignOptions }
						onChange={ ( value ) => setAttributes( {
							tabsAlign: value,
						} ) }
					/>

					<SelectControl
						label={ __( 'Tabs Spacing', 'crosswinds-blocks' ) }
						value={ tabsSpacing }
						options={ tabsSpacingOptions }
						onChange={ ( value ) => setAttributes( {
							tabsSpacing: value,
						} ) }
					/>
				</PanelBody>

				<PanelBody title={ __( 'Tabs Styling', 'crosswinds-blocks' ) }>
					<RangeControl
						label={ __( 'Separator width', 'crosswinds-blocks' ) }
						onChange={ ( value ) =>
							setAttributes( { separatorWidth: value } )
						}
						value={ separatorWidth || '' }
						min={ 0 }
						max={ 25 }
						initialPosition={ 1 }
						allowReset={ true }
						resetFallbackValue={ 1 }
					/>

					<RangeControl
						label={ __( 'Tabs Borders width', 'crosswinds-blocks' ) }
						onChange={ ( value ) =>
							setAttributes( { tabsBorderWidth: value } )
						}
						value={ tabsBorderWidth || '' }
						min={ 0 }
						max={ 25 }
						initialPosition={ 1 }
						allowReset={ true }
						resetFallbackValue={ 1 }
					/>

					<PanelColorGradientSettings
						className="outermost-crosswinds-blocks__color-settings"
						title={ __( 'Border Colors', 'crosswinds-blocks' ) }
						initialOpen={ true }
						enableAlpha={ true }
						settings={ [
							{
								colorValue: separatorColor.color || separatorColorValue,
								onColorChange: ( colorValue ) => {
									setSeparatorColor( colorValue );
									setAttributes( {
										separatorColorValue: colorValue,
									} );
								},
								label: __( 'Separator color', 'crosswinds-blocks' ),
							},
							{
								colorValue: tabsBorderColor.color || tabsBorderColorValue,
								onColorChange: ( colorValue ) => {
									setTabsBorderColor( colorValue );
									setAttributes( {
										tabsBorderColorValue: colorValue,
									} );
								},
								label: __( 'Tab borders color', 'crosswinds-blocks' ),
							},
						] }
						__experimentalHasMultipleOrigins={ true }
					>
					</PanelColorGradientSettings>

					<PanelColorGradientSettings
						className="outermost-crosswinds-blocks__color-settings"
						title={ __( 'Tab Colors', 'crosswinds-blocks' ) }
						initialOpen={ true }
						enableAlpha={ true }
						settings={ [
							{
								colorValue: tabTextColor.color || tabTextColorValue,
								onColorChange: ( colorValue ) => {
									setTabTextColor( colorValue );
									setAttributes( {
										tabTextColorValue: colorValue,
									} );
								},
								label: __( 'Text color', 'crosswinds-blocks' ),
							},
							{
								colorValue:
								tabTextHoverColor.color ||
								tabTextHoverColorValue,
								onColorChange: ( colorValue ) => {
									setTabTextHoverColor( colorValue );
									setAttributes( {
										tabTextHoverColorValue: colorValue,
									} );
								},
								label: __( 'Text Hover color', 'crosswinds-blocks' ),
							},
							{
								colorValue: tabBackgroundColor.color || tabBackgroundColorValue,
								onColorChange: ( colorValue ) => {
									setTabBackgroundColor( colorValue );
									setAttributes( {
										tabBackgroundColorValue: colorValue,
									} );
								},
								label: __( 'Background color', 'crosswinds-blocks' ),
							},
							{
								colorValue:
								tabBackgroundHoverColor.color ||
								tabBackgroundHoverColorValue,
								onColorChange: ( colorValue ) => {
									setTabBackgroundHoverColor( colorValue );
									setAttributes( {
										tabBackgroundHoverColorValue: colorValue,
									} );
								},
								label: __( 'Background Hover color', 'crosswinds-blocks' ),
							},
						] }
						__experimentalHasMultipleOrigins={ true }
					>
					</PanelColorGradientSettings>
				</PanelBody>

			</InspectorControls>
		</>
	);

	let tabListStyles;

	if ( 'horizontal' === tabsAlign ) {
		tabListStyles = {
			borderBottomColor: separatorColorValue,
			borderBottomWidth: separatorWidth + 'px',
		};
	} else {
		tabListStyles = {
			borderRightColor: separatorColorValue,
			borderRightWidth: separatorWidth + 'px',
		};
	}

	return (
		<>
			{ inspectorControls }
			<div { ...blockProps }>
				<div className="tabs-list">
					<ul style={ tabListStyles }>
						{ tabsDisplay }
					</ul>
				</div>
				<div className="tabs-container">
					<InnerBlocks
						allowedBlocks={ [ 'crosswinds-blocks/tab-section' ] }
						template={ [
							[ 'crosswinds-blocks/tab-section', {} ],
						] }
					/>
				</div>
			</div>
		</>
	);
}

const tabsColorAttributes = {
	separatorColor: 'separator-color',
	tabsBorderColor: 'tab-border-color',
	tabTextColor: 'tab-text-color',
	tabTextHoverColor: 'tab-text-hover-color',
	tabBackgroundColor: 'tab-background-color',
	tabBackgroundHoverColor: 'tab-background-hover-color',
};

export default withColors( tabsColorAttributes )( Edit );
