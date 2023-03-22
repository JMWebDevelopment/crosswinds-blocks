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

	public function single_content_block_render_callback( $attributes, $content, $block ) {
		ob_start();
		require plugin_dir_path( __FILE__ ) . 'build/single-content/template.php';
		return ob_get_clean();
	}

	public function get_post_types_list() {
		$post_types_args  = array(
			'public'             => true,
			'show_in_rest'       => true,
		);
		$post_types       = get_post_types( $post_types_args, 'objects' );
		$post_types_array = array();

		if ( $post_types ) {
			foreach ( $post_types as $post_type ) {
				if ( 'post' === $post_type->name || 'attachment' === $post_type->name ) {
					continue;
				}
				$post_type_array = array(
					'slug'  => $post_type->name,
					'title' => $post_type->labels->singular_name,
				);
				array_push( $post_types_array, $post_type_array );
			}
		}

		return $post_types_array;
	}

	public function block_enqueue_scripts() {

		wp_enqueue_script(
			'single-content-post-type-variations',
			plugins_url( 'build/single-content/post-types-variations.js',  __FILE__ ),
			array( 'wp-blocks', 'wp-dom-ready', 'wp-edit-post' ),
			'1.0.0',
			true
		);

		wp_localize_script(
			'single-content-post-type-variations',
			'singleContent',
			array(
				'postTypes' => $this->get_post_types_list(),
			)
		);

	}

}
