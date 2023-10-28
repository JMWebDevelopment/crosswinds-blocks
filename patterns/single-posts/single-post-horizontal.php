<?php
// If this file is called directly, then about execution.
if ( ! defined( 'WPINC' ) ) {
	die;
}

return array(
	'title'         => esc_html__( 'Single Post - Horizontal', 'crosswinds-blocks' ),
	'categories'    => array( 'crosswinds-blocks' ),
	'viewportWidth' => 800,
	'content'       => '<!-- wp:columns {"verticalAlignment":"center","className":"single-post-horizontal"} -->
						<div class="wp-block-columns are-vertically-aligned-center single-post-horizontal"><!-- wp:column {"verticalAlignment":"center","width":"33.3%"} -->
						<div class="wp-block-column is-vertically-aligned-center" style="flex-basis:33.3%"><!-- wp:post-featured-image {"isLink":true} /--></div>
						<!-- /wp:column -->
						
						<!-- wp:column {"verticalAlignment":"center","width":"66.7%","style":{"spacing":{"blockGap":"15px"}}} -->
						<div class="wp-block-column is-vertically-aligned-center" style="flex-basis:66.7%"><!-- wp:post-title {"isLink":true} /-->
						
						<!-- wp:group {"layout":{"type":"flex","flexWrap":"nowrap"}} -->
						<div class="wp-block-group"><!-- wp:post-date /-->
						
						<!-- wp:paragraph -->
						<p>•</p>
						<!-- /wp:paragraph -->
						
						<!-- wp:post-terms {"term":"category"} /--></div>
						<!-- /wp:group -->
						
						<!-- wp:post-excerpt {"moreText":"' . esc_html__( 'Read This Post', 'crosswinds-blocks' ) . '"} /--></div>
						<!-- /wp:column --></div>
						<!-- /wp:columns -->',
);
