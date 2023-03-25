/**
 * WordPress dependencies
 */
import {
	useInnerBlocksProps,
	useBlockProps,
} from '@wordpress/block-editor';

/**
 * Internal dependencies
 */
import './editor.scss';

export function Edit() {
	const blockProps = useBlockProps();
	const innerBlocksProps = useInnerBlocksProps( blockProps, {
		allowedBlocks: [ 'crosswinds-blocks/accordion' ],
		template: [
			[ 'crosswinds-blocks/accordion', {} ],
		],
	} );

	return (
		<>
			<div { ...innerBlocksProps } />
		</>
	);
}

export default Edit;
