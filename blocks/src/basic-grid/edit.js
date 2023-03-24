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
	PanelBody
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
	} = attributes;

	const gridClasses = classnames(
		`basic-grid-has-${ numDesktopColumns }-desktop-columns`,
		`basic-grid-has-${ numTabletColumns }-tablet-columns`,
		`basic-grid-has-${ numMobileColumns }-mobile-columns`,
	);

	const gridStyle = {
		gridColumnGap: gridGap + 'px',
		gridRowGap: gridGap + 'px',
	};

	const blockProps = useBlockProps(
		{
			className: gridClasses,
			style: gridStyle,
		}
	);
	const innerBlocksProps = useInnerBlocksProps( blockProps, {
		allowedBlocks: [ 'crosswinds-blocks/basic-grid-item' ],
	} );

	const inspectorControls = (
		<>
			<InspectorControls>
				<PanelBody title={ __( 'Basic Grid Settings', 'crosswinds-blocks' ) }>
					<div className="basic-grid-settings__width">
						<RangeControl
							label={ __( 'Desktop Columns', 'crosswinds-blocks' ) }
							onChange={ ( value ) =>
								setAttributes( { numDesktopColumns: value } )
							}
							value={ numDesktopColumns || '' }
							min={ 1 }
							max={ 4 }
							initialPosition={ 4 }
							allowReset={ true }
							resetFallbackValue={ 4 }
						/>
					</div>

					<div className="basic-grid-settings__height">
						<RangeControl
							label={ __( 'Tablet Columns', 'crosswinds-blocks' ) }
							onChange={ ( value ) =>
								setAttributes( { numTabletColumns: value } )
							}
							value={ numTabletColumns || '' }
							min={ 1 }
							max={ 3 }
							initialPosition={ 2 }
							allowReset={ true }
							resetFallbackValue={ 2 }
						/>
					</div>

					<div className="basic-grid-settings__width">
						<RangeControl
							label={ __( 'Mobile Columns', 'crosswinds-blocks' ) }
							onChange={ ( value ) =>
								setAttributes( { numMobileColumns: value } )
							}
							value={ numMobileColumns || '' }
							min={ 1 }
							max={ 2 }
							initialPosition={ 1 }
							allowReset={ true }
							resetFallbackValue={ 1 }
						/>
					</div>

					<div className="basic-grid-settings__height">
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
					</div>
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
