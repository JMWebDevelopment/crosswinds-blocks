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
		src: <svg xmlns="http://www.w3.org/2000/svg" height="16" width="20" viewBox="0 0 640 512"><path class="fa-secondary" fill="#8200ff" d="M576 128V384H64V128H576zM64 64C28.7 64 0 92.7 0 128V384c0 35.3 28.7 64 64 64H576c35.3 0 64-28.7 64-64V128c0-35.3-28.7-64-64-64H64z"/><path fill="#171247" class="fa-primary" d="M104 184c0-13.3 10.7-24 24-24s24 10.7 24 24V328c0 13.3-10.7 24-24 24s-24-10.7-24-24V184z"/></svg>,
	},
	edit: Edit,
} );
