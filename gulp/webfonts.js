/* eslint-env es6 */
'use strict';

/**
 * External dependencies
 */
import {src, dest} from 'gulp';
import pump from 'pump';

/**
 * Internal dependencies
 */
import {paths, gulpPlugins} from './constants';

/**
 * Optimize images.
 */
export default function webfonts(done) {
	pump([
		src(paths.webfonts.src),
		gulpPlugins.newer(paths.webfonts.dest),
		dest(paths.webfonts.dest),
	], done);
}
