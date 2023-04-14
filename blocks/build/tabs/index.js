/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/tabs/edit.js":
/*!**************************!*\
  !*** ./src/tabs/edit.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Edit": () => (/* binding */ Edit),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _editor_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./editor.scss */ "./src/tabs/editor.scss");

/**
 * External dependencies
 */


/**
 * WordPress dependencies
 */




/**
 * Internal dependencies
 */

function Edit(props) {
  const {
    attributes,
    setAttributes,
    separatorColor,
    tabsBorderColor,
    tabTextColor,
    tabTextHoverColor,
    tabBackgroundColor,
    tabBackgroundHoverColor,
    setSeparatorColor,
    setTabsBorderColor,
    setTabTextColor,
    setTabTextHoverColor,
    setTabBackgroundColor,
    setTabBackgroundHoverColor
  } = props;
  const {
    tabs,
    tabsAlign,
    tabsSpacing,
    tabsBorderWidth,
    separatorWidth,
    separatorColorValue,
    tabsBorderColorValue,
    tabTextColorValue,
    tabTextHoverColorValue,
    tabBackgroundColorValue,
    tabBackgroundHoverColorValue,
    tabsPaddingTopBottom,
    tabsPaddingLeftRight
  } = attributes;
  const blockProps = (0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4__.useBlockProps)({
    className: 'align-tabs-' + tabsAlign + ' space-tabs-' + tabsSpacing
  });
  const innerBlocksProps = (0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4__.useInnerBlocksProps)({
    allowedBlocks: ['crosswinds-blocks/tab-section'],
    template: [['crosswinds-blocks/tab-section', {}]]
  });
  const tabsAlignOptions = [{
    value: 'horizontal',
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Horizontal', 'crosswinds-blocks')
  }, {
    value: 'vertical',
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Vertical', 'crosswinds-blocks')
  }];
  const tabsSpacingOptions = [{
    value: 'start',
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Start (Top/Left)', 'crosswinds-blocks')
  }, {
    value: 'end',
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('End (Bottom/Right)', 'crosswinds-blocks')
  }, {
    value: 'center',
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Center', 'crosswinds-blocks')
  }, {
    value: 'equal',
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Equal', 'crosswinds-blocks')
  }];
  const handleAddLocation = () => {
    const updatedTabs = [...tabs];
    updatedTabs.push({
      text: '',
      target: ''
    });
    setAttributes({
      tabs: updatedTabs
    });
  };
  const handleRemoveLocation = index => {
    const updatedTabs = [...tabs];
    updatedTabs.splice(index, 1);
    setAttributes({
      tabs: updatedTabs
    });
  };
  const handleTextChange = (text, index) => {
    const updatedTabs = [...tabs];
    updatedTabs[index].text = text;
    setAttributes({
      tabs: updatedTabs
    });
  };
  const handleTargetChange = (target, index) => {
    const updatedTabs = [...tabs];
    target = target.replace(/\s+/g, '-').toLowerCase();
    updatedTabs[index].target = target;
    setAttributes({
      tabs: updatedTabs
    });
  };
  const tabStyles = {
    backgroundColor: tabBackgroundColorValue,
    color: tabTextColorValue,
    borderWidth: tabsBorderWidth,
    borderColor: tabsBorderColorValue,
    borderStyle: 'solid',
    padding: tabsPaddingTopBottom + 'px ' + tabsPaddingLeftRight + 'px'
  };
  let tabsFields, tabsDisplay;
  if (tabs.length) {
    tabsFields = tabs.map((tab, index) => {
      return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
        key: index
      }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.TextControl, {
        className: "grf__location-address",
        placeholder: "",
        label: "Link Text",
        value: tabs[index].text,
        onChange: text => handleTextChange(text, index)
      }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.TextControl, {
        className: "grf__location-address",
        placeholder: "",
        label: "Link Target",
        value: tabs[index].target,
        onChange: target => handleTargetChange(target, index)
      }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.IconButton, {
        className: "grf__remove-location-address",
        icon: "no-alt",
        label: "Delete location",
        onClick: () => handleRemoveLocation(index)
      }));
    });
    tabsDisplay = tabs.map((tab, index) => {
      return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("li", {
        key: index,
        style: tabStyles
      }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("a", {
        href: '#' + tab.target
      }, tab.text));
    });
  }
  const inspectorControls = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4__.InspectorControls, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.PanelBody, {
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Tabs Settings', 'crosswinds-blocks')
  }, tabsFields, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.Button, {
    onClick: handleAddLocation.bind(this)
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Add Tab', 'crosswinds-blocks')), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.SelectControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Align Tabs', 'crosswinds-blocks'),
    value: tabsAlign,
    options: tabsAlignOptions,
    onChange: value => setAttributes({
      tabsAlign: value
    })
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.SelectControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Tabs Spacing', 'crosswinds-blocks'),
    value: tabsSpacing,
    options: tabsSpacingOptions,
    onChange: value => setAttributes({
      tabsSpacing: value
    })
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.PanelBody, {
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Tabs Styling', 'crosswinds-blocks')
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.RangeControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Separator width', 'crosswinds-blocks'),
    onChange: value => setAttributes({
      separatorWidth: value
    }),
    value: separatorWidth || '',
    min: 0,
    max: 25,
    initialPosition: 1,
    allowReset: true,
    resetFallbackValue: 1
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.RangeControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Tabs Borders width', 'crosswinds-blocks'),
    onChange: value => setAttributes({
      tabsBorderWidth: value
    }),
    value: tabsBorderWidth || '',
    min: 0,
    max: 25,
    initialPosition: 1,
    allowReset: true,
    resetFallbackValue: 1
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.RangeControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Tabs Padding Top/Bottom', 'crosswinds-blocks'),
    onChange: value => setAttributes({
      tabsPaddingTopBottom: value
    }),
    value: tabsPaddingTopBottom || '',
    min: 0,
    max: 100,
    initialPosition: 10,
    allowReset: true,
    resetFallbackValue: 10
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.RangeControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Tabs Padding Left/Right', 'crosswinds-blocks'),
    onChange: value => setAttributes({
      tabsPaddingLeftRight: value
    }),
    value: tabsPaddingLeftRight || '',
    min: 0,
    max: 100,
    initialPosition: 15,
    allowReset: true,
    resetFallbackValue: 10
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4__.__experimentalPanelColorGradientSettings, {
    className: "outermost-crosswinds-blocks__color-settings",
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Border Colors', 'crosswinds-blocks'),
    initialOpen: true,
    enableAlpha: true,
    settings: [{
      colorValue: separatorColor.color || separatorColorValue,
      onColorChange: colorValue => {
        setSeparatorColor(colorValue);
        setAttributes({
          separatorColorValue: colorValue
        });
      },
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Separator color', 'crosswinds-blocks')
    }, {
      colorValue: tabsBorderColor.color || tabsBorderColorValue,
      onColorChange: colorValue => {
        setTabsBorderColor(colorValue);
        setAttributes({
          tabsBorderColorValue: colorValue
        });
      },
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Tab borders color', 'crosswinds-blocks')
    }],
    __experimentalHasMultipleOrigins: true
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4__.__experimentalPanelColorGradientSettings, {
    className: "outermost-crosswinds-blocks__color-settings",
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Tab Colors', 'crosswinds-blocks'),
    initialOpen: true,
    enableAlpha: true,
    settings: [{
      colorValue: tabTextColor.color || tabTextColorValue,
      onColorChange: colorValue => {
        setTabTextColor(colorValue);
        setAttributes({
          tabTextColorValue: colorValue
        });
      },
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Text color', 'crosswinds-blocks')
    }, {
      colorValue: tabTextHoverColor.color || tabTextHoverColorValue,
      onColorChange: colorValue => {
        setTabTextHoverColor(colorValue);
        setAttributes({
          tabTextHoverColorValue: colorValue
        });
      },
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Text Hover color', 'crosswinds-blocks')
    }, {
      colorValue: tabBackgroundColor.color || tabBackgroundColorValue,
      onColorChange: colorValue => {
        setTabBackgroundColor(colorValue);
        setAttributes({
          tabBackgroundColorValue: colorValue
        });
      },
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Background color', 'crosswinds-blocks')
    }, {
      colorValue: tabBackgroundHoverColor.color || tabBackgroundHoverColorValue,
      onColorChange: colorValue => {
        setTabBackgroundHoverColor(colorValue);
        setAttributes({
          tabBackgroundHoverColorValue: colorValue
        });
      },
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Background Hover color', 'crosswinds-blocks')
    }],
    __experimentalHasMultipleOrigins: true
  }))));
  let tabListStyles;
  if ('horizontal' === tabsAlign) {
    tabListStyles = {
      borderBottomColor: separatorColorValue,
      borderBottomWidth: separatorWidth + 'px'
    };
  } else {
    tabListStyles = {
      borderRightColor: separatorColorValue,
      borderRightWidth: separatorWidth + 'px'
    };
  }
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, inspectorControls, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", blockProps, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "tabs-list"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("ul", {
    style: tabListStyles
  }, tabsDisplay)), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "tabs-container"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4__.InnerBlocks, {
    allowedBlocks: ['crosswinds-blocks/tab-section'],
    template: [['crosswinds-blocks/tab-section', {}]]
  }))));
}
const tabsColorAttributes = {
  separatorColor: 'separator-color',
  tabsBorderColor: 'tab-border-color',
  tabTextColor: 'tab-text-color',
  tabTextHoverColor: 'tab-text-hover-color',
  tabBackgroundColor: 'tab-background-color',
  tabBackgroundHoverColor: 'tab-background-hover-color'
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4__.withColors)(tabsColorAttributes)(Edit));

