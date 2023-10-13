<?php
/**
 * Creates the template for the project search block.
 *
 * PHP version 7.3
 *
 * @link       https://crosswindsframework.com/downloads/crosswinds-blocks
 * @since      1.0.0
 *
 * @package    Crosswinds_Blocks
 * @subpackage Crosswinds_Blocks/blocks/project-search
 */

?>
<div <?php echo wp_kses_data( get_block_wrapper_attributes() ); ?>>
	<label for="search-term-field"><?php echo wp_kses_post( $attributes['label'] ); ?></label><br />
	<input type="search" class="search-field" placeholder="<?php echo esc_attr_x( 'Search …', 'placeholder', 'crosswinds-blocks' ); ?>" value="<?php echo esc_attr( get_search_query() ); ?>" name="s" id="search-term-field" title="<?php echo esc_attr_x( 'Search for:', 'label', 'crosswinds-blocks' ); ?>" />
</div>
