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
		itemSameGap,
		itemGap,
		itemRowGap,
	} = props.attributes;

	const gridItemClasses = classnames(
		`${ innerLayout }-layout`
	);

	let gridItemStyle;
	if ( false === itemSameGap ) {
		gridItemStyle = {
			marginBottom: itemRowGap + 'px',
		};
	} else {
		gridItemStyle = {
			marginBottom: itemGap + 'px',
		};
	}

	return (
		<div { ...useBlockProps.save( {
			className: gridItemClasses,
			style: gridItemStyle,
		} ) }>
			<InnerBlocks.Content />
		</div>
	);
}