/***/ }),

/***/ "./src/tabs/index.js":
/*!***************************!*\
  !*** ./src/tabs/index.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./style.scss */ "./src/tabs/style.scss");
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./edit */ "./src/tabs/edit.js");
/* harmony import */ var _save__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./save */ "./src/tabs/save.js");
/* harmony import */ var _block_json__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./block.json */ "./src/tabs/block.json");

/**
 * Registers a new block provided a unique name and an object defining its behavior.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-registration/
 */


/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * All files containing `style` keyword are bundled together. The code used
 * gets applied both to the front of your site and to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */


/**
 * Internal dependencies
 */




/**
 * Every block starts by registering a new block type definition.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-registration/
 */
(0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__.registerBlockType)(_block_json__WEBPACK_IMPORTED_MODULE_5__.name, {
  /**
   * @see ./edit.js
   */
  icon: {
    src: (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 512 512"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
      fill: "#1b1930",
      class: "fa-primary",
      d: "M512 192v240c0 26.5-21.5 48-48 48h-416C21.5 480 0 458.5 0 432V192H512z"
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
      fill: "#3e7ea8",
      class: "fa-secondary",
      d: "M512 144V192H0V80C0 53.5 21.5 32 48 32h160l64 64h192C490.5 96 512 117.5 512 144z"
    }))
  },
  edit: _edit__WEBPACK_IMPORTED_MODULE_3__["default"],
  /**
   * @see ./save.js
   */
  save: _save__WEBPACK_IMPORTED_MODULE_4__["default"]
});

