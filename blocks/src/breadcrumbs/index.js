/**
 * Registers a new block provided a unique name and an object defining its behavior.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-registration/
 */
import { registerBlockType } from '@wordpress/blocks';

/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * All files containing `style` keyword are bundled together. The code used
 * gets applied both to the front of your site and to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */
import './style.scss';

/**
 * Internal dependencies
 */
import Edit from './edit';
import metadata from './block.json';

/**
 * Every block starts by registering a new block type definition.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-registration/
 */
registerBlockType( metadata.name, {
	/**
	 * @see ./edit.js
	 */
	icon: {
		src: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="#1b1930" class="fa-primary" d="M441.4 64C445.6 64 449.7 65.69 452.7 68.69L500.7 116.7C506.9 122.9 506.9 133.1 500.7 139.3L452.7 187.3C449.7 190.3 445.6 192 441.4 192H63.1C46.33 192 31.1 177.7 31.1 160V96C31.1 78.33 46.33 64 63.1 64L441.4 64zM448 224C465.7 224 480 238.3 480 256V320C480 337.7 465.7 352 448 352H70.63C66.38 352 62.31 350.3 59.31 347.3L11.31 299.3C5.065 293.1 5.065 282.9 11.31 276.7L59.31 228.7C62.31 225.7 66.38 223.1 70.63 223.1L448 224z"/><path fill="#3e7ea8" class="fa-secondary" d="M224 32C224 14.33 238.3 0 256 0C273.7 0 288 14.33 288 32V64H224V32zM288 192V224H224V192H288zM256 512C238.3 512 224 497.7 224 480V352H288V480C288 497.7 273.7 512 256 512z" /></svg>,
	},
	edit: Edit,
} );
