/* Add custom attribute to image block, in Sidebar */
const { __ } = wp.i18n;

// Enable custom attributes on Image block
const enableSidebarSelectOnBlocks = [
    'core/group',
];

const { createHigherOrderComponent } = wp.compose;
const { Fragment } = wp.element;
const { InspectorControls } = wp.blockEditor;
const { PanelBody, SelectControl, ToggleControl } = wp.components;

import classnames from 'classnames'

import '../styles/groupInnerLayout.scss';

/**
 * Declare our custom attribute
 */
const setGroupInnerLayoutAttribute = ( settings, name ) => {
    // Do nothing if it's another block than our defined ones.
    if ( ! enableSidebarSelectOnBlocks.includes( name ) ) {
        return settings;
    }

    return Object.assign( {}, settings, {
        attributes: Object.assign( {}, settings.attributes, {
			cbUseFlex: { type: 'boolean' },
            cbInnerLayout: { type: 'string' },
			cbFillHeight: { type: 'boolean' },
        } ),
    } );
};
wp.hooks.addFilter(
    'blocks.registerBlockType',
    'crosswinds-blocks/set-group-inner-layout-attribute',
    setGroupInnerLayoutAttribute
);

/**
 * Add Custom Select to Image Sidebar
 */
const withGroupInnerLayout = createHigherOrderComponent( ( BlockEdit ) => {
    return ( props ) => {

        // If current block is not allowed
    	if ( ! enableSidebarSelectOnBlocks.includes( props.name ) ) {
            return (
                <BlockEdit { ...props } />
            );
        }

        const { attributes, setAttributes } = props;
        const { cbInnerLayout, cbUseFlex, cbFillHeight } = attributes;

        return (
            <Fragment>
                <BlockEdit { ...props } />
                <InspectorControls>
                	<PanelBody
    	                title={ __( 'Group Spacing', 'crosswinds-blocks' ) }
    	            >
						<ToggleControl
							label={ __( 'Use Flexbox on Group?', 'crosswinds-blocks' ) }
							checked={ cbUseFlex }
							onChange={ ( value ) => setAttributes( {
								cbUseFlex: value,
							} ) }
						/>

						<ToggleControl
							label={ __( 'Have Group Fill Height of Parent Block?', 'crosswinds-blocks' ) }
							checked={ cbFillHeight }
							onChange={ ( value ) => setAttributes( {
								cbFillHeight: value,
							} ) }
						/>
	                    <SelectControl
                            label={ __( 'Inner Spacing', 'crosswinds-blocks' ) }
                            value={ cbInnerLayout }
                            options={ [
                                {
									value: 'normal',
									label: __( 'Normal Spacing', 'crosswinds-blocks' ),
								},
								{
									value: 'equal',
									label: __( 'Equal Spacing', 'crosswinds-blocks' ),
								},
								{
									value: 'center',
									label: __( 'Center Align', 'crosswinds-blocks' ),
								},
								{
									value: 'bottom',
									label: __( 'All Bottom', 'crosswinds-blocks' ),
								},
								{
									value: 'last-bottom',
									label: __( 'Last Item at Bottom', 'crosswinds-blocks' ),
								},
                            ] }
                            onChange={ ( value ) => {
                                setAttributes( {
                                    cbInnerLayout: value,
                                } );
                            } }
                        />
	                </PanelBody>
                </InspectorControls>
            </Fragment>
        );
    };
}, 'withGroupInnerLayout' );

wp.hooks.addFilter(
    'editor.BlockEdit',
    'crosswinds-blocks/with-group-inner-layout',
    withGroupInnerLayout
);


/**
 * Add custom class to block in Edit
 */
const withGroupInnerLayoutProp = createHigherOrderComponent( ( BlockListBlock ) => {
    return ( props ) => {

        // If current block is not allowed
        if ( ! enableSidebarSelectOnBlocks.includes( props.name ) ) {
            return (
                <BlockListBlock { ...props } />
            );
        }

        const { attributes } = props;
        const { cbInnerLayout, cbUseFlex, cbFillHeight } = attributes;

        if ( cbInnerLayout && cbUseFlex && cbFillHeight ) {
            return <BlockListBlock { ...props } className={ cbInnerLayout + '-layout cb-fill-height-parent' } />;
        } else {
            return <BlockListBlock { ...props } />;
        }
    };
}, 'withGroupInnerLayoutProp' );

wp.hooks.addFilter(
    'editor.BlockListBlock',
    'crosswinds-blocks/with-group-inner-layout-prop',
    withGroupInnerLayoutProp
);


/**
 * Save our custom attribute
 */
const saveGroupInnerLayoutAttribute = ( extraProps, blockType, attributes ) => {
    // Do nothing if it's another block than our defined ones.
    if ( enableSidebarSelectOnBlocks.includes( blockType.name ) ) {
        const { cbInnerLayout, cbUseFlex, cbFillHeight } = attributes;
        if ( cbInnerLayout && cbUseFlex && cbFillHeight ) {
            extraProps.className = classnames( extraProps.className, cbInnerLayout + '-layout cb-fill-height-parent' );
        }
    }

    return extraProps;

};
wp.hooks.addFilter(
    'blocks.getSaveContent.extraProps',
    'crosswinds-blocks/save-group-inner-layout-attribute',
    saveGroupInnerLayoutAttribute
);
