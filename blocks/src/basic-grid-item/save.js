/**
 * External dependencies
 */
import classnames from 'classnames';

/**
 * WordPress dependencies
 */
import { useBlockProps, InnerBlocks } from '@wordpress/block-editor';

export default function save( props ) {
	const { innerLayout } = props.attributes;

	return (
		<div { ...useBlockProps.save( {
			className: innerLayout + '-layout',
		} ) }>
			<InnerBlocks.Content />
		</div>
	);
}
