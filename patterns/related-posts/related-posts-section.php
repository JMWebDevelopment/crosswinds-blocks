<?php
// If this file is called directly, then about execution.
if ( ! defined( 'WPINC' ) ) {
	die;
}

return array(
	'title'         => esc_html__( 'Related Posts Section', 'crosswinds-blocks' ),
	'categories'    => array( 'crosswinds-blocks' ),
	'viewportWidth' => 1200,
	'content'       => '<!-- wp:group {"style":{"spacing":{"padding":{"top":"2rem","bottom":"2rem"}}},"className":"related-posts-section","layout":{"type":"constrained"}} -->
						<div class="wp-block-group related-posts-section" style="padding-top:2rem;padding-bottom:2rem"><!-- wp:heading {"textAlign":"center"} -->
						<h2 class="wp-block-heading has-text-align-center">' . esc_html__( 'Related Posts', 'crosswinds-blocks' ) . '</h2>
						<!-- /wp:heading -->
						
						<!-- wp:crosswinds-blocks/related-posts {"numColumns":3} -->
						<!-- wp:post-featured-image /-->
						
						<!-- wp:post-title {"level":3,"isLink":true} /-->
						
						<!-- wp:post-date /-->
						
						<!-- wp:post-excerpt /-->
						<!-- /wp:crosswinds-blocks/related-posts --></div>
						<!-- /wp:group -->',
);
