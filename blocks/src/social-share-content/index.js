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
		src: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="#1b1930" d="M384 112C384 138.5 362.5 160 336 160H48C21.49 160 0 138.5 0 112V80C0 53.49 21.49 32 48 32H336C362.5 32 384 53.49 384 80V112zM256 432C256 458.5 234.5 480 208 480H48C21.49 480 0 458.5 0 432V400C0 373.5 21.49 352 48 352H208C234.5 352 256 373.5 256 400V432z" /><path fill="#3e7ea8" d="M48 320C21.49 320 0 298.5 0 272V240C0 213.5 21.49 192 48 192H400C426.5 192 448 213.5 448 240V272C448 298.5 426.5 320 400 320H48z" /></svg>,
	},
	edit: Edit,
} );
