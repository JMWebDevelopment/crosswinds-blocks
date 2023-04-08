<?php
$portfolio_tags = get_terms(
	array(
		'taxonomy' => 'portfolio_tag'
	)
);
$term = get_queried_object();
?>

<div <?php echo get_block_wrapper_attributes(); ?>>
	<form id="portfolio-tag-search-form">
		<label for="portafoglio-tag-search"><?php esc_html_e( 'Select a Tag', 'crosswinds-blocks' ); ?></label>
		<select id="portafoglio-tag-search">
			<option value=""><?php esc_html_e( 'Select a Tag', 'crosswinds-blocks' ); ?></option>
			<?php
			if ( $portfolio_tags ) {
				foreach ( $portfolio_tags as $portfolio_tag ) {
					if ( 'portfolio_tag' === $term->taxonomy && $term->term_id === $portfolio_tag->term_id ) {
						$selected = 'selected="selected"';
					} else {
						$selected = '';
					}
					echo '<option value="' . esc_url( get_term_link( $portfolio_tag, 'portfolio_tag' ) ) . '" ' . wp_kses_post( $selected ) . '>' . wp_kses_post( $portfolio_tag->name ) . '</option>';
				}
			}
			?>
		</select>
		<input type="submit" class="button" id="portfolio-tag-search-button" value="<?php esc_html_e( 'Search', 'crosswinds-blocks' ); ?>" />
	</form>
</div>
