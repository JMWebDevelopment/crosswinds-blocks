<?php
/**
 * Creates the template for the previous post block.
 *
 * PHP version 7.3
 *
 * @link       https://crosswindsframework.com/downloads/crosswinds-blocks
 * @since      1.0.0
 *
 * @package    Crosswinds_Blocks
 * @subpackage Crosswinds_Blocks/blocks/previous-post
 */

// If this file is called directly, then about execution.
if ( ! defined( 'WPINC' ) ) {
	die;
}

$previous_post = get_previous_post( get_the_ID() );

if ( $previous_post ) {

	$block_query_args = array(
		'posts_per_page'      => 1,
		'ignore_sticky_posts' => 1,
		'post__in'            => array( $previous_post->ID ),
	);
	$block_query      = new WP_Query( $block_query_args );

	if ( $block_query->have_posts() ) {
		$classnames         = get_post_class();
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
								'postId'   => get_the_ID(),
								'postType' => get_post_type(),
							)
						)
					)->render( array( 'dynamic' => false ) )
				);
			}
			?>
		</div>
		<?php
	}
}
wp_reset_postdata();
