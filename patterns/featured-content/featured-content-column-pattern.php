<?php
/**
 * The Featured Content - Column pattern.
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
	'title'         => esc_html__( 'Featured Content - Column', 'crosswinds-blocks' ),
	'viewportWidth' => 370,
	'categories'    => array( 'crosswinds-blocks' ),
	'content'       => '<!-- wp:group {"className":"featured-content-column-pattern","layout":{"type":"constrained"}} -->
	<div class="wp-block-group featured-content-column-pattern"><!-- wp:crosswinds-blocks/single-content {"postId":1} -->
	<!-- wp:post-featured-image /-->

	<!-- wp:post-title /-->

	<!-- wp:post-excerpt {"moreText":"' . esc_html__( 'Read This Post', 'crosswinds-blocks' ) . '"} /-->
	<!-- /wp:crosswinds-blocks/single-content --></div>
	<!-- /wp:group -->',
);
