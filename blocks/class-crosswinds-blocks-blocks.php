<?php
/**
 * Holds all of the blocks functions.
 *
 * PHP version 7.3
 *
 * @link       https://crosswindsframework.com/downloads/crosswinds-blocks
 * @since      1.0.0
 *
 * @package    Crosswinds_Blocks
 * @subpackage Crosswinds_Blocks/blocks
 */

namespace Crosswinds_Blocks;

/**
 * Runs the blocks.
 *
 * This class defines all code necessary to run the blocks of the plugin.
 *
 * @since      1.0.0
 * @package    Crosswinds_Blocks
 * @subpackage Crosswinds_Blocks/public
 */
class Crosswinds_Blocks_Blocks {

	/**
	 * Version of the plugin.
	 *
	 * @var string $version Description.
	 * @since 1.0.0
	 */
	private $version;

	/**
	 * Builds the Crosswinds_Blocks_Blocks object.
	 *
	 * @param string $version Version of the plugin.
	 * @since 1.0.0
	 */
	public function __construct( $version ) {
		$this->version = $version;
	}

	/**
	 * Loads the custom blocks.
	 *
	 * @since 1.0.0
	 */
	public function blocks_init() {

		if ( get_option( 'crosswinds-blocks-accordions-block' ) || apply_filters( 'crosswinds_blocks_enable_accordions_block', false ) ) {
			register_block_type( __DIR__ . '/build/accordions/' );
			register_block_type( __DIR__ . '/build/accordion/' );
			register_block_type( __DIR__ . '/build/accordion-title/' );
			register_block_type( __DIR__ . '/build/accordion-body/' );
		}

		if ( get_option( 'crosswinds-blocks-basic-grid-block' ) || apply_filters( 'crosswinds_blocks_enable_basic-grid_block', false ) ) {
			register_block_type( __DIR__ . '/build/basic-grid/' );
			register_block_type( __DIR__ . '/build/basic-grid-item/' );
		}

		if ( get_option( 'crosswinds-blocks-breadcrumbs-block' ) || apply_filters( 'crosswinds_blocks_enable_breadcrumbs_block', false ) ) {
			register_block_type(
				__DIR__ . '/build/breadcrumbs/',
				array(
					'render_callback' => array( $this, 'breadcrumbs_block_render_callback' ),
				)
			);
		}

		if ( get_option( 'crosswinds-blocks-copyright-block' ) || apply_filters( 'crosswinds_blocks_enable_copyright_block', false ) ) {
			register_block_type(
				__DIR__ . '/build/copyright/',
				array(
					'render_callback' => array( $this, 'copyright_block_render_callback' ),
				)
			);
		}

		if ( get_option( 'crosswinds-blocks-download-search-filters-block' ) || apply_filters( 'crosswinds_blocks_enable_download-search-filters_block', false ) ) {
			register_block_type(
				__DIR__ . '/build/download-category-search/',
				array(
					'render_callback' => array( $this, 'download_category_search_block_render_callback' ),
				)
			);

			register_block_type(
				__DIR__ . '/build/download-search-filters-buttons/',
				array(
					'render_callback' => array( $this, 'download_search_filters_buttons_block_render_callback' ),
				)
			);

			register_block_type(
				__DIR__ . '/build/download-search-filters/',
				array(
					'render_callback' => array( $this, 'download_search_filters_block_render_callback' ),
				)
			);

			register_block_type(
				__DIR__ . '/build/download-search/',
				array(
					'render_callback' => array( $this, 'download_search_block_render_callback' ),
				)
			);
		}

		if ( get_option( 'crosswinds-blocks-google-maps-block' ) || apply_filters( 'crosswinds_blocks_enable_google-maps_block', false ) ) {
			register_block_type(
				__DIR__ . '/build/google-maps/',
				array(
					'render_callback' => array( $this, 'google_maps_block_render_callback' ),
				)
			);
		}

		if ( get_option( 'crosswinds-blocks-marquee-block' ) || apply_filters( 'crosswinds_blocks_enable_marquee_block', false ) ) {
			register_block_type( __DIR__ . '/build/marquee/' );
		}

		if ( get_option( 'crosswinds-blocks-next-post-block' ) || apply_filters( 'crosswinds_blocks_enable_next-post_block', false ) ) {
			register_block_type(
				__DIR__ . '/build/next-post/',
				array(
					'render_callback' => array( $this, 'next_post_block_render_callback' ),
				)
			);
		}

		if ( get_option( 'crosswinds-blocks-project-search-filters-block' ) || apply_filters( 'crosswinds_blocks_enable_project-search-filters_block', false ) || apply_filters( 'crosswinds_blocks_enable_project_cpt', false ) ) {
			register_block_type(
				__DIR__ . '/build/project-category-search/',
				array(
					'render_callback' => array( $this, 'project_category_search_block_render_callback' ),
				)
			);

			register_block_type(
				__DIR__ . '/build/project-search-filters-buttons/',
				array(
					'render_callback' => array( $this, 'project_search_filters_buttons_block_render_callback' ),
				)
			);

			register_block_type(
				__DIR__ . '/build/project-search-filters/',
				array(
					'render_callback' => array( $this, 'project_search_filters_block_render_callback' ),
				)
			);

			register_block_type(
				__DIR__ . '/build/project-client-search/',
				array(
					'render_callback' => array( $this, 'project_client_search_block_render_callback' ),
				)
			);

			register_block_type(
				__DIR__ . '/build/project-search/',
				array(
					'render_callback' => array( $this, 'project_search_block_render_callback' ),
				)
			);

			register_block_type(
				__DIR__ . '/build/project-tag-search/',
				array(
					'render_callback' => array( $this, 'project_tag_search_block_render_callback' ),
				)
			);
		}

		if ( get_option( 'crosswinds-blocks-project-information-block' ) || apply_filters( 'crosswinds_blocks_enable_project-information_block', false ) || apply_filters( 'crosswinds_blocks_enable_project_cpt', false ) ) {
			register_block_type(
				__DIR__ . '/build/project-information/',
				array(
					'render_callback' => array( $this, 'project_information_block_render_callback' ),
				)
			);
		}

		if ( get_option( 'crosswinds-blocks-previous-post-block' ) || apply_filters( 'crosswinds_blocks_enable_previous-post_block', false ) ) {
			register_block_type(
				__DIR__ . '/build/previous-post/',
				array(
					'render_callback' => array( $this, 'previous_post_block_render_callback' ),
				)
			);
		}

		if ( get_option( 'crosswinds-blocks-related-posts-block' ) || apply_filters( 'crosswinds_blocks_enable_related-posts_block', false ) ) {
			register_block_type(
				__DIR__ . '/build/related-posts/',
				array(
					'render_callback' => array( $this, 'related_posts_block_render_callback' ),
				)
			);
		}

		if ( get_option( 'crosswinds-blocks-single-content-block' ) || apply_filters( 'crosswinds_blocks_enable_single-content_block', false ) ) {
			register_block_type(
				__DIR__ . '/build/single-content/',
				array(
					'render_callback' => array( $this, 'single_content_block_render_callback' ),
				)
			);
		}

		if ( get_option( 'crosswinds-blocks-skills-slider-block' ) || apply_filters( 'crosswinds_blocks_enable_skills-slider_block', false ) ) {
			register_block_type( __DIR__ . '/build/skills-slider/' );
		}

		if ( get_option( 'crosswinds-blocks-social-share-content-block' ) || apply_filters( 'crosswinds_blocks_enable_social-share-content_block', false ) ) {
			register_block_type(
				__DIR__ . '/build/social-share-content/',
				array(
					'render_callback' => array( $this, 'social_share_content_block_render_callback' ),
				)
			);
		}

		if ( get_option( 'crosswinds-blocks-tabs-block' ) || apply_filters( 'crosswinds_blocks_enable_tabs_block', false ) ) {
			register_block_type( __DIR__ . '/build/tabs/' );
			register_block_type( __DIR__ . '/build/tab-section/' );
		}
	}

