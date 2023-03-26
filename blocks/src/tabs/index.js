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
		src: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="#1b1930" class="fa-primary" d="M512 192v240c0 26.5-21.5 48-48 48h-416C21.5 480 0 458.5 0 432V192H512z"/><path fill="#3e7ea8" class="fa-secondary" d="M512 144V192H0V80C0 53.5 21.5 32 48 32h160l64 64h192C490.5 96 512 117.5 512 144z"/></svg>,
	},
	edit: Edit,

	/**
	 * @see ./save.js
	 */
	save,
} );
