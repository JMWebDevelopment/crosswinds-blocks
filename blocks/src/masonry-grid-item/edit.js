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
		context,
		itemSameGap,
		itemGap,
		itemRowGap,
	} = props;

	const {
		innerLayout,
	} = attributes;

	const {
		gridRowGap,
		gridSameGap,
		gridGap,
	} = context;

	setAttributes( {
		itemRowGap: gridRowGap,
		itemSameGap: gridSameGap,
		itemGap: gridGap,
	} );

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

	let gridItemStyle;
	if ( false === itemSameGap ) {
		gridItemStyle = {
			marginBottom: itemRowGap + 'px',
		};
	} else {
		gridItemStyle = {
			marginBottom: itemGap + 'px',
		};
	}

	const gridItemClasses = classnames(
		`${ innerLayout }-layout`
	);

	const blockProps = useBlockProps( {
		className: gridItemClasses,
		style: gridItemStyle,
	} );
	const innerBlocksProps = useInnerBlocksProps( blockProps,
		{
			template: [
				[ 'core/group', { cbUseFlex: false, cbFillHeight: false, cbInnerLayout: 'normal' } ],
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
