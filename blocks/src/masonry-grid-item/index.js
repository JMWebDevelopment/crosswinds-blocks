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
		src: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="#1b1930" class="fa-primary" d="M48 104C48 90.75 58.75 80 72 80C85.25 80 96 90.75 96 104C96 117.3 85.25 128 72 128C58.75 128 48 117.3 48 104zM352 104C352 90.75 362.7 80 376 80C389.3 80 400 90.75 400 104C400 117.3 389.3 128 376 128C362.7 128 352 117.3 352 104zM96 408C96 421.3 85.25 432 72 432C58.75 432 48 421.3 48 408C48 394.7 58.75 384 72 384C85.25 384 96 394.7 96 408zM352 408C352 394.7 362.7 384 376 384C389.3 384 400 394.7 400 408C400 421.3 389.3 432 376 432C362.7 432 352 421.3 352 408z"/><path fill="#3e7ea8" class="fa-secondary" d="M0 96C0 60.65 28.65 32 64 32H384C419.3 32 448 60.65 448 96V416C448 451.3 419.3 480 384 480H64C28.65 480 0 451.3 0 416V96zM72 80C58.75 80 48 90.75 48 104C48 117.3 58.75 128 72 128C85.25 128 96 117.3 96 104C96 90.75 85.25 80 72 80zM376 128C389.3 128 400 117.3 400 104C400 90.75 389.3 80 376 80C362.7 80 352 90.75 352 104C352 117.3 362.7 128 376 128zM72 384C58.75 384 48 394.7 48 408C48 421.3 58.75 432 72 432C85.25 432 96 421.3 96 408C96 394.7 85.25 384 72 384zM376 432C389.3 432 400 421.3 400 408C400 394.7 389.3 384 376 384C362.7 384 352 394.7 352 408C352 421.3 362.7 432 376 432z"/></svg>,
	},
	edit: Edit,

	/**
	 * @see ./save.js
	 */
	save,
} );