/***/ }),

/***/ "./src/tabs/save.js":
/*!**************************!*\
  !*** ./src/tabs/save.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ save)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__);


/**
 * External dependencies
 */


/**
 * WordPress dependencies
 */

function save(props) {
  console.log(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.useBlockProps);
  const {
    attributes
  } = props;
  const {
    anchor,
    tabs,
    tabsAlign,
    tabsSpacing,
    separatorWidth,
    tabsBorderWidth,
    separatorColorValue,
    tabsBorderColorValue,
    tabTextColorValue,
    tabTextHoverColorValue,
    tabBackgroundColorValue,
    tabBackgroundHoverColorValue,
    tabsPaddingTopBottom,
    tabsPaddingLeftRight
  } = attributes;
  const tabClasses = classnames__WEBPACK_IMPORTED_MODULE_2___default()(`align-tabs-${tabsAlign}`, `space-tabs-${tabsSpacing}`);
  let tabsDisplay;
  let tabCount = 1;
  const tabStyles = {
    borderWidth: tabsBorderWidth,
    borderColor: tabsBorderColorValue,
    borderStyle: 'solid'
  };
  if (tabs.length) {
    tabsDisplay = tabs.map((tab, index) => {
      if (1 === tabCount) {
        tabCount++;
        return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("li", {
          key: index,
          style: tabStyles
        }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("a", {
          href: '#tabs-panel-' + tab.target,
          "data-tabby-default": true
        }, tab.text));
      } else {
        tabCount++;
        return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("li", {
          key: index,
          style: tabStyles
        }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("a", {
          href: '#tabs-panel-' + tab.target
        }, tab.text));
      }
    });
  }
  let tabListStyles;
  if ('horizontal' === tabsAlign) {
    tabListStyles = {
      borderBottomColor: separatorColorValue,
      borderBottomWidth: separatorWidth + 'px'
    };
  } else {
    tabListStyles = {
      borderRightColor: separatorColorValue,
      borderRightWidth: separatorWidth + 'px'
    };
  }
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("style", null, `#${anchor}.wp-block-crosswinds-blocks-tabs ul a {
						color: ${tabTextColorValue};
						background-color: ${tabBackgroundColorValue};
						padding: ${tabsPaddingTopBottom}px ${tabsPaddingLeftRight}px;
					}
					#${anchor}.wp-block-crosswinds-blocks-tabs ul a:hover,
					#${anchor}.wp-block-crosswinds-blocks-tabs ul a:focus,
					#${anchor}.wp-block-crosswinds-blocks-tabs ul a[aria-selected="true"] {
						color: ${tabTextHoverColorValue};
						background-color: ${tabBackgroundHoverColorValue};
					}`), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", (0,_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.useBlockProps.save({
    className: tabClasses
  }), {
    "data-tabs": true
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", {
    className: "tabs-list"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("ul", {
    style: tabListStyles
  }, tabsDisplay)), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", {
    className: "tabs-container"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__.InnerBlocks.Content, null))));
}

