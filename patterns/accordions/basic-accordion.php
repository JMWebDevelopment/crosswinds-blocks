<?php
// If this file is called directly, then about execution.
if ( ! defined( 'WPINC' ) ) {
	die;
}

return array(
	'title'         => esc_html__( 'Basic Accordion', 'crosswinds-blocks' ),
	'categories'    => array( 'crosswinds-blocks' ),
	'viewportWidth' => 800,
	'content'       => '<!-- wp:crosswinds-blocks/accordions {"className":"basic-accordion"} -->
						<div class="wp-block-crosswinds-blocks-accordions basic-accordion"><!-- wp:crosswinds-blocks/accordion -->
						<div class="wp-block-crosswinds-blocks-accordion"><!-- wp:crosswinds-blocks/accordion-title {"accordionPanelIcon":"plus-minus"} -->
						<div class="accordion-title-container"><div id="-control" class="wp-block-crosswinds-blocks-accordion-title" role="button" aria-controls="" aria-expanded="false"><!-- wp:heading {"level":3,"placeholder":"Add a heading here..."} -->
						<h3 class="wp-block-heading">' . esc_html__( 'This is a heading', 'crosswinds-blocks' ) . '</h3>
						<!-- /wp:heading --><span class="accordion-icon plus-minus"></span></div></div>
						<!-- /wp:crosswinds-blocks/accordion-title -->
						
						<!-- wp:crosswinds-blocks/accordion-body -->
						<div id="" class="wp-block-crosswinds-blocks-accordion-body" role="region" aria-labelledby="-control" hidden><!-- wp:paragraph {"placeholder":"Add a heading here..."} -->
						<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
						<!-- /wp:paragraph --></div>
						<!-- /wp:crosswinds-blocks/accordion-body --></div>
						<!-- /wp:crosswinds-blocks/accordion -->
						
						<!-- wp:crosswinds-blocks/accordion -->
						<div class="wp-block-crosswinds-blocks-accordion"><!-- wp:crosswinds-blocks/accordion-title {"accordionPanelIcon":"plus-minus"} -->
						<div class="accordion-title-container"><div id="-control" class="wp-block-crosswinds-blocks-accordion-title" role="button" aria-controls="" aria-expanded="false"><!-- wp:heading {"level":3,"placeholder":"Add a heading here..."} -->
						<h3 class="wp-block-heading">' . esc_html__( 'This is a heading', 'crosswinds-blocks' ) . '</h3>
						<!-- /wp:heading --><span class="accordion-icon plus-minus"></span></div></div>
						<!-- /wp:crosswinds-blocks/accordion-title -->
						
						<!-- wp:crosswinds-blocks/accordion-body -->
						<div id="" class="wp-block-crosswinds-blocks-accordion-body" role="region" aria-labelledby="-control" hidden><!-- wp:paragraph {"placeholder":"Add a heading here..."} -->
						<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
						<!-- /wp:paragraph --></div>
						<!-- /wp:crosswinds-blocks/accordion-body --></div>
						<!-- /wp:crosswinds-blocks/accordion -->
						
						<!-- wp:crosswinds-blocks/accordion -->
						<div class="wp-block-crosswinds-blocks-accordion"><!-- wp:crosswinds-blocks/accordion-title {"accordionPanelIcon":"plus-minus"} -->
						<div class="accordion-title-container"><div id="-control" class="wp-block-crosswinds-blocks-accordion-title" role="button" aria-controls="" aria-expanded="false"><!-- wp:heading {"level":3,"placeholder":"Add a heading here..."} -->
						<h3 class="wp-block-heading">' . esc_html__( 'This is a heading', 'crosswinds-blocks' ) . '</h3>
						<!-- /wp:heading --><span class="accordion-icon plus-minus"></span></div></div>
						<!-- /wp:crosswinds-blocks/accordion-title -->
						
						<!-- wp:crosswinds-blocks/accordion-body -->
						<div id="" class="wp-block-crosswinds-blocks-accordion-body" role="region" aria-labelledby="-control" hidden><!-- wp:paragraph {"placeholder":"Add a heading here..."} -->
						<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
						<!-- /wp:paragraph --></div>
						<!-- /wp:crosswinds-blocks/accordion-body --></div>
						<!-- /wp:crosswinds-blocks/accordion --></div>
						<!-- /wp:crosswinds-blocks/accordions -->',
);
