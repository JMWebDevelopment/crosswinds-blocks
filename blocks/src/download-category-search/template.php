<?php
/**
 * Creates the template for the download category search block.
 *
 * PHP version 7.3
 *
 * @link       https://crosswindsframework.com/downloads/crosswinds-blocks
 * @since      1.0.0
 *
 * @package    Crosswinds_Blocks
 * @subpackage Crosswinds_Blocks/blocks/download-category-search
 */

$download_categories = get_terms(
	array(
		'taxonomy' => 'download_category',
	)
);
$queried_term        = get_queried_object();
?>

<div <?php echo get_block_wrapper_attributes(); ?>>
	<label for="download-category-search"><?php echo wp_kses_post( $attributes['label'] ); ?></label>
	<select name="download_category" id="download-category-search">
		<option value=""><?php esc_html_e( 'Select a Category', 'crosswinds-blocks' ); ?></option>
		<?php
		if ( $download_categories ) {
			foreach ( $download_categories as $download_cat ) {
				if ( 'download_category' === $queried_term->taxonomy && $queried_term->term_id === $download_cat->term_id ) {
					$selected = 'selected="selected"';
				} else {
					$selected = '';
				}
				echo '<option value="' . esc_attr( $download_cat->slug ) . '" ' . wp_kses_post( $selected ) . '>' . wp_kses_post( $download_cat->name ) . '</option>';
			}
		}
		?>
	</select>
</div>
