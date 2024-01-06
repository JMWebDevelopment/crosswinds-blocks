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
	ToggleControl,
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

export function Edit() {

	const blockProps = useBlockProps();
	const innerBlocksProps = useInnerBlocksProps( blockProps, {
		allowedBlocks: [ 'crosswinds-blocks/single-post-types-search-results' ],
	} );

	return (
		<>
			<div { ...innerBlocksProps } />
		</>
	);
}

export default Edit;
