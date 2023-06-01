<?php
$project_tags = get_terms(
	array(
		'taxonomy' => 'project_tag'
	)
);
$term = get_queried_object();
?>

<div <?php echo get_block_wrapper_attributes(); ?>>
	<label for="portafoglio-tag-search"><?php esc_html_e( 'Select a Tag', 'crosswinds-blocks' ); ?></label>
	<select id="portafoglio-tag-search">
		<option value=""><?php esc_html_e( 'Select a Tag', 'crosswinds-blocks' ); ?></option>
		<?php
		if ( $project_tags ) {
			foreach ( $project_tags as $project_tag ) {
				if ( 'project_tag' === $term->taxonomy && $term->term_id === $project_tag->term_id ) {
					$selected = 'selected="selected"';
				} else {
					$selected = '';
				}
				echo '<option value="' . esc_url( get_term_link( $project_tag, 'project_tag' ) ) . '" ' . wp_kses_post( $selected ) . '>' . wp_kses_post( $project_tag->name ) . '</option>';
			}
		}
		?>
	</select>
</div>
