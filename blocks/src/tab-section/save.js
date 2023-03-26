/**
 * External dependencies
 */
import classnames from 'classnames';

/**
 * WordPress dependencies
 */
import { useBlockProps, InnerBlocks } from '@wordpress/block-editor';

export default function save( props ) {
	const {
		attributes,
	} = props;

	const {
		tabId,
	} = attributes;

	return (
		<div { ...useBlockProps.save(
			{
				id: 'tabs-panel-' + tabId,
			}
		) } >
			<InnerBlocks.Content />
		</div>
	);
}
