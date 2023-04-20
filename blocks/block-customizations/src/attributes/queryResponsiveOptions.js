/* Add custom attribute to image block, in Sidebar */
const { __ } = wp.i18n;

// Enable custom attributes on Image block
const enableSidebarSelectOnBlocks = [
    'core/query',
];

const { createHigherOrderComponent } = wp.compose;
const { Fragment } = wp.element;
const { InspectorControls } = wp.blockEditor;
const {
	PanelBody,
	SelectControl,
	ToggleControl,
	RangeControl,
} = wp.components;

import classnames from 'classnames'

import '../styles/queryResponsiveOptions.scss';

/**
 * Declare our custom attribute
 */
const setQueryResponsiveOptionsAttribute = ( settings, name ) => {
    // Do nothing if it's another block than our defined ones.
    if ( ! enableSidebarSelectOnBlocks.includes( name ) ) {
        return settings;
    }

    return Object.assign( {}, settings, {
        attributes: Object.assign( {}, settings.attributes, {
			numTabletColumns: { type: 'number', default: 2 },
			numMobileColumns: { type: 'number', default: 1 },
        } ),
    } );
};
wp.hooks.addFilter(
    'blocks.registerBlockType',
    'crosswinds-blocks/set-query-responsive-options-attribute',
    setQueryResponsiveOptionsAttribute
);

/**
 * Add Custom Select to Image Sidebar
 */
const withQueryResponsiveOptions = createHigherOrderComponent( ( BlockEdit ) => {
    return ( props ) => {

        // If current block is not allowed
    	if ( ! enableSidebarSelectOnBlocks.includes( props.name ) ) {
            return (
                <BlockEdit { ...props } />
            );
        }

        const { attributes, setAttributes } = props;
        const {
			numTabletColumns,
			numMobileColumns,
		} = attributes;

        return (
            <Fragment>
                <BlockEdit { ...props } />
                <InspectorControls>
                	<PanelBody
    	                title={ __( 'Responsive Options', 'crosswinds-blocks' ) }
    	            >

						<RangeControl
							label={ __( 'Tablet Columns', 'crosswinds-blocks' ) }
							onChange={ ( value ) =>
								setAttributes( { numTabletColumns: value } )
							}
							value={ numTabletColumns || '' }
							min={ 1 }
							max={ 4 }
							initialPosition={ 2 }
							allowReset={ true }
							resetFallbackValue={ 2 }
						/>

						<RangeControl
							label={ __( 'Mobile Columns', 'crosswinds-blocks' ) }
							onChange={ ( value ) =>
								setAttributes( { numMobileColumns: value } )
							}
							value={ numMobileColumns || '' }
							min={ 1 }
							max={ 2 }
							initialPosition={ 1 }
							allowReset={ true }
							resetFallbackValue={ 1 }
						/>
	                </PanelBody>
                </InspectorControls>
            </Fragment>
        );
    };
}, 'withQueryResponsiveOptions' );

wp.hooks.addFilter(
    'editor.BlockEdit',
    'crosswinds-blocks/with-query-responsive-options',
    withQueryResponsiveOptions
);


/**
 * Add custom class to block in Edit
 */
const withQueryResponsiveOptionsProp = createHigherOrderComponent( ( BlockListBlock ) => {
    return ( props ) => {

        // If current block is not allowed
        if ( ! enableSidebarSelectOnBlocks.includes( props.name ) ) {
            return (
                <BlockListBlock { ...props } />
            );
        }

        const { attributes } = props;
        const {
			numTabletColumns,
			numMobileColumns,
		} = attributes;

		const gridClasses = classnames(
			`query-loop-has-${ numTabletColumns }-tablet-columns`,
			`query-loop-has-${ numMobileColumns }-mobile-columns`,
		);

        return <BlockListBlock { ...props } className={ gridClasses } />;
    };
}, 'withQueryResponsiveOptionsProp' );

wp.hooks.addFilter(
    'editor.BlockListBlock',
    'crosswinds-blocks/with-query-responsive-options-prop',
    withQueryResponsiveOptionsProp
);


/**
 * Save our custom attribute
 */
const saveQueryResponsiveOptionsAttribute = ( extraProps, blockType, attributes ) => {
    // Do nothing if it's another block than our defined ones.
    if ( enableSidebarSelectOnBlocks.includes( blockType.name ) ) {
        const {
			numTabletColumns,
			numMobileColumns,
		} = attributes;

		const gridClasses = classnames(
			`query-loop-has-${ numTabletColumns }-tablet-columns`,
			`query-loop-has-${ numMobileColumns }-mobile-columns`,
		);
        extraProps.className = classnames( extraProps.className,
			`query-loop-has-${ numTabletColumns }-tablet-columns`,
			`query-loop-has-${ numMobileColumns }-mobile-columns`
		);
    }

    return extraProps;

};
wp.hooks.addFilter(
    'blocks.getSaveContent.extraProps',
    'crosswinds-blocks/save-query-responsive-options-attribute',
    saveQueryResponsiveOptionsAttribute
);
