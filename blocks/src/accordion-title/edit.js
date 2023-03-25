/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';
import {
	useInnerBlocksProps,
	useBlockProps,
} from '@wordpress/block-editor';

/**
 * External dependencies
 */
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
	faPlus,
	faAngleUp,
} from '@fortawesome/free-solid-svg-icons';

/**
 * Internal dependencies
 */
import './editor.scss';

export function Edit( props ) {
	const {
		context,
		attributes,
		setAttributes,
	} = props;

	const {
		panelId,
		panelIcon,
	} = context;

	const {
		accordionPanelId,
		accordionPanelIcon,
	} = attributes;

	setAttributes( { accordionPanelId: panelId } );
	setAttributes( { accordionPanelIcon: panelIcon } );

	let iconSvg;

	if ( 'arrow' === accordionPanelIcon ) {
		iconSvg = (
			<FontAwesomeIcon icon={ faAngleUp } />
		);
	} else {
		iconSvg = (
			<FontAwesomeIcon icon={ faPlus } />
		);
	}

	const blockProps = useBlockProps(
		{
			id: panelId + '-control',
		}
	);
	const innerBlocksProps = useInnerBlocksProps( blockProps,
		{
			template: [
				[ 'core/heading', { level: 3, placeholder: __( 'Add a heading here...', 'crosswinds-blocks' ) } ],
			],
		},
	);

	return (
		<>
			<div className="accordion-title-container">
				<div { ...innerBlocksProps } role="button" aria-controls={ panelId } aria-expanded="false" />
				{ iconSvg }
			</div>
		</>
	);
}

export default Edit;