	/**
	 * Creates the custom block categories.
	 *
	 * @param array                   $block_categories          Array of categories for block types.
	 * @param WP_Block_Editor_Context $block_editor_context      The current block editor context.
	 * @return array                                             Updated array of block categories with our custom categories.
	 * @since 1.0.0
	 */
	public function blocks_categories( $block_categories, $block_editor_context ) {
		return array_merge(
			$block_categories,
			array(
				array(
					'slug'  => 'crosswinds-blocks',
					'title' => esc_html__( 'Crosswinds Blocks', 'crosswinds-blocks' ),
					'icon'  => '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--! Font Awesome Pro 6.3.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><defs><style>.fa-primary{color:#1b1930}.fa-secondary{color:#3e7ea8}</style></defs><path class="fa-primary" d="M64 32C64 14.3 49.7 0 32 0S0 14.3 0 32V480c0 17.7 14.3 32 32 32s32-14.3 32-32V32zM208 64.7V351.3L272 338V78L208 64.7zM368 318l64-13.3V111.3L368 98V318z"/><path class="fa-secondary" d="M272 78V338l96-20V98L272 78zM486.5 293.3c14.8-3.1 25.5-16.2 25.5-31.3V154c0-15.2-10.6-28.2-25.5-31.3L432 111.3V304.7l54.5-11.4zM208 64.7L166.5 56c-19.9-4.1-38.5 11-38.5 31.3V96H64v48h64V272H64v48h64v8.6c0 20.3 18.7 35.5 38.5 31.3l41.5-8.6V64.7z"/></svg>',
				),
			)
		);
	}

