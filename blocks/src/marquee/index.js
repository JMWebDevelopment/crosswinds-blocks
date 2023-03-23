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
		src: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path fill="#1b1930" d="M64 32C28.65 32 0 60.65 0 96v48C0 152.8 7.164 160 16 160H128V96C128 60.65 99.35 32 64 32zM560 352H288v48c0 44.18-35.82 80-80 80h256c61.88 0 112-50.13 112-112C576 359.1 568.9 352 560 352z" /><path fill="#3e7ea8" d="M480 128v224h-192v48c0 44.18-35.82 80-80 80C163.8 480 128 444.2 128 400V96c0-35.35-28.65-64-64-64h320C437 32 480 75 480 128z" /></svg>,
	},
	edit: Edit,

	/**
	 * @see ./save.js
	 */
	save,
} );
