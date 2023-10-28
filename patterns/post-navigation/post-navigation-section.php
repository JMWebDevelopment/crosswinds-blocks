<?php
// If this file is called directly, then about execution.
if ( ! defined( 'WPINC' ) ) {
	die;
}

return array(
	'title'         => esc_html__( 'Post Navigation Section', 'crosswinds-blocks' ),
	'categories'    => array( 'crosswinds-blocks' ),
	'viewportWidth' => 1200,
	'content'       => '<!-- wp:group {"style":{"spacing":{"padding":{"top":"2rem","bottom":"2rem"}}},"className":"post-navigation-section","layout":{"type":"constrained"}} -->
						<div class="wp-block-group post-navigation-section" style="padding-top:2rem;padding-bottom:2rem"><!-- wp:columns -->
						<div class="wp-block-columns"><!-- wp:column -->
						<div class="wp-block-column"><!-- wp:crosswinds-blocks/previous-post -->
						<!-- wp:post-featured-image /-->
						
						<!-- wp:post-title {"textAlign":"center","isLink":true} /-->
						
						<!-- wp:post-excerpt {"textAlign":"left","moreText":"' . esc_html__( 'Read This Post', 'crosswinds-blocks' ) . '"} /-->
						<!-- /wp:crosswinds-blocks/previous-post --></div>
						<!-- /wp:column -->
						
						<!-- wp:column -->
						<div class="wp-block-column"><!-- wp:crosswinds-blocks/next-post -->
						<!-- wp:post-featured-image /-->
						
						<!-- wp:post-title {"textAlign":"center","isLink":true} /-->
						
						<!-- wp:post-excerpt {"textAlign":"left","moreText":"' . esc_html__( 'Read This Post', 'crosswinds-blocks' ) . '"} /-->
						<!-- /wp:crosswinds-blocks/next-post --></div>
						<!-- /wp:column --></div>
						<!-- /wp:columns --></div>
						<!-- /wp:group -->',
);
