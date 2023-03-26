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
		tabs,
		tabsAlign,
		tabsSpacing,
	} = attributes;

	const gridClasses = classnames(
		`align-tabs-${ tabsAlign }`,
		`space-tabs-${ tabsSpacing }`,
	);

	let tabsDisplay;
	let tabCount = 1;

	if ( tabs.length ) {
		tabsDisplay = tabs.map( ( tab, index ) => {
			if ( 1 === tabCount ) {
				tabCount++;
				return <li key={ index }><a href={ '#tabs-panel-' + tab.target } data-tabby-default >{ tab.text }</a></li>;
			} else {
				tabCount++;
				return <li key={ index }><a href={ '#tabs-panel-' + tab.target }>{ tab.text }</a></li>;
			}
		} );
	}

	return (
		<div { ...useBlockProps.save(
			{
				className: gridClasses,
			}
		) } data-tabs>
			<div className="tabs-list">
				<ul>
					{ tabsDisplay }
				</ul>
			</div>
			<div className="tabs-container">
				<InnerBlocks.Content />
			</div>
		</div>
	);
}
