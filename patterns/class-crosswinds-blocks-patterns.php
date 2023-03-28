<?php
/**
 * Holds all of the patterns functions.
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
class Crosswinds_Blocks_Patterns {

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

	public function register_block_pattern_categories() {
		register_block_pattern_category(
			'crosswinds-blocks',
			array(
				'label' => __( 'Crosswinds Blocks', 'crosswinds-blocks' ),
			)
		);
	}

	public function register_block_patterns() {
		$block_patterns = array(
			'skills-sliders/skill-slider',
		);

		foreach ( $block_patterns as $block_pattern ) {
			register_block_pattern(
				'crosswinds-blocks/' . $block_pattern,
				require plugin_dir_path( __FILE__ ) . $block_pattern . '.php'
			);
		}
	}
}
