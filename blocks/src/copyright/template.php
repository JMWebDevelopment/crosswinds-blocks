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

$current_current_year = gmdate( 'Y' );
if ( 'icon-text' === $attributes['copyrightType'] ) {
	$inner_html = '&copy; ' . $attributes['copyrightText'] . ' ' . $current_year;
} elseif ( 'icon-only' === $attributes['copyrightType'] ) {
	$inner_html = '&copy; ' . $current_year;
} else {
	$inner_html = $attributes['copyrightText'] . ' ' . $current_year;
}
?>

<p <?php echo wp_kses_data( get_block_wrapper_attributes() ); ?>>
	<?php echo wp_kses_post( $inner_html ); ?>
</p>