/***/ }),

/***/ "./node_modules/classnames/index.js":
/*!******************************************!*\
  !*** ./node_modules/classnames/index.js ***!
  \******************************************/
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

/***/ "./src/tabs/editor.scss":
/*!******************************!*\
  !*** ./src/tabs/editor.scss ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/tabs/style.scss":
/*!*****************************!*\
  !*** ./src/tabs/style.scss ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "@wordpress/block-editor":
/*!*************************************!*\
  !*** external ["wp","blockEditor"] ***!
  \*************************************/
/***/ ((module) => {

"use strict";
module.exports = window["wp"]["blockEditor"];

/***/ }),

/***/ "@wordpress/blocks":
/*!********************************!*\
  !*** external ["wp","blocks"] ***!
  \********************************/
/***/ ((module) => {

"use strict";
module.exports = window["wp"]["blocks"];

/***/ }),

/***/ "@wordpress/components":
/*!************************************!*\
  !*** external ["wp","components"] ***!
  \************************************/
/***/ ((module) => {

"use strict";
module.exports = window["wp"]["components"];

/***/ }),

/***/ "@wordpress/element":
/*!*********************************!*\
  !*** external ["wp","element"] ***!
  \*********************************/
/***/ ((module) => {

"use strict";
module.exports = window["wp"]["element"];

/***/ }),

/***/ "@wordpress/i18n":
/*!******************************!*\
  !*** external ["wp","i18n"] ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = window["wp"]["i18n"];

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/extends.js":
/*!************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/extends.js ***!
  \************************************************************/
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

/***/ }),

/***/ "./src/tabs/block.json":
/*!*****************************!*\
  !*** ./src/tabs/block.json ***!
  \*****************************/
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('{"$schema":"https://schemas.wp.org/trunk/block.json","apiVersion":2,"name":"crosswinds-blocks/tabs","version":"1.0","title":"Tabs","category":"crosswinds-blocks","description":"Add a section with tabs.","attributes":{"anchor":{"type":"string"},"tabs":{"type":"array","default":[]},"tabsAlign":{"type":"string","default":"horizontal"},"tabsSpacing":{"type":"string","default":"start"},"separatorColor":{"type":"string"},"separatorColorValue":{"type":"string"},"separatorWidth":{"type":"number","default":0},"tabsBorderColor":{"type":"string"},"tabsBorderColorValue":{"type":"string"},"tabsBorderWidth":{"type":"number","default":0},"tabsPaddingTopBottom":{"type":"number","default":10},"tabsPaddingLeftRight":{"type":"number","default":15},"tabTextColor":{"type":"string"},"tabTextColorValue":{"type":"string"},"tabTextHoverColor":{"type":"string"},"tabTextHoverColorValue":{"type":"string"},"tabBackgroundColor":{"type":"string"},"tabBackgroundColorValue":{"type":"string"},"tabBackgroundHoverColor":{"type":"string"},"tabBackgroundHoverColorValue":{"type":"string"}},"supports":{"align":["wide","full"],"anchor":true,"html":false,"ariaLabel":true,"__experimentalLayout":true,"spacing":{"margin":["top","bottom"],"padding":true,"blockGap":true,"__experimentalDefaultControls":{"padding":true,"blockGap":true}},"shadow":true,"__experimentalBorder":{"color":true,"radius":true,"style":true,"width":true,"__experimentalDefaultControls":{"color":true,"radius":true,"style":true,"width":true}},"typography":{"fontSize":true,"lineHeight":true,"__experimentalFontFamily":true,"__experimentalFontWeight":true,"__experimentalFontStyle":true,"__experimentalTextTransform":true,"__experimentalTextDecoration":true,"__experimentalLetterSpacing":true,"__experimentalDefaultControls":{"fontSize":true}}},"textdomain":"crosswinds-blocks","editorScript":"file:./index.js","editorStyle":"file:./index.css","style":"file:./style-index.css"}');

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
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var [chunkIds, fn, priority] = deferred[i];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	})();
/******/ 	
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
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"tabs/index": 0,
/******/ 			"tabs/style-index": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = globalThis["webpackChunkstarter_block"] = globalThis["webpackChunkstarter_block"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["tabs/style-index"], () => (__webpack_require__("./src/tabs/index.js")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=index.js.map