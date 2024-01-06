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
import save from './save';
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
		src: <svg xmlns="http://www.w3.org/2000/svg" height="16" width="16" viewBox="0 0 512 512"><path class="fa-secondary" fill="#8200ff" d="M192 96c0-17.7 14.3-32 32-32H480c17.7 0 32 14.3 32 32s-14.3 32-32 32H224c-17.7 0-32-14.3-32-32zm0 160c0-17.7 14.3-32 32-32H488c17.7 0 32 14.3 32 32s-14.3 32-32 32H224c-17.7 0-32-14.3-32-32zm32 128H480c17.7 0 32 14.3 32 32s-14.3 32-32 32H224c-17.7 0-32-14.3-32-32s14.3-32 32-32z"/><path class="fa-primary" fill="#171247" d="M48 32C34.7 32 24 42.8 24 56s10.7 24 24 24h8v96H40c-13.3 0-24 10.7-24 24s10.7 24 24 24h80c13.3 0 24-10.7 24-24s-10.7-24-24-24H104V56c0-13.3-10.7-24-24-24H48zM62.6 342.4c5.7-8.1 17.5-8.6 24-1.2c5.2 5.9 5 14.7-.3 20.5l-72 78c-6.5 7-8.2 17.2-4.3 25.9s12.5 14.4 22 14.4h88c13.3 0 24-10.7 24-24s-10.7-24-24-24H86.8l34.8-37.7c22-23.8 22.4-60.3 1.1-84.7c-26.9-30.7-75.4-28.4-99.2 4.9L12.5 330.1c-7.7 10.8-5.2 25.8 5.6 33.5s25.8 5.2 33.5-5.6l11.1-15.6z"/></svg>,
	},
	edit: Edit,

	/**
	 * @see ./save.js
	 */
	save,
} );
