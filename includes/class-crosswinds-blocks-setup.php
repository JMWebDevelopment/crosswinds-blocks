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

		// Add the portfolio custom post type.
		if ( get_option( 'crosswinds-blocks-portfolio-cpt' ) || apply_filters( 'crosswinds_blocks_enable_portfolio_cpt', false ) ) {
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

	}

	/**
	 * Creates the custom taxonomies included in the plugin.
	 *
	 * @since 1.0.0
	 */
	public function create_custom_taxonomies() {

		// Register the portfolio category taxonomy.
		if ( get_option( 'crosswinds-blocks-portfolio-category-taxonomy' ) || apply_filters( 'crosswinds_blocks_enable_portfolio-category_taxonomy', false ) ) {
			register_taxonomy(
				'portfolio_category',
				'portfolio',
				array(
					'hierarchical'       => true,
					'labels'             => array(
						'name'                  => esc_html__( 'Portfolio Categories', 'crosswinds-blocks' ),
						'singular_name'         => esc_html__( 'Portfolio Category', 'crosswinds-blocks' ),
						'search_items'          => esc_html__( 'Search Categories', 'crosswinds-blocks' ),
						'all_items'             => esc_html__( 'All Categories', 'crosswinds-blocks' ),
						'parent_item'           => esc_html__( 'Parent Category', 'crosswinds-blocks' ),
						'parent_item_colon'     => esc_html__( 'Parent Category:', 'crosswinds-blocks' ),
						'edit_item'             => esc_html__( 'Edit Category', 'crosswinds-blocks' ),
						'update_item'           => esc_html__( 'Update Category', 'crosswinds-blocks' ),
						'add_new_item'          => esc_html__( 'Add New Category', 'crosswinds-blocks' ),
						'new_item_name'         => esc_html__( 'New Category Name', 'crosswinds-blocks' ),
						'choose_from_most_used' => esc_html__( 'Choose from the most used categories', 'crosswinds-blocks' ),
					),
					'public'             => true,
					'show_ui'            => true,
					'show_admin_column'  => true,
					'query_var'          => true,
					'rewrite'            => array( 'slug' => 'portfolio-category' ),
					'show_in_rest'       => true,
					'publicly_queryable' => true,
				)
			);
		}

		// Register the portfolio category taxonomy.
		if ( get_option( 'crosswinds-blocks-portfolio-tag-taxonomy' ) || apply_filters( 'crosswinds_blocks_enable_portfolio-tag_taxonomy', false ) ) {
			register_taxonomy(
				'portfolio_tag',
				'portfolio',
				array(
					'hierarchical'      => false,
					'labels'            => array(
						'name'                  => esc_html__( 'Portfolio Tags', 'crosswinds-blocks' ),
						'singular_name'         => esc_html__( 'Portfolio Tag', 'crosswinds-blocks' ),
						'search_items'          => esc_html__( 'Search Tags', 'crosswinds-blocks' ),
						'all_items'             => esc_html__( 'All Tags', 'crosswinds-blocks' ),
						'parent_item'           => esc_html__( 'Parent Tag', 'crosswinds-blocks' ),
						'parent_item_colon'     => esc_html__( 'Parent Tag:', 'crosswinds-blocks' ),
						'edit_item'             => esc_html__( 'Edit Tag', 'crosswinds-blocks' ),
						'update_item'           => esc_html__( 'Update Tag', 'crosswinds-blocks' ),
						'add_new_item'          => esc_html__( 'Add New Tag', 'crosswinds-blocks' ),
						'new_item_name'         => esc_html__( 'New Tag Name', 'crosswinds-blocks' ),
						'choose_from_most_used' => esc_html__( 'Choose from the most used tags', 'crosswinds-blocks' )
					),
					'public'            => true,
					'show_ui'           => true,
					'show_admin_column' => true,
					'query_var'         => true,
					'rewrite'           => array( 'slug' => 'portfolio-tag' ),
					'show_in_rest'      => true,
				)
			);
		}

	}
}
