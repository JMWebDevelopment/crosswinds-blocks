/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';
import {
	useBlockProps,
	InspectorControls,
} from '@wordpress/block-editor';
import {
	PanelBody,
	SelectControl,
	TextControl,
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
		context,
	} = props;

	const {
		singularCommentText,
		pluralCommentText,
	} = attributes;

	const { postId } = context;

	const comments = useSelect( ( select ) => {
		return select( 'core' ).getEntityRecords( 'root', 'comment', { post: postId } );
	} );

	let innerText;
	if ( null === comments ) {
		innerText = '0 ' + pluralCommentText;
	} else if ( 1 === comments.length ) {
		innerText = comments.length + ' ' + singularCommentText;
	} else {
		innerText = comments.length + ' ' + pluralCommentText;
	}

	if ( '' === singularCommentText ) {
		setAttributes( {
			singularCommentText: __( 'Comment', 'crosswinds-blocks' ),
		} );
	}

	if ( '' === pluralCommentText ) {
		setAttributes( {
			pluralCommentText: __( 'Comments', 'crosswinds-blocks' ),
		} );
	}

	const inspectorControls = (
		<>
			<InspectorControls>
				<PanelBody title={ __( 'Comments Number Settings', 'crosswinds-blocks' ) }>

					<TextControl
						label={ __( 'Singular Comment Text', 'crosswinds-blocks' ) }
						value={ singularCommentText }
						onChange={ ( value ) => setAttributes( {
							singularCommentText: value,
						} ) }
					/>

					<TextControl
						label={ __( 'Plural Comment Text', 'crosswinds-blocks' ) }
						value={ pluralCommentText }
						onChange={ ( value ) => setAttributes( {
							pluralCommentText: value,
						} ) }
					/>
				</PanelBody>
			</InspectorControls>
		</>
	);

	return (
		<>
			{ inspectorControls }
			<p { ...useBlockProps() }>
				{ innerText }
			</p>
		</>
	);
}
