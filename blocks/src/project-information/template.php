<?php
/**
 * Creates the template for the project information block.
 *
 * PHP version 7.3
 *
 * @link       https://crosswindsframework.com/downloads/crosswinds-blocks
 * @since      1.0.0
 *
 * @package    Crosswinds_Blocks
 * @subpackage Crosswinds_Blocks/blocks/project-information
 */

$project_cats    = get_the_terms( get_the_ID(), 'project_category' );
$category_string = '';
if ( $project_cats ) {
	$num_cats = count( $project_cats );
	$count    = 1;
	foreach ( $project_cats as $the_category ) {
		$category_string .= $the_category->name;

		if ( $count < $num_cats ) {
			$category_string .= ', ';
		}
		$count++;
	}
}
?>
<p <?php echo get_block_wrapper_attributes(); ?>>
	<strong><?php esc_html_e( 'Client:', 'crosswinds-blocks' ); ?></strong> <?php echo wp_kses_post( get_post_meta( get_the_ID(), 'project_client', true ) ); ?><br />
	<strong><?php esc_html_e( 'Date:', 'crosswinds-blocks' ); ?></strong> <?php echo wp_kses_post( date_format( new DateTime( iso8601_to_datetime( get_post_meta( get_the_ID(), 'project_date', true ) ) ), get_option( 'date_format' ) ) ); ?><br />
	<strong><?php esc_html_e( 'Category:', 'crosswinds-blocks' ); ?></strong> <?php echo wp_kses_post( $category_string ); ?>
</p>
