/* eslint-env es6 */
'use strict';

/**
 * External dependencies
 */
import {watch as gulpWatch, series, src} from 'gulp';
import pump from 'pump';

/**
 * Internal dependencies
 */
import {paths, gulpPlugins, PHPCSOptions} from './constants';
import {getThemeConfig, backslashToForwardSlash} from './utils';
import {reload} from './browserSync';
import images from './images';
import adminScripts from './adminScripts';
import adminStyles from './adminStyles';
import publicScripts from './publicScripts';
import publicStyles from './publicStyles';
import webfonts from './webfonts';

/**
 * Watch everything
 */
export default function watch() {
	/**
	 * gulp watch uses chokidar, which doesn't play well with backslashes
	 * in file paths, so they are replaced with forward slashes, which are
	 * valid for Windows paths in a NodeJS context.
	 */
	const PHPwatcher = gulpWatch(backslashToForwardSlash(paths.php.src), reload);
	const config = getThemeConfig();

	// Only code sniff PHP files if the debug setting is true
	if( config.dev.debug.phpcs ) {
		PHPwatcher.on('change', function(path) {
			return pump([
				src(path),
				// Run code sniffing
				gulpPlugins.phpcs(PHPCSOptions),
				// Log all problems that were found.
				gulpPlugins.phpcs.reporter('log'),
			]);
		});
	}

	gulpWatch(backslashToForwardSlash(paths.publicStyles.src[0]), series( publicStyles, reload ) );

	gulpWatch(backslashToForwardSlash(paths.publicScripts.src[0]), series(publicScripts, reload));

	gulpWatch(backslashToForwardSlash(paths.adminStyles.src[0]), series( adminStyles, reload ) );

	gulpWatch(backslashToForwardSlash(paths.adminScripts.src[0]), series(adminScripts, reload));

	gulpWatch(backslashToForwardSlash(paths.images.src), series(images, reload));

	gulpWatch(backslashToForwardSlash(paths.webfonts.src), series(webfonts, reload));
}
