/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/attributes/columnFlexOption.js":
/*!********************************************!*\
  !*** ./src/attributes/columnFlexOption.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/extends */ "../node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ "../node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _styles_columnFlexOption_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../styles/columnFlexOption.scss */ "./src/styles/columnFlexOption.scss");


/* Add custom attribute to image block, in Sidebar */
const {
  __
} = wp.i18n;

// Enable custom attributes on Image block
const enableSidebarSelectOnBlocks = ['core/column'];
const {
  createHigherOrderComponent
} = wp.compose;
const {
  Fragment
} = wp.element;
const {
  InspectorControls
} = wp.blockEditor;
const {
  PanelBody,
  SelectControl,
  ToggleControl
} = wp.components;



/**
 * Declare our custom attribute
 */
const setColumnFlexOptionAttribute = (settings, name) => {
  // Do nothing if it's another block than our defined ones.
  if (!enableSidebarSelectOnBlocks.includes(name)) {
    return settings;
  }
  return Object.assign({}, settings, {
    attributes: Object.assign({}, settings.attributes, {
      cbUseFlex: {
        type: 'boolean'
      }
    })
  });
};
wp.hooks.addFilter('blocks.registerBlockType', 'crosswinds-blocks/set-column-flex-option-attribute', setColumnFlexOptionAttribute);

/**
 * Add Custom Select to Image Sidebar
 */
const withColumnFlexOption = createHigherOrderComponent(BlockEdit => {
  return props => {
    // If current block is not allowed
    if (!enableSidebarSelectOnBlocks.includes(props.name)) {
      return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(BlockEdit, props);
    }
    const {
      attributes,
      setAttributes
    } = props;
    const {
      cbUseFlex
    } = attributes;
    console.log(attributes);
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(BlockEdit, props), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(InspectorControls, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(PanelBody, {
      title: __('Column Layout Settings', 'crosswinds-blocks')
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(ToggleControl, {
      label: __('Use Flexbox on Column?', 'crosswinds-blocks'),
      checked: cbUseFlex,
      onChange: () => setAttributes({
        cbUseFlex: !cbUseFlex
      })
    }))));
  };
}, 'withColumnFlexOption');
wp.hooks.addFilter('editor.BlockEdit', 'crosswinds-blocks/with-column-flex-option', withColumnFlexOption);

/**
 * Add custom class to block in Edit
 */
const withColumnFlexOptionProp = createHigherOrderComponent(BlockListBlock => {
  return props => {
    // If current block is not allowed
    if (!enableSidebarSelectOnBlocks.includes(props.name)) {
      return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(BlockListBlock, props);
    }
    const {
      attributes
    } = props;
    const {
      cbUseFlex
    } = attributes;
    if (cbUseFlex) {
      return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(BlockListBlock, (0,_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, props, {
        className: 'cb-flex-layout'
      }));
    } else {
      return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(BlockListBlock, props);
    }
  };
}, 'withColumnFlexOptionProp');
wp.hooks.addFilter('editor.BlockListBlock', 'crosswinds-blocks/with-column-flex-option-prop', withColumnFlexOptionProp);

/**
 * Save our custom attribute
 */
const saveColumnFlexOptionAttribute = (extraProps, blockType, attributes) => {
  // Do nothing if it's another block than our defined ones.
  if (enableSidebarSelectOnBlocks.includes(blockType.name)) {
    const {
      cbUseFlex
    } = attributes;
    if (cbUseFlex) {
      extraProps.className = classnames__WEBPACK_IMPORTED_MODULE_2___default()(extraProps.className, 'cb-flex-layout');
    }
  }
  return extraProps;
};
wp.hooks.addFilter('blocks.getSaveContent.extraProps', 'crosswinds-blocks/save-column-flex-option-attribute', saveColumnFlexOptionAttribute);

/***/ }),

/***/ "./src/attributes/groupInnerLayout.js":
/*!********************************************!*\
  !*** ./src/attributes/groupInnerLayout.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/extends */ "../node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ "../node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _styles_groupInnerLayout_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../styles/groupInnerLayout.scss */ "./src/styles/groupInnerLayout.scss");


/* Add custom attribute to image block, in Sidebar */
const {
  __
} = wp.i18n;

