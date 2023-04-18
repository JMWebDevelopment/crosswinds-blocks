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
		if ( $this->is_crosswinds_page( 'crosswinds-blocks' ) || $this->is_crosswinds_page( 'crosswinds-framework-block-options' ) ) {
			wp_enqueue_style( 'crosswinds-blocks-blocks-admin-page', plugin_dir_url( __FILE__ ) . 'css/blocks-admin-page.min.css', [], $this->version, 'all' );
		}
	}

	/**
	 * Enqueues the scripts for the admin side of the plugin.
	 *
	 * @since 1.0.0
	 */
	public function enqueue_scripts() { }

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

		if ( 'Crosswinds Framework' !== $current_theme_name ) {
			add_menu_page(
				esc_html__( 'Crosswinds Framework & Block Settings', 'crosswinds-blocks' ),
				esc_html__( 'Crosswinds', 'crosswinds-blocks' ),
				'manage_options',
				'crosswinds-framework-block-options',
				array( $this, 'create_main_admin_page' ),
				'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iMTAwMHB4IiBoZWlnaHQ9IjEwMDBweCIgdmlld0JveD0iMCAwIDEwMDAgMTAwMCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIj4KICAgIDx0aXRsZT5Mb2dvPC90aXRsZT4KICAgIDxnIGlkPSJMb2dvIiBzdHJva2U9Im5vbmUiIHN0cm9rZS13aWR0aD0iMSIgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj4KICAgICAgICA8bGluZSB4MT0iMC41IiB5MT0iMC41IiB4Mj0iMTAwMC41IiB5Mj0iMTAwMC41IiBpZD0iTGluZSIgc3Ryb2tlPSIjMDBBREI1IiBzdHJva2Utd2lkdGg9IjEwIiBzdHJva2UtbGluZWNhcD0ic3F1YXJlIj48L2xpbmU+CiAgICAgICAgPGcgaWQ9Iu+AsCIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMzc1LjAwMDAwMCwgMTUuODc1NDg0KSIgZmlsbD0iIzIyMjgzMSIgZmlsbC1ydWxlPSJub256ZXJvIj4KICAgICAgICAgICAgPHBhdGggZD0iTTE1OC4zNDkxMzYsMTUuNjI0OTYyNyBDMTU5Ljk2MDM2NSwxNS42MjQ5NjI3IDE2MS40MjUyMDYsMTYuNjUwMTYwMiAxNjIuMDExMjM3LDE4LjE2NDExNDYgTDE3Mi44MDI1MTMsNDYuODc0ODg4MiBMMjI2LjU2MTk2LDQ2Ljg3NDg4ODIgQzIzMC44NTg3MjksNDYuODc0ODg4MiAyMzQuMzc0NDQxLDUwLjM5MDYwMDIgMjM0LjM3NDQ0MSw1NC42ODczNjk2IEwyMzQuMzc0NDQxLDE5NS4zMTIwMzQgQzIzNC4zNzQ0NDEsMTk5LjYwODgwNCAyMzAuODU4NzI5LDIwMy4xMjQ1MTYgMjI2LjU2MTk2LDIwMy4xMjQ1MTYgTDIzLjQzNzQ0NDEsMjAzLjEyNDUxNiBDMTkuMTQwNjc0NywyMDMuMTI0NTE2IDE1LjYyNDk2MjcsMTk5LjYwODgwNCAxNS42MjQ5NjI3LDE5NS4zMTIwMzQgTDE1LjYyNDk2MjcsNTQuNjg3MzY5NiBDMTUuNjI0OTYyNyw1MC4zOTA2MDAyIDE5LjE0MDY3NDcsNDYuODc0ODg4MiAyMy40Mzc0NDQxLDQ2Ljg3NDg4ODIgTDc3LjI0NjAwNDksNDYuODc0ODg4MiBMODcuMDYwMjQzOSwyMC43MDMyNjY0IEM4OC4xODMxOTI4LDE3LjY3NTgzNDUgOTEuMTEyODczMywxNS42MjQ5NjI3IDk0LjM4NDQ0NTIsMTUuNjI0OTYyNyBMMTU4LjM0OTEzNiwxNS42MjQ5NjI3IFogTTE1OC4zNDkxMzYsMCBMOTQuMzg0NDQ1MiwwIEM4NC42MTg4NDM1LDAgNzUuODc4OTE2MSw2LjA1NDg2MzggNzIuNDYwOTU1NSwxNS4xODUzMTk5IEw2Ni40MDYwOTE3LDMxLjI0OTkyNTUgTDIzLjQzNzQ0NDEsMzEuMjQ5OTI1NSBDMTAuNDk4MDIxOCwzMS4yNDk5MjU1IDAsNDEuNzQ3OTQ3MyAwLDU0LjY4NzM2OTYgTDAsMTk1LjMxMjAzNCBDMCwyMDguMjUxNDU3IDEwLjQ5ODAyMTgsMjE4Ljc0OTQ3OCAyMy40Mzc0NDQxLDIxOC43NDk0NzggTDIyNi41NjE5NiwyMTguNzQ5NDc4IEMyMzkuNTAxMzgyLDIxOC43NDk0NzggMjQ5Ljk5OTQwNCwyMDguMjUxNDU3IDI0OS45OTk0MDQsMTk1LjMxMjAzNCBMMjQ5Ljk5OTQwNCw1NC42ODczNjk2IEMyNDkuOTk5NDA0LDQxLjc0Nzk0NzMgMjM5LjUwMTM4MiwzMS4yNDk5MjU1IDIyNi41NjE5NiwzMS4yNDk5MjU1IEwxODMuNTkzMzEyLDMxLjI0OTkyNTUgTDE3Ni42MTEwMDIsMTIuNjk1MjgyMiBDMTczLjc3OTA3Myw1LjAyOTE4OTUyIDE2Ni41MDM1MDksMCAxNTguMzQ5MTM2LDAgWiBNMTI0Ljk5OTcwMiwxODMuNTkzMzEyIEMxNTcuMzIzOTM5LDE4My41OTMzMTIgMTgzLjU5MzMxMiwxNTcuMzIzOTM5IDE4My41OTMzMTIsMTI0Ljk5OTcwMiBDMTgzLjU5MzMxMiw5Mi42NzU0NjQ5IDE1Ny4zMjM5MzksNjYuNDA2MDkxNyAxMjQuOTk5NzAyLDY2LjQwNjA5MTcgQzkyLjY3NTQ2NDksNjYuNDA2MDkxNyA2Ni40MDYwOTE3LDkyLjY3NTQ2NDkgNjYuNDA2MDkxNywxMjQuOTk5NzAyIEM2Ni40MDYwOTE3LDE1Ny4zMjM5MzkgOTIuNjc1NDY0OSwxODMuNTkzMzEyIDEyNC45OTk3MDIsMTgzLjU5MzMxMiBaIE0xMjQuOTk5NzAyLDgyLjAzMTA1NDQgQzE0OC42ODEyODYsODIuMDMxMDU0NCAxNjcuOTY4MzUsMTAxLjMxODExOCAxNjcuOTY4MzUsMTI0Ljk5OTcwMiBDMTY3Ljk2ODM1LDE0OC42ODEyODYgMTQ4LjY4MTI4NiwxNjcuOTY4MzUgMTI0Ljk5OTcwMiwxNjcuOTY4MzUgQzEwMS4zMTgxMTgsMTY3Ljk2ODM1IDgyLjAzMTA1NDQsMTQ4LjY4MTI4NiA4Mi4wMzEwNTQ0LDEyNC45OTk3MDIgQzgyLjAzMTA1NDQsMTAxLjMxODExOCAxMDEuMzE4MTE4LDgyLjAzMTA1NDQgMTI0Ljk5OTcwMiw4Mi4wMzEwNTQ0IFoiIGlkPSJTaGFwZSI+PC9wYXRoPgogICAgICAgIDwvZz4KICAgICAgICA8ZyBpZD0i74C9IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgxNS43NTAwMDAsIDQwNy41MDA0NDcpIiBmaWxsPSIjMjIyODMxIiBmaWxsLXJ1bGU9Im5vbnplcm8iPgogICAgICAgICAgICA8cGF0aCBkPSJNMjY1LjU3NTcyOSwxNS42MjQ5NjI3IEMyNjIuNTQ4Mjk4LDE1LjYyNDk2MjcgMjU5LjQ3MjIyOCwxNi41MDM3NzE1IDI1Ni42ODg5MzYsMTguNDA4MjU0NiBMMjAzLjEyNDUxNiw1Mi41Mzg3NDY1IEwyMDMuMTI0NTE2LDIzLjMzOTY5MjcgQzIwMy4xMjQ1MTYsMTAuNDQ5Mzg0NiAxOTEuNzk2MzIyLDAgMTc3LjgzMTcwMywwIEwyNS4yOTI4MTMxLDAgQzExLjMyODE5MzQsMCAwLDEwLjQ0OTM4NDYgMCwyMy4zMzk2OTI3IEwwLDE2NC4xNTk4NiBDMCwxNzcuMDUwMTY4IDExLjMyODE5MzQsMTg3LjQ5OTU1MyAyNS4yOTI4MTMxLDE4Ny40OTk1NTMgTDE3Ny44MzE3MDMsMTg3LjQ5OTU1MyBDMTkxLjc5NjMyMiwxODcuNDk5NTUzIDIwMy4xMjQ1MTYsMTc3LjA1MDE2OCAyMDMuMTI0NTE2LDE2NC4xNTk4NiBMMjAzLjEyNDUxNiwxMzQuOTYwODA2IEwyNTYuNjM5ODIyLDE2OS4wOTEyOTggQzI1OS40MjMxMTQsMTcxLjA0NDQxOSAyNjIuNTQ4Mjk4LDE3MS44NzQ1OSAyNjUuNTI2NjE1LDE3MS44NzQ1OSBDMjczLjYzMjM1MSwxNzEuODc0NTkgMjgxLjIwMDkyNSwxNjUuNTI2OTQ5IDI4MS4yMDA5MjUsMTU2LjQ5Mzc2OCBMMjgxLjIwMDkyNSwzMS4wMDU3ODU1IEMyODEuMjQ5MzI5LDIxLjk3MjYwMzkgMjczLjY4MDk4OCwxNS42MjQ5NjI3IDI2NS41NzU3MjksMTUuNjI0OTYyNyBaIE0xODcuNDk5NTUzLDE2NC4xNTk4NiBDMTg3LjQ5OTU1MywxNjguMzU4ODc4IDE4My4wNTYzOTUsMTcxLjg3NDU5IDE3Ny44MzE3MDMsMTcxLjg3NDU5IEwyNS4yOTI4MTMxLDE3MS44NzQ1OSBDMjAuMDY4MTIwOCwxNzEuODc0NTkgMTUuNjI0OTYyNywxNjguMzU4ODc4IDE1LjYyNDk2MjcsMTY0LjE1OTg2IEwxNS42MjQ5NjI3LDIzLjMzOTY5MjcgQzE1LjYyNDk2MjcsMTkuMTQwNjc0NyAyMC4wNjgxMjA4LDE1LjYyNDk2MjcgMjUuMjkyODEzMSwxNS42MjQ5NjI3IEwxNzcuODMxNzAzLDE1LjYyNDk2MjcgQzE4My4wNTYzOTUsMTUuNjI0OTYyNyAxODcuNDk5NTUzLDE5LjE0MDY3NDcgMTg3LjQ5OTU1MywyMy4zMzk2OTI3IEwxODcuNDk5NTUzLDE2NC4xNTk4NiBaIE0yNjUuNjI0MzY3LDE1Ni40OTM3NjggTDI2NS4wMzgzMzUsMTU1Ljg1OTA5OSBMMjAzLjEyNDUxNiwxMTYuNDA2MTYzIEwyMDMuMTI0NTE2LDcxLjA0NDc1MjUgTDI2NS42MjQzNjcsMzEuMjQ5OTI1NSBMMjY1LjYyNDM2NywxNTYuNDkzNzY4IFoiIGlkPSJTaGFwZSI+PC9wYXRoPgogICAgICAgIDwvZz4KICAgICAgICA8ZyBpZD0i74GAIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSg3MzMuMDAwNDMyLCAzNzYuMjUwOTM5KSIgZmlsbD0iIzIyMjgzMSIgZmlsbC1ydWxlPSJub256ZXJvIj4KICAgICAgICAgICAgPHBhdGggZD0iTTI0MC44NDYxMDQsMjcuNDU4NjYxOSBMMjIyLjU0MDM2OSw5LjE1MjkyNzAzIEMyMTAuMzM3MTgyLC0zLjA1MDczNzI2IDE5MC41NTA4NzEsLTMuMDUxMjE0MSAxNzguMzQ2MjUzLDkuMTUyOTI3MDMgTDYuMjY4MDU0MDEsMTgxLjIzMDY0OSBMMC4wNzM0NzcyNjA4LDIzNi45ODQyMjQgQy0wLjc1NTc0MDU4LDI0NC40NDgxMzkgNS41NTE4NDYzMSwyNTAuNzU1MjQ5IDEzLjAxNDgwNjksMjQ5LjkyNTU1NCBMNjguNzY4MzgxOCwyNDMuNzMwOTc3IEwyNDAuODQ2NTgxLDcxLjY1Mjc3OCBDMjUzLjA0OTc2OCw1OS40NDg2MzY5IDI1My4wNDk3NjgsMzkuNjYxODQ5NCAyNDAuODQ2MTA0LDI3LjQ1ODY2MTkgWiBNMTk0LjM2MzY1Miw5Ni4wMzcyMTg1IEw4NC45NjAzMDI2LDIwNS40NDEwNDUgTDg0Ljk2MDMwMjYsMTg4LjQ3NTY5NiBMNjEuNTIyODU4NSwxODguNDc1Njk2IEw2MS41MjI4NTg1LDE2NS4wMzgyNTIgTDQ0LjU1NzUwOTcsMTY1LjAzODI1MiBMMTUzLjk2MTMzNiw1NS42MzQ5MDI0IEwxOTQuMzYzNjUyLDk2LjAzNzIxODUgWiBNNjEuNTk0ODYwNywyMjguODA2NDg3IEwzMi43ODg3MTk4LDIzMi4wMDc0ODcgTDE3Ljk5MTA2NzYsMjE3LjIwOTgzNSBMMjEuMTkyMDY3OCwxODguNDAzNjk0IEwzMC44ODU2NjczLDE3OC43MTAwOTQgTDQ3Ljg1MTAxNjEsMTc4LjcxMDA5NCBMNDcuODUxMDE2MSwyMDIuMTQ3NTM4IEw3MS4yODg0NjAyLDIwMi4xNDc1MzggTDcxLjI4ODQ2MDIsMjE5LjExMjg4NyBMNjEuNTk0ODYwNywyMjguODA2NDg3IFogTTIyOS43OTczMzcsNjAuNjA0MDEwNiBMMjA1LjQxMTk0Myw4NC45ODg5Mjc5IEwxNjUuMDA5NjI3LDQ0LjU4NjYxMTggTDE4OS4zOTQ1NDQsMjAuMjAxMjE3NiBDMTk1LjUwMDQyOSwxNC4wOTUzMzI0IDIwNS4zODQ3NjMsMTQuMDk0Mzc4NyAyMTEuNDkxNjAyLDIwLjIwMTIxNzYgTDIyOS43OTczMzcsMzguNTA2OTUyNSBDMjM1LjkwMzY5OSw0NC42MTMzMTQ2IDIzNS45MDQxNzYsNTQuNDk2Njk0OCAyMjkuNzk3MzM3LDYwLjYwNDAxMDYgWiIgaWQ9IlNoYXBlIj48L3BhdGg+CiAgICAgICAgPC9nPgogICAgICAgIDxnIGlkPSLvlL8iIHRyYW5zZm9ybT0idHJhbnNsYXRlKDM3NS4wMTM0NDQsIDczMC4yNTA1MjIpIiBmaWxsPSIjMjIyODMxIiBmaWxsLXJ1bGU9Im5vbnplcm8iPgogICAgICAgICAgICA8cGF0aCBkPSJNNTQuNjczOTI1OCwxMjguOTA1OTQzIEM0OC4xNzk4OTYxLDEyOC45MDU5NDMgNDIuOTU1MjAzOCwxMzQuMTMwNjM1IDQyLjk1NTIwMzgsMTQwLjYyNDY2NSBDNDIuOTU1MjAzOCwxNDcuMTE4Njk0IDQ4LjE3OTg5NjEsMTUyLjM0MzM4NyA1NC42NzM5MjU4LDE1Mi4zNDMzODcgQzYxLjE2Nzk1NTYsMTUyLjM0MzM4NyA2Ni4zOTI2NDc5LDE0Ny4xMTg2OTQgNjYuMzkyNjQ3OSwxNDAuNjI0NjY1IEM2Ni4zOTI2NDc5LDEzNC4xMzA2MzUgNjEuMTY3OTU1NiwxMjguOTA1OTQzIDU0LjY3MzkyNTgsMTI4LjkwNTk0MyBaIE03MC4yOTg4ODg2LDc0LjIxODU3MyBDNjMuODA0ODU4OCw3NC4yMTg1NzMgNTguNTgwMTY2NSw3OS40NDMyNjUzIDU4LjU4MDE2NjUsODUuOTM3Mjk1MSBDNTguNTgwMTY2NSw5Mi40MzEzMjQ5IDYzLjgwNDg1ODgsOTcuNjU2MDE3MiA3MC4yOTg4ODg2LDk3LjY1NjAxNzIgQzc2Ljc5MjkxODQsOTcuNjU2MDE3MiA4Mi4wMTc2MTA3LDkyLjQzMTMyNDkgODIuMDE3NjEwNyw4NS45MzcyOTUxIEM4Mi4wMTc2MTA3LDc5LjQ0MzI2NTMgNzYuNzkyOTE4NCw3NC4yMTg1NzMgNzAuMjk4ODg4Niw3NC4yMTg1NzMgWiBNMTI0Ljk4NjI1OCwwIEMxMTYuNzM0MTM0LDAgMTA4LjI4Njk4NCwwLjc4MTA1NzQwMyA5OS43NDIwODI0LDIuNDQxNDAwNDMgQzUxLjIwNzMyOCwxMS45MTQyMjQ4IDEyLjA5NTgwNyw1MC45Mjc1MTc2IDIuNTI1NzA4MDQsOTkuMzE2MzYwMiBDLTE0LjM2OTA2OSwxODQuODE0MDEyIDU2LjgyMjU0OSwyNDkuOTk5NDA0IDExNi45Mjk2MzcsMjQ5Ljk5OTQwNCBDMTIwLjk4MjI2NiwyNDkuOTk5NDA0IDEyNC45ODYyNTgsMjQ5LjcwNjYyNyAxMjguOTQxMTM2LDI0OS4wNzE0ODEgQzE0OS4wNTgzNzEsMjQ1Ljk0Njc3NSAxNTguOTIxNzI0LDIyMi40MTE1NzkgMTQ5LjY5MzA0LDIwNC4yOTY1NzkgQzEzOC40MTM5NjEsMTgyLjEyODQ3MiAxNTQuNTI3MjAzLDE1Ni4yNDk2MjcgMTc5LjQyOTQ4OCwxNTYuMjQ5NjI3IEwyMTguMzQ1NTA2LDE1Ni4yNDk2MjcgQzIzNS44MjU4MzgsMTU2LjI0OTYyNyAyNDkuOTg1OTYsMTQxLjc5NjcyOCAyNTAuMDM0NTk3LDEyNC4zNjUwMzMgQzI0OS43OTA0NTcsNTUuNjE1MjkyNSAxOTMuODgyMzg4LDAgMTI0Ljk4NjI1OCwwIFogTTIxOC4yOTYzOTIsMTQwLjYyNDY2NSBMMTc5LjM4MDg1MSwxNDAuNjI0NjY1IEMxNjIuMTQ0MTgyLDE0MC42MjQ2NjUgMTQ2LjQ3MDU4MiwxNDkuMzY1MDY5IDEzNy41MzUxNTIsMTYzLjk2NDM1NyBDMTI4LjY0ODM1OSwxNzguNDY2MzcxIDEyNy45NjQ1NzYsMTk2LjE5MDg0MyAxMzUuNzI4NDIsMjExLjQyNTI3NyBDMTM4LjEyMTE4MywyMTYuMTEyNTc1IDEzOC4wNzIwNjksMjIxLjk3MTkzNiAxMzUuNjc5NzgzLDIyNi43MDgzNDggQzEzNC41MDc3MiwyMjguOTU0NzIzIDEzMS44MjIxNzksMjMyLjg2MDk2NCAxMjYuNTQ4ODUsMjMzLjY5MDY1OCBDMTIzLjQ3Mjc4MSwyMzQuMTc4OTM4IDEyMC4yNDk4NDYsMjM0LjQyMzA3OCAxMTYuOTI5NjM3LDIzNC40MjMwNzggQzkwLjI2OTczNDgsMjM0LjQyMzA3OCA2MS4yMTcwNjk3LDIxOS4xNDAwMDcgNDEuMDAyMDgzNCwxOTQuNTc5NjE0IEMxOS41MTc3NTk3LDE2OC40MDc5OTIgMTEuMjY1NjM1NSwxMzUuNjkzMjI3IDE3Ljg1NzQxNjYsMTAyLjQ0MTA2NyBDMjYuMjA3MjkyMiw2MC4xNTYyMDE5IDYwLjMzNzc4NDEsMjYuMTcxNjIxOSAxMDIuNzY5NTE0LDE3Ljg3MDg2MDQgQzExMC4xOTE0NjcsMTYuNDA2MDIwMiAxMTcuNjYyMDU3LDE1LjY3MzYgMTI0Ljk4NjI1OCwxNS42NzM2IEMxODUuMDkzMzQ2LDE1LjY3MzYgMjM0LjE2NTQ5NSw2NC40NTI5NzEzIDIzNC4zNjA5OTcsMTI0LjM2NTAzMyBDMjM0LjM2MDk5NywxMzMuMzAwNDYzIDIyNy4xMzQ1NDgsMTQwLjYyNDY2NSAyMTguMjk2MzkyLDE0MC42MjQ2NjUgWiBNMTc5LjY3MzYyOCw2Ni40MDYwOTE3IEMxNzMuMTc5NTk4LDY2LjQwNjA5MTcgMTY3Ljk1NDkwNiw3MS42MzA3ODQgMTY3Ljk1NDkwNiw3OC4xMjQ4MTM3IEMxNjcuOTU0OTA2LDg0LjYxODg0MzUgMTczLjE3OTU5OCw4OS44NDM1MzU4IDE3OS42NzM2MjgsODkuODQzNTM1OCBDMTg2LjE2NzY1OCw4OS44NDM1MzU4IDE5MS4zOTIzNSw4NC42MTg4NDM1IDE5MS4zOTIzNSw3OC4xMjQ4MTM3IEMxOTEuMzkyMzUsNzEuNjMwNzg0IDE4Ni4xNjc2NTgsNjYuNDA2MDkxNyAxNzkuNjczNjI4LDY2LjQwNjA5MTcgWiBNMTE3LjE3Mzc3Nyw0Mi45Njg2NDc2IEMxMTAuNjc5NzQ3LDQyLjk2ODY0NzYgMTA1LjQ1NTA1NSw0OC4xOTMzMzk4IDEwNS40NTUwNTUsNTQuNjg3MzY5NiBDMTA1LjQ1NTA1NSw2MS4xODEzOTk0IDExMC42Nzk3NDcsNjYuNDA2MDkxNyAxMTcuMTczNzc3LDY2LjQwNjA5MTcgQzEyMy42Njc4MDcsNjYuNDA2MDkxNyAxMjguODkyNDk5LDYxLjE4MTM5OTQgMTI4Ljg5MjQ5OSw1NC42ODczNjk2IEMxMjguODkyNDk5LDQ4LjE5MzMzOTggMTIzLjY2NzgwNyw0Mi45Njg2NDc2IDExNy4xNzM3NzcsNDIuOTY4NjQ3NiBaIiBpZD0iU2hhcGUiPjwvcGF0aD4KICAgICAgICA8L2c+CiAgICAgICAgPGxpbmUgeDE9IjMuMjQyOTQ0NDVlLTE2IiB5MT0iLTQuMzM5OTY3OTdlLTE2IiB4Mj0iOTk5Ljk5NzQ4MSIgeTI9Ijk5OS45OTc0ODEiIGlkPSJMaW5lIiBzdHJva2U9IiMzOTNFNDYiIHN0cm9rZS13aWR0aD0iMTAiIHN0cm9rZS1saW5lY2FwPSJzcXVhcmUiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDQ5OS45OTg3NDEsIDQ5OS45OTg3NDEpIHNjYWxlKDEsIC0xKSB0cmFuc2xhdGUoLTQ5OS45OTg3NDEsIC00OTkuOTk4NzQxKSAiPjwvbGluZT4KICAgIDwvZz4KPC9zdmc+',
				60
			);
		}

		add_submenu_page(
			'crosswinds-framework-block-options',
			esc_html__( 'Crosswinds Blocks Options', 'crosswinds-blocks' ),
			esc_html__( 'Blocks', 'crosswinds-blocks' ),
			'manage_options',
			'crosswinds-blocks',
			array( $this, 'create_blocks_plugin_page' )
		);
	}

	/**
	 * Creates the main admin page for the plugin.
	 *
	 * @since 1.0
	 */
	public function create_main_admin_page() {
		require_once plugin_dir_path( dirname( __FILE__ ) ) . 'admin/partials/admin-page.php';
	}

	/**
	 * Adds in the plugin settings to the settings page.
	 *
	 * @since 1.0
	 */
	public function add_plugin_settings() {
		require_once plugin_dir_path( dirname( __FILE__ ) ) . 'admin/partials/plugin-settings.php';
	}

	/**
	 * Creates the settings page for the plugin.
	 *
	 * @since 1.0
	 */
	public function create_blocks_plugin_page() {
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
		?>
		<div class="options-wrap">
			<div class="tabs-section">
				<div class="title-area">
					<img src="<?php echo esc_url( plugin_dir_url( __FILE__ ) . 'images/portafoglio-logo-no-background.png' ); ?>" alt="Crosswinds Blocks Logo" />
					<h2><?php esc_html_e( 'Crosswinds Blocks Options', 'crosswinds-blocks' ); ?></h2>
				</div>

				<div class="tabs">
					<div class="tab">
						<p class="tab-title"><a href="<?php echo esc_url( get_admin_url( null, '/admin.php?page=crosswinds-framework-block-options' ) ); ?>"><?php esc_html_e( 'Crosswinds Framework', 'crosswinds-blocks' ); ?></a></p>
					</div>
					<?php
					if ( 'Crosswinds Framework' !== $current_theme_name ) {
						?>
						<div class="tab">
							<p class="tab-title"><a href="<?php echo esc_url( get_admin_url( null, '/admin.php?page=crosswinds-framework-theme' ) ); ?>"><?php esc_html_e( 'Theme Options', 'crosswinds-blocks' ); ?></a></p>
						</div>
						<?php
					}
					?>
					<div class="tab <?php echo esc_attr( $this->is_active_tab( 'blocks' ) ); ?>">
						<p class="tab-title"><a href="<?php echo esc_url( get_admin_url( null, '/admin.php?page=crosswinds-blocks&tab=blocks' ) ); ?>"><?php esc_html_e( 'Blocks', 'crosswinds-blocks' ); ?></a></p>
					</div>

					<div class="tab <?php echo esc_attr( $this->is_active_tab( 'custom-post-types' ) ); ?>">
						<p class="tab-title"><a href="<?php echo esc_url( get_admin_url( null, '/admin.php?page=crosswinds-blocks&tab=custom-post-types' ) ); ?>"><?php esc_html_e( 'Custom Post Types', 'crosswinds-blocks' ); ?></a></p>
					</div>

					<div class="tab <?php echo esc_attr( $this->is_active_tab( 'custom-taxonomies' ) ); ?>">
						<p class="tab-title"><a href="<?php echo esc_url( get_admin_url( null, '/admin.php?page=crosswinds-blocks&tab=custom-taxonomies' ) ); ?>"><?php esc_html_e( 'Custom Taxonomies', 'crosswinds-blocks' ); ?></a></p>
					</div>

					<div class="tab <?php echo esc_attr( $this->is_active_tab( 'support' ) ); ?>">
						<p class="tab-title"><a href="<?php echo esc_url( get_admin_url( null, '/admin.php?page=crosswinds-blocks&tab=support' ) ); ?>"><?php esc_html_e( 'Support', 'crosswinds-blocks' ); ?></a></p>
					</div>
				</div>
			</div>

			<div class="main-area">
				<?php
				if ( isset( $_GET['tab'] ) && 'blocks' === $_GET['tab'] ) {
					require_once plugin_dir_path( dirname( __FILE__ ) ) . 'admin/partials/block-settings.php';
				} elseif ( isset( $_GET['tab'] ) && 'custom-post-types' === $_GET['tab'] ) {
					require_once plugin_dir_path( dirname( __FILE__ ) ) . 'admin/partials/cpt-settings.php';
				} elseif ( isset( $_GET['tab'] ) && 'custom-taxonomies' === $_GET['tab'] ) {
					require_once plugin_dir_path( dirname( __FILE__ ) ) . 'admin/partials/custom-taxonomies-settings.php';
				} elseif ( isset( $_GET['tab'] ) && 'support' === $_GET['tab'] ) {
					require_once plugin_dir_path( dirname( __FILE__ ) ) . 'admin/partials/support-settings.php';
				} else {
					require_once plugin_dir_path( dirname( __FILE__ ) ) . 'admin/partials/block-settings.php';
				}
				?>
			</div>
		</div>
		<?php
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

		if ( null === $page && ( ( 'admin.php' === $pagenow ) && ( 'crosswinds-blocks' === $_GET['page'] || 'crosswinds-framework-block-options' === $_GET['page'] ) ) ) {
			return true;
		}

		if ( ( 'admin.php' === $pagenow ) && ( $page === $_GET['page'] ) ) {
			return true;
		}

		return false;
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
		register_setting( 'crosswinds_blocks_options_settings', 'crosswinds-blocks-marquee-block', array( $this, 'sanitize_int' ) );
		register_setting( 'crosswinds_blocks_options_settings', 'crosswinds-blocks-portfolio-category-search-block', array( $this, 'sanitize_int' ) );
		register_setting( 'crosswinds_blocks_options_settings', 'crosswinds-blocks-portfolio-information-block', array( $this, 'sanitize_int' ) );
		register_setting( 'crosswinds_blocks_options_settings', 'crosswinds-blocks-portfolio-search-block', array( $this, 'sanitize_int' ) );
		register_setting( 'crosswinds_blocks_options_settings', 'crosswinds-blocks-portfolio-tag-search-block', array( $this, 'sanitize_int' ) );
		register_setting( 'crosswinds_blocks_options_settings', 'crosswinds-blocks-post-navigation-block', array( $this, 'sanitize_int' ) );
		register_setting( 'crosswinds_blocks_options_settings', 'crosswinds-blocks-related-posts-block', array( $this, 'sanitize_int' ) );
		register_setting( 'crosswinds_blocks_options_settings', 'crosswinds-blocks-single-content-block', array( $this, 'sanitize_int' ) );
		register_setting( 'crosswinds_blocks_options_settings', 'crosswinds-blocks-skills-slider-block', array( $this, 'sanitize_int' ) );
		register_setting( 'crosswinds_blocks_options_settings', 'crosswinds-blocks-social-share-content-block', array( $this, 'sanitize_int' ) );
		register_setting( 'crosswinds_blocks_options_settings', 'crosswinds-blocks-tabs-block', array( $this, 'sanitize_int' ) );
		register_setting( 'crosswinds_blocks_options_settings', 'crosswinds-blocks-portfolio-cpt', array( $this, 'sanitize_int' ) );
		register_setting( 'crosswinds_blocks_options_settings', 'crosswinds-blocks-portfolio-category-taxonomy', array( $this, 'sanitize_int' ) );
		register_setting( 'crosswinds_blocks_options_settings', 'crosswinds-blocks-portfolio-tag-taxonomy', array( $this, 'sanitize_int' ) );
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

}
