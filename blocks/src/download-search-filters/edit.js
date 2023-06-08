/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';
import {
	useInnerBlocksProps,
	useBlockProps,
	InnerBlocks
} from '@wordpress/block-editor';

/**
 * Internal dependencies
 */
import './editor.scss';

export function Edit( props ) {

	return (
		<>
			<div { ...useBlockProps() }>
				<InnerBlocks />
			</div>
		</>
	);
}

export default Edit;
