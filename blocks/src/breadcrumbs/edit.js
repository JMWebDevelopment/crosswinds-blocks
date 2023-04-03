/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';
import {
	useBlockProps,
	InspectorControls,
	AlignmentControl,
	BlockControls,
} from '@wordpress/block-editor';
import {
	PanelBody,
	SelectControl,
	TextControl,
	ToggleControl,
} from '@wordpress/components';
import { useSelect } from '@wordpress/data';
import {
	useState,
} from '@wordpress/element';

/**
 * External dependencies
 */
import classnames from 'classnames';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
	faLongArrowRight,
	faArrowRight,
	faChevronRight,
	faAngleDoubleRight,
} from '@fortawesome/free-solid-svg-icons';

/**
 * Internal dependencies
 */
import './editor.scss';

/**
 * The edit function describes the structure of your block in the context of the
 * editor. This represents what the editor will render when the block is used.
 *
 * @param {Object} props All props passed to this function.
 * @return {WPElement}   Element to render.
 */
export default function Edit( props ) {
	const {
		attributes,
		setAttributes,
	} = props;

	const {
		separatorIcon,
		align,
		breadrcumbsSchema,
	} = attributes;

	let icon;

	if ( 'arrow-right' === separatorIcon ) {
		icon = faArrowRight;
	} else if ( 'chevron-right' === separatorIcon ) {
		icon = faChevronRight;
	} else if ( 'chevron-double-right' === separatorIcon ) {
		icon = faAngleDoubleRight;
	} else {
		icon = faLongArrowRight;
	}

	const copyrightTypeOptions = [
		{
			value: 'arrow-right',
			label: __( 'Arrow Right', 'crosswinds-blocks' ),
		},
		{
			value: 'chevron-right',
			label: __( 'Chevron Right', 'crosswinds-blocks' ),
		},
		{
			value: 'chevron-double-right',
			label: __( 'Chevron Right', 'crosswinds-blocks' ),
		},
		{
			value: 'long-arrow-right',
			label: __( 'Long Arrow Right', 'crosswinds-blocks' ),
		},
	];

	const blockControls = (
		<BlockControls group="block">
			<AlignmentControl
				value={ align }
				onChange={ ( newAlign ) =>
					setAttributes( {
						align: newAlign,
					} )
				}
			/>
		</BlockControls>
	);

	const inspectorControls = (
		<>
			<InspectorControls>
				<PanelBody title={ __( 'Breadcrumbs Settings', 'crosswinds-blocks' ) }>
					<SelectControl
						label={ __( 'Separator Icon', 'crosswinds-blocks' ) }
						value={ separatorIcon }
						options={ copyrightTypeOptions }
						onChange={ ( option ) => setAttributes( {
							separatorIcon: option,
						} ) }
					/>

					<ToggleControl
						label={ __( 'Add Schema to Breadcrumbs', 'crosswinds-blocks' ) }
						help={ __( 'Turn off if your SEO plugin (like Yoast SEO) already adds this for you.', 'crosswinds-blocks' ) }
						onChange={ () => setAttributes( { breadrcumbsSchema: ! breadrcumbsSchema } ) }
						checked={ breadrcumbsSchema }
					/>
				</PanelBody>
			</InspectorControls>
		</>
	);

	return (
		<>
			{ blockControls }
			{ inspectorControls }
			<div { ...useBlockProps( {
				className: classnames( {
					[ `has-text-align-${ align }` ]: align,
				} ),
			} ) }>
				<ul>
					<li>{ __( 'Home', 'crosswinds-blocks' ) }</li>
					<li className="separator"><FontAwesomeIcon icon={ icon } /></li>
					<li>{ __( 'Page 1', 'crosswinds-blocks' ) }</li>
					<li className="separator"><FontAwesomeIcon icon={ icon } /></li>
					<li>{ __( 'Page Title', 'crosswinds-blocks' ) }</li>
				</ul>
			</div>
		</>
	);
}
