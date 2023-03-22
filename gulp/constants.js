/* eslint-env es6 */
'use strict';

/**
 * External dependencies
 */
export const gulpPlugins = require('gulp-load-plugins')();
import path from 'path';

/**
 * Internal dependencies
 */
import {getThemeConfig} from './utils';

// Root path is where npm run commands happen
export const rootPath = process.cwd();

// Dev or production
export const isProd = ( process.env.NODE_ENV === 'production' );

// get the config
const config = getThemeConfig();

// directory for the production theme
export const prodThemePath = path.normalize(`${rootPath}/../${config.theme.slug}`);

// directory for assets (CSS, JS, images)
export const assetsDir = `${rootPath}/assets`;

// directory for assets (CSS, JS, images) in production
export const prodAssetsDir = `${prodThemePath}/assets`;

// PHPCS options
export const PHPCSOptions = {
	bin: `${rootPath}/vendor/bin/phpcs`,
	standard: `${rootPath}/phpcs.xml.dist`,
	warningSeverity: 0
};

// Theme config name fields and their defaults
export const nameFieldDefaults = {
	author        : 'Jacob Martella',
	PHPNamespace  : 'JM_Client_Manager',
	slug          : 'jm-client-manager',
	name          : 'JM Client Manager',
	underscoreCase: 'jm_client_manager',
	constant      : 'JM_CLIENT_MANAGER',
	camelCase     : 'JmClientManager',
	camelCaseVar  : 'jmClientManager',
};

// Project paths
let paths = {
	assetsDir: assetsDir,
	browserSync: {
		dir: `${rootPath}/BrowserSync`,
		cert: `${rootPath}/BrowserSync/wp-rig-browser-sync-cert.crt`,
		caCert: `${rootPath}/BrowserSync/wp-rig-browser-sync-root-cert.crt`,
		key: `${rootPath}/BrowserSync/wp-rig-browser-sync-key.key`
	},
	config: {
		themeConfig: `${rootPath}/config/themeConfig.js`
	},
	php: {
		src: [
			`${rootPath}/**/*.php`,
			`!${rootPath}/optional/**/*.*`,
			`!${rootPath}/tests/**/*.*`,
			`!${rootPath}/vendor/**/*.*`,
		],
		dest: `${rootPath}/`
	},
	publicStyles: {
		src: [
			`${rootPath}/public/css/src/**/*.css`,
			// Ignore partial files.
			`!${rootPath}/public/css/src/**/_*.css`,
			// Ignore editor source css.
			`!${rootPath}/public/css/src/editor/**/*.css`
		],
		srcDir: `${rootPath}/public/css/src`,
		dest: `${rootPath}/public/css`
	},
	adminStyles: {
		src: [
			`${rootPath}/admin/css/src/**/*.css`,
			// Ignore partial files.
			`!${rootPath}/admin/css/src/**/_*.css`,
			// Ignore editor source css.
			`!${rootPath}/admin/css/src/editor/**/*.css`
		],
		srcDir: `${rootPath}/admin/css/src`,
		dest: `${rootPath}/admin/css`
	},
	publicScripts: {
		src: [
			`${rootPath}/public/js/src/**/*.js`,
			// Ignore partial files.
			`!${rootPath}/public/js/src/**/_*.js`,
		],
		srcDir: `${rootPath}/public/js/src`,
		dest: `${rootPath}/public/js`
	},
	adminScripts: {
		src: [
			`${rootPath}/admin/js/src/**/*.js`,
			// Ignore partial files.
			`!${rootPath}/admin/js/src/**/_*.js`,
		],
		srcDir: `${rootPath}/admin/js/src`,
		dest: `${rootPath}/admin/js`
	},
	images: {
		src: `${assetsDir}/images/src/**/*.{jpg,JPG,png,svg,gif,GIF}`,
		dest: `${assetsDir}/images/`
	},
	webfonts: {
		src: `${assetsDir}/webfonts/*.{eot,svg,ttf,woff,woff2}`,
		dest: `${assetsDir}/webfonts/`
	},
	languages: {
		src: [
			`${rootPath}/**/*.php`,
			`!${rootPath}/optional/**/*.*`,
			`!${rootPath}/tests/**/*.*`,
			`!${rootPath}/vendor/**/*.*`,
		],
		dest: `${rootPath}/languages/${nameFieldDefaults.slug}.pot`
	},
	export: {
		src: [],
		dest: `${prodThemePath}/`,
		stringReplaceSrc: [`style.css`]
	}
};

// Add rootPath to filesToCopy and additionalFilesToCopy
for ( let filePath of config.export.filesToCopy.concat( config.export.additionalFilesToCopy ) ) {
	paths.export.src.push(`${rootPath}/${filePath}`);
}

// Override paths for production
if( isProd ){
	paths.php.dest = `${prodThemePath}/`;
	paths.styles.dest = `${prodAssetsDir}/css/`;
	paths.styles.editorDest = `${prodAssetsDir}/css/editor/`;
	paths.scripts.dest = `${prodAssetsDir}/js/`;
	paths.images.dest = `${prodAssetsDir}/images/`;
	paths.webfonts.dest = `${prodAssetsDir}/webfonts/`;
	paths.languages = {
		src: `${prodThemePath}/**/*.php`,
		dest: `${prodThemePath}/languages/${config.theme.slug}.pot`
	};
}

export {paths};