	/**
	 * Loads the template for the single content block.
	 *
	 * @param array  $attributes   The attributes for the block.
	 * @param string $content      The content for the block.
	 * @param array  $block        Information about the block.
	 * @since 1.0
	 */
	public function single_content_block_render_callback( $attributes, $content, $block ) {
		ob_start();
		require plugin_dir_path( __FILE__ ) . 'build/single-content/template.php';
		return ob_get_clean();
	}

	/**
	 * Loads the template for the next post block.
	 *
	 * @param array  $attributes   The attributes for the block.
	 * @param string $content      The content for the block.
	 * @param array  $block        Information about the block.
	 * @since 1.0
	 */
	public function next_post_block_render_callback( $attributes, $content, $block ) {
		ob_start();
		require plugin_dir_path( __FILE__ ) . 'build/next-post/template.php';
		return ob_get_clean();
	}

	/**
	 * Loads the template for the previous post block.
	 *
	 * @param array  $attributes   The attributes for the block.
	 * @param string $content      The content for the block.
	 * @param array  $block        Information about the block.
	 * @since 1.0
	 */
	public function previous_post_block_render_callback( $attributes, $content, $block ) {
		ob_start();
		require plugin_dir_path( __FILE__ ) . 'build/previous-post/template.php';
		return ob_get_clean();
	}

	/**
	 * Loads the template for the related posts block.
	 *
	 * @param array  $attributes   The attributes for the block.
	 * @param string $content      The content for the block.
	 * @param array  $block        Information about the block.
	 * @since 1.0
	 */
	public function related_posts_block_render_callback( $attributes, $content, $block ) {
		ob_start();
		require plugin_dir_path( __FILE__ ) . 'build/related-posts/template.php';
		return ob_get_clean();
	}

	/**
	 * Loads the template for the social share content block.
	 *
	 * @param array  $attributes   The attributes for the block.
	 * @param string $content      The content for the block.
	 * @param array  $block        Information about the block.
	 * @since 1.0
	 */
	public function social_share_content_block_render_callback( $attributes, $content, $block ) {
		ob_start();
		require plugin_dir_path( __FILE__ ) . 'build/social-share-content/template.php';
		return ob_get_clean();
	}

	/**
	 * Loads the template for the copyright block.
	 *
	 * @param array  $attributes   The attributes for the block.
	 * @param string $content      The content for the block.
	 * @param array  $block        Information about the block.
	 * @since 1.0
	 */
	public function copyright_block_render_callback( $attributes, $content, $block ) {
		ob_start();
		require plugin_dir_path( __FILE__ ) . 'build/copyright/template.php';
		return ob_get_clean();
	}

