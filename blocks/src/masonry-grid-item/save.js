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
		innerLayout,
	} = props.attributes;

	const gridItemClasses = classnames(
		`${ innerLayout }-layout`
	);

	return (
		<div { ...useBlockProps.save( {
			className: gridItemClasses,
		} ) }>
			<InnerBlocks.Content />
		</div>
	);
}
