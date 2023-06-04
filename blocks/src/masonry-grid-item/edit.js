/**
 * External dependencies
 */
import classnames from 'classnames';

/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';
import {
	PanelBody,
	SelectControl,
} from '@wordpress/components';
import {
	useBlockProps,
	useInnerBlocksProps,
	InspectorControls,
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
		innerLayout,
	} = attributes;

	const innerLayoutOptions = [
		{
			value: 'normal',
			label: __( 'Normal Spacing', 'crosswinds-blocks' ),
		},
		{
			value: 'equal',
			label: __( 'Equal Spacing', 'crosswinds-blocks' ),
		},
		{
			value: 'center',
			label: __( 'Center Align', 'crosswinds-blocks' ),
		},
		{
			value: 'bottom',
			label: __( 'All Bottom', 'crosswinds-blocks' ),
		},
		{
			value: 'last-bottom',
			label: __( 'Last Item at Bottom', 'crosswinds-blocks' ),
		},
	];

	const inspectorControls = (
		<>
			<InspectorControls>
				<PanelBody title={ __( 'Grid Item Settings', 'crosswinds-blocks' ) }>
					<SelectControl
						label={ __( 'Inner Layout', 'crosswinds-blocks' ) }
						value={ innerLayout }
						options={ innerLayoutOptions }
						onChange={ ( style ) => setAttributes( {
							innerLayout: style,
						} ) }
					/>
				</PanelBody>
			</InspectorControls>
		</>
	);

	const gridItemClasses = classnames(
		`${ innerLayout }-layout`
	);

	const blockProps = useBlockProps( {
		className: gridItemClasses,
	} );
	const innerBlocksProps = useInnerBlocksProps( blockProps,
		{
			template: [
				[ 'core/group', { cbUseFlex: true, cbFillHeight: true, cbInnerLayout: 'normal' } ],
			],
		},
	);

	return (
		<>
			{ inspectorControls }
			<div { ...innerBlocksProps } />
		</>
	);
}

export default Edit;
