<?php
/**
 * Plugin Name:       Crosswinds Blocks
 * Plugin URI:        https://jacobmartella.com
 * Description:       DESCRIPTION GOES HERE
 * Version:           0.0.1
 * Author:            Jacob Martella Web Development
 * Author URI:        https://jacobmartella.com
 * Text Domain:       crosswinds-blocks
 * License:           GPL-2.0+
 * License URI:       http://www.gnu.org/licenses/gpl-2.0.txt
 * Domain Path:       /languages
 *
 * @package    Crosswinds_Blocks
 * @subpackage Crosswinds_Blocks/includes
 */

namespace Crosswinds_Blocks;

// If this file is called directly, then about execution.
if ( ! defined( 'WPINC' ) ) {
	die;
}

/**
 * The code that runs during plugin activation.
 * This action is documented in includes/class-crosswinds-blocks-activator.php
 *
 * @since 1.0.0
 */
function activate_starter_plugin() {
	require_once plugin_dir_path( __FILE__ ) . 'includes/class-crosswinds-blocks-activator.php';
	Crosswinds_Blocks_Activator::activate();
}

/**
 * The code that runs during plugin deactivation.
 * This action is documented in includes/class-crosswinds-blocks-deactivator.php
 *
 * @since 1.0.0
 */
function deactivate_starter_plugin() {
	require_once plugin_dir_path( __FILE__ ) . 'includes/class-crosswinds-blocks-deactivator.php';
	Crosswinds_Blocks_Deactivator::deactivate();
}

register_activation_hook( __FILE__, __NAMESPACE__ . '\activate_starter_plugin' );
register_deactivation_hook( __FILE__, __NAMESPACE__ . '\deactivate_starter_plugin' );

/**
 * The core plugin class that is used to define internationalization,
 * admin-specific hooks, and public-facing site hooks.
 */
require_once plugin_dir_path( __FILE__ ) . 'includes/class-crosswinds-blocks.php';

/**
 * Begins execution of the plugin.
 *
 * Since everything within the plugin is registered via hooks,
 * then kicking off the plugin from this point in the file does
 * not affect the page life cycle.
 *
 * @since    1.0.0
 */
function run_crosswinds_blocks() {
	$plugin = new Crosswinds_Blocks();
	$plugin->run();
}

// Call the above function to begin execution of the plugin.
run_crosswinds_blocks();
