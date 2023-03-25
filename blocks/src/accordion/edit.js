/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';
import {
	useInnerBlocksProps,
	useBlockProps,
	InspectorControls,
} from '@wordpress/block-editor';

import {
	PanelBody,
	TextControl,
	SelectControl,
} from '@wordpress/components';

/**
 * Internal dependencies
 */
import './editor.scss';

export function Edit( props ) {
	const {
		setAttributes,
		attributes,
	} = props;

	const {
		panelId,
		panelIcon,
	} = attributes;

	const panelIcons = [
		{
			value: 'plus-minus',
			label: __( 'Plus/Minus', 'crosswinds-blocks' ),
		},
		{
			value: 'arrows',
			label: __( 'Arrows', 'crosswinds-blocks' ),
		},
	];


	const blockProps = useBlockProps();
	const innerBlocksProps = useInnerBlocksProps( blockProps, {
		allowedBlocks: [
			'crosswinds-blocks/accordion-title',
			'crosswinds-blocks/accordion-body',
		],
		template: [
			[ 'crosswinds-blocks/accordion-title', {} ],
			[ 'crosswinds-blocks/accordion-body', {} ],
		],
	} );

	function updatePanelId( value ) {
		value = value.replace( /\s+/g, '-' ).toLowerCase();
		setAttributes( { panelId: value } );
	}

	const inspectorControls = (
		<>
			<InspectorControls>
				<PanelBody title={ __( 'Accordion Settings', 'crosswinds-blocks' ) }>
					<TextControl
						label={ __( 'Panel Id', 'crosswinds-blocks' ) }
						value={ panelId }
						onChange={ ( value ) => updatePanelId( value ) }
					/>

					<SelectControl
						label={ __( 'Icons', 'crosswinds-blocks' ) }
						value={ panelIcon }
						options={ panelIcons }
						onChange={ ( icon ) => setAttributes( {
							panelIcon: icon,
						} ) }
					/>
				</PanelBody>
			</InspectorControls>
		</>
	);

	return (
		<>
			{ inspectorControls }
			<div { ...innerBlocksProps } />
		</>
	);
}

export default Edit;
