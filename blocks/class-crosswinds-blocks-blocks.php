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
		register_block_type( __DIR__ . '/build/skills-slider/' );

		register_block_type(
			__DIR__ . '/build/single-content/',
			array(
				'render_callback' => array( $this, 'single_content_block_render_callback' ),
			)
		);

		register_block_type( __DIR__ . '/build/marquee/' );

		register_block_type(
			__DIR__ . '/build/next-post/',
			array(
				'render_callback' => array( $this, 'next_post_block_render_callback' ),
			)
		);

		register_block_type(
			__DIR__ . '/build/previous-post/',
			array(
				'render_callback' => array( $this, 'previous_post_block_render_callback' ),
			)
		);

		register_block_type(
			__DIR__ . '/build/related-posts/',
			array(
				'render_callback' => array( $this, 'related_posts_block_render_callback' ),
			)
		);

		register_block_type(
			__DIR__ . '/build/social-share-content/',
			array(
				'render_callback' => array( $this, 'social_share_content_block_render_callback' ),
			)
		);

		register_block_type( __DIR__ . '/build/basic-grid/' );
		register_block_type( __DIR__ . '/build/basic-grid-item/' );

		register_block_type( __DIR__ . '/build/accordions/' );
		register_block_type( __DIR__ . '/build/accordion/' );
		register_block_type( __DIR__ . '/build/accordion-title/' );
		register_block_type( __DIR__ . '/build/accordion-body/' );

		register_block_type( __DIR__ . '/build/tabs/' );
		register_block_type( __DIR__ . '/build/tab-section/' );

		register_block_type(
			__DIR__ . '/build/carousel/',
			array(
				'render_callback' => array( $this, 'carousel_block_render_callback' ),
			)
		);

		register_block_type(
			__DIR__ . '/build/carousel-slide/',
			array(
				'render_callback' => array( $this, 'carousel_slide_block_render_callback' ),
			)
		);
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
					'icon'  => '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--! Font Awesome Pro 6.3.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><defs><style>.fa-primary{color:#1b1930}.fa-secondary{color:#3e7ea8}</style></defs><path class="fa-primary" d="M64 32C64 14.3 49.7 0 32 0S0 14.3 0 32V480c0 17.7 14.3 32 32 32s32-14.3 32-32V32zM208 64.7V351.3L272 338V78L208 64.7zM368 318l64-13.3V111.3L368 98V318z"/><path class="fa-secondary" d="M272 78V338l96-20V98L272 78zM486.5 293.3c14.8-3.1 25.5-16.2 25.5-31.3V154c0-15.2-10.6-28.2-25.5-31.3L432 111.3V304.7l54.5-11.4zM208 64.7L166.5 56c-19.9-4.1-38.5 11-38.5 31.3V96H64v48h64V272H64v48h64v8.6c0 20.3 18.7 35.5 38.5 31.3l41.5-8.6V64.7z"/></svg>',
				),
			)
		);
	}

	public function single_content_block_render_callback( $attributes, $content, $block ) {
		ob_start();
		require plugin_dir_path( __FILE__ ) . 'build/single-content/template.php';
		return ob_get_clean();
	}

	public function next_post_block_render_callback( $attributes, $content, $block ) {
		ob_start();
		require plugin_dir_path( __FILE__ ) . 'build/next-post/template.php';
		return ob_get_clean();
	}

	public function previous_post_block_render_callback( $attributes, $content, $block ) {
		ob_start();
		require plugin_dir_path( __FILE__ ) . 'build/previous-post/template.php';
		return ob_get_clean();
	}

	public function related_posts_block_render_callback( $attributes, $content, $block ) {
		ob_start();
		require plugin_dir_path( __FILE__ ) . 'build/related-posts/template.php';
		return ob_get_clean();
	}

	public function social_share_content_block_render_callback( $attributes, $content, $block ) {
		ob_start();
		require plugin_dir_path( __FILE__ ) . 'build/social-share-content/template.php';
		return ob_get_clean();
	}

	public function carousel_block_render_callback( $attributes, $content, $block ) {
		ob_start();
		require plugin_dir_path( __FILE__ ) . 'build/carousel/template.php';
		return ob_get_clean();
	}

	public function carousel_slide_block_render_callback( $attributes, $content, $block ) {
		ob_start();
		require plugin_dir_path( __FILE__ ) . 'build/carousel-slide/template.php';
		return ob_get_clean();
	}

}
