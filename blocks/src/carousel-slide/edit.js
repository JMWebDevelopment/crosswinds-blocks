/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-i18n/
 */
import { __ } from '@wordpress/i18n';
import {
	useBlockProps,
	InnerBlocks,
} from '@wordpress/block-editor';
import {
	Path,
	SVG,
	Button,
	Placeholder
} from '@wordpress/components';

/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * Those files can contain any CSS code that gets applied to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */
import './editor.scss';

/**
 * The edit function describes the structure of your block in the context of the
 * editor. This represents what the editor will render when the block is used.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/#edit
 *
 * @return {WPElement} Element to render.
 */
export default function Edit( props ) {
	const {
		attributes,
		setAttributes,
	} = props;

	const {
		panelLayout,
	} = attributes;

	const panelLayoutOptions = [
		{
			value: 'cover-center',
			label: __( 'Cover with Centered Content', 'crosswinds' ),
		},
		{
			value: 'cover-left',
			label: __( 'Cover with Left-Aligned Content', 'crosswinds' ),
		},
		{
			value: 'cover-right',
			label: __( 'Cover with Right-Aligned Content', 'crosswinds' ),
		},
		{
			value: 'panel-left',
			label: __( 'Image with Left-Side Panel', 'crosswinds' ),
		},
		{
			value: 'panel-right',
			label: __( 'Image with Right-Side Panel', 'crosswinds' ),
		},
	];

	const panelPlaceHolder = (
		<Placeholder
			instructions={ __( 'Select a layout for the slide:' ) }
		>
			{ /*
				* Taken from BlockVariationPicker component.
				* Disable reason: The `list` ARIA role is redundant but
				* Safari+VoiceOver won't announce the list otherwise.
				*/
			/* eslint-disable jsx-a11y/no-redundant-roles */ }
			<ul
				role="list"
				className="wp-block-group-placeholder__variations"
				aria-label={ __( 'Slide variations' ) }
			>
				<li>
					<Button
						icon={ <SVG
							xmlns="http://www.w3.org/2000/svg"
							width="44"
							height="32"
							viewBox="0 0 44 32"
						>
							<Path d="M42 0H2C.9 0 0 .9 0 2v28c0 1.1.9 2 2 2h40c1.1 0 2-.9 2-2V2c0-1.1-.9-2-2-2z" />
						</SVG> }
						iconSize={ 44 }
						onClick={ () => setAttributes( { panelLayout: 'cover-center' } ) }
						className="wp-block-group-placeholder__variation-button"
						label={ __( 'Cover with Centered Content', 'crosswinds-blocks' ) }
					/>
				</li>

				<li>
					<Button
						icon={ <SVG
							xmlns="http://www.w3.org/2000/svg"
							width="44"
							height="32"
							viewBox="0 0 44 32"
						>
							<Path d="M42 0H2C.9 0 0 .9 0 2v28c0 1.1.9 2 2 2h40c1.1 0 2-.9 2-2V2c0-1.1-.9-2-2-2z" />
						</SVG> }
						iconSize={ 44 }
						onClick={ () => setAttributes( { panelLayout: 'cover-left' } ) }
						className="wp-block-group-placeholder__variation-button"
						label={ __( 'Cover with Left-Aligned Content', 'crosswinds-blocks' ) }
					/>
				</li>

				<li>
					<Button
						icon={ <SVG
							xmlns="http://www.w3.org/2000/svg"
							width="44"
							height="32"
							viewBox="0 0 44 32"
						>
							<Path d="M42 0H2C.9 0 0 .9 0 2v28c0 1.1.9 2 2 2h40c1.1 0 2-.9 2-2V2c0-1.1-.9-2-2-2z" />
						</SVG> }
						iconSize={ 44 }
						onClick={ () => setAttributes( { panelLayout: 'cover-right' } ) }
						className="wp-block-group-placeholder__variation-button"
						label={ __( 'Cover with Right-Aligned Content', 'crosswinds-blocks' ) }
					/>
				</li>

				<li>
					<Button
						icon={ <SVG
							xmlns="http://www.w3.org/2000/svg"
							width="44"
							height="32"
							viewBox="0 0 44 32"
						>
							<Path d="M42 0H2C.9 0 0 .9 0 2v28c0 1.1.9 2 2 2h40c1.1 0 2-.9 2-2V2c0-1.1-.9-2-2-2z" />
						</SVG> }
						iconSize={ 44 }
						onClick={ () => setAttributes( { panelLayout: 'panel-left' } ) }
						className="wp-block-group-placeholder__variation-button"
						label={ __( 'Image with Left-Side Panel', 'crosswinds-blocks' ) }
					/>
				</li>

				<li>
					<Button
						icon={ <SVG
							xmlns="http://www.w3.org/2000/svg"
							width="44"
							height="32"
							viewBox="0 0 44 32"
						>
							<Path d="M42 0H2C.9 0 0 .9 0 2v28c0 1.1.9 2 2 2h40c1.1 0 2-.9 2-2V2c0-1.1-.9-2-2-2z" />
						</SVG> }
						iconSize={ 44 }
						onClick={ () => setAttributes( { panelLayout: 'panel-right' } ) }
						className="wp-block-group-placeholder__variation-button"
						label={ __( 'Image with Right-Side Panel', 'crosswinds-blocks' ) }
					/>
				</li>
			</ul>
			{ /* eslint-enable jsx-a11y/no-redundant-roles */ }
		</Placeholder>
	);

	let panelInnerLayout;

	if ( 'cover-center' === panelLayout ) {
		panelInnerLayout = [
			[ 'core/cover', {}, [
				[ 'core/group', {}, [
					[ 'core/heading', { placeholder: __( 'Add a Heading Here', 'crosswinds-blocks' ), textAlign: 'center' } ],
					[ 'core/paragraph', { placeholder: __( 'Add a Paragraph', 'crosswinds-blocks' ), align: 'center' } ],
				] ],
			] ],
		];
	} else if ( 'cover-left' === panelLayout ) {
		panelInnerLayout = [
			[ 'core/cover', {}, [
				[ 'core/columns', { columns: 2 }, [
					[ 'core/column', { width: '33.3%' }, [
						[ 'core/heading', { placeholder: __( 'Add a Heading Here', 'crosswinds-blocks' ), textAlign: 'left' } ],
						[ 'core/paragraph', { placeholder: __( 'Add a Paragraph', 'crosswinds-blocks' ), align: 'left' } ],
					] ],
				] ],
			] ],
		];
	} else if ( 'cover-right' === panelLayout ) {
		panelInnerLayout = [
			[ 'core/cover', {}, [
				[ 'core/columns', { columns: 2 }, [
					[ 'core/column', { width: '66.7%' } ],
					[ 'core/column', { width: '33.3%' }, [
						[ 'core/heading', { placeholder: __( 'Add a Heading Here', 'crosswinds-blocks' ), textAlign: 'left' } ],
						[ 'core/paragraph', { placeholder: __( 'Add a Paragraph', 'crosswinds-blocks' ), align: 'left' } ],
					] ],
				] ],
			] ],
		];
	}

	let panelInner;
	if ( '' === panelLayout ) {
		panelInner = panelPlaceHolder;
	} else {
		panelInner = (
			<InnerBlocks
				template={ panelInnerLayout }
			/>
		);
	}

	return (
		<div { ...useBlockProps() }>
			{ panelInner }
		</div>
	);
}
