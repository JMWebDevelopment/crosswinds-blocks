<?php
/**
 * Creates the template for the project search filters block.
 *
 * PHP version 7.3
 *
 * @link       https://crosswindsframework.com/downloads/crosswinds-blocks
 * @since      1.0.0
 *
 * @package    Crosswinds_Blocks
 * @subpackage Crosswinds_Blocks/blocks/project-search-filters
 */

// If this file is called directly, then about execution.
if ( ! defined( 'WPINC' ) ) {
	die;
}

$project_tags = get_terms(
	array(
		'taxonomy' => 'project_tag',
	)
);
$allowed_html = array(
	'div' => array(
		'class' => array(),
		'style' => array(),
	),
	'label' => array(
		'for' => array(),
	),
	'select' => array(
		'id'   => array(),
		'name' => array(),
	),
	'option' => array(
		'value'    => array(),
		'selected' => array(),
	),
	'input' => array(
		'id'          => array(),
		'name'        => array(),
		'type'        => array(),
		'value'       => array(),
		'placeholder' => array(),
		'title'       => array(),
		'class'       => array(),
	),
);
?>

<div <?php echo wp_kses_data( get_block_wrapper_attributes() ); ?>>
	<form id="searchform" method="get" action="<?php echo esc_url( home_url( '/' ) ); ?>">
		<input type="hidden" name="post_type" value="project" />
		<?php echo wp_kses( do_blocks( $content ), $allowed_html ); ?>
	</form>
</div>
