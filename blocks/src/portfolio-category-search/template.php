<?php
$portfolio_categories = get_terms(
	array(
		'taxonomy' => 'portfolio_category'
	)
);
$term = get_queried_object();
?>

<div <?php echo get_block_wrapper_attributes(); ?>>
	<form id="portfolio-category-search-form">
		<label for="portafoglio-category-search"><?php esc_html_e( 'Select a Category', 'crosswinds-blocks' ); ?></label>
		<select id="portafoglio-category-search">
			<option value=""><?php esc_html_e( 'Select a Category', 'crosswinds-blocks' ); ?></option>
			<?php
			if ( $portfolio_categories ) {
				foreach ( $portfolio_categories as $portfolio_cat ) {
					if ( 'portfolio_category' === $term->taxonomy && $term->term_id === $portfolio_cat->term_id ) {
						$selected = 'selected="selected"';
					} else {
						$selected = '';
					}
					echo '<option value="' . esc_url( get_term_link( $portfolio_cat, 'portfolio_category' ) ) . '" ' . wp_kses_post( $selected ) . '>' . wp_kses_post( $portfolio_cat->name ) . '</option>';
				}
			}
			?>
		</select>
		<input type="submit" class="button" id="portfolio-category-search-button" value="<?php esc_html_e( 'Search', 'crosswinds-blocks' ); ?>" />
	</form>
</div>
