/* eslint-env es6 */
/* eslint no-undef: "off" */
'use strict';

// External dependencies
import {parallel, series} from 'gulp';

// Internal dependencies
import generateCert from './gulp/generateCert';
import images from './gulp/images';
import webfonts from "./gulp/webfonts";
import php from './gulp/php';
import {serve} from './gulp/browserSync';
import publicScripts from './gulp/publicScripts';
import publicStyles from './gulp/publicStyles';
import adminScripts from './gulp/adminScripts';
import adminStyles from './gulp/adminStyles';
import translate from './gulp/translate';
import watch from './gulp/watch';
import prodPrep from './gulp/prodPrep';
import prodStringReplace from './gulp/prodStringReplace';
import prodCompress from './gulp/prodCompress';
import { cleanAdminCSS, cleanAdminJS, cleanPublicCSS, cleanPublicJS } from './gulp/clean';

/**
 * Map out the sequence of events on first load and make it the default task
 */
export const firstRun = series(
	cleanAdminCSS, cleanAdminJS, cleanPublicCSS, cleanPublicJS, parallel( php, images, webfonts, publicScripts, publicStyles, adminScripts, adminStyles ), serve, watch
);

export default firstRun;

/**
 * Build theme for development without BrowserSync or watching
 */
export const buildDev = parallel(
	php, images, publicScripts, publicStyles, adminScripts, adminStyles
);

/**
 * Export theme for distribution.
 */
export const bundleTheme = series(
	prodPrep, parallel( php, publicScripts, publicStyles, adminScripts, adminStyles, images, webfonts ), translate, prodStringReplace, prodCompress
);

/**
 * Export all imported functions as tasks
 */
export { generateCert, images, webfonts, php, publicScripts, publicStyles, adminScripts, adminStyles, translate, watch, cleanAdminCSS, cleanAdminJS, cleanPublicCSS, cleanPublicJS };
