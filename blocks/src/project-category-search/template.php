<?php
$project_categories = get_terms(
	array(
		'taxonomy' => 'project_category'
	)
);
$term = get_queried_object();
?>

<div <?php echo get_block_wrapper_attributes(); ?>>
	<label for="project-category-search"><?php echo wp_kses_post( $attributes['label'] ); ?></label>
	<select name="project_category" id="project-category-search">
		<option value=""><?php esc_html_e( 'Select a Category', 'crosswinds-blocks' ); ?></option>
		<?php
		if ( $project_categories ) {
			foreach ( $project_categories as $project_cat ) {
				if ( 'project_category' === $term->taxonomy && $term->term_id === $project_cat->term_id ) {
					$selected = 'selected="selected"';
				} else {
					$selected = '';
				}
				echo '<option value="' . esc_attr( $project_cat->slug ) . '" ' . wp_kses_post( $selected ) . '>' . wp_kses_post( $project_cat->name ) . '</option>';
			}
		}
		?>
	</select>
</div>
