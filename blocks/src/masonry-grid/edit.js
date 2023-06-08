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

export function Edit( props ) {
	const {
		attributes,
		setAttributes,
	} = props;

	const {
		numDesktopColumns,
		numTabletColumns,
		numMobileColumns,
		gridGap,
		gridSameGap,
		gridColumnGap,
		gridRowGap,
	} = attributes;

	let gridSpacingControls,
		gridStyle;

	if ( false === gridSameGap ) {
		gridSpacingControls = (
			<>
				<RangeControl
					label={ __( 'Grid Column Gap', 'crosswinds-blocks' ) }
					onChange={ ( value ) =>
						setAttributes( { gridColumnGap: value } )
					}
					value={ gridColumnGap || '' }
					min={ 0 }
					max={ 100 }
					initialPosition={ 30 }
					allowReset={ true }
					resetFallbackValue={ 30 }
				/>

				<RangeControl
					label={ __( 'Grid Row Gap', 'crosswinds-blocks' ) }
					onChange={ ( value ) =>
						setAttributes( { gridRowGap: value } )
					}
					value={ gridRowGap || '' }
					min={ 0 }
					max={ 100 }
					initialPosition={ 30 }
					allowReset={ true }
					resetFallbackValue={ 30 }
				/>
			</>
		);
		gridStyle = {
			gridColumnGap: gridColumnGap + 'px',
			gridRowGap: gridRowGap + 'px',
		};
	} else {
		gridSpacingControls = (
			<RangeControl
				label={ __( 'Grid Gap', 'crosswinds-blocks' ) }
				onChange={ ( value ) =>
					setAttributes( { gridGap: value } )
				}
				value={ gridGap || '' }
				min={ 0 }
				max={ 100 }
				initialPosition={ 30 }
				allowReset={ true }
				resetFallbackValue={ 30 }
			/>
		);
		gridStyle = {
			gridColumnGap: gridGap + 'px',
			gridRowGap: gridGap + 'px',
		};
	}

	const gridClasses = classnames(
		`masonry-grid-has-${ numDesktopColumns }-desktop-columns`,
		`masonry-grid-has-${ numTabletColumns }-tablet-columns`,
		`masonry-grid-has-${ numMobileColumns }-mobile-columns`,
	);

	const blockProps = useBlockProps(
		{
			className: gridClasses,
			style: gridStyle,
		}
	);
	const innerBlocksProps = useInnerBlocksProps( blockProps, {
		allowedBlocks: [ 'crosswinds-blocks/masonry-grid-item' ],
	} );

	const inspectorControls = (
		<>
			<InspectorControls>
				<PanelBody title={ __( 'Basic Grid Settings', 'crosswinds-blocks' ) }>
					<RangeControl
						label={ __( 'Desktop Columns', 'crosswinds-blocks' ) }
						onChange={ ( value ) =>
							setAttributes( { numDesktopColumns: value } )
						}
						value={ numDesktopColumns || '' }
						min={ 1 }
						max={ 12 }
						initialPosition={ 3 }
						allowReset={ true }
						resetFallbackValue={ 3 }
					/>

					<RangeControl
						label={ __( 'Tablet Columns', 'crosswinds-blocks' ) }
						onChange={ ( value ) =>
							setAttributes( { numTabletColumns: value } )
						}
						value={ numTabletColumns || '' }
						min={ 1 }
						max={ 12 }
						initialPosition={ 2 }
						allowReset={ true }
						resetFallbackValue={ 2 }
					/>

					<RangeControl
						label={ __( 'Mobile Columns', 'crosswinds-blocks' ) }
						onChange={ ( value ) =>
							setAttributes( { numMobileColumns: value } )
						}
						value={ numMobileColumns || '' }
						min={ 1 }
						max={ 12 }
						initialPosition={ 1 }
						allowReset={ true }
						resetFallbackValue={ 1 }
					/>
				</PanelBody>

				<PanelBody title={ __( 'Grid Spacing Settings', 'crosswinds-blocks' ) }>
					<ToggleControl
						label={ __( 'Use Same Spacing for Columns and Rows?', 'crosswinds-blocks' ) }
						onChange={ () => setAttributes( { gridSameGap: ! gridSameGap } ) }
						checked={ gridSameGap }
					/>

					{ gridSpacingControls }
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
