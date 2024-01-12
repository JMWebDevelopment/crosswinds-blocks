<?php
/**
 * Creates the template for the Google Maps block.
 *
 * PHP version 7.3
 *
 * @link       https://crosswindsframework.com/downloads/crosswinds-blocks
 * @since      1.0.0
 *
 * @package    Crosswinds_Blocks
 * @subpackage Crosswinds_Blocks/blocks/google-maps
 */

// If this file is called directly, then about execution.
if ( ! defined( 'WPINC' ) ) {
	die;
}
?>

<div <?php echo wp_kses_data( get_block_wrapper_attributes() ); ?>>
	<?php
	if ( 'image' === $attributes['fieldType'] ) {
		$image = get_field( $attributes['fieldName'] );

		if ( $image ) {
			if ( is_array( $image ) ) {
				echo '<img src="' . esc_url( $image['url'] ) . '" alt="' . esc_attr( $image['alt'] ) . '" />';
			} else {
				echo wp_get_attachment_image( $image, 'full' );
			}
		}
	} elseif ( 'oembed' === $attributes['fieldType'] ) {
		the_field( $attributes['fieldName'] );
	} else {
		the_field( $attributes['fieldName'] );
	}
	?>
</div>
