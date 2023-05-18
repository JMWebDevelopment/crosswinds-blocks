/*
 *   This content is licensed according to the W3C Software License at
 *   https://www.w3.org/Consortium/Legal/2015/copyright-software-and-document
 *
 *   Simple accordion pattern example
 */

'use strict';

class Accordion {
	constructor( domNode ) {
		this.rootEl = domNode;
		console.log(this.rootEl);
		this.buttonEl = this.rootEl.querySelector( '.wp-block-crosswinds-blocks-accordion-title[aria-expanded]' );
		console.log( this.buttonEl );

		const controlsId = this.buttonEl.getAttribute( 'aria-controls' );
		console.log( controlsId );
		this.contentEl = document.getElementById( controlsId );
		console.log( this.contentEl );

		this.open = this.buttonEl.getAttribute( 'aria-expanded' ) === 'true';

		// add event listeners
		this.buttonEl.addEventListener( 'click', this.onButtonClick.bind( this ) );
	}

	onButtonClick() {
		this.toggle( ! this.open );
	}

	toggle( open ) {
		// don't do anything if the open state doesn't change
		if ( open === this.open ) {
			return;
		}

		// update the internal state
		this.open = open;

		// handle DOM updates
		this.buttonEl.setAttribute( 'aria-expanded', `${ open }` );
		if ( open ) {
			this.contentEl.removeAttribute( 'hidden' );
			const reflow = this.contentEl.offsetHeight;
		} else {
			this.contentEl.setAttribute( 'hidden', '' );
		}
	}

	// Add public open and close methods for convenience
	open() {
		this.toggle( true );
	}

	close() {
		this.toggle( false );
	}
}

// init accordions
const accordions = document.querySelectorAll( '.wp-block-crosswinds-blocks-accordions .accordion-title-container' );
accordions.forEach( ( accordionEl ) => {
	new Accordion( accordionEl );
} );
