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

}
