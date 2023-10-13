<?php
/**
 * Creates the template for the project search filters buttons block.
 *
 * PHP version 7.3
 *
 * @link       https://crosswindsframework.com/downloads/crosswinds-blocks
 * @since      1.0.0
 *
 * @package    Crosswinds_Blocks
 * @subpackage Crosswinds_Blocks/blocks/project-search-filters-buttons
 */

?>
<div <?php echo wp_kses_data( get_block_wrapper_attributes() ); ?>>
	<input type="submit" value="<?php echo wp_kses_post( $attributes['searchLabel'] ); ?>" class="has-<?php echo esc_attr( $attributes['submitBackgroundColor'] ); ?>-background-color has-background" />
	<input type="reset" value="<?php echo wp_kses_post( $attributes['clearLabel'] ); ?>" class="has-<?php echo esc_attr( $attributes['resetBackgroundColor'] ); ?>-background-color has-background" />
</div>
