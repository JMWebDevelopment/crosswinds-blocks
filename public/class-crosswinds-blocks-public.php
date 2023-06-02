<?php
/**
 * Holds all of the public side functions.
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
 * Runs the public side.
 *
 * This class defines all code necessary to run on the public side of the plugin.
 *
 * @since      1.0.0
 * @package    Crosswinds_Blocks
 * @subpackage Crosswinds_Blocks/public
 */
class Crosswinds_Blocks_Public {

	/**
	 * Version of the plugin.
	 *
	 * @since 1.0.0
	 * @var string $version Description.
	 */
	private $version;

	/**
	 * Builds the Crosswinds_Blocks_Public object.
	 *
	 * @since 1.0.0
	 *
	 * @param string $version Version of the plugin.
	 */
	public function __construct( $version ) {
		$this->version = $version;
	}

	public function enqueue_styles() {
		wp_enqueue_style( 'crosswinds-blocks-font-awesome', plugin_dir_url( __FILE__ ) . 'css/font-awesome.min.css', array(), $this->version, 'all' );
	}

	public function enqueue_scripts() {
		wp_enqueue_script( 'crosswinds-blocks-accordions', plugin_dir_url( __FILE__ ) . 'js/accordions.min.js', array(), $this->version, true );
		wp_enqueue_script( 'crosswinds-blocks-tabs', plugin_dir_url( __FILE__ ) . 'js/tabs.min.js', array(), $this->version, true );
	}

	public function project_search_query( $query ) {
		if ( $query->is_main_query() && is_search() && 'project' === $query->get( 'post_type' ) && isset( $_GET['project_client'] ) ) {
			$client = sanitize_text_field( wp_unslash( $_GET['project_client'] ) );
			$query->set(
				'meta_query',
				array(
					array(
						'key'     => 'project_client',
						'compare' => 'LIKE',
						'value'   => $client,
					),
				)
			);
		}
	}

}
