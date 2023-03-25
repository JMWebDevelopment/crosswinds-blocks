/**
 * WordPress dependencies
 */
import { useBlockProps, InnerBlocks } from '@wordpress/block-editor';

export default function save( props ) {
	const {
		attributes,
	} = props;

	const {
		accordionPanelId,
	} = attributes;

	return (
		<div { ...useBlockProps.save(
			{
				id: accordionPanelId,
			}
		) } role="region" aria-labelledby={ accordionPanelId + '-control' } hidden="">
			<InnerBlocks.Content />
		</div>
	);
}
