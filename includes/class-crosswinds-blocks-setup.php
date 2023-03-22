<?php
/**
 * Add in extra functionality like custom post types or taxonomies.
 *
 * @link       https://jacobmartella.com
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
class Crosswinds_Blocks_Setup {

	/**
	 * Creates the custom post types included in the plugin.
	 *
	 * @since 1.0.0
	 */
	public function create_custom_post_types() {

		register_post_type(
			'portfolio',
			array(
				'labels'       => array(
					'name'               => esc_html__( 'Portfolio', 'crosswinds-blocks' ),
					'singular_name'      => esc_html__( 'Portfolio Project', 'crosswinds-blocks' ),
					'add_new'            => _x( 'Add New', 'Portfolio Project', 'crosswinds-blocks' ),
					'add_new_item'       => esc_html__( 'Add New Portfolio Project', 'crosswinds-blocks' ),
					'edit_item'          => esc_html__( 'Edit Item', 'crosswinds-blocks' ),
					'new_item'           => esc_html__( 'New Item', 'crosswinds-blocks' ),
					'view_item'          => esc_html__( 'View Item', 'crosswinds-blocks' ),
					'search_items'       => esc_html__( 'Search Portfolio Project', 'crosswinds-blocks' ),
					'not_found'          => esc_html__( 'No Portfolio Projects found', 'crosswinds-blocks' ),
					'not_found_in_trash' => esc_html__( 'No Portfolio Projects found in Trash', 'crosswinds-blocks' ),
					'parent_item_colon'  => '',
				),
				'public'       => true,
				'has_archive'  => false,
				'supports'     => array( 'title', 'editor', 'excerpt', 'thumbnail', 'revisions', 'comments', 'custom-fields' ),
				'query_var'    => true,
				'rewrite'      => array( 'slug' => 'porftolio' ),
				'menu_icon'    => 'dashicons-portfolio',
				'show_in_rest' => true,
			)
		);

		register_post_meta(
			'portfolio',
			'portafoglio_client',
			array(
				'show_in_rest' => true,
				'single'       => true,
				'type'         => 'string',
			)
		);

		register_post_meta(
			'portfolio',
			'portafoglio_date',
			array(
				'show_in_rest' => true,
				'single'       => true,
				'type'         => 'string',
			)
		);

	}

	/**
	 * Creates the custom taxonomies included in the plugin.
	 *
	 * @since 1.0.0
	 */
	public function create_custom_taxonomies() {

	}
}
