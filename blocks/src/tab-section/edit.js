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
	TextControl,
} from '@wordpress/components';
import {
	useBlockProps,
	InspectorControls,
	ContrastChecker,
	withColors,
	__experimentalPanelColorGradientSettings as PanelColorGradientSettings, // eslint-disable-line
	__experimentalUseGradient as useGradient, // eslint-disable-line
	useInnerBlocksProps,
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
		tabId,
	} = attributes;

	const blockProps = useBlockProps();
	const innerBlocksProps = useInnerBlocksProps( blockProps, {
		template: [
			[ 'core/group', {} ],
		],
	} );

	function updateTabId( value ) {
		value = value.replace( /\s+/g, '-' ).toLowerCase();
		setAttributes( { tabId: value } );
	}

	const inspectorControls = (
		<>
			<InspectorControls>
				<PanelBody title={ __( 'Tab Settings', 'crosswinds-blocks' ) }>
					<TextControl
						label={ __( 'Tab Id', 'crosswinds-blocks' ) }
						value={ tabId }
						onChange={ ( value ) => updateTabId( value ) }
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
