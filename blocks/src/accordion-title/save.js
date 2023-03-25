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
		accordionPanelIcon,
	} = attributes;

	return (
		<div className="accordion-title-container">
			<div { ...useBlockProps.save(
				{
					id: accordionPanelId + '-control',
				}
			) } role="button" aria-controls={ accordionPanelId } aria-expanded="false" >
				<InnerBlocks.Content />

				<span className={ 'accordion-icon ' + accordionPanelIcon }></span>
			</div>
		</div>
	);
}
