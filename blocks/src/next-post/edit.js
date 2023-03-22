/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';
import {
	useBlockProps,
	InspectorControls,
	InnerBlocks,
} from '@wordpress/block-editor';
import {
	PanelBody,
	ComboboxControl,
} from '@wordpress/components';
import { useSelect } from '@wordpress/data';
import {
	useState,
} from '@wordpress/element';

/**
 * Internal dependencies
 */
import './editor.scss';

/**
 * The edit function describes the structure of your block in the context of the
 * editor. This represents what the editor will render when the block is used.
 *
 * @param {Object} props All props passed to this function.
 * @return {WPElement}   Element to render.
 */
export default function Edit( props ) {
	const {
		attributes,
		setAttributes,
	} = props;

	const {
		postId,
	} = attributes;

	function getPostId() {
		const posts = wp.data.select( 'core' ).getEntityRecords( 'postType', 'post', { per_page: 1 } );
		if ( null === posts ) {
			return 1;
		}
		return posts[ 0 ].id;
	}

	setAttributes( { postId: getPostId() } );

	return (
		<div { ...useBlockProps() }>
			<InnerBlocks />
		</div>
	);
}
