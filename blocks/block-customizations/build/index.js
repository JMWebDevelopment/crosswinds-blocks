/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

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
        type: 'string',
        default: false
      },
      cbInnerLayout: {
        type: 'string'
      },
      cbFillHeight: {
        type: 'string',
        default: false
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

/***/ "./src/styles/groupInnerLayout.scss":
/*!******************************************!*\
  !*** ./src/styles/groupInnerLayout.scss ***!
  \******************************************/
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

})();

/******/ })()
;
//# sourceMappingURL=index.js.map