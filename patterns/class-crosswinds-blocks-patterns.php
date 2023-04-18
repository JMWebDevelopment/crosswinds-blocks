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

	/**
	 * Creates the Crosswinds Blocks pattern category.
	 * 
	 * @since 1.0
	 */
	public function register_block_pattern_categories() {
		register_block_pattern_category(
			'crosswinds-blocks',
			array(
				'label' => __( 'Crosswinds Blocks', 'crosswinds-blocks' ),
			)
		);
	}

	/**
	 * Registers the block patterns.
	 * 
	 * @since 1.0
	 */
	public function register_block_patterns() {
		$block_patterns = array(
			'accordions/accordion-with-border-and-title-background',
			'accordions/basic-accordion',
			'featured-content/featured-content-column-pattern',
			'featured-content/featured-content-block-row-photo-left',
			'featured-content/featured-content-block-row-photo-right',
			'post-navigation/post-navigation-section',
			'related-posts/related-posts-section',
			'single-posts/single-post-horizontal',
			'single-posts/single-post-vertical',
			'skills-sliders/skill-slider',
			'skills-sliders/skills-slider-group',
			'skills-sliders/skills-slider-section',
			'social-sharing/share-content-horizontal',
			'social-sharing/share-content-vertical',
		);

		foreach ( $block_patterns as $block_pattern ) {
			register_block_pattern(
				'crosswinds-blocks/' . $block_pattern,
				require plugin_dir_path( __FILE__ ) . $block_pattern . '.php'
			);
		}
	}
}
