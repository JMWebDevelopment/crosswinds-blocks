<?php
/**
 * The Featured Content - Row with Left Photo pattern.
 *
 * @since 1.0
 *
 * @version 1.0
 *
 * @package Featured Content Block
 */

 // If this file is called directly, then about execution.
if ( ! defined( 'WPINC' ) ) {
	die;
}

return array(
	'title'         => esc_html__( 'Featured Content - Row with Left Photo', 'crosswinds-blocks' ),
	'viewportWidth' => 1200,
	'categories'    => array( 'crosswinds-blocks' ),
	'content'       => '<!-- wp:group {"align":"wide","className":"featured-content-block-row-photo-left","layout":{"type":"constrained"}} -->
	<div class="wp-block-group alignwide featured-content-block-row-photo-left"><!-- wp:crosswinds-blocks/single-content {"postId":1,"align":"wide"} -->
	<!-- wp:columns -->
	<div class="wp-block-columns"><!-- wp:column {"verticalAlignment":"center"} -->
	<div class="wp-block-column is-vertically-aligned-center"><!-- wp:post-featured-image /--></div>
	<!-- /wp:column -->

	<!-- wp:column {"verticalAlignment":"center"} -->
	<div class="wp-block-column is-vertically-aligned-center"><!-- wp:post-title /-->

	<!-- wp:post-excerpt {"moreText":"' . esc_html__( 'Read This Post', 'crosswinds-blocks' ) . '"} /--></div>
	<!-- /wp:column --></div>
	<!-- /wp:columns -->
	<!-- /wp:crosswinds-blocks/single-content --></div>
	<!-- /wp:group -->',
);
