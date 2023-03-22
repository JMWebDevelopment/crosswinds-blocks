/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/marquee/edit.js":
/*!*****************************!*\
  !*** ./src/marquee/edit.js ***!
  \*****************************/
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
/* harmony import */ var _editor_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./editor.scss */ "./src/marquee/editor.scss");

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
    setAttributes
  } = props;
  const {
    marqueeContent,
    marqueeWidth,
    marqueeSpeed
  } = attributes;
  const inspectorControls = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4__.InspectorControls, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.PanelBody, {
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Marquee Settings', 'crosswinds-blocks')
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "marquee-settings__width"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.RangeControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Marquee width', 'crosswinds-blocks'),
    onChange: value => setAttributes({
      marqueeWidth: value
    }),
    value: marqueeWidth || '',
    min: 1,
    max: 100,
    initialPosition: 50,
    allowReset: true,
    resetFallbackValue: 50
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: "marquee-settings__speed"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.RangeControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Marquee speed', 'crosswinds-blocks'),
    help: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Speed is measured in seconds. The higher the number, the slower the marquee will go.', 'crosswinds-blocks'),
    onChange: value => setAttributes({
      marqueeSpeed: value
    }),
    value: marqueeSpeed || '',
    min: 1,
    max: 100,
    initialPosition: 5,
    allowReset: true,
    resetFallbackValue: 5
  })))));
  const marqueeStyles = {
    width: `${marqueeWidth}%`
  };
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, inspectorControls, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", (0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4__.useBlockProps)({
    style: marqueeStyles
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_4__.RichText, {
    tagName: "p" // The tag here is the element output and editable in the admin
    ,
    value: marqueeContent // Any existing content, either from the database or an attribute default
    ,
    allowedFormats: ['core/bold', 'core/italic'] // Allow the content to be made bold or italic, but do not allow other formatting options
    ,
    onChange: content => setAttributes({
      marqueeContent: content
    }) // Store updated content as a block attribute
    ,
    placeholder: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)('Marquee text here...', 'crosswinds-blocks') // Display this text before any content has been added by the user
  })));
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Edit);

/***/ }),