// Enable custom attributes on Image block
const enableSidebarSelectOnBlocks = ['core/group'];
const {
  createHigherOrderComponent
} = wp.compose;
const {
  Fragment
} = wp.element;
const {
  InspectorControls
} = wp.blockEditor;
const {
  PanelBody,
  SelectControl,
  ToggleControl
} = wp.components;



/**
 * Declare our custom attribute
 */
const setGroupInnerLayoutAttribute = (settings, name) => {
  // Do nothing if it's another block than our defined ones.
  if (!enableSidebarSelectOnBlocks.includes(name)) {
    return settings;
  }
  return Object.assign({}, settings, {
    attributes: Object.assign({}, settings.attributes, {
      cbUseFlex: {
        type: 'boolean'
      },
      cbInnerLayout: {
        type: 'string'
      },
      cbFillHeight: {
        type: 'boolean'
      }
    })
  });
};
wp.hooks.addFilter('blocks.registerBlockType', 'crosswinds-blocks/set-group-inner-layout-attribute', setGroupInnerLayoutAttribute);

/**
 * Add Custom Select to Image Sidebar
 */
const withGroupInnerLayout = createHigherOrderComponent(BlockEdit => {
  return props => {
    // If current block is not allowed
    if (!enableSidebarSelectOnBlocks.includes(props.name)) {
      return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(BlockEdit, props);
    }
    const {
      attributes,
      setAttributes
    } = props;
    const {
      cbInnerLayout,
      cbUseFlex,
      cbFillHeight
    } = attributes;
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(BlockEdit, props), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(InspectorControls, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(PanelBody, {
      title: __('Group Spacing', 'crosswinds-blocks')
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(ToggleControl, {
      label: __('Use Flexbox on Group?', 'crosswinds-blocks'),
      checked: cbUseFlex,
      onChange: value => setAttributes({
        cbUseFlex: value
      })
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(ToggleControl, {
      label: __('Have Group Fill Height of Parent Block?', 'crosswinds-blocks'),
      checked: cbFillHeight,
      onChange: value => setAttributes({
        cbFillHeight: value
      })
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(SelectControl, {
      label: __('Inner Spacing', 'crosswinds-blocks'),
      value: cbInnerLayout,
      options: [{
        value: 'normal',
        label: __('Normal Spacing', 'crosswinds-blocks')
      }, {
        value: 'equal',
        label: __('Equal Spacing', 'crosswinds-blocks')
      }, {
        value: 'center',
        label: __('Center Align', 'crosswinds-blocks')
      }, {
        value: 'bottom',
        label: __('All Bottom', 'crosswinds-blocks')
      }, {
        value: 'last-bottom',
        label: __('Last Item at Bottom', 'crosswinds-blocks')
      }],
      onChange: value => {
        setAttributes({
          cbInnerLayout: value
        });
      }
    }))));
  };
}, 'withGroupInnerLayout');
wp.hooks.addFilter('editor.BlockEdit', 'crosswinds-blocks/with-group-inner-layout', withGroupInnerLayout);

/**
 * Add custom class to block in Edit
 */
const withGroupInnerLayoutProp = createHigherOrderComponent(BlockListBlock => {
  return props => {
    // If current block is not allowed
    if (!enableSidebarSelectOnBlocks.includes(props.name)) {
      return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(BlockListBlock, props);
    }
    const {
      attributes
    } = props;
    const {
      cbInnerLayout,
      cbUseFlex,
      cbFillHeight
    } = attributes;
    if (cbInnerLayout && cbUseFlex && cbFillHeight) {
      return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(BlockListBlock, (0,_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, props, {
        className: cbInnerLayout + '-layout cb-fill-height-parent'
      }));
    } else {
      return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(BlockListBlock, props);
    }
  };
}, 'withGroupInnerLayoutProp');
wp.hooks.addFilter('editor.BlockListBlock', 'crosswinds-blocks/with-group-inner-layout-prop', withGroupInnerLayoutProp);

/**
 * Save our custom attribute
 */
const saveGroupInnerLayoutAttribute = (extraProps, blockType, attributes) => {
  // Do nothing if it's another block than our defined ones.
  if (enableSidebarSelectOnBlocks.includes(blockType.name)) {
    const {
      cbInnerLayout,
      cbUseFlex,
      cbFillHeight
    } = attributes;
    if (cbInnerLayout && cbUseFlex && cbFillHeight) {
      extraProps.className = classnames__WEBPACK_IMPORTED_MODULE_2___default()(extraProps.className, cbInnerLayout + '-layout cb-fill-height-parent');
    }
  }
  return extraProps;
};
wp.hooks.addFilter('blocks.getSaveContent.extraProps', 'crosswinds-blocks/save-group-inner-layout-attribute', saveGroupInnerLayoutAttribute);

/***/ }),

/***/ "./src/attributes/queryFlexOption.js":
/*!*******************************************!*\
  !*** ./src/attributes/queryFlexOption.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/extends */ "../node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ "../node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _styles_queryFlexOption_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../styles/queryFlexOption.scss */ "./src/styles/queryFlexOption.scss");


/* Add custom attribute to image block, in Sidebar */
const {
  __
} = wp.i18n;

// Enable custom attributes on Image block
const enableSidebarSelectOnBlocks = ['core/query'];
const {
  createHigherOrderComponent
} = wp.compose;
const {
  Fragment
} = wp.element;
const {
  InspectorControls
} = wp.blockEditor;
const {
  PanelBody,
  SelectControl,
  ToggleControl
} = wp.components;



/**
 * Declare our custom attribute
 */
const setQueryFlexOptionAttribute = (settings, name) => {
  // Do nothing if it's another block than our defined ones.
  if (!enableSidebarSelectOnBlocks.includes(name)) {
    return settings;
  }
  return Object.assign({}, settings, {
    attributes: Object.assign({}, settings.attributes, {
      cbUseFlex: {
        type: 'boolean'
      }
    })
  });
};
wp.hooks.addFilter('blocks.registerBlockType', 'crosswinds-blocks/set-query-flex-option-attribute', setQueryFlexOptionAttribute);

/**
 * Add Custom Select to Image Sidebar
 */
const withQueryFlexOption = createHigherOrderComponent(BlockEdit => {
  return props => {
    // If current block is not allowed
    if (!enableSidebarSelectOnBlocks.includes(props.name)) {
      return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(BlockEdit, props);
    }
    const {
      attributes,
      setAttributes
    } = props;
    const {
      cbUseFlex
    } = attributes;
    console.log(attributes);
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(BlockEdit, props), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(InspectorControls, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(PanelBody, {
      title: __('Query Post Block Layout Settings', 'crosswinds-blocks')
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(ToggleControl, {
      label: __('Use Flexbox on Each Post Block?', 'crosswinds-blocks'),
      checked: cbUseFlex,
      onChange: () => setAttributes({
        cbUseFlex: !cbUseFlex
      })
    }))));
  };
}, 'withQueryFlexOption');
wp.hooks.addFilter('editor.BlockEdit', 'crosswinds-blocks/with-query-flex-option', withQueryFlexOption);

/**
 * Add custom class to block in Edit
 */
const withQueryFlexOptionProp = createHigherOrderComponent(BlockListBlock => {
  return props => {
    // If current block is not allowed
    if (!enableSidebarSelectOnBlocks.includes(props.name)) {
      return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(BlockListBlock, props);
    }
    const {
      attributes
    } = props;
    const {
      cbUseFlex
    } = attributes;
    if (cbUseFlex) {
      return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(BlockListBlock, (0,_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, props, {
        className: 'cb-flex-layout'
      }));
    } else {
      return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(BlockListBlock, props);
    }
  };
}, 'withQueryFlexOptionProp');
wp.hooks.addFilter('editor.BlockListBlock', 'crosswinds-blocks/with-query-flex-option-prop', withQueryFlexOptionProp);

/**
 * Save our custom attribute
 */
const saveQueryFlexOptionAttribute = (extraProps, blockType, attributes) => {
  // Do nothing if it's another block than our defined ones.
  if (enableSidebarSelectOnBlocks.includes(blockType.name)) {
    const {
      cbUseFlex
    } = attributes;
    if (cbUseFlex) {
      extraProps.className = classnames__WEBPACK_IMPORTED_MODULE_2___default()(extraProps.className, 'cb-flex-layout');
    }
  }
  return extraProps;
};
wp.hooks.addFilter('blocks.getSaveContent.extraProps', 'crosswinds-blocks/save-query-flex-option-attribute', saveQueryFlexOptionAttribute);

/***/ }),

