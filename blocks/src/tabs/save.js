/**
 * External dependencies
 */
import classnames from 'classnames';

/**
 * WordPress dependencies
 */
import { useBlockProps, InnerBlocks } from '@wordpress/block-editor';

export default function save( props ) {
	console.log( useBlockProps );
	const {
		attributes,
	} = props;

	const {
		anchor,
		tabs,
		tabsAlign,
		tabsSpacing,
		separatorWidth,
		tabsBorderWidth,
		separatorColorValue,
		tabsBorderColorValue,
		tabTextColorValue,
		tabTextHoverColorValue,
		tabBackgroundColorValue,
		tabBackgroundHoverColorValue,
	} = attributes;

	const tabClasses = classnames(
		`align-tabs-${ tabsAlign }`,
		`space-tabs-${ tabsSpacing }`,
	);

	let tabsDisplay;
	let tabCount = 1;

	const tabStyles = {
		borderWidth: tabsBorderWidth,
		borderColor: tabsBorderColorValue,
		borderStyle: 'solid',
	};

	if ( tabs.length ) {
		tabsDisplay = tabs.map( ( tab, index ) => {
			if ( 1 === tabCount ) {
				tabCount++;
				return <li key={ index } style={ tabStyles }><a href={ '#tabs-panel-' + tab.target } data-tabby-default >{ tab.text }</a></li>;
			} else {
				tabCount++;
				return <li key={ index } style={ tabStyles }><a href={ '#tabs-panel-' + tab.target }>{ tab.text }</a></li>;
			}
		} );
	}

	let tabListStyles;

	if ( 'horizontal' === tabsAlign ) {
		tabListStyles = {
			borderBottomColor: separatorColorValue,
			borderBottomWidth: separatorWidth + 'px',
		};
	} else {
		tabListStyles = {
			borderRightColor: separatorColorValue,
			borderRightWidth: separatorWidth + 'px',
		};
	}

	return (
		<>
			<style>
				{
					`#${ anchor }.wp-block-crosswinds-blocks-tabs ul a {
						color: ${ tabTextColorValue };
						background-color: ${ tabBackgroundColorValue };
					}
					#${ anchor }.wp-block-crosswinds-blocks-tabs ul a:hover,
					#${ anchor }.wp-block-crosswinds-blocks-tabs ul a:focus,
					#${ anchor }.wp-block-crosswinds-blocks-tabs ul a[aria-selected="true"] {
						color: ${ tabTextHoverColorValue };
						background-color: ${ tabBackgroundHoverColorValue };
					}`
				}
			</style>
			<div { ...useBlockProps.save(
				{
					className: tabClasses,
				}
			) } data-tabs>
				<div className="tabs-list">
					<ul style={ tabListStyles }>
						{ tabsDisplay }
					</ul>
				</div>
				<div className="tabs-container">
					<InnerBlocks.Content />
				</div>
			</div>
		</>
	);
}
