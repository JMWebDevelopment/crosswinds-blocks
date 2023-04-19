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
		gridColumnSpanDesktop,
		gridRowSpanDesktop,
		gridColumnSpanTablet,
		gridRowSpanTablet,
		gridColumnSpanMobile,
		gridRowSpanMobile,
	} = props.attributes;

	const gridItemClasses = classnames(
		`item-span-${ gridColumnSpanDesktop }-desktop-columns`,
		`item-span-${ gridRowSpanDesktop }-desktop-row`,
		`item-span-${ gridColumnSpanTablet }-tablet-columns`,
		`item-span-${ gridRowSpanTablet }-tablet-row`,
		`item-span-${ gridColumnSpanMobile }-mobile-columns`,
		`item-span-${ gridRowSpanMobile }-mobile-row`,
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