/***/ "./src/attributes/queryResponsiveOptions.js":
/*!**************************************************!*\
  !*** ./src/attributes/queryResponsiveOptions.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/extends */ "../node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ "../node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _styles_queryResponsiveOptions_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../styles/queryResponsiveOptions.scss */ "./src/styles/queryResponsiveOptions.scss");


/* Add custom attribute to image block, in Sidebar */
const {
  __
} = wp.i18n;

// Enable custom attributes on Image block
const enableSidebarSelectOnBlocks = ['core/query'];
const {
  createHigherOrderComponent
} = wp.compose;
const {
  Fragment
} = wp.element;
const {
  InspectorControls
} = wp.blockEditor;
const {
  PanelBody,
  SelectControl,
  ToggleControl,
  RangeControl
} = wp.components;



/**
 * Declare our custom attribute
 */
const setQueryResponsiveOptionsAttribute = (settings, name) => {
  // Do nothing if it's another block than our defined ones.
  if (!enableSidebarSelectOnBlocks.includes(name)) {
    return settings;
  }
  return Object.assign({}, settings, {
    attributes: Object.assign({}, settings.attributes, {
      numTabletColumns: {
        type: 'number',
        default: 2
      },
      numMobileColumns: {
        type: 'number',
        default: 1
      }
    })
  });
};
wp.hooks.addFilter('blocks.registerBlockType', 'crosswinds-blocks/set-query-responsive-options-attribute', setQueryResponsiveOptionsAttribute);

