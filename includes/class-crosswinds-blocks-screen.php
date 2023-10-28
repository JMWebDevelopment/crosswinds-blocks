<?php
/**
 * Add in functionality for the settings screen.
 *
 * @link       https://crosswindsframework.com/downloads/crosswinds-blocks
 * @since      1.0.0
 *
 * @package    Crosswinds_Blocks
 * @subpackage Crosswinds_Blocks/includes
 */

namespace Crosswinds_Blocks;

/**
 * Add in extra functionality like custom post types or taxonomies.
 *
 * @since      1.0.0
 * @package    Crosswinds_Blocks
 * @subpackage Crosswinds_Blocks/includes
 */
class Crosswinds_Blocks_Screen {

	/**
	 * Builds the Crosswinds_Blocks_Screen object.
	 *
	 * @since 1.0.0
	 */
	public function __construct() {
	}

	/**
	 * Checks to see if the Crosswinds Framework main theme is the active theme or is a parent theme.
	 *
	 * @return boolean      Whether or not the Crosswinds Framework is the active theme or parent theme.
	 * @since 1.0
	 */
	public function is_crosswinds_framework_active() {
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
	 * Checks to see if a Crosswinds Framework child theme is the active theme.
	 *
	 * @since 1.0
	 *
	 * @param string | null $theme      The name of the theme to check for. Leave null to see if any Crosswinds Framework child theme is active.
	 * @return boolean                  Whether the active theme is a Crosswinds Framework child theme.
	 */
	public function is_crosswinds_framework_child_theme_active( $theme = null ) {
		$current_theme = wp_get_theme();

		if ( null !== $theme ) {
			if ( $theme === $current_theme->get( 'Name' ) ) {
				return true;
			} else {
				return false;
			}
		}

		if ( $current_theme->exists() && $current_theme->parent() ) {
			$parent_theme = $current_theme->parent();

			if ( $parent_theme->exists() && 'Crosswinds Framework' === $parent_theme->get( 'Name' ) ) {
				return true;
			}
		}

		return false;
	}
}