/***/ "./src/marquee/index.js":
/*!******************************!*\
  !*** ./src/marquee/index.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./style.scss */ "./src/marquee/style.scss");
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./edit */ "./src/marquee/edit.js");
/* harmony import */ var _save__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./save */ "./src/marquee/save.js");
/* harmony import */ var _block_json__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./block.json */ "./src/marquee/block.json");

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
      width: "1000px",
      height: "1000px",
      viewBox: "0 0 1000 1000",
      version: "1.1"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("title", null, "Logo"), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("g", {
      id: "Logo",
      stroke: "none",
      "stroke-width": "1",
      fill: "none",
      "fill-rule": "evenodd"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("line", {
      x1: "0.5",
      y1: "0.5",
      x2: "1000.5",
      y2: "1000.5",
      id: "Line",
      stroke: "#00ADB5",
      "stroke-width": "10",
      "stroke-linecap": "square"
    }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("g", {
      id: "\uF030",
      transform: "translate(375.000000, 15.875484)",
      fill: "#222831",
      "fill-rule": "nonzero"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
      d: "M158.349136,15.6249627 C159.960365,15.6249627 161.425206,16.6501602 162.011237,18.1641146 L172.802513,46.8748882 L226.56196,46.8748882 C230.858729,46.8748882 234.374441,50.3906002 234.374441,54.6873696 L234.374441,195.312034 C234.374441,199.608804 230.858729,203.124516 226.56196,203.124516 L23.4374441,203.124516 C19.1406747,203.124516 15.6249627,199.608804 15.6249627,195.312034 L15.6249627,54.6873696 C15.6249627,50.3906002 19.1406747,46.8748882 23.4374441,46.8748882 L77.2460049,46.8748882 L87.0602439,20.7032664 C88.1831928,17.6758345 91.1128733,15.6249627 94.3844452,15.6249627 L158.349136,15.6249627 Z M158.349136,0 L94.3844452,0 C84.6188435,0 75.8789161,6.0548638 72.4609555,15.1853199 L66.4060917,31.2499255 L23.4374441,31.2499255 C10.4980218,31.2499255 0,41.7479473 0,54.6873696 L0,195.312034 C0,208.251457 10.4980218,218.749478 23.4374441,218.749478 L226.56196,218.749478 C239.501382,218.749478 249.999404,208.251457 249.999404,195.312034 L249.999404,54.6873696 C249.999404,41.7479473 239.501382,31.2499255 226.56196,31.2499255 L183.593312,31.2499255 L176.611002,12.6952822 C173.779073,5.02918952 166.503509,0 158.349136,0 Z M124.999702,183.593312 C157.323939,183.593312 183.593312,157.323939 183.593312,124.999702 C183.593312,92.6754649 157.323939,66.4060917 124.999702,66.4060917 C92.6754649,66.4060917 66.4060917,92.6754649 66.4060917,124.999702 C66.4060917,157.323939 92.6754649,183.593312 124.999702,183.593312 Z M124.999702,82.0310544 C148.681286,82.0310544 167.96835,101.318118 167.96835,124.999702 C167.96835,148.681286 148.681286,167.96835 124.999702,167.96835 C101.318118,167.96835 82.0310544,148.681286 82.0310544,124.999702 C82.0310544,101.318118 101.318118,82.0310544 124.999702,82.0310544 Z",
      id: "Shape"
    })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("g", {
      id: "\uF03D",
      transform: "translate(15.750000, 407.500447)",
      fill: "#222831",
      "fill-rule": "nonzero"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
      d: "M265.575729,15.6249627 C262.548298,15.6249627 259.472228,16.5037715 256.688936,18.4082546 L203.124516,52.5387465 L203.124516,23.3396927 C203.124516,10.4493846 191.796322,0 177.831703,0 L25.2928131,0 C11.3281934,0 0,10.4493846 0,23.3396927 L0,164.15986 C0,177.050168 11.3281934,187.499553 25.2928131,187.499553 L177.831703,187.499553 C191.796322,187.499553 203.124516,177.050168 203.124516,164.15986 L203.124516,134.960806 L256.639822,169.091298 C259.423114,171.044419 262.548298,171.87459 265.526615,171.87459 C273.632351,171.87459 281.200925,165.526949 281.200925,156.493768 L281.200925,31.0057855 C281.249329,21.9726039 273.680988,15.6249627 265.575729,15.6249627 Z M187.499553,164.15986 C187.499553,168.358878 183.056395,171.87459 177.831703,171.87459 L25.2928131,171.87459 C20.0681208,171.87459 15.6249627,168.358878 15.6249627,164.15986 L15.6249627,23.3396927 C15.6249627,19.1406747 20.0681208,15.6249627 25.2928131,15.6249627 L177.831703,15.6249627 C183.056395,15.6249627 187.499553,19.1406747 187.499553,23.3396927 L187.499553,164.15986 Z M265.624367,156.493768 L265.038335,155.859099 L203.124516,116.406163 L203.124516,71.0447525 L265.624367,31.2499255 L265.624367,156.493768 Z",
      id: "Shape"
    })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("g", {
      id: "\uF040",
      transform: "translate(733.000432, 376.250939)",
      fill: "#222831",
      "fill-rule": "nonzero"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
      d: "M240.846104,27.4586619 L222.540369,9.15292703 C210.337182,-3.05073726 190.550871,-3.0512141 178.346253,9.15292703 L6.26805401,181.230649 L0.0734772608,236.984224 C-0.75574058,244.448139 5.55184631,250.755249 13.0148069,249.925554 L68.7683818,243.730977 L240.846581,71.652778 C253.049768,59.4486369 253.049768,39.6618494 240.846104,27.4586619 Z M194.363652,96.0372185 L84.9603026,205.441045 L84.9603026,188.475696 L61.5228585,188.475696 L61.5228585,165.038252 L44.5575097,165.038252 L153.961336,55.6349024 L194.363652,96.0372185 Z M61.5948607,228.806487 L32.7887198,232.007487 L17.9910676,217.209835 L21.1920678,188.403694 L30.8856673,178.710094 L47.8510161,178.710094 L47.8510161,202.147538 L71.2884602,202.147538 L71.2884602,219.112887 L61.5948607,228.806487 Z M229.797337,60.6040106 L205.411943,84.9889279 L165.009627,44.5866118 L189.394544,20.2012176 C195.500429,14.0953324 205.384763,14.0943787 211.491602,20.2012176 L229.797337,38.5069525 C235.903699,44.6133146 235.904176,54.4966948 229.797337,60.6040106 Z",
      id: "Shape"
    })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("g", {
      id: "\uF53F",
      transform: "translate(375.013444, 730.250522)",
      fill: "#222831",
      "fill-rule": "nonzero"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
      d: "M54.6739258,128.905943 C48.1798961,128.905943 42.9552038,134.130635 42.9552038,140.624665 C42.9552038,147.118694 48.1798961,152.343387 54.6739258,152.343387 C61.1679556,152.343387 66.3926479,147.118694 66.3926479,140.624665 C66.3926479,134.130635 61.1679556,128.905943 54.6739258,128.905943 Z M70.2988886,74.218573 C63.8048588,74.218573 58.5801665,79.4432653 58.5801665,85.9372951 C58.5801665,92.4313249 63.8048588,97.6560172 70.2988886,97.6560172 C76.7929184,97.6560172 82.0176107,92.4313249 82.0176107,85.9372951 C82.0176107,79.4432653 76.7929184,74.218573 70.2988886,74.218573 Z M124.986258,0 C116.734134,0 108.286984,0.781057403 99.7420824,2.44140043 C51.207328,11.9142248 12.095807,50.9275176 2.52570804,99.3163602 C-14.369069,184.814012 56.822549,249.999404 116.929637,249.999404 C120.982266,249.999404 124.986258,249.706627 128.941136,249.071481 C149.058371,245.946775 158.921724,222.411579 149.69304,204.296579 C138.413961,182.128472 154.527203,156.249627 179.429488,156.249627 L218.345506,156.249627 C235.825838,156.249627 249.98596,141.796728 250.034597,124.365033 C249.790457,55.6152925 193.882388,0 124.986258,0 Z M218.296392,140.624665 L179.380851,140.624665 C162.144182,140.624665 146.470582,149.365069 137.535152,163.964357 C128.648359,178.466371 127.964576,196.190843 135.72842,211.425277 C138.121183,216.112575 138.072069,221.971936 135.679783,226.708348 C134.50772,228.954723 131.822179,232.860964 126.54885,233.690658 C123.472781,234.178938 120.249846,234.423078 116.929637,234.423078 C90.2697348,234.423078 61.2170697,219.140007 41.0020834,194.579614 C19.5177597,168.407992 11.2656355,135.693227 17.8574166,102.441067 C26.2072922,60.1562019 60.3377841,26.1716219 102.769514,17.8708604 C110.191467,16.4060202 117.662057,15.6736 124.986258,15.6736 C185.093346,15.6736 234.165495,64.4529713 234.360997,124.365033 C234.360997,133.300463 227.134548,140.624665 218.296392,140.624665 Z M179.673628,66.4060917 C173.179598,66.4060917 167.954906,71.630784 167.954906,78.1248137 C167.954906,84.6188435 173.179598,89.8435358 179.673628,89.8435358 C186.167658,89.8435358 191.39235,84.6188435 191.39235,78.1248137 C191.39235,71.630784 186.167658,66.4060917 179.673628,66.4060917 Z M117.173777,42.9686476 C110.679747,42.9686476 105.455055,48.1933398 105.455055,54.6873696 C105.455055,61.1813994 110.679747,66.4060917 117.173777,66.4060917 C123.667807,66.4060917 128.892499,61.1813994 128.892499,54.6873696 C128.892499,48.1933398 123.667807,42.9686476 117.173777,42.9686476 Z",
      id: "Shape"
    })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("line", {
      x1: "3.24294445e-16",
      y1: "-4.33996797e-16",
      x2: "999.997481",
      y2: "999.997481",
      id: "Line",
      stroke: "#393E46",
      "stroke-width": "10",
      "stroke-linecap": "square",
      transform: "translate(499.998741, 499.998741) scale(1, -1) translate(-499.998741, -499.998741) "
    })))
  },
  edit: _edit__WEBPACK_IMPORTED_MODULE_3__["default"],
  /**
   * @see ./save.js
   */
  save: _save__WEBPACK_IMPORTED_MODULE_4__["default"]
});

