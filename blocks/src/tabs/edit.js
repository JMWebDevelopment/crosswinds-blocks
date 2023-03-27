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
	} = props;

	const {
		tabs,
		tabsAlign,
		tabsSpacing,
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
			return <li key={ index }><a href={ '#' + tab.target }>{ tab.text }</a></li>;
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

			</InspectorControls>
		</>
	);

	return (
		<>
			{ inspectorControls }
			<div { ...blockProps }>
				<div className="tabs-list">
					<ul>
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

export default Edit;
