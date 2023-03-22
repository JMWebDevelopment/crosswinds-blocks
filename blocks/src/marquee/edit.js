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
	RichText,
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
		marqueeContent,
		marqueeWidth,
		marqueeSpeed,
	} = attributes;

	const inspectorControls = (
		<>
			<InspectorControls>
				<PanelBody title={ __( 'Marquee Settings', 'crosswinds-blocks' ) }>
					<div className="marquee-settings__width">
						<RangeControl
							label={ __( 'Marquee width', 'crosswinds-blocks' ) }
							onChange={ ( value ) =>
								setAttributes( { marqueeWidth: value } )
							}
							value={ marqueeWidth || '' }
							min={ 1 }
							max={ 100 }
							initialPosition={ 50 }
							allowReset={ true }
							resetFallbackValue={ 50 }
						/>
					</div>

					<div className="marquee-settings__speed">
						<RangeControl
							label={ __( 'Marquee speed', 'crosswinds-blocks' ) }
							help={ __( 'Speed is measured in seconds. The higher the number, the slower the marquee will go.', 'crosswinds-blocks' ) }
							onChange={ ( value ) =>
								setAttributes( { marqueeSpeed: value } )
							}
							value={ marqueeSpeed || '' }
							min={ 1 }
							max={ 100 }
							initialPosition={ 5 }
							allowReset={ true }
							resetFallbackValue={ 5 }
						/>
					</div>
				</PanelBody>
			</InspectorControls>
		</>
	);

	const marqueeStyles = {
		width: `${ marqueeWidth }%`,
	};

	return (
		<>
			{ inspectorControls }
			<div { ...useBlockProps( { style: marqueeStyles } ) }>
				<RichText
					tagName="p" // The tag here is the element output and editable in the admin
					value={ marqueeContent } // Any existing content, either from the database or an attribute default
					allowedFormats={ [ 'core/bold', 'core/italic' ] } // Allow the content to be made bold or italic, but do not allow other formatting options
					onChange={ ( content ) => setAttributes( { marqueeContent: content } ) } // Store updated content as a block attribute
					placeholder={ __( 'Marquee text here...', 'crosswinds-blocks' ) } // Display this text before any content has been added by the user
				/>
			</div>
		</>
	);
}

export default Edit;
