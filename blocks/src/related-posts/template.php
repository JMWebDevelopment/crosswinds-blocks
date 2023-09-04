<?php
/**
 * Creates the template for the related posts block.
 *
 * PHP version 7.3
 *
 * @link       https://crosswindsframework.com/downloads/crosswinds-blocks
 * @since      1.0.0
 *
 * @package    Crosswinds_Blocks
 * @subpackage Crosswinds_Blocks/blocks/related-posts
 */

$block_query_args = array(
	'posts_per_page'      => $attributes['numPosts'],
	'ignore_sticky_posts' => 1,
	'post__not_in'        => array( get_the_ID() ),
	'category__in'        => wp_get_post_categories( get_the_ID() ),
	'orderby'             => 'rand',
);
$block_query      = new WP_Query( $block_query_args );

if ( $block_query->have_posts() ) {
	$classnames         = get_post_class();
	$wrapper_attributes = get_block_wrapper_attributes( array( 'class' => 'columns-' . $attributes['numColumns'] ) );
	?>
	<div <?php echo wp_kses_post( $wrapper_attributes ); ?>>
		<?php
		while ( $block_query->have_posts() ) {
			$block_query->the_post();

			$block_instance = $block->parsed_block;
			$block_instance['blockName'] = 'core/null';
			?>
			<div id="related-post-<?php the_ID(); ?>" <?php post_class( 'crosswinds-blocks-related-post' ); ?>>
				<?php
				echo (
					new WP_Block(
						$block_instance,
						array(
							'postType' => get_post_type(),
							'postId'   => get_the_ID(),
						)
					)
				)->render( array( 'dynamic' => false ) );
				?>
			</div>
			<?php
		}
		?>
	</div>
	<?php
}
wp_reset_postdata();
