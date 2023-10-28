<?php
// If this file is called directly, then about execution.
if ( ! defined( 'WPINC' ) ) {
	die;
}

return array(
	'title'         => esc_html__( 'Social Sharing Section - Horizontal', 'crosswinds-blocks' ),
	'categories'    => array( 'crosswinds-blocks' ),
	'viewportWidth' => 1200,
	'content'       => '<!-- wp:group {"style":{"spacing":{"padding":{"top":"var:preset|spacing|small","right":"0","bottom":"var:preset|spacing|small","left":"0"},"blockGap":"var:preset|spacing|x-small"}},"className":"share-content-horizontal","layout":{"type":"constrained"}} -->
						<div class="wp-block-group share-content-horizontal" style="padding-top:var(--wp--preset--spacing--small);padding-right:0;padding-bottom:var(--wp--preset--spacing--small);padding-left:0"><!-- wp:heading {"textAlign":"center","fontSize":"large"} -->
						<h2 class="wp-block-heading has-text-align-center has-large-font-size">' . esc_html__( 'Share This Post', 'crosswinds-blocks' ) . '</h2>
						<!-- /wp:heading -->
						
						<!-- wp:crosswinds-blocks/social-share-content {"socialIcons":["facebook","mastodon","twitter","reddit","pinterest","email"],"iconsDirection":"horizontal","iconBackgroundColor":"primary","iconHoverBackgroundColor":"secondary","iconHoverColor":"base","iconColor":"base","iconBackgroundColorValue":"#343A40","iconHoverBackgroundColorValue":"#6C757D","iconHoverColorValue":"#ffffff","iconColorValue":"#ffffff"} /--></div>
						<!-- /wp:group -->',
);
