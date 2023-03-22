/**
 * External dependencies
 */
import classnames from 'classnames';

/**
 * WordPress dependencies
 */
import {
	useBlockProps,
	RichText,
} from '@wordpress/block-editor';

export default function save( props ) {
	const {
		marqueeContent,
		marqueeWidth,
		marqueeSpeed,
	} = props.attributes;

	const marqueeStyles = {
		width: `${ marqueeWidth }%`,
	};

	const marqueeTextStyles = {
		mozAnimation: `crosswinds-marquee ${ marqueeSpeed }s linear infinite`,
		webkitAnimation: `crosswinds-marquee ${ marqueeSpeed }s linear infinite`,
		animation: `crosswinds-marquee ${ marqueeSpeed }s linear infinite`,
	};

	return (
		<div { ...useBlockProps.save( { style: marqueeStyles } ) }>
			<RichText.Content
				tagName="p" // The tag here is the element output and editable in the admin
				value={ marqueeContent } // Any existing content, either from the database or an attribute default
				style={ marqueeTextStyles }
			/>
		</div>
	);
}