	/**
	 * Loads the template for the breadcrumbs block.
	 *
	 * @param array  $attributes   The attributes for the block.
	 * @param string $content      The content for the block.
	 * @param array  $block        Information about the block.
	 * @since 1.0
	 */
	public function breadcrumbs_block_render_callback( $attributes, $content, $block ) {
		ob_start();
		require plugin_dir_path( __FILE__ ) . 'build/breadcrumbs/template.php';
		return ob_get_clean();
	}

	/**
	 * Loads the template for the project category search block.
	 *
	 * @param array  $attributes   The attributes for the block.
	 * @param string $content      The content for the block.
	 * @param array  $block        Information about the block.
	 * @since 1.0
	 */
	public function project_category_search_block_render_callback( $attributes, $content, $block ) {
		ob_start();
		require plugin_dir_path( __FILE__ ) . 'build/project-category-search/template.php';
		return ob_get_clean();
	}

	/**
	 * Loads the template for the project information block.
	 *
	 * @param array  $attributes   The attributes for the block.
	 * @param string $content      The content for the block.
	 * @param array  $block        Information about the block.
	 * @since 1.0
	 */
	public function project_information_block_render_callback( $attributes, $content, $block ) {
		ob_start();
		require plugin_dir_path( __FILE__ ) . 'build/project-information/template.php';
		return ob_get_clean();
	}

	/**
	 * Loads the template for the project search filters block.
	 *
	 * @param array  $attributes   The attributes for the block.
	 * @param string $content      The content for the block.
	 * @param array  $block        Information about the block.
	 * @since 1.0
	 */
	public function project_search_filters_block_render_callback( $attributes, $content, $block ) {
		ob_start();
		require plugin_dir_path( __FILE__ ) . 'build/project-search-filters/template.php';
		return ob_get_clean();
	}

	/**
	 * Loads the template for the project search filter buttons block.
	 *
	 * @param array  $attributes   The attributes for the block.
	 * @param string $content      The content for the block.
	 * @param array  $block        Information about the block.
	 * @since 1.0
	 */
	public function project_search_filters_buttons_block_render_callback( $attributes, $content, $block ) {
		ob_start();
		require plugin_dir_path( __FILE__ ) . 'build/project-search-filters-buttons/template.php';
		return ob_get_clean();
	}

	/**
	 * Loads the template for the project search block.
	 *
	 * @param array  $attributes   The attributes for the block.
	 * @param string $content      The content for the block.
	 * @param array  $block        Information about the block.
	 * @since 1.0
	 */
	public function project_search_block_render_callback( $attributes, $content, $block ) {
		ob_start();
		require plugin_dir_path( __FILE__ ) . 'build/project-search/template.php';
		return ob_get_clean();
	}

	/**
	 * Loads the template for the project client search block.
	 *
	 * @param array  $attributes   The attributes for the block.
	 * @param string $content      The content for the block.
	 * @param array  $block        Information about the block.
	 * @since 1.0
	 */
	public function project_client_search_block_render_callback( $attributes, $content, $block ) {
		ob_start();
		require plugin_dir_path( __FILE__ ) . 'build/project-client-search/template.php';
		return ob_get_clean();
	}

	/**
	 * Loads the template for the project tag search block.
	 *
	 * @param array  $attributes   The attributes for the block.
	 * @param string $content      The content for the block.
	 * @param array  $block        Information about the block.
	 * @since 1.0
	 */
	public function project_tag_search_block_render_callback( $attributes, $content, $block ) {
		ob_start();
		require plugin_dir_path( __FILE__ ) . 'build/project-tag-search/template.php';
		return ob_get_clean();
	}

	/**
	 * Loads the template for the Google Maps block.
	 *
	 * @param array  $attributes   The attributes for the block.
	 * @param string $content      The content for the block.
	 * @param array  $block        Information about the block.
	 * @since 1.0
	 */
	public function google_maps_block_render_callback( $attributes, $content, $block ) {
		ob_start();
		require plugin_dir_path( __FILE__ ) . 'build/google-maps/template.php';
		return ob_get_clean();
	}

	/**
	 * Loads the template for the download category search block.
	 *
	 * @param array  $attributes   The attributes for the block.
	 * @param string $content      The content for the block.
	 * @param array  $block        Information about the block.
	 * @since 1.0
	 */
	public function download_category_search_block_render_callback( $attributes, $content, $block ) {
		ob_start();
		require plugin_dir_path( __FILE__ ) . 'build/download-category-search/template.php';
		return ob_get_clean();
	}

