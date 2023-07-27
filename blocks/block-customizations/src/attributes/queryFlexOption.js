/* Add custom attribute to image block, in Sidebar */
const { __ } = wp.i18n;

// Enable custom attributes on Image block
const enableSidebarSelectOnBlocks = [
    'core/post-template',
];

const { createHigherOrderComponent } = wp.compose;
const { Fragment } = wp.element;
const { InspectorControls } = wp.blockEditor;
const { PanelBody, SelectControl, ToggleControl } = wp.components;

import classnames from 'classnames'

import '../styles/queryFlexOption.scss';

/**
 * Declare our custom attribute
 */
const setQueryFlexOptionAttribute = ( settings, name ) => {
    // Do nothing if it's another block than our defined ones.
    if ( ! enableSidebarSelectOnBlocks.includes( name ) ) {
        return settings;
    }

    return Object.assign( {}, settings, {
        attributes: Object.assign( {}, settings.attributes, {
			cbUseFlex: { type: 'boolean' },
        } ),
    } );
};
wp.hooks.addFilter(
    'blocks.registerBlockType',
    'crosswinds-blocks/set-query-flex-option-attribute',
    setQueryFlexOptionAttribute
);

/**
 * Add Custom Select to Image Sidebar
 */
const withQueryFlexOption = createHigherOrderComponent( ( BlockEdit ) => {
    return ( props ) => {

        // If current block is not allowed
    	if ( ! enableSidebarSelectOnBlocks.includes( props.name ) ) {
            return (
                <BlockEdit { ...props } />
            );
        }

        const { attributes, setAttributes } = props;
        const { cbUseFlex } = attributes;

		console.log( attributes );

        return (
            <Fragment>
                <BlockEdit { ...props } />
                <InspectorControls>
                	<PanelBody
    	                title={ __( 'Query Post Block Layout Settings', 'crosswinds-blocks' ) }
    	            >
						<ToggleControl
							label={ __( 'Use Flexbox on Each Post Block?', 'crosswinds-blocks' ) }
							checked={ cbUseFlex }
							onChange={ () => setAttributes( { cbUseFlex: ! cbUseFlex } ) }
						/>

	                </PanelBody>
                </InspectorControls>
            </Fragment>
        );
    };
}, 'withQueryFlexOption' );

wp.hooks.addFilter(
    'editor.BlockEdit',
    'crosswinds-blocks/with-query-flex-option',
    withQueryFlexOption
);


/**
 * Add custom class to block in Edit
 */
const withQueryFlexOptionProp = createHigherOrderComponent( ( BlockListBlock ) => {
    return ( props ) => {

        // If current block is not allowed
        if ( ! enableSidebarSelectOnBlocks.includes( props.name ) ) {
            return (
                <BlockListBlock { ...props } />
            );
        }

        const { attributes } = props;
        const { cbUseFlex } = attributes;

        if ( cbUseFlex ) {
            return <BlockListBlock { ...props } className={ 'cb-flex-layout' } />;
        } else {
            return <BlockListBlock { ...props } />;
        }
    };
}, 'withQueryFlexOptionProp' );

wp.hooks.addFilter(
    'editor.BlockListBlock',
    'crosswinds-blocks/with-query-flex-option-prop',
    withQueryFlexOptionProp
);


/**
 * Save our custom attribute
 */
const saveQueryFlexOptionAttribute = ( extraProps, blockType, attributes ) => {
    // Do nothing if it's another block than our defined ones.
    if ( enableSidebarSelectOnBlocks.includes( blockType.name ) ) {
        const { cbUseFlex } = attributes;
        if ( cbUseFlex ) {
            extraProps.className = classnames( extraProps.className, 'cb-flex-layout' );
        }
    }

    return extraProps;

};
wp.hooks.addFilter(
    'blocks.getSaveContent.extraProps',
    'crosswinds-blocks/save-query-flex-option-attribute',
    saveQueryFlexOptionAttribute
);
