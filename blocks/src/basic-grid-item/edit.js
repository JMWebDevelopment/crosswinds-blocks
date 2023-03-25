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

	const { innerLayout } = attributes;

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
				<PanelBody title={ __( 'Social Share Content Settings', 'crosswinds-blocks' ) }>
					<SelectControl
						label={ __( 'Icon Styles', 'crosswinds-blocks' ) }
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

	const blockProps = useBlockProps( {
		className: innerLayout + '-layout',
	} );
	const innerBlocksProps = useInnerBlocksProps( blockProps,
		{
			template: [
				[ 'core/heading', { level: 2, placeholder: __( 'Insert your heading here...', 'crosswinds-blocks' ) } ],
				[ 'core/paragraph', { placeholder: __( 'Write some description text here...', 'crosswinds-blocks' ) } ],
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
