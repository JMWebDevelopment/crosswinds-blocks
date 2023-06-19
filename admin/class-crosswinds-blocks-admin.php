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
	public function enqueue_styles() {
		if ( $this->is_crosswinds_page( 'crosswinds-framework-block-options' ) && ! $this->if_crosswinds_framework_theme_active() ) {
			wp_enqueue_style( 'crosswinds-blocks-blocks-admin-page', plugin_dir_url( __FILE__ ) . 'css/blocks-admin-page.min.css', [], $this->version, 'all' );
		}
	}

	/**
	 * Enqueues the scripts for the admin side of the plugin.
	 *
	 * @since 1.0.0
	 */
	public function enqueue_scripts() {
		if ( $this->is_crosswinds_page( 'crosswinds-framework-block-options' ) && ! $this->if_crosswinds_framework_theme_active() ) {
			wp_enqueue_script( 'crosswinds-blocks-admin', plugin_dir_url( __FILE__ ) . 'js/admin-page.min.js', [], $this->version );
		}
	}

	/**
	 * Returns a list of post types for the variations for the single content block.
	 *
	 * @since 1.0
	 *
	 * @return array      List of post types.
	 */
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

	/**
	 * Loads in custom scripts for the block editor.
	 *
	 * @since 1.0
	 */
	public function block_enqueue_scripts() {

		wp_enqueue_script(
			'single-content-post-type-variations',
			plugins_url( 'js/post-types-variations.min.js', __FILE__ ),
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

	/**
	 * Adds the admin pages for the plugin.
	 *
	 * @since 1.0
	 */
	public function add_cb_admin_pages() {
		if ( ! $this->if_crosswinds_framework_theme_active() ) {
			add_menu_page(
				esc_html__( 'Crosswinds Framework & Block Settings', 'crosswinds-blocks' ),
				esc_html__( 'Crosswinds', 'crosswinds-blocks' ),
				'manage_options',
				'crosswinds-framework-block-options',
				array( $this, 'create_main_admin_page' ),
				'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz48c3ZnIGlkPSJMYXllcl8yIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48ZGVmcz48c3R5bGU+LmNscy0xe2ZpbGw6I2ZmZjt9PC9zdHlsZT48L2RlZnM+PGcgaWQ9IkxheWVyXzEtMiI+PHBhdGggY2xhc3M9ImNscy0xIiBkPSJtNDgsMHY5Nmg4MHYtNDhsNDgsMTAsMzM2LDcwdjE2MGwtMzM2LDcwLTQ4LDEwdi00OEg0OHYxOTJIMFYwaDQ4Wm0wLDE0NHYxMjhoODB2LTEyOEg0OFptMTI4LTM3djIwMmw2NC0xMy4zVjEyMC40bC02NC0xMy40Wm0xMTIsMjMuM3YxNTUuM2w4MC0xNi42di0xMjJsLTgwLTE2LjdabTEyOCwyNi43djEwMmw0OC0xMHYtODJsLTQ4LTEwWiIvPjwvZz48L3N2Zz4=',
				60
			);
		}
	}

	/**
	 * Creates the main admin page for the plugin.
	 *
	 * @since 1.0
	 */
	public function create_main_admin_page() {
		require_once plugin_dir_path( dirname( __FILE__ ) ) . 'admin/partials/admin-page.php';
	}

	public function add_plugin_settings() {
		require_once plugin_dir_path( dirname( __FILE__ ) ) . 'admin/partials/plugin-settings.php';
	}

	/**
	 * Determines if the tab is the active tab.
	 *
	 * @since 1.0
	 *
	 * @param string $tab      The tab to see if it's the active one.
	 * @return boolean         Whether the provided tab is the active tab.
	 */
	public function is_active_tab( $tab ) {
		if ( $_GET['tab'] === $tab ) {
			return 'active-tab';
		} elseif ( ! isset( $_GET['tab'] ) && 'blocks' === $tab ) {
			return 'active-tab';
		} else {
			return;
		}
	}

	/**
	 * Determines if the current admin page is a Crosswinds Framework or Blocks page.
	 *
	 * @since 1.0
	 *
	 * @param string|null $page      The page to check. Leave null to see if it's any of the Crosswinds pages.
	 * @return boolean               Whether the page is the specified page or a Crosswinds page.
	 */
	public function is_crosswinds_page( $page = null ) {
		global $pagenow;

		if ( ! isset( $_GET['page'] ) ) {
			return false;
		}

		if ( null === $page && ( ( 'admin.php' === $pagenow ) && ( 'crosswinds-blocks' === $_GET['page'] || 'crosswinds-framework-block-options' === $_GET['page'] || 'crosswinds-framework-options' === $_GET['page'] ) ) ) {
			return true;
		}

		if ( ( 'admin.php' === $pagenow ) && ( $page === $_GET['page'] ) ) {
			return true;
		}

		return false;
	}

	public function if_crosswinds_framework_theme_active() {
		$current_theme_name = '';
		$current_theme      = wp_get_theme();
		if ( $current_theme->exists() && $current_theme->parent() ) {
			$parent_theme = $current_theme->parent();

			if ( $parent_theme->exists() ) {
				$current_theme_name = $parent_theme->get( 'Name' );
			}
		} elseif ( $current_theme->exists() ) {
			$current_theme_name = $current_theme->get( 'Name' );
		}

		if ( 'Crosswinds Framework' === $current_theme_name ) {
			return true;
		} else {
			return false;
		}
	}

	/**
	 * Registers the Crosswinds Blocks options.
	 *
	 * @since 1.0.0
	 */
	public function register_plugin_options() {
		register_setting( 'crosswinds_blocks_options_settings', 'crosswinds-blocks-accordions-block', array( $this, 'sanitize_int' ) );
		register_setting( 'crosswinds_blocks_options_settings', 'crosswinds-blocks-breadcrumbs-block', array( $this, 'sanitize_int' ) );
		register_setting( 'crosswinds_blocks_options_settings', 'crosswinds-blocks-basic-grid-block', array( $this, 'sanitize_int' ) );
		register_setting( 'crosswinds_blocks_options_settings', 'crosswinds-blocks-copyright-block', array( $this, 'sanitize_int' ) );
		register_setting( 'crosswinds_blocks_options_settings', 'crosswinds-blocks-download-search-filters-block', array( $this, 'sanitize_int' ) );
		register_setting( 'crosswinds_blocks_options_settings', 'crosswinds-blocks-google-maps-block', array( $this, 'sanitize_int' ) );
		register_setting( 'crosswinds_blocks_options_settings', 'crosswinds-blocks-marquee-block', array( $this, 'sanitize_int' ) );
		register_setting( 'crosswinds_blocks_options_settings', 'crosswinds-blocks-project-search-filters-block', array( $this, 'sanitize_int' ) );
		register_setting( 'crosswinds_blocks_options_settings', 'crosswinds-blocks-project-information-block', array( $this, 'sanitize_int' ) );
		register_setting( 'crosswinds_blocks_options_settings', 'crosswinds-blocks-post-navigation-block', array( $this, 'sanitize_int' ) );
		register_setting( 'crosswinds_blocks_options_settings', 'crosswinds-blocks-related-posts-block', array( $this, 'sanitize_int' ) );
		register_setting( 'crosswinds_blocks_options_settings', 'crosswinds-blocks-single-content-block', array( $this, 'sanitize_int' ) );
		register_setting( 'crosswinds_blocks_options_settings', 'crosswinds-blocks-skills-slider-block', array( $this, 'sanitize_int' ) );
		register_setting( 'crosswinds_blocks_options_settings', 'crosswinds-blocks-social-share-content-block', array( $this, 'sanitize_int' ) );
		register_setting( 'crosswinds_blocks_options_settings', 'crosswinds-blocks-tabs-block', array( $this, 'sanitize_int' ) );
		register_setting( 'crosswinds_blocks_options_settings', 'crosswinds-blocks-project-cpt', array( $this, 'sanitize_int' ) );
		register_setting( 'crosswinds_blocks_options_settings', 'crosswinds-blocks-project-category-taxonomy', array( $this, 'sanitize_int' ) );
		register_setting( 'crosswinds_blocks_options_settings', 'crosswinds-blocks-project-tag-taxonomy', array( $this, 'sanitize_int' ) );
		register_setting( 'crosswinds_blocks_options_settings', 'crosswinds-blocks-google-maps-api-key', array( $this, 'sanitize_text_field' ) );
	}

	/**
	 * Sanitized the integer so that it only returns a number.
	 *
	 * @since 1.0
	 *
	 * @param int $input      The incoming value.
	 * @return integer        The value as an integer.
	 */
	public function sanitize_int( $input ) {
		return absint( $input );
	}

	public function sanitize_text_field( $input ) {
		return sanitize_text_field( $input );
	}

}
