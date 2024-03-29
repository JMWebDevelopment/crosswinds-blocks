<?php
/**
 * The template for the server-side rendering of single post block.
 *
 * @since 1.0
 *
 * @version 1.0
 *
 * @package Featured Content Block
 */

$block_query_args = array(
	'posts_per_page'      => 1,
	'ignore_sticky_posts' => 1,
	'post__in'            => array( $block->attributes['postId'] ),
	'post_type'           => array( $block->attributes['postType'] ),
);
$block_query      = new WP_Query( $block_query_args );

if ( $attributes['cbUseFlex'] && $attributes['cbFillHeight'] ) {
	$flex_classes = 'column-flex cb-fill-height-parent';
} elseif ( $attributes['cbUseFlex'] ) {
	$flex_classes = 'column-flex';
} else {
	$flex_classes = '';
}

// If this file is called directly, then about execution.
if ( ! defined( 'WPINC' ) ) {
	die;
}

if ( $block_query->have_posts() ) {
	$classnames         = get_post_class( array( $flex_classes ) );
	$wrapper_attributes = get_block_wrapper_attributes( array( 'class' => implode( ' ', $classnames ) ) );
	?>
	<div <?php echo wp_kses_post( $wrapper_attributes ); ?>>
		<?php
		while ( $block_query->have_posts() ) {
			$block_query->the_post();

			$block_instance              = $block->parsed_block;
			$block_instance['blockName'] = 'core/null';

			echo wp_kses_post(
				(
					new WP_Block(
						$block_instance,
						array(
							'postType' => get_post_type(),
							'postId'   => get_the_ID(),
						)
					)
				)->render( array( 'dynamic' => false ) )
			);
		}
		?>
	</div>
	<?php
}
wp_reset_postdata();
