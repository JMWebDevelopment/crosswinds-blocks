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

	public function crosswinds_blocks_blocks_init() {
		register_block_type( __DIR__ . '/build/starter-block/' );
	}

	public function space_rocket_blocks_categories( $categories, $post ) {
		return array_merge(
			$categories,
			array(
				array(
					'slug' => 'starter-block-plugins-blocks',
					'title' => __( 'Starter Block Plugin Blocks', 'crosswinds-blocks' ),
					'icon'  => 'wordpress',
				),
			)
		);
	}

}
