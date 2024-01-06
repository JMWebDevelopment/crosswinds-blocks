<?php
/**
 * Creates the template for the single post type search results block.
 *
 * PHP version 7.3
 *
 * @link       https://crosswindsframework.com/downloads/crosswinds-blocks
 * @since      1.0.0
 *
 * @package    Crosswinds_Blocks
 * @subpackage Crosswinds_Blocks/blocks/single-post-types-search-results
 */

// If this file is called directly, then about execution.
if ( ! defined( 'WPINC' ) ) {
	die;
}

$allowed_html = array(
	'div' => array(
		'class' => array(),
		'style' => array(),
	),
	'label' => array(
		'for' => array(),
	),
	'select' => array(
		'id'   => array(),
		'name' => array(),
	),
	'option' => array(
		'value'    => array(),
		'selected' => array(),
	),
	'input' => array(
		'id'          => array(),
		'name'        => array(),
		'type'        => array(),
		'value'       => array(),
		'placeholder' => array(),
		'title'       => array(),
		'class'       => array(),
	),
);
?>
<?php
if ( wp_kses_post( $_GET['post_type'] ) === $attributes['postType'] ) {
	?>
	<div <?php echo wp_kses_data( get_block_wrapper_attributes() ); ?>>
		<?php echo wp_kses( do_blocks( $content ), $allowed_html ); ?>
	</div>
	<?php
} elseif ( ! isset( $_GET['post_type'] ) && 'all' === $attributes['postType'] ) {
	?>
	<div <?php echo wp_kses_data( get_block_wrapper_attributes() ); ?>>
		<?php echo wp_kses( do_blocks( $content ), $allowed_html ); ?>
	</div>
	<?php
}