	/**
	 * Loads the template for the download search filters block.
	 *
	 * @param array  $attributes   The attributes for the block.
	 * @param string $content      The content for the block.
	 * @param array  $block        Information about the block.
	 * @since 1.0
	 */
	public function download_search_filters_block_render_callback( $attributes, $content, $block ) {
		ob_start();
		require plugin_dir_path( __FILE__ ) . 'build/download-search-filters/template.php';
		return ob_get_clean();
	}

	/**
	 * Loads the template for the download search filter buttons block.
	 *
	 * @param array  $attributes   The attributes for the block.
	 * @param string $content      The content for the block.
	 * @param array  $block        Information about the block.
	 * @since 1.0
	 */
	public function download_search_filters_buttons_block_render_callback( $attributes, $content, $block ) {
		ob_start();
		require plugin_dir_path( __FILE__ ) . 'build/download-search-filters-buttons/template.php';
		return ob_get_clean();
	}

	/**
	 * Loads the template for the download search block.
	 *
	 * @param array  $attributes   The attributes for the block.
	 * @param string $content      The content for the block.
	 * @param array  $block        Information about the block.
	 * @since 1.0
	 */
	public function download_search_block_render_callback( $attributes, $content, $block ) {
		ob_start();
		require plugin_dir_path( __FILE__ ) . 'build/download-search/template.php';
		return ob_get_clean();
	}

	/**
	 * Loads the block customizations for core blocks.
	 *
	 * @since 1.0
	 */
	public function custom_attributes_editor_scripts() {
		wp_register_script(
			'crosswinds-blocks-custom-attributes',
			plugin_dir_url( __FILE__ ) . 'block-customizations/build/index.js',
			array( 'wp-blocks', 'wp-dom', 'wp-dom-ready', 'wp-edit-post' ),
			$this->version
		);
		wp_enqueue_script( 'crosswinds-blocks-custom-attributes' );

		wp_enqueue_style( 'crosswinds-blocks-custom-attributes-styling', plugin_dir_url( __FILE__ ) . 'block-customizations/build/index.css', array(), $this->version, 'all' );
	}

	/**
	 * Loads styling for the core block customizations.
	 *
	 * @since 1.0
	 */
	public function custom_attributes_scripts() {
		wp_enqueue_style( 'crosswinds-blocks-custom-attributes-styling', plugin_dir_url( __FILE__ ) . 'block-customizations/build/index.css', array(), $this->version, 'all' );
	}

	/**
	 * Adds responsive classes to the post template block.
	 *
	 * @param string $block_content      The content of the block.
	 * @param array  $block              An array of information about the block.
	 * @return string                    The updated block.
	 * @since 1.0
	 */
	public function add_post_template_responsive_classes( $block_content, $block ) {
		if ( 'core/post-template' !== $block['blockName'] ) {
			return $block_content;
		}

		if ( ! isset( $block['attrs']['numTabletColumns'] ) && ! isset( $block['attrs']['numMobileColumns'] ) && ! isset( $block['attrs']['cbUseFlex'] ) ) {
			return $block_content;
		}

		$add_classes = '';

		if ( isset( $block['attrs']['numTabletColumns'] ) ) {
			$tablet_columns = $block['attrs']['numTabletColumns'];
		} else {
			$tablet_columns = '2';
		}
		$add_classes .= 'query-loop-has-' . esc_attr( $tablet_columns ) . '-tablet-columns ';

		if ( isset( $block['attrs']['numMobileColumns'] ) ) {
			$tablet_columns = $block['attrs']['numMobileColumns'];
		} else {
			$tablet_columns = '1';
		}
		$add_classes .= 'query-loop-has-' . esc_attr( $block['attrs']['numMobileColumns'] ) . '-mobile-columns ';

		if ( isset( $block['attrs']['cbUseFlex'] ) ) {
			$add_classes .= 'cb-flex-layout ';
		}

		return preg_replace(
			'/' . preg_quote( 'class="', '/' ) . '/',
			'class="' . esc_attr( $add_classes ) . ' ',
			$block_content,
			1
		);
	}
}
