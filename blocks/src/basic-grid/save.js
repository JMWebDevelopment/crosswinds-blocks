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
		numDesktopColumns,
		numTabletColumns,
		numMobileColumns,
		gridGap,
	} = attributes;

	const gridClasses = classnames(
		`basic-grid-has-${ numDesktopColumns }-desktop-columns`,
		`basic-grid-has-${ numTabletColumns }-tablet-columns`,
		`basic-grid-has-${ numMobileColumns }-mobile-columns`,
	);

	const gridStyle = {
		gridColumnGap: gridGap + 'px',
		gridRowGap: gridGap + 'px',
	};

	return (
		<div { ...useBlockProps.save(
			{
				className: gridClasses,
				style: gridStyle,
			}
		) }>
			<InnerBlocks.Content />
		</div>
	);
}
