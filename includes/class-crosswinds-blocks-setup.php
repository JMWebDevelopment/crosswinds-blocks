<?php
/**
 * Add in extra functionality like custom post types or taxonomies.
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

		// Add the video custom post type.
		if ( get_option( 'crosswinds-blocks-video-cpt' ) || apply_filters( 'crosswinds_blocks_enable_video_cpt', false ) ) {
			register_post_type(
				'video',
				array(
					'labels'       => array(
						'name'               => esc_html__( 'Videos', 'crosswinds-blocks' ),
						'singular_name'      => esc_html__( 'Video', 'crosswinds-blocks' ),
						'add_new'            => _x( 'Add New', 'Video', 'crosswinds-blocks' ),
						'add_new_item'       => esc_html__( 'Add New Video', 'crosswinds-blocks' ),
						'edit_item'          => esc_html__( 'Edit Video', 'crosswinds-blocks' ),
						'new_item'           => esc_html__( 'New Video', 'crosswinds-blocks' ),
						'view_item'          => esc_html__( 'View Video', 'crosswinds-blocks' ),
						'search_items'       => esc_html__( 'Search Video', 'crosswinds-blocks' ),
						'not_found'          => esc_html__( 'No Video found', 'crosswinds-blocks' ),
						'not_found_in_trash' => esc_html__( 'No Video found in Trash', 'crosswinds-blocks' ),
						'parent_item_colon'  => '',
					),
					'public'       => true,
					'has_archive'  => false,
					'supports'     => array( 'title', 'editor', 'excerpt', 'thumbnail', 'revisions', 'comments', 'custom-fields' ),
					'query_var'    => true,
					'rewrite'      => array( 'slug' => 'video' ),
					'menu_icon'    => 'dashicons-video-alt3',
					'show_in_rest' => true,
				)
			);
		}

		// Add the resource custom post type.
		if ( get_option( 'crosswinds-blocks-resource-cpt' ) || apply_filters( 'crosswinds_blocks_enable_resource_cpt', false ) ) {
			register_post_type(
				'resource',
				array(
					'labels'       => array(
						'name'               => esc_html__( 'Resources', 'crosswinds-blocks' ),
						'singular_name'      => esc_html__( 'Resource', 'crosswinds-blocks' ),
						'add_new'            => _x( 'Add New', 'Resource', 'crosswinds-blocks' ),
						'add_new_item'       => esc_html__( 'Add New Resource', 'crosswinds-blocks' ),
						'edit_item'          => esc_html__( 'Edit Resource', 'crosswinds-blocks' ),
						'new_item'           => esc_html__( 'New Resource', 'crosswinds-blocks' ),
						'view_item'          => esc_html__( 'View Resource', 'crosswinds-blocks' ),
						'search_items'       => esc_html__( 'Search Resource', 'crosswinds-blocks' ),
						'not_found'          => esc_html__( 'No Resource found', 'crosswinds-blocks' ),
						'not_found_in_trash' => esc_html__( 'No Resource found in Trash', 'crosswinds-blocks' ),
						'parent_item_colon'  => '',
					),
					'public'       => true,
					'has_archive'  => false,
					'supports'     => array( 'title', 'editor', 'excerpt', 'thumbnail', 'revisions', 'comments', 'custom-fields' ),
					'query_var'    => true,
					'rewrite'      => array( 'slug' => 'resource' ),
					'menu_icon'    => 'dashicons-clipboard',
					'show_in_rest' => true,
				)
			);
		}

		// Add the guide custom post type.
		if ( get_option( 'crosswinds-blocks-guide-cpt' ) || apply_filters( 'crosswinds_blocks_enable_guide_cpt', false ) ) {
			register_post_type(
				'guide',
				array(
					'labels'       => array(
						'name'               => esc_html__( 'Guides', 'crosswinds-blocks' ),
						'singular_name'      => esc_html__( 'Guide', 'crosswinds-blocks' ),
						'add_new'            => _x( 'Add New', 'Guide', 'crosswinds-blocks' ),
						'add_new_item'       => esc_html__( 'Add New Guide', 'crosswinds-blocks' ),
						'edit_item'          => esc_html__( 'Edit Guide', 'crosswinds-blocks' ),
						'new_item'           => esc_html__( 'New Guide', 'crosswinds-blocks' ),
						'view_item'          => esc_html__( 'View Guide', 'crosswinds-blocks' ),
						'search_items'       => esc_html__( 'Search Guide', 'crosswinds-blocks' ),
						'not_found'          => esc_html__( 'No Guide found', 'crosswinds-blocks' ),
						'not_found_in_trash' => esc_html__( 'No Guide found in Trash', 'crosswinds-blocks' ),
						'parent_item_colon'  => '',
					),
					'public'       => true,
					'has_archive'  => false,
					'supports'     => array( 'title', 'editor', 'excerpt', 'thumbnail', 'revisions', 'comments', 'custom-fields' ),
					'query_var'    => true,
					'rewrite'      => array( 'slug' => 'guide' ),
					'menu_icon'    => 'dashicons-welcome-learn-more',
					'show_in_rest' => true,
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

		// Project taxonomies.
		if ( get_option( 'crosswinds-blocks-project-cpt' ) || apply_filters( 'crosswinds_blocks_enable_project_cpt', false ) ) {

			// Register the project category taxonomy.
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

			// Register the project tag taxonomy.
			register_taxonomy(
				'project_tag',
				'project',
				array(
					'hierarchical'       => false,
					'labels'             => array(
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
						'choose_from_most_used' => esc_html__( 'Choose from the most used tags', 'crosswinds-blocks' ),
					),
					'public'             => true,
					'show_ui'            => true,
					'show_admin_column'  => true,
					'query_var'          => true,
					'rewrite'            => array( 'slug' => 'project-tag' ),
					'show_in_rest'       => true,
					'show_in_variation'  => true,
					'publicly_queryable' => true,
				)
			);
		}

		// Video taxonomies.
		if ( get_option( 'crosswinds-blocks-video-cpt' ) || apply_filters( 'crosswinds_blocks_enable_video_cpt', false ) ) {

			// Register the video playlist taxonomy.
			register_taxonomy(
				'video_playlist',
				'video',
				array(
					'hierarchical'       => true,
					'labels'             => array(
						'name'                  => esc_html__( 'Video Playlists', 'crosswinds-blocks' ),
						'singular_name'         => esc_html__( 'Video Playlist', 'crosswinds-blocks' ),
						'search_items'          => esc_html__( 'Search Playlists', 'crosswinds-blocks' ),
						'all_items'             => esc_html__( 'All Playlists', 'crosswinds-blocks' ),
						'parent_item'           => esc_html__( 'Parent Playlist', 'crosswinds-blocks' ),
						'parent_item_colon'     => esc_html__( 'Parent Playlist:', 'crosswinds-blocks' ),
						'edit_item'             => esc_html__( 'Edit Playlist', 'crosswinds-blocks' ),
						'update_item'           => esc_html__( 'Update Playlist', 'crosswinds-blocks' ),
						'add_new_item'          => esc_html__( 'Add New Playlist', 'crosswinds-blocks' ),
						'new_item_name'         => esc_html__( 'New Playlist Name', 'crosswinds-blocks' ),
						'choose_from_most_used' => esc_html__( 'Choose from the most used playlists', 'crosswinds-blocks' ),
					),
					'public'             => true,
					'show_ui'            => true,
					'show_admin_column'  => true,
					'query_var'          => true,
					'rewrite'            => array( 'slug' => 'video-playlist' ),
					'show_in_rest'       => true,
					'publicly_queryable' => true,
				)
			);

			// Register the video topic taxonomy.
			register_taxonomy(
				'video_topic',
				'video',
				array(
					'hierarchical'       => false,
					'labels'             => array(
						'name'                  => esc_html__( 'Video Topics', 'crosswinds-blocks' ),
						'singular_name'         => esc_html__( 'Video Topic', 'crosswinds-blocks' ),
						'search_items'          => esc_html__( 'Search Topics', 'crosswinds-blocks' ),
						'all_items'             => esc_html__( 'All Topics', 'crosswinds-blocks' ),
						'parent_item'           => esc_html__( 'Parent Topic', 'crosswinds-blocks' ),
						'parent_item_colon'     => esc_html__( 'Parent Topic:', 'crosswinds-blocks' ),
						'edit_item'             => esc_html__( 'Edit Topic', 'crosswinds-blocks' ),
						'update_item'           => esc_html__( 'Update Topic', 'crosswinds-blocks' ),
						'add_new_item'          => esc_html__( 'Add New Topic', 'crosswinds-blocks' ),
						'new_item_name'         => esc_html__( 'New Topic Name', 'crosswinds-blocks' ),
						'choose_from_most_used' => esc_html__( 'Choose from the most used topic', 'crosswinds-blocks' ),
					),
					'public'             => true,
					'show_ui'            => true,
					'show_admin_column'  => true,
					'query_var'          => true,
					'rewrite'            => array( 'slug' => 'video-topic' ),
					'show_in_rest'       => true,
					'show_in_variation'  => true,
					'publicly_queryable' => true,
				)
			);
		}

		// Resource taxonomies.
		if ( get_option( 'crosswinds-blocks-resource-cpt' ) || apply_filters( 'crosswinds_blocks_enable_resource_cpt', false ) ) {

			// Register the resource category taxonomy.
			register_taxonomy(
				'resource_category',
				'resource',
				array(
					'hierarchical'       => true,
					'labels'             => array(
						'name'                  => esc_html__( 'Resource Categories', 'crosswinds-blocks' ),
						'singular_name'         => esc_html__( 'Resource Category', 'crosswinds-blocks' ),
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
					'rewrite'            => array( 'slug' => 'resource-category' ),
					'show_in_rest'       => true,
					'publicly_queryable' => true,
				)
			);

			// Register the resource tag taxonomy.
			register_taxonomy(
				'resource_tag',
				'resource',
				array(
					'hierarchical'       => false,
					'labels'             => array(
						'name'                  => esc_html__( 'Resource Tags', 'crosswinds-blocks' ),
						'singular_name'         => esc_html__( 'Resource Tag', 'crosswinds-blocks' ),
						'search_items'          => esc_html__( 'Search Tags', 'crosswinds-blocks' ),
						'all_items'             => esc_html__( 'All Tags', 'crosswinds-blocks' ),
						'parent_item'           => esc_html__( 'Parent Tag', 'crosswinds-blocks' ),
						'parent_item_colon'     => esc_html__( 'Parent Tag:', 'crosswinds-blocks' ),
						'edit_item'             => esc_html__( 'Edit Tag', 'crosswinds-blocks' ),
						'update_item'           => esc_html__( 'Update Tag', 'crosswinds-blocks' ),
						'add_new_item'          => esc_html__( 'Add New Tag', 'crosswinds-blocks' ),
						'new_item_name'         => esc_html__( 'New Tag Name', 'crosswinds-blocks' ),
						'choose_from_most_used' => esc_html__( 'Choose from the most used tags', 'crosswinds-blocks' ),
					),
					'public'             => true,
					'show_ui'            => true,
					'show_admin_column'  => true,
					'query_var'          => true,
					'rewrite'            => array( 'slug' => 'resource-tag' ),
					'show_in_rest'       => true,
					'show_in_variation'  => true,
					'publicly_queryable' => true,
				)
			);
		}

		// Guide taxonomies.
		if ( get_option( 'crosswinds-blocks-guide-cpt' ) || apply_filters( 'crosswinds_blocks_enable_guide_cpt', false ) ) {

			// Register the guide category taxonomy.
			register_taxonomy(
				'guide_category',
				'guide',
				array(
					'hierarchical'       => true,
					'labels'             => array(
						'name'                  => esc_html__( 'Guide Categories', 'crosswinds-blocks' ),
						'singular_name'         => esc_html__( 'Guide Category', 'crosswinds-blocks' ),
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
					'rewrite'            => array( 'slug' => 'guide-category' ),
					'show_in_rest'       => true,
					'publicly_queryable' => true,
				)
			);

			// Register the guide tag taxonomy.
			register_taxonomy(
				'guide_tag',
				'guide',
				array(
					'hierarchical'       => false,
					'labels'             => array(
						'name'                  => esc_html__( 'Guide Tags', 'crosswinds-blocks' ),
						'singular_name'         => esc_html__( 'Guide Tag', 'crosswinds-blocks' ),
						'search_items'          => esc_html__( 'Search Tags', 'crosswinds-blocks' ),
						'all_items'             => esc_html__( 'All Tags', 'crosswinds-blocks' ),
						'parent_item'           => esc_html__( 'Parent Tag', 'crosswinds-blocks' ),
						'parent_item_colon'     => esc_html__( 'Parent Tag:', 'crosswinds-blocks' ),
						'edit_item'             => esc_html__( 'Edit Tag', 'crosswinds-blocks' ),
						'update_item'           => esc_html__( 'Update Tag', 'crosswinds-blocks' ),
						'add_new_item'          => esc_html__( 'Add New Tag', 'crosswinds-blocks' ),
						'new_item_name'         => esc_html__( 'New Tag Name', 'crosswinds-blocks' ),
						'choose_from_most_used' => esc_html__( 'Choose from the most used tags', 'crosswinds-blocks' ),
					),
					'public'             => true,
					'show_ui'            => true,
					'show_admin_column'  => true,
					'query_var'          => true,
					'rewrite'            => array( 'slug' => 'guide-tag' ),
					'show_in_rest'       => true,
					'show_in_variation'  => true,
					'publicly_queryable' => true,
				)
			);
		}

	}
}
