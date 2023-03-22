<?php
/**
 * Holds all of the admin side functions.
 *
 * PHP version 7.3
 *
 * @link       https://jacobmartella.com
 * @since      1.0.0
 *
 * @package    Crosswinds_Blocks
 * @subpackage Crosswinds_Blocks/admin
 */

namespace Crosswinds_Blocks;

/**
 * Runs the admin side.
 *
 * This class defines all code necessary to run on the admin side of the plugin.
 *
 * @since      1.0.0
 * @package    Crosswinds_Blocks
 * @subpackage Crosswinds_Blocks/admin
 */
class Crosswinds_Blocks_Admin {

	/**
	 * Version of the plugin.
	 *
	 * @since 1.0.0
	 * @var string $version Description.
	 */
	private $version;


	/**
	 * Builds the Crosswinds_Blocks_Admin object.
	 *
	 * @since 1.0.0
	 *
	 * @param string $version Version of the plugin.
	 */
	public function __construct( $version ) {
		$this->version = $version;
	}

	/**
	 * Enqueues the styles for the admin side of the plugin.
	 *
	 * @since 1.0.0
	 */
	public function enqueue_styles() { }

	/**
	 * Enqueues the scripts for the admin side of the plugin.
	 *
	 * @since 1.0.0
	 */
	public function enqueue_scripts() { }

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
			plugins_url( 'js/post-types-variations.min.js',  __FILE__ ),
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
