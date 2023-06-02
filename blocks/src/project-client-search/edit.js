/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';
import {
	useBlockProps,
	InspectorControls,
} from '@wordpress/block-editor';
import {
	SelectControl,
	PanelBody,
	TextControl,
	DatePicker,
	ContrastChecker,
	withColors,
	__experimentalPanelColorGradientSettings as PanelColorGradientSettings, // eslint-disable-line
	__experimentalUseGradient as useGradient, // eslint-disable-line
} from '@wordpress/components';
import { useSelect } from '@wordpress/data';
import {
	useState,
} from '@wordpress/element';
import { useEntityProp, store as coreStore } from '@wordpress/core-data';
import { dateI18n, getSettings as getDateSettings } from '@wordpress/date';

/**
 * Internal dependencies
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
export default function Edit() {
	return (
		<div { ...useBlockProps() }>
			<label for="project-client-search">{ __( 'Select a Client', 'crosswinds-blocks' ) }</label>
			<select>
				<option>{ __( 'Clients will appear on the front end', 'crosswinds-blocks' ) }</option>
			</select>
		</div>
	);
}
