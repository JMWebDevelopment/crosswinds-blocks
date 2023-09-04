<?php
/**
 * Creates the template for the download search filters block.
 *
 * PHP version 7.3
 *
 * @link       https://crosswindsframework.com/downloads/crosswinds-blocks
 * @since      1.0.0
 *
 * @package    Crosswinds_Blocks
 * @subpackage Crosswinds_Blocks/blocks/download-search-filters
 */

?>
<div <?php echo get_block_wrapper_attributes(); ?>>
	<form id="searchform" method="get" action="<?php echo esc_url( home_url( '/' ) ); ?>">
		<input type="hidden" name="post_type" value="download" />
		<?php echo do_blocks( $content ); ?>
	</form>
</div>
