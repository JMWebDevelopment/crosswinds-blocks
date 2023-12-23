<?php
/**
 * Creates the template for the copyright block.
 *
 * PHP version 7.3
 *
 * @link       https://crosswindsframework.com/downloads/crosswinds-blocks
 * @since      1.0.0
 *
 * @package    Crosswinds_Blocks
 * @subpackage Crosswinds_Blocks/blocks/copyright
 */

// If this file is called directly, then about execution.
if ( ! defined( 'WPINC' ) ) {
	die;
}

$num_comments = get_comment_count( $block->context['postId'] );
if ( 1 === $num_comments['approved'] ) {
	$comment_text = $attributes['singularCommentText'];
} else {
	$comment_text = $attributes['pluralCommentText'];
}

?>

<p <?php echo wp_kses_data( get_block_wrapper_attributes() ); ?>>
	<?php echo wp_kses_post( $num_comments['approved'] . ' ' . $comment_text ); ?>
</p>
