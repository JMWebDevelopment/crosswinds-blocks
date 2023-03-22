/* eslint-env es6 */
'use strict';

/**
 * External dependencies
 */
import del from 'del';

/**
 * Internal dependencies
 */
import {paths} from './constants';

/**
 * Clean CSS
 */
export function cleanPublicCSS() {
	const delPath = [
		`${paths.publicStyles.dest}/**/*.css`,
		`!${paths.publicStyles.srcDir}`,
		`!${paths.publicStyles.srcDir}/**`
	];
	return del(delPath);
}

export function cleanAdminCSS() {
	const delPath = [
		`${paths.adminStyles.dest}/**/*.css`,
		`!${paths.adminStyles.srcDir}`,
		`!${paths.adminStyles.srcDir}/**`
	];
	return del(delPath);
}

/**
 * Clean JS
 */
export function cleanPublicJS() {
	const delPath = [
		`${paths.publicScripts.dest}/**/*.js`,
		`!${paths.publicScripts.srcDir}`,
		`!${paths.publicScripts.srcDir}/**`
	];
	return del(delPath);
}

export function cleanAdminJS() {
	const delPath = [
		`${paths.adminScripts.dest}/**/*.js`,
		`!${paths.adminScripts.srcDir}`,
		`!${paths.adminScripts.srcDir}/**`
	];
	return del(delPath);
}
