/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';
import {
	useBlockProps,
	InspectorControls,
} from '@wordpress/block-editor';
import {
	SelectControl,
	PanelBody,
	TextControl,
	DatePicker,
} from '@wordpress/components';
import { useSelect } from '@wordpress/data';
import {
	useState,
} from '@wordpress/element';
import { useEntityProp, store as coreStore } from '@wordpress/core-data';
import { dateI18n, getSettings as getDateSettings } from '@wordpress/date';

/**
 * Internal dependencies
 */
import usePostTerms from './use-post-terms';
import './editor.scss';

export default function Edit( props ) {
	const {
		attributes,
		setAttributes,
		context,
	} = props;

	const {
		portafoglioClient,
		portafoglioDate,
	} = attributes;

	const { postId, postType } = context;

	const dateSettings = getDateSettings();
	const [ siteFormat = dateSettings.formats.date ] = useEntityProp(
		'root',
		'site',
		'date_format'
	);

	const term = 'project_category';

	const selectedTerm = useSelect(
		( select ) => {
			if ( ! term ) return {};
			const { getTaxonomy } = select( coreStore );
			const taxonomy = getTaxonomy( term );
			return taxonomy?.visibility?.publicly_queryable ? taxonomy : {};
		},
		[ term ]
	);

	const { postTerms, hasPostTerms, isLoading } = usePostTerms( {
		postId,
		term: selectedTerm,
	} );

	let termsList = '';

	if ( null !== postTerms ) {
		termsList = postTerms.map( ( postTerm ) =>
			<span key={ postTerm.id }>{ unescape( postTerm.name ) }</span>
		);
	} else {
		termsList = '';
	}

	let clientName = '';
	if ( '' !== portafoglioClient ) {
		clientName = ( <span><strong>{ __( 'Client: ', 'crosswinds-blocks' ) }</strong> { portafoglioClient } <br /></span> );
	} else {
		clientName = '';
	}

	let dateString = '';
	if ( '' !== portafoglioDate ) {
		dateString = ( <span><strong>{ __( 'Date: ', 'crosswinds-blocks' ) }</strong> { dateI18n( siteFormat, portafoglioDate ) } <br /></span> );
	}

	const inspectorControls = (
		<>
			<InspectorControls>
				<PanelBody title={ __( 'Project Information', 'crosswinds-blocks' ) }>
					<TextControl
						label={ __( 'Project Client', 'crosswinds-blocks' ) }
						value={ portafoglioClient }
						onChange={ ( value ) => setAttributes( { portafoglioClient: value } ) }
					/>
					{ __( 'Project Date', 'crosswinds-blocks' ) }
					<DatePicker
						currentDate={ portafoglioDate }
						onChange={ ( value ) => setAttributes( { portafoglioDate: value } ) }
						is12Hour={ true }
						__nextRemoveHelpButton
						__nextRemoveResetButton
					/>
				</PanelBody>
			</InspectorControls>
		</>
	);

	return (
		<>
			{ inspectorControls }
			<p { ...useBlockProps() }>
				{ clientName }
				{ dateString }
				<strong>{ __( 'Category: ', 'portafoglio' ) }</strong> { termsList } <br />
			</p>
		</>
	);
}
