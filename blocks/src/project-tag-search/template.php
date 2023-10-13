<?php
/**
 * Creates the template for the project tag search block.
 *
 * PHP version 7.3
 *
 * @link       https://crosswindsframework.com/downloads/crosswinds-blocks
 * @since      1.0.0
 *
 * @package    Crosswinds_Blocks
 * @subpackage Crosswinds_Blocks/blocks/project-tag-search
 */

$project_tags = get_terms(
	array(
		'taxonomy' => 'project_tag',
	)
);
$queried_term = get_queried_object();
?>

<div <?php echo wp_kses_data( get_block_wrapper_attributes() ); ?>>
	<label for="project-tag-search"><?php echo wp_kses_post( $attributes['label'] ); ?></label>
	<select id="project-tag-search">
		<option value=""><?php esc_html_e( 'Select a Tag', 'crosswinds-blocks' ); ?></option>
		<?php
		if ( $project_tags ) {
			foreach ( $project_tags as $project_tag ) {
				if ( 'project_tag' === $queried_term->taxonomy && $queried_term->term_id === $project_tag->term_id ) {
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