/**
 * Add Custom Select to Image Sidebar
 */
const withQueryResponsiveOptions = createHigherOrderComponent(BlockEdit => {
  return props => {
    // If current block is not allowed
    if (!enableSidebarSelectOnBlocks.includes(props.name)) {
      return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(BlockEdit, props);
    }
    const {
      attributes,
      setAttributes
    } = props;
    const {
      numTabletColumns,
      numMobileColumns
    } = attributes;
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(BlockEdit, props), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(InspectorControls, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(PanelBody, {
      title: __('Responsive Options', 'crosswinds-blocks')
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(RangeControl, {
      label: __('Tablet Columns', 'crosswinds-blocks'),
      onChange: value => setAttributes({
        numTabletColumns: value
      }),
      value: numTabletColumns || '',
      min: 1,
      max: 4,
      initialPosition: 2,
      allowReset: true,
      resetFallbackValue: 2
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(RangeControl, {
      label: __('Mobile Columns', 'crosswinds-blocks'),
      onChange: value => setAttributes({
        numMobileColumns: value
      }),
      value: numMobileColumns || '',
      min: 1,
      max: 2,
      initialPosition: 1,
      allowReset: true,
      resetFallbackValue: 1
    }))));
  };
}, 'withQueryResponsiveOptions');
wp.hooks.addFilter('editor.BlockEdit', 'crosswinds-blocks/with-query-responsive-options', withQueryResponsiveOptions);

/**
 * Add custom class to block in Edit
 */
const withQueryResponsiveOptionsProp = createHigherOrderComponent(BlockListBlock => {
  return props => {
    // If current block is not allowed
    if (!enableSidebarSelectOnBlocks.includes(props.name)) {
      return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(BlockListBlock, props);
    }
    const {
      attributes
    } = props;
    const {
      numTabletColumns,
      numMobileColumns
    } = attributes;
    const gridClasses = classnames__WEBPACK_IMPORTED_MODULE_2___default()(`query-loop-has-${numTabletColumns}-tablet-columns`, `query-loop-has-${numMobileColumns}-mobile-columns`);
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(BlockListBlock, (0,_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, props, {
      className: gridClasses
    }));
  };
}, 'withQueryResponsiveOptionsProp');
wp.hooks.addFilter('editor.BlockListBlock', 'crosswinds-blocks/with-query-responsive-options-prop', withQueryResponsiveOptionsProp);

/**
 * Save our custom attribute
 */
const saveQueryResponsiveOptionsAttribute = (extraProps, blockType, attributes) => {
  // Do nothing if it's another block than our defined ones.
  if (enableSidebarSelectOnBlocks.includes(blockType.name)) {
    const {
      numTabletColumns,
      numMobileColumns
    } = attributes;
    const gridClasses = classnames__WEBPACK_IMPORTED_MODULE_2___default()(`query-loop-has-${numTabletColumns}-tablet-columns`, `query-loop-has-${numMobileColumns}-mobile-columns`);
    extraProps.className = classnames__WEBPACK_IMPORTED_MODULE_2___default()(extraProps.className, `query-loop-has-${numTabletColumns}-tablet-columns`, `query-loop-has-${numMobileColumns}-mobile-columns`);
  }
  return extraProps;
};
wp.hooks.addFilter('blocks.getSaveContent.extraProps', 'crosswinds-blocks/save-query-responsive-options-attribute', saveQueryResponsiveOptionsAttribute);

/***/ }),

