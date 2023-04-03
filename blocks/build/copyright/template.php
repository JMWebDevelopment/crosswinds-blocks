<?php
/**
 * The template for the server-side rendering of single post block.
 *
 * @since 1.0
 *
 * @version 1.0
 *
 * @package Portafoglio
 */
$year = date( 'Y' );
if ( 'icon-text' === $attributes['copyrightType'] ) {
	$inner_html = '&copy; ' . $attributes['copyrightText'] . ' ' . $year;
} elseif ( 'icon-only' === $attributes['copyrightType'] ) {
	$inner_html = '&copy; ' . $year;
} else {
	$inner_html = $attributes['copyrightText'] . ' ' . $year;
}
?>

<p <?php echo get_block_wrapper_attributes(); ?>>
	<?php echo wp_kses_post( $inner_html ); ?>
</p>
