<?php
/**
 * Holds all of the blocks functions.
 *
 * PHP version 7.3
 *
 * @link       https://jacobmartella.com
 * @since      1.0.0
 *
 * @package    Crosswinds_Blocks
 * @subpackage Crosswinds_Blocks/public
 */

namespace Crosswinds_Blocks;

/**
 * Runs the blocks.
 *
 * This class defines all code necessary to run the blocks of the plugin.
 *
 * @since      1.0.0
 * @package    Crosswinds_Blocks
 * @subpackage Crosswinds_Blocks/public
 */
class Crosswinds_Blocks_Blocks {

	/**
	 * Version of the plugin.
	 *
	 * @since 1.0.0
	 * @var string $version Description.
	 */
	private $version;

	/**
	 * Builds the Crosswinds_Blocks_Blocks object.
	 *
	 * @since 1.0.0
	 *
	 * @param string $version Version of the plugin.
	 */
	public function __construct( $version ) {
		$this->version = $version;
	}

	/**
	 * Loads the custom blocks.
	 *
	 * @since 1.0.0
	 */
	public function blocks_init() {
		register_block_type( __DIR__ . '/build/starter-block/' );
	}

	/**
	 * Creates the custom block categories.
	 *
	 * @since 1.0.0
	 *
	 * @param array                   $block_categories          Array of categories for block types.
	 * @param WP_Block_Editor_Context $block_editor_context      The current block editor context.
	 * @return array                                             Updated array of block categories with our custom categories.
	 */
	public function blocks_categories( $block_categories, $block_editor_context ) {
		return array_merge(
			$block_categories,
			array(
				array(
					'slug'  => 'crosswinds-blocks',
					'title' => __( 'Crosswinds Blocks', 'crosswinds-blocks' ),
					'icon'  => 'wordpress',
				),
			)
		);
	}

}