/***/ "../node_modules/classnames/index.js":
/*!*******************************************!*\
  !*** ../node_modules/classnames/index.js ***!
  \*******************************************/
/***/ ((module, exports) => {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/
/* global define */

(function () {
	'use strict';

	var hasOwn = {}.hasOwnProperty;
	var nativeCodeString = '[native code]';

	function classNames() {
		var classes = [];

		for (var i = 0; i < arguments.length; i++) {
			var arg = arguments[i];
			if (!arg) continue;

			var argType = typeof arg;

			if (argType === 'string' || argType === 'number') {
				classes.push(arg);
			} else if (Array.isArray(arg)) {
				if (arg.length) {
					var inner = classNames.apply(null, arg);
					if (inner) {
						classes.push(inner);
					}
				}
			} else if (argType === 'object') {
				if (arg.toString !== Object.prototype.toString && !arg.toString.toString().includes('[native code]')) {
					classes.push(arg.toString());
					continue;
				}

				for (var key in arg) {
					if (hasOwn.call(arg, key) && arg[key]) {
						classes.push(key);
					}
				}
			}
		}

		return classes.join(' ');
	}

	if ( true && module.exports) {
		classNames.default = classNames;
		module.exports = classNames;
	} else if (true) {
		// register as 'classnames', consistent with npm package name
		!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = (function () {
			return classNames;
		}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	} else {}
}());


/***/ }),

/***/ "./src/styles/columnFlexOption.scss":
/*!******************************************!*\
  !*** ./src/styles/columnFlexOption.scss ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/styles/groupInnerLayout.scss":
/*!******************************************!*\
  !*** ./src/styles/groupInnerLayout.scss ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/styles/queryFlexOption.scss":
/*!*****************************************!*\
  !*** ./src/styles/queryFlexOption.scss ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/styles/queryResponsiveOptions.scss":
/*!************************************************!*\
  !*** ./src/styles/queryResponsiveOptions.scss ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "@wordpress/element":
/*!*********************************!*\
  !*** external ["wp","element"] ***!
  \*********************************/
/***/ ((module) => {

"use strict";
module.exports = window["wp"]["element"];

/***/ }),

/***/ "../node_modules/@babel/runtime/helpers/esm/extends.js":
/*!*************************************************************!*\
  !*** ../node_modules/@babel/runtime/helpers/esm/extends.js ***!
  \*************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _extends)
/* harmony export */ });
function _extends() {
  _extends = Object.assign ? Object.assign.bind() : function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends.apply(this, arguments);
}

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _attributes_groupInnerLayout_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./attributes/groupInnerLayout.js */ "./src/attributes/groupInnerLayout.js");
/* harmony import */ var _attributes_queryFlexOption_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./attributes/queryFlexOption.js */ "./src/attributes/queryFlexOption.js");
/* harmony import */ var _attributes_columnFlexOption_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./attributes/columnFlexOption.js */ "./src/attributes/columnFlexOption.js");
/* harmony import */ var _attributes_queryResponsiveOptions_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./attributes/queryResponsiveOptions.js */ "./src/attributes/queryResponsiveOptions.js");




})();

/******/ })()
;
//# sourceMappingURL=index.js.map