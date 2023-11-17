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
import Save from './save';
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
		src: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="#171247" d="M384 0H64C28.65 0 0 28.65 0 64v64h448V64C448 28.65 419.3 0 384 0zM208 400h-96C103.2 400 96 407.2 96 416c0 8.836 7.164 16 16 16h96c8.836 0 16-7.164 16-16C224 407.2 216.8 400 208 400zM336 208h-224C103.2 208 96 215.2 96 224c0 8.836 7.164 16 16 16h224C344.8 240 352 232.8 352 224C352 215.2 344.8 208 336 208zM336 304h-224C103.2 304 96 311.2 96 320c0 8.836 7.164 16 16 16h224c8.836 0 16-7.164 16-16C352 311.2 344.8 304 336 304z" /><path fill="#8200ff" d="M0 128v320c0 35.35 28.65 64 64 64h320c35.35 0 64-28.65 64-64V128H0zM208 432h-96C103.2 432 96 424.8 96 416c0-8.838 7.164-16 16-16h96c8.836 0 16 7.162 16 16C224 424.8 216.8 432 208 432zM336 336h-224C103.2 336 96 328.8 96 320c0-8.838 7.164-16 16-16h224c8.836 0 16 7.162 16 16C352 328.8 344.8 336 336 336zM336 240h-224C103.2 240 96 232.8 96 224c0-8.838 7.164-16 16-16h224C344.8 208 352 215.2 352 224C352 232.8 344.8 240 336 240z" /></svg>,
	},
	edit: Edit,
	save: Save,
} );
