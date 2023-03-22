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
		src: <svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><clipPath id="a"><path d="m0 0h512v512h-512z"/></clipPath><clipPath id="b"><path d="m0 0h512v512h-512z"/></clipPath><clipPath id="c"><path d="m0 0h512v512h-512z"/></clipPath><clipPath id="d"><path d="m0 0h512v512h-512z"/></clipPath><clipPath id="e"><rect height="496" rx="48" width="496" x="8" y="8"/></clipPath><clipPath id="f"><path d="m0 0h512v512h-512z"/></clipPath><clipPath id="g"><path d="m0 0h512v512h-512z"/></clipPath><clipPath id="h"><rect height="28" rx="8" width="400" x="56" y="344"/></clipPath><clipPath id="i"><path d="m0 0h512v512h-512z"/></clipPath><clipPath id="j"><rect height="28" rx="8" width="400" x="56" y="380"/></clipPath><clipPath id="k"><path d="m0 0h512v512h-512z"/></clipPath><clipPath id="l"><rect height="28" rx="8" width="400" x="56" y="416"/></clipPath><clipPath id="m"><path d="m0 0h512v512h-512z"/></clipPath><clipPath id="n"><rect height="28" rx="8" width="400" x="56" y="452"/></clipPath><g clip-path="url(#a)"><path d="m0 0h512v512h-512z" fill="#fff"/></g><g clip-path="url(#b)"><g clip-path="url(#c)"><path d="m-4-4h520v520h-520z" fill="#0a0a17"/></g></g><g clip-path="url(#d)"><g clip-path="url(#e)"><rect fill="none" height="496" rx="48" stroke="#2e79a6" stroke-miterlimit="5" stroke-width="6" width="496" x="8" y="8"/></g></g><g clip-path="url(#f)"><path d="m93.5 332c-20.71 0-37.5-16.79-37.5-37.5v-225c0-20.71 16.79-37.5 37.5-37.5h325c20.71 0 37.5 16.79 37.5 37.5v225c0 20.71-16.79 37.5-37.5 37.5zm6.25-212.5c0 24.16 19.59 43.75 43.75 43.75s43.75-19.59 43.75-43.75-19.59-43.75-43.75-43.75-43.75 19.59-43.75 43.75zm306.25 162.5v-87.5l-68.37-68.37c-3.66-3.66-9.6-3.66-13.26 0l-105.87 105.87-43.37-43.37c-3.66-3.66-9.6-3.66-13.26 0l-55.87 55.87v37.5z" fill="#efefef"/></g><g clip-path="url(#g)"><g clip-path="url(#h)"><path d="m52 340h408v36h-408z" fill="#efefef"/></g></g><g clip-path="url(#i)"><g clip-path="url(#j)"><path d="m52 376h408v36h-408z" fill="#efefef"/></g></g><g clip-path="url(#k)"><g clip-path="url(#l)"><path d="m52 412h408v36h-408z" fill="#efefef"/></g></g><g clip-path="url(#m)"><g clip-path="url(#n)"><path d="m52 448h408v36h-408z" fill="#efefef"/></g></g></svg>
	},
	edit: Edit,
	save: Save,
} );
