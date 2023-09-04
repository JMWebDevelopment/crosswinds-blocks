<?php
/**
 * Creates the template for the project category search block.
 *
 * PHP version 7.3
 *
 * @link       https://crosswindsframework.com/downloads/crosswinds-blocks
 * @since      1.0.0
 *
 * @package    Crosswinds_Blocks
 * @subpackage Crosswinds_Blocks/blocks/project-category-search
 */

$project_categories = get_terms(
	array(
		'taxonomy' => 'project_category',
	)
);
$queried_term       = get_queried_object();
?>

<div <?php echo get_block_wrapper_attributes(); ?>>
	<label for="project-category-search"><?php echo wp_kses_post( $attributes['label'] ); ?></label>
	<select name="project_category" id="project-category-search">
		<option value=""><?php esc_html_e( 'Select a Category', 'crosswinds-blocks' ); ?></option>
		<?php
		if ( $project_categories ) {
			foreach ( $project_categories as $project_cat ) {
				if ( 'project_category' === $queried_term->taxonomy && $queried_term->term_id === $project_cat->term_id ) {
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
