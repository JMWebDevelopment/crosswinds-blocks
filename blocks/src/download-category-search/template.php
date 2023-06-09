<?php
$download_categories = get_terms(
	array(
		'taxonomy' => 'download_category'
	)
);
$term = get_queried_object();
?>

<div <?php echo get_block_wrapper_attributes(); ?>>
	<label for="download-category-search"><?php echo wp_kses_post( $attributes['label'] ); ?></label>
	<select name="download_category" id="download-category-search">
		<option value=""><?php esc_html_e( 'Select a Category', 'crosswinds-blocks' ); ?></option>
		<?php
		if ( $download_categories ) {
			foreach ( $download_categories as $download_cat ) {
				if ( 'download_category' === $term->taxonomy && $term->term_id === $download_cat->term_id ) {
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