/***/ }),

/***/ "./src/marquee/save.js":
/*!*****************************!*\
  !*** ./src/marquee/save.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ save)
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__);

/**
 * External dependencies
 */


/**
 * WordPress dependencies
 */

function save(props) {
  const {
    marqueeContent,
    marqueeWidth,
    marqueeSpeed
  } = props.attributes;
  const marqueeStyles = {
    width: `${marqueeWidth}%`
  };
  const marqueeTextStyles = {
    mozAnimation: `crosswinds-marquee ${marqueeSpeed}s linear infinite`,
    webkitAnimation: `crosswinds-marquee ${marqueeSpeed}s linear infinite`,
    animation: `crosswinds-marquee ${marqueeSpeed}s linear infinite`
  };
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.useBlockProps.save({
    style: marqueeStyles
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.RichText.Content, {
    tagName: "p" // The tag here is the element output and editable in the admin
    ,
    value: marqueeContent // Any existing content, either from the database or an attribute default
    ,
    style: marqueeTextStyles
  }));
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

/***/ "./src/marquee/editor.scss":
/*!*********************************!*\
  !*** ./src/marquee/editor.scss ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/marquee/style.scss":
/*!********************************!*\
  !*** ./src/marquee/style.scss ***!
  \********************************/
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

/***/ "./src/marquee/block.json":
/*!********************************!*\
  !*** ./src/marquee/block.json ***!
  \********************************/
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('{"$schema":"https://schemas.wp.org/trunk/block.json","apiVersion":2,"name":"crosswinds-blocks/marquee","version":"1.0","title":"Marquee","category":"crosswinds-blocks","description":"Create a section of horizontally scrolling text.","attributes":{"marqueeWidth":{"type":"number","default":100},"marqueeSpeed":{"type":"number","default":5},"marqueeContent":{"type":"string","source":"html","selector":"p"}},"supports":{"anchor":true,"ariaLabel":true,"html":false,"color":{"gradients":true,"link":true,"__experimentalDefaultControls":{"background":true,"text":true}},"spacing":{"margin":["top","bottom"],"padding":true,"blockGap":true,"__experimentalDefaultControls":{"padding":true,"blockGap":true}},"shadow":true,"__experimentalBorder":{"color":true,"radius":true,"style":true,"width":true,"__experimentalDefaultControls":{"color":true,"radius":true,"style":true,"width":true}},"typography":{"fontSize":true,"lineHeight":true,"__experimentalFontFamily":true,"__experimentalFontWeight":true,"__experimentalFontStyle":true,"__experimentalTextTransform":true,"__experimentalTextDecoration":true,"__experimentalLetterSpacing":true,"__experimentalDefaultControls":{"fontSize":true}}},"textdomain":"portafoglio-skills-slider","editorScript":"file:./index.js","editorStyle":"file:./index.css","style":"file:./style-index.css"}');

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
/******/ 			"marquee/index": 0,
/******/ 			"marquee/style-index": 0
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
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["marquee/style-index"], () => (__webpack_require__("./src/marquee/index.js")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=index.js.map