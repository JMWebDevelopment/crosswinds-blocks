<?php
/**
 * The file that defines the core plugin class
 *
 * A class definition that includes attributes and functions used across both the
 * public-facing side of the site and the admin area.
 *
 * @link       https://jacobmartella.com
 * @since      1.0.0
 *
 * @package    Crosswinds_Blocks
 * @subpackage Crosswinds_Blocks/includes
 */

namespace Crosswinds_Blocks;

/**
 * The core plugin class.
 *
 * This is used to define internationalization, admin-specific hooks, and
 * public-facing site hooks.
 *
 * Also maintains the unique identifier of this plugin as well as the current
 * version of the plugin.
 *
 * @since      1.0.0
 * @package    Crosswinds_Blocks
 * @subpackage Crosswinds_Blocks/includes
 */
class Crosswinds_Blocks {

	/**
	 * The loader that's responsible for maintaining and registering all hooks that power
	 * the plugin.
	 *
	 * @since  1.0.0
	 * @access protected
	 * @var    Crosswinds_Blocks_Loader    $loader    Maintains and registers all hooks for the plugin.
	 */
	protected $loader;

	/**
	 * The unique identifier of this plugin.
	 *
	 * @since  1.0.0
	 * @access protected
	 * @var    string    $plugin_name    The string used to uniquely identify this plugin.
	 */
	protected $plugin_name;

	/**
	 * The current version of the plugin.
	 *
	 * @since  1.0.0
	 * @access protected
	 * @var    string    $version    The current version of the plugin.
	 */
	protected $version;

	/**
	 * Builds the main object for the plugin.
	 *
	 * @since  1.0.0
	 */
	public function __construct() {

		$this->plugin_name = 'crosswinds-blocks';
		$this->version     = '1.0-beta-1';

		$this->load_dependencies();
		$this->set_locale();
		$this->define_setup_hooks();
		$this->define_admin_hooks();
		$this->define_public_hooks();
		$this->define_blocks_hooks();
		$this->define_pattern_hooks();

	}

	/**
	 * Loads all of the files we're depending on to run the plugin.
	 *
	 * @since  1.0.0
	 */
	private function load_dependencies() {

		require_once plugin_dir_path( dirname( __FILE__ ) ) . 'includes/class-crosswinds-blocks-i18n.php';
		require_once plugin_dir_path( dirname( __FILE__ ) ) . 'includes/class-crosswinds-blocks-setup.php';
		require_once plugin_dir_path( dirname( __FILE__ ) ) . 'admin/class-crosswinds-blocks-admin.php';
		require_once plugin_dir_path( dirname( __FILE__ ) ) . 'public/class-crosswinds-blocks-public.php';
		require_once plugin_dir_path( dirname( __FILE__ ) ) . 'blocks/class-crosswinds-blocks-blocks.php';
		require_once plugin_dir_path( dirname( __FILE__ ) ) . 'patterns/class-crosswinds-blocks-patterns.php';

		require_once plugin_dir_path( __FILE__ ) . 'class-crosswinds-blocks-loader.php';
		$this->loader = new Crosswinds_Blocks_Loader();

	}

	/**
	 * Define the locale for this plugin for internationalization.
	 *
	 * Uses the JM_Client_Manager_i18n class in order to set the domain and to register the hook
	 * with WordPress.
	 *
	 * @since    1.0.0
	 * @access   private
	 */
	private function set_locale() {
		$plugin_i18n = new Crosswinds_Blocks_i18n();
		$this->loader->add_action( 'plugins_loaded', $plugin_i18n, 'load_plugin_textdomain' );
	}

	/**
	 * Runs all of the setup functions for the plugin.
	 *
	 * @since 1.0.0
	 */
	private function define_setup_hooks() {
		$plugin_setup = new Crosswinds_Blocks_Setup( $this->get_plugin_name(), $this->get_version() );
		$this->loader->add_action( 'init', $plugin_setup, 'create_custom_post_types' );
		$this->loader->add_action( 'init', $plugin_setup, 'create_custom_taxonomies' );
	}

	/**
	 * Runs all of the admin hooks for the plugin.
	 *
	 * @since 1.0.0
	 */
	private function define_admin_hooks() {
		$admin = new Crosswinds_Blocks_Admin( $this->get_version() );
		$this->loader->add_action( 'admin_enqueue_scripts', $admin, 'enqueue_styles' );
		$this->loader->add_action( 'admin_enqueue_scripts', $admin, 'enqueue_scripts' );
		$this->loader->add_action( 'enqueue_block_editor_assets', $admin, 'block_enqueue_scripts' );
		$this->loader->add_action( 'admin_menu', $admin, 'add_cb_admin_pages', 99 );
		$this->loader->add_action( 'admin_init', $admin, 'register_plugin_options' );
		$this->loader->add_action( 'crosswinds_framework_blocks_settings', $admin, 'add_plugin_settings' );
	}

	/**
	 * Runs all of the public hooks for the plugin.
	 *
	 * @since 1.0.0
	 */
	private function define_public_hooks() {
		$public = new Crosswinds_Blocks_Public( $this->get_version() );
		$this->loader->add_action( 'wp_enqueue_scripts', $public, 'enqueue_styles' );
		$this->loader->add_action( 'wp_enqueue_scripts', $public, 'enqueue_scripts' );
		$this->loader->add_action( 'pre_get_posts', $public, 'project_search_query' );
	}

	/**
	 * Runs all of the block hooks for the plugin.
	 *
	 * @since 1.0.0
	 */
	private function define_blocks_hooks() {
		$blocks = new Crosswinds_Blocks_Blocks( $this->get_version() );
		$this->loader->add_action( 'init', $blocks, 'blocks_init' );
		$this->loader->add_action( 'block_categories_all', $blocks, 'blocks_categories', 10, 2 );
		$this->loader->add_action( 'enqueue_block_editor_assets', $blocks, 'custom_attributes_editor_scripts' );
		$this->loader->add_action( 'wp_enqueue_scripts', $blocks, 'custom_attributes_scripts' );
		$this->loader->add_action( 'render_block', $blocks, 'add_post_template_responsive_classes', 10, 2 );
	}

	/**
	 * Runs all of the pattern hooks for the plugin.
	 *
	 * @since 1.0.0
	 */
	private function define_pattern_hooks() {
		$patterns = new Crosswinds_Blocks_Patterns( $this->get_version() );
		$this->loader->add_action( 'init', $patterns, 'register_block_pattern_categories' );
		$this->loader->add_action( 'init', $patterns, 'register_block_patterns' );
	}

	/**
	 * Runs the plugin set up.
	 *
	 * @since 1.0.0
	 */
	public function run() {
		$this->loader->run();
	}

	/**
	 * Gets the current version of the plugin.
	 *
	 * @since  1.0.0
	 * @return string    The version of the plugin.
	 */
	public function get_version() {
		return $this->version;
	}

	/**
	 * The name of the plugin used to uniquely identify it within the context of
	 * WordPress and to define internationalization functionality.
	 *
	 * @since     1.0.0
	 * @return    string    The name of the plugin.
	 */
	public function get_plugin_name() {
		return $this->plugin_name;
	}

	/**
	 * The reference to the class that orchestrates the hooks with the plugin.
	 *
	 * @since     1.0.0
	 * @return    Crosswinds_Blocks_Loader    Orchestrates the hooks of the plugin.
	 */
	public function get_loader() {
		return $this->loader;
	}
}
