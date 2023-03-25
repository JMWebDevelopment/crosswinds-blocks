/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';
import {
	useInnerBlocksProps,
	useBlockProps,
} from '@wordpress/block-editor';

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
	} = context;

	const {
		accordionPanelId,
	} = attributes;

	setAttributes( { accordionPanelId: panelId } );
	const blockProps = useBlockProps(
		{
			id: panelId,
		}
	);
	const innerBlocksProps = useInnerBlocksProps( blockProps,
		{
			template: [
				[ 'core/paragraph', { placeholder: __( 'Add a heading here...', 'crosswinds-blocks' ) } ],
			],
		},
	);

	return (
		<>
			<div { ...innerBlocksProps } role="region" aria-labelledby={ panelId + '-control' } />
		</>
	);
}

export default Edit;
