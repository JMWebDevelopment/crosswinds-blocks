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

		// Add the project custom post type.
		if ( get_option( 'crosswinds-blocks-project-cpt' ) || apply_filters( 'crosswinds_blocks_enable_project_cpt', false ) ) {
			register_post_type(
				'project',
				array(
					'labels'       => array(
						'name'               => esc_html__( 'Projects', 'crosswinds-blocks' ),
						'singular_name'      => esc_html__( 'Project', 'crosswinds-blocks' ),
						'add_new'            => _x( 'Add New', 'Project', 'crosswinds-blocks' ),
						'add_new_item'       => esc_html__( 'Add New Project', 'crosswinds-blocks' ),
						'edit_item'          => esc_html__( 'Edit Item', 'crosswinds-blocks' ),
						'new_item'           => esc_html__( 'New Item', 'crosswinds-blocks' ),
						'view_item'          => esc_html__( 'View Item', 'crosswinds-blocks' ),
						'search_items'       => esc_html__( 'Search Project', 'crosswinds-blocks' ),
						'not_found'          => esc_html__( 'No Projects found', 'crosswinds-blocks' ),
						'not_found_in_trash' => esc_html__( 'No Projects found in Trash', 'crosswinds-blocks' ),
						'parent_item_colon'  => '',
					),
					'public'       => true,
					'has_archive'  => false,
					'supports'     => array( 'title', 'editor', 'excerpt', 'thumbnail', 'revisions', 'comments', 'custom-fields' ),
					'query_var'    => true,
					'rewrite'      => array( 'slug' => 'project' ),
					'menu_icon'    => 'dashicons-portfolio',
					'show_in_rest' => true,
				)
			);

			register_post_meta(
				'project',
				'project_client',
				array(
					'show_in_rest' => true,
					'single'       => true,
					'type'         => 'string',
				)
			);

			register_post_meta(
				'project',
				'project_date',
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

		// Register the project category taxonomy.
		if ( get_option( 'crosswinds-blocks-project-cpt' ) || apply_filters( 'crosswinds_blocks_enable_project_cpt', false ) ) {
			register_taxonomy(
				'project_category',
				'project',
				array(
					'hierarchical'       => true,
					'labels'             => array(
						'name'                  => esc_html__( 'Project Categories', 'crosswinds-blocks' ),
						'singular_name'         => esc_html__( 'Project Category', 'crosswinds-blocks' ),
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
					'rewrite'            => array( 'slug' => 'project-category' ),
					'show_in_rest'       => true,
					'publicly_queryable' => true,
				)
			);
		
			register_taxonomy(
				'project_tag',
				'project',
				array(
					'hierarchical'      => false,
					'labels'            => array(
						'name'                  => esc_html__( 'Project Tags', 'crosswinds-blocks' ),
						'singular_name'         => esc_html__( 'Project Tag', 'crosswinds-blocks' ),
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
					'rewrite'           => array( 'slug' => 'project-tag' ),
					'show_in_rest'      => true,
					'show_in_variation' => true,
					'publicly_queryable' => true,
				)
			);
		}

	}
}
