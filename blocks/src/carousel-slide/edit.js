/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-i18n/
 */
import { __ } from '@wordpress/i18n';
import {
	useBlockProps,
	InnerBlocks,
	InspectorControls,
	MediaUpload,
	MediaUploadCheck,
} from '@wordpress/block-editor';
import {
	Path,
	SVG,
	Button,
	Placeholder,
	ResponsiveWrapper,
	PanelBody,
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
		mediaId,
		mediaUrl,
	} = attributes;

	const removeMedia = () => {
		setAttributes( {
			mediaId: 0,
			mediaUrl: '',
		} );
	};

 	const onSelectMedia = ( media ) => {
		setAttributes( {
			mediaId: media.id,
			mediaUrl: media.url,
		} );
	};

	const blockStyle = {
		backgroundImage: mediaUrl !== '' ? 'url("' + mediaUrl + '")' : 'none',
	};

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

	const inspectorControls = (
		<InspectorControls>
			<PanelBody
				title={__('Select block background image', 'crosswinds-blocks')}
				initialOpen={ true }
			>
				<div className="editor-post-featured-image">
					<MediaUploadCheck>
						<MediaUpload
							onSelect={ onSelectMedia }
							value={ mediaId }
							allowedTypes={ [ 'image' ] }
							render={ ( { open } ) => (
								<Button
									className={ mediaId == 0 ? 'editor-post-featured-image__toggle' : 'editor-post-featured-image__preview' }
									onClick={ open }
								>
									{ attributes.mediaId == 0 && __( 'Choose an image', 'crosswinds-blocks' ) }
									{ props.media != undefined &&
										<ResponsiveWrapper
											naturalWidth={ props.media.media_details.width }
											naturalHeight={ props.media.media_details.height }
										>
											<img src={ props.media.source_url } />
										</ResponsiveWrapper>
									}
								</Button>
							)}
						/>
					</MediaUploadCheck>
					{ attributes.mediaId != 0 &&
						<MediaUploadCheck>
							<MediaUpload
								title={ __( 'Replace image', 'crosswinds-blocks' ) }
								value={ mediaId }
								onSelect={ onSelectMedia }
								allowedTypes={ [ 'image' ] }
								render={ ( { open } ) => (
									<Button onClick={ open } isDefault isLarge>{ __( 'Replace image', 'crosswinds-blocks' ) }</Button>
								) }
							/>
						</MediaUploadCheck>
					}
					{ attributes.mediaId != 0 &&
						<MediaUploadCheck>
							<Button onClick={ removeMedia } isLink isDestructive>{ __( 'Remove image', 'crosswinds-blocks' ) }</Button>
						</MediaUploadCheck>
					}
				</div>
			</PanelBody>
		</InspectorControls>
	);

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
	let panelInnerContent;

	if ( 'cover-center' === panelLayout ) {
		panelInnerLayout = [
			[ 'core/group', { className: 'carousel-slide-cover' }, [
				[ 'core/heading', { placeholder: __( 'Add a Heading Here', 'crosswinds-blocks' ), textAlign: 'center' } ],
				[ 'core/paragraph', { placeholder: __( 'Add a Paragraph', 'crosswinds-blocks' ), align: 'center' } ],
			] ],
		];

		panelInnerContent = (
			<div style={ blockStyle }>
				<img src={ mediaUrl } />
				<InnerBlocks
					template={ panelInnerLayout }
				/>
			</div>
		);
	} else if ( 'cover-left' === panelLayout ) {
		panelInnerLayout = [
			[ 'core/group', { className: 'carousel-slide-cover' }, [
				[ 'core/heading', { placeholder: __( 'Add a Heading Here', 'crosswinds-blocks' ), textAlign: 'left' } ],
				[ 'core/paragraph', { placeholder: __( 'Add a Paragraph', 'crosswinds-blocks' ), align: 'left' } ],
			] ],
		];

		panelInnerContent = (
			<div style={ blockStyle }>
				<img src={ mediaUrl } />
				<InnerBlocks
					template={ panelInnerLayout }
				/>
			</div>
		);
	} else if ( 'cover-right' === panelLayout ) {
		panelInnerLayout = [
			[ 'core/group', { className: 'carousel-slide-cover' }, [
				[ 'core/heading', { placeholder: __( 'Add a Heading Here', 'crosswinds-blocks' ), textAlign: 'right' } ],
				[ 'core/paragraph', { placeholder: __( 'Add a Paragraph', 'crosswinds-blocks' ), align: 'right' } ],
			] ],
		];

		panelInnerContent = (
			<div style={ blockStyle }>
				<img src={ mediaUrl } />
				<InnerBlocks
					template={ panelInnerLayout }
				/>
			</div>
		);
	}

	let panelInner;
	if ( '' === panelLayout ) {
		panelInner = panelPlaceHolder;
	} else {
		panelInner = panelInnerContent;
	}

	return (
		<>
			{ inspectorControls }
			<div { ...useBlockProps(
				{
					className: panelLayout,
				}
			) }>
				{ panelInner }
			</div>
		</>
	);
}
