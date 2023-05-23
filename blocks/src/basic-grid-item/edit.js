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
	RangeControl,
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
	} = props;

	const {
		innerLayout,
		gridColumnSpanDesktop,
		gridRowSpanDesktop,
		gridColumnSpanTablet,
		gridRowSpanTablet,
		gridColumnSpanMobile,
		gridRowSpanMobile,
	} = attributes;

	const {
		numDesktopColumns,
		numTabletColumns,
		numMobileColumns,
	} = context;

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

				<PanelBody title={ __( 'Advanced Grid Item Settings', 'crosswinds-blocks' ) } initialOpen={ false }>
					<RangeControl
						label={ __( 'Desktop Column Span', 'crosswinds-blocks' ) }
						help={ __( 'How many columns shout this grid item span at desktop screensizes.', 'crosswinds-blocks' ) }
						onChange={ ( value ) =>
							setAttributes( { gridColumnSpanDesktop: value } )
						}
						value={ gridColumnSpanDesktop || '' }
						min={ 1 }
						max={ numDesktopColumns }
						initialPosition={ numDesktopColumns }
						allowReset={ true }
						resetFallbackValue={ 1 }
					/>

					<RangeControl
						label={ __( 'Desktop Row Span', 'crosswinds-blocks' ) }
						help={ __( 'How many rows shout this grid item span at desktop screensizes.', 'crosswinds-blocks' ) }
						onChange={ ( value ) =>
							setAttributes( { gridRowSpanDesktop: value } )
						}
						value={ gridRowSpanDesktop || '' }
						min={ 1 }
						max={ 100 }
						initialPosition={ gridRowSpanDesktop }
						allowReset={ true }
						resetFallbackValue={ 1 }
					/>

					<RangeControl
						label={ __( 'Tablet Column Span', 'crosswinds-blocks' ) }
						help={ __( 'How many columns shout this grid item span at tablet screensizes.', 'crosswinds-blocks' ) }
						onChange={ ( value ) =>
							setAttributes( { gridColumnSpanTablet: value } )
						}
						value={ gridColumnSpanTablet || '' }
						min={ 1 }
						max={ numTabletColumns }
						initialPosition={ gridColumnSpanTablet }
						allowReset={ true }
						resetFallbackValue={ 1 }
					/>

					<RangeControl
						label={ __( 'Tablet Row Span', 'crosswinds-blocks' ) }
						help={ __( 'How many rows shout this grid item span at tablet screensizes.', 'crosswinds-blocks' ) }
						onChange={ ( value ) =>
							setAttributes( { gridRowSpanTablet: value } )
						}
						value={ gridRowSpanTablet || '' }
						min={ 1 }
						max={ 100 }
						initialPosition={ gridRowSpanTablet }
						allowReset={ true }
						resetFallbackValue={ 1 }
					/>

					<RangeControl
						label={ __( 'Mobile Column Span', 'crosswinds-blocks' ) }
						help={ __( 'How many columns shout this grid item span at mobile screensizes.', 'crosswinds-blocks' ) }
						onChange={ ( value ) =>
							setAttributes( { gridColumnSpanMobile: value } )
						}
						value={ gridColumnSpanMobile || '' }
						min={ 1 }
						max={ numMobileColumns }
						initialPosition={ gridColumnSpanMobile }
						allowReset={ true }
						resetFallbackValue={ 1 }
					/>

					<RangeControl
						label={ __( 'Mobile Row Span', 'crosswinds-blocks' ) }
						help={ __( 'How many rows shout this grid item span at mobile screensizes.', 'crosswinds-blocks' ) }
						onChange={ ( value ) =>
							setAttributes( { gridRowSpanMobile: value } )
						}
						value={ gridRowSpanMobile || '' }
						min={ 1 }
						max={ 100 }
						initialPosition={ gridRowSpanMobile }
						allowReset={ true }
						resetFallbackValue={ 1 }
					/>
				</PanelBody>
			</InspectorControls>
		</>
	);

	const gridItemClasses = classnames(
		`item-span-${ gridColumnSpanDesktop }-desktop-columns`,
		`item-span-${ gridRowSpanDesktop }-desktop-row`,
		`item-span-${ gridColumnSpanTablet }-tablet-columns`,
		`item-span-${ gridRowSpanTablet }-tablet-row`,
		`item-span-${ gridColumnSpanMobile }-mobile-columns`,
		`item-span-${ gridRowSpanMobile }-mobile-row`,
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
