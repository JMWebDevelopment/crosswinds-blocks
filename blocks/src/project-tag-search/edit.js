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
export default function Edit( props ) {
	const {
		setAttributes,
		attributes,
	} = props;
	const {
		label,
	} = attributes;
	const term = 'project_tag';

	let termsList = [];

	termsList = useSelect(
		( select ) => {
			return select( 'core' ).getEntityRecords( 'taxonomy', term );
		},
		[]
	);

	let options = [];

	if ( null !== termsList ) {
		options = termsList.map( ( singleTerm ) => (
			<option key={ singleTerm.id }>{ singleTerm.name }</option>
		) );
	}

	const inspector = (
		<>
			<InspectorControls>
				<PanelBody title={ __( 'Category Search Settings', 'crosswinds-blocks' ) }>
					<TextControl
						label={ __( 'Label', 'crosswinds-blocks' ) }
						value={ label }
						onChange={ ( value ) => setAttributes( {
							label: value,
						} ) }
					/>
				</PanelBody>

			</InspectorControls>
		</>
	);

	return (
		<>
			{ inspector }
			<div { ...useBlockProps() }>
				<label htmlFor="project-tag-search">{ label }</label>
				<select id="project-tag-search">
					{ options }
				</select>
			</div>
		</>
	);
}
