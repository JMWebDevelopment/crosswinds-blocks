<?php
// If this file is called directly, then about execution.
if ( ! defined( 'WPINC' ) ) {
	die;
}

return array(
	'title'         => esc_html__( 'Single Post - Vertical', 'crosswinds-blocks' ),
	'categories'    => array( 'crosswinds-blocks' ),
	'viewportWidth' => 800,
	'content'       => '<!-- wp:group {"className":"single-post-vertical","layout":{"type":"constrained"}} -->
						<div class="wp-block-group single-post-vertical"><!-- wp:post-featured-image /-->
						
						<!-- wp:post-title /-->
						
						<!-- wp:post-date /-->
						
						<!-- wp:post-excerpt {"moreText":"' . esc_html__( 'Read This Post', 'crosswinds-blocks' ) . '"} /--></div>
						<!-- /wp:group -->',
);
