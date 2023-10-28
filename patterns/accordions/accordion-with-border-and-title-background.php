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
						<div class="wp-block-crosswinds-blocks-accordions basic-accordion"><!-- wp:crosswinds-blocks/accordion {"style":{"border":{"top":{"color":"var:preset|color|contrast","style":"solid","width":"1px"},"right":{"color":"var:preset|color|contrast","style":"solid","width":"1px"},"bottom":{"color":"var:preset|color|contrast","style":"solid","width":"1px"},"left":{"color":"var:preset|color|contrast","style":"solid","width":"1px"}}}} -->
						<div class="wp-block-crosswinds-blocks-accordion" style="border-top-color:var(--wp--preset--color--contrast);border-top-style:solid;border-top-width:1px;border-right-color:var(--wp--preset--color--contrast);border-right-style:solid;border-right-width:1px;border-bottom-color:var(--wp--preset--color--contrast);border-bottom-style:solid;border-bottom-width:1px;border-left-color:var(--wp--preset--color--contrast);border-left-style:solid;border-left-width:1px"><!-- wp:crosswinds-blocks/accordion-title {"accordionPanelIcon":"plus-minus","style":{"border":{"color":null,"style":null,"width":null,"top":{},"right":{},"bottom":{"color":"var:preset|color|contrast","style":"solid","width":"1px"},"left":{}}}} -->
						<div class="accordion-title-container"><div id="-control" class="wp-block-crosswinds-blocks-accordion-title" style="border-bottom-color:var(--wp--preset--color--contrast);border-bottom-style:solid;border-bottom-width:1px" role="button" aria-controls="" aria-expanded="false"><!-- wp:heading {"level":3,"placeholder":"Add a heading here...","style":{"spacing":{"padding":{"top":"10px","right":"10px","bottom":"10px","left":"10px"}}},"backgroundColor":"contrast","textColor":"base"} -->
						<h3 class="wp-block-heading has-base-color has-contrast-background-color has-text-color has-background" style="padding-top:10px;padding-right:10px;padding-bottom:10px;padding-left:10px">' . esc_html__( 'This is a heading', 'crosswinds-blocks' ) . '</h3>
						<!-- /wp:heading --><span class="accordion-icon plus-minus"></span></div></div>
						<!-- /wp:crosswinds-blocks/accordion-title -->
						
						<!-- wp:crosswinds-blocks/accordion-body {"style":{"spacing":{"padding":{"top":"20px","right":"20px","bottom":"20px","left":"20px"}}}} -->
						<div id="" class="wp-block-crosswinds-blocks-accordion-body" style="padding-top:20px;padding-right:20px;padding-bottom:20px;padding-left:20px" role="region" aria-labelledby="-control" hidden><!-- wp:paragraph {"placeholder":"Add a heading here..."} -->
						<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
						<!-- /wp:paragraph --></div>
						<!-- /wp:crosswinds-blocks/accordion-body --></div>
						<!-- /wp:crosswinds-blocks/accordion -->
						
						<!-- wp:crosswinds-blocks/accordion {"style":{"border":{"top":{"color":"var:preset|color|contrast","style":"solid","width":"1px"},"right":{"color":"var:preset|color|contrast","style":"solid","width":"1px"},"bottom":{"color":"var:preset|color|contrast","style":"solid","width":"1px"},"left":{"color":"var:preset|color|contrast","style":"solid","width":"1px"}}}} -->
						<div class="wp-block-crosswinds-blocks-accordion" style="border-top-color:var(--wp--preset--color--contrast);border-top-style:solid;border-top-width:1px;border-right-color:var(--wp--preset--color--contrast);border-right-style:solid;border-right-width:1px;border-bottom-color:var(--wp--preset--color--contrast);border-bottom-style:solid;border-bottom-width:1px;border-left-color:var(--wp--preset--color--contrast);border-left-style:solid;border-left-width:1px"><!-- wp:crosswinds-blocks/accordion-title {"accordionPanelIcon":"plus-minus","style":{"border":{"color":null,"style":null,"width":null,"top":{},"right":{},"bottom":{"color":"var:preset|color|contrast","style":"solid","width":"1px"},"left":{}}}} -->
						<div class="accordion-title-container"><div id="-control" class="wp-block-crosswinds-blocks-accordion-title" style="border-bottom-color:var(--wp--preset--color--contrast);border-bottom-style:solid;border-bottom-width:1px" role="button" aria-controls="" aria-expanded="false"><!-- wp:heading {"level":3,"placeholder":"Add a heading here...","style":{"spacing":{"padding":{"top":"10px","right":"10px","bottom":"10px","left":"10px"}}},"backgroundColor":"contrast","textColor":"base"} -->
						<h3 class="wp-block-heading has-base-color has-contrast-background-color has-text-color has-background" style="padding-top:10px;padding-right:10px;padding-bottom:10px;padding-left:10px">' . esc_html__( 'This is a heading', 'crosswinds-blocks' ) . '</h3>
						<!-- /wp:heading --><span class="accordion-icon plus-minus"></span></div></div>
						<!-- /wp:crosswinds-blocks/accordion-title -->

						<!-- wp:crosswinds-blocks/accordion-body {"style":{"spacing":{"padding":{"top":"20px","right":"20px","bottom":"20px","left":"20px"}}}} -->
						<div id="" class="wp-block-crosswinds-blocks-accordion-body" style="padding-top:20px;padding-right:20px;padding-bottom:20px;padding-left:20px" role="region" aria-labelledby="-control" hidden><!-- wp:paragraph {"placeholder":"Add a heading here..."} -->
						<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
						<!-- /wp:paragraph --></div>
						<!-- /wp:crosswinds-blocks/accordion-body --></div>
						<!-- /wp:crosswinds-blocks/accordion -->
						
						<!-- wp:crosswinds-blocks/accordion {"style":{"border":{"top":{"color":"var:preset|color|contrast","style":"solid","width":"1px"},"right":{"color":"var:preset|color|contrast","style":"solid","width":"1px"},"bottom":{"color":"var:preset|color|contrast","style":"solid","width":"1px"},"left":{"color":"var:preset|color|contrast","style":"solid","width":"1px"}}}} -->
						<div class="wp-block-crosswinds-blocks-accordion" style="border-top-color:var(--wp--preset--color--contrast);border-top-style:solid;border-top-width:1px;border-right-color:var(--wp--preset--color--contrast);border-right-style:solid;border-right-width:1px;border-bottom-color:var(--wp--preset--color--contrast);border-bottom-style:solid;border-bottom-width:1px;border-left-color:var(--wp--preset--color--contrast);border-left-style:solid;border-left-width:1px"><!-- wp:crosswinds-blocks/accordion-title {"accordionPanelIcon":"plus-minus","style":{"border":{"color":null,"style":null,"width":null,"top":{},"right":{},"bottom":{"color":"var:preset|color|contrast","style":"solid","width":"1px"},"left":{}}}} -->
						<div class="accordion-title-container"><div id="-control" class="wp-block-crosswinds-blocks-accordion-title" style="border-bottom-color:var(--wp--preset--color--contrast);border-bottom-style:solid;border-bottom-width:1px" role="button" aria-controls="" aria-expanded="false"><!-- wp:heading {"level":3,"placeholder":"Add a heading here...","style":{"spacing":{"padding":{"top":"10px","right":"10px","bottom":"10px","left":"10px"}}},"backgroundColor":"contrast","textColor":"base"} -->
						<h3 class="wp-block-heading has-base-color has-contrast-background-color has-text-color has-background" style="padding-top:10px;padding-right:10px;padding-bottom:10px;padding-left:10px">' . esc_html__( 'This is a heading', 'crosswinds-blocks' ) . '</h3>
						<!-- /wp:heading --><span class="accordion-icon plus-minus"></span></div></div>
						<!-- /wp:crosswinds-blocks/accordion-title -->

						<!-- wp:crosswinds-blocks/accordion-body {"style":{"spacing":{"padding":{"top":"20px","right":"20px","bottom":"20px","left":"20px"}}}} -->
						<div id="" class="wp-block-crosswinds-blocks-accordion-body" style="padding-top:20px;padding-right:20px;padding-bottom:20px;padding-left:20px" role="region" aria-labelledby="-control" hidden><!-- wp:paragraph {"placeholder":"Add a heading here..."} -->
						<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
						<!-- /wp:paragraph --></div>
						<!-- /wp:crosswinds-blocks/accordion-body --></div>
						<!-- /wp:crosswinds-blocks/accordion --></div>
						<!-- /wp:crosswinds-blocks/accordions -->',
);
