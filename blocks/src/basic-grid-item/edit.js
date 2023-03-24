/**
 * External dependencies
 */
import classnames from 'classnames';

/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';
import { useBlockProps, useInnerBlocksProps } from '@wordpress/block-editor';

/**
 * Internal dependencies
 */
import './editor.scss';

export function Edit( props ) {
	const blockProps = useBlockProps();
	const innerBlocksProps = useInnerBlocksProps( blockProps,
		{
			template: [
				[ 'core/heading', { level: 2, placeholder: __( 'Insert your heading here...', 'crosswinds-blocks' ) } ],
				[ 'core/paragraph', { placeholder: __( 'Write some description text here...', 'crosswinds-blocks' ) } ],
			],
		},
	);

	return (
		<>
			<div { ...innerBlocksProps } />
		</>
	);
}

export default Edit;
