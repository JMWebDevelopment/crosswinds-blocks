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

if ( get_option( 'crosswinds-blocks-google-maps-api-key' ) ) {
	if ( 'set-height' === $attributes['mapContainerSize'] ) {
		$block_style = 'height: ' . $attributes['mapHeight'] . 'px';
	} else {
		$block_style = '';
	}
	?>
	<div
		<?php
		echo wp_kses_data(
			get_block_wrapper_attributes(
				array(
					'class' => 'map-block-' . $attributes['mapContainerSize'],
					'style' => $block_style,
				)
			)
		);
		?>
	>
		<iframe width="100%" height="450" frameborder="0" style="border:0" src="https://www.google.com/maps/embed/v1/place?key=<?php echo esc_attr( get_option( 'crosswinds-blocks-google-maps-api-key' ) ); ?>&q=<?php echo esc_attr( $attributes['addressLineOne'] ); ?>+<?php echo esc_attr( $attributes['addressLineTwo'] ); ?>,<?php echo esc_attr( $attributes['city'] ); ?>+<?php echo esc_attr( $attributes['stateProvince'] ); ?>+<?php echo esc_attr( $attributes['country'] ); ?>+<?php echo esc_attr( $attributes['zipCode'] ); ?>" allowfullscreen></iframe>
	</div>
	<?php
}
