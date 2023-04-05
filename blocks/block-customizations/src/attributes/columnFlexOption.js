/* Add custom attribute to image block, in Sidebar */
const { __ } = wp.i18n;

// Enable custom attributes on Image block
const enableSidebarSelectOnBlocks = [
    'core/column',
];

const { createHigherOrderComponent } = wp.compose;
const { Fragment } = wp.element;
const { InspectorControls } = wp.blockEditor;
const { PanelBody, SelectControl, ToggleControl } = wp.components;

import classnames from 'classnames'

import '../styles/columnFlexOption.scss';

/**
 * Declare our custom attribute
 */
const setColumnFlexOptionAttribute = ( settings, name ) => {
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
    'crosswinds-blocks/set-column-flex-option-attribute',
    setColumnFlexOptionAttribute
);

/**
 * Add Custom Select to Image Sidebar
 */
const withColumnFlexOption = createHigherOrderComponent( ( BlockEdit ) => {
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
    	                title={ __( 'Column Layout Settings', 'crosswinds-blocks' ) }
    	            >
						<ToggleControl
							label={ __( 'Use Flexbox on Column?', 'crosswinds-blocks' ) }
							checked={ cbUseFlex }
							onChange={ () => setAttributes( { cbUseFlex: ! cbUseFlex } ) }
						/>

	                </PanelBody>
                </InspectorControls>
            </Fragment>
        );
    };
}, 'withColumnFlexOption' );

wp.hooks.addFilter(
    'editor.BlockEdit',
    'crosswinds-blocks/with-column-flex-option',
    withColumnFlexOption
);


/**
 * Add custom class to block in Edit
 */
const withColumnFlexOptionProp = createHigherOrderComponent( ( BlockListBlock ) => {
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
}, 'withColumnFlexOptionProp' );

wp.hooks.addFilter(
    'editor.BlockListBlock',
    'crosswinds-blocks/with-column-flex-option-prop',
    withColumnFlexOptionProp
);


/**
 * Save our custom attribute
 */
const saveColumnFlexOptionAttribute = ( extraProps, blockType, attributes ) => {
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
    'crosswinds-blocks/save-column-flex-option-attribute',
    saveColumnFlexOptionAttribute
);
