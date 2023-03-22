/* eslint-env es6 */
'use strict';

// External dependencies
/**
 * External dependencies
 */
import {src, dest} from 'gulp';
import pump from 'pump';
import { pipeline } from 'mississippi';

/**
 * Internal dependencies
 */
import {paths, gulpPlugins, isProd} from './constants';
import {getThemeConfig, getStringReplacementTasks, logError} from './utils';

export function publicScriptsBeforeReplacementStream() {

	// Return a single stream containing all the
	// before replacement functionality
	return pipeline.obj([
		gulpPlugins.newer({
			dest: paths.publicScripts.dest,
			extra: [paths.config.themeConfig]
		}),
		gulpPlugins.eslint(),
		gulpPlugins.eslint.format(),
	]);
}

export function publicScriptsAfterReplacementStream() {
	const config = getThemeConfig();

	// Return a single stream containing all the
	// after replacement functionality
	return pipeline.obj([
		gulpPlugins.babel({
			presets: [
				'@babel/preset-env'
			],
			ignore: ['what-input.js']
		}),
		gulpPlugins.if(
			!config.dev.debug.scripts,
			gulpPlugins.uglify()
		),
		gulpPlugins.rename({
			suffix: '.min'
		}),
	]);
}

/**
 * JavaScript via Babel, ESlint, and uglify.
 */
export default function publicScripts(done) {

	return pump([
		src(paths.publicScripts.src, {sourcemaps: !isProd}),
		publicScriptsBeforeReplacementStream(),
		// Only do string replacements when building for production
		gulpPlugins.if(
			isProd,
			getStringReplacementTasks()
		),
		publicScriptsAfterReplacementStream(),
		dest(paths.publicScripts.dest, {sourcemaps: !isProd}),
	], done);
}
