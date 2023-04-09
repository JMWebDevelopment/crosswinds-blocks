<?php
$custom_taxonomies = array(
	'portfolio_category' => array(
		'slug'        => 'portfolio-category',
		'name'        => esc_html__( 'Portfolio Category', 'crosswinds-blocks' ),
		'description' => esc_html__( 'Add a portfolio category taxonomy for the portfolio custom post type for your website.', 'crosswinds-blocks' ),
		'icon'        => '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path fill="#1b1930" class="fa-primary" d="M572.6 270.3l-96 192C471.2 473.2 460.1 480 447.1 480H0l119.2-238.3C124.6 230.8 135.7 224 147.8 224h396.2C567.7 224 583.2 249 572.6 270.3z"/><path fill="#3e7ea8" class="fa-secondary" d="M480 144V224H147.8C135.7 224 124.6 230.8 119.2 241.7L0 480V80C0 53.49 21.49 32 48 32h160l64 64h160C458.5 96 480 117.5 480 144z"/></svg>',
	),
	'portfolio_tag' => array(
		'slug'        => 'portfolio-tag',
		'name'        => esc_html__( 'Portfolio Tag', 'crosswinds-blocks' ),
		'description' => esc_html__( 'Add a portfolio tag taxonomy for the portfolio custom post type for your website.', 'crosswinds-blocks' ),
		'icon'        => '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path fill="#1b1930" class="fa-primary" d="M572.6 270.3l-96 192C471.2 473.2 460.1 480 447.1 480H0l119.2-238.3C124.6 230.8 135.7 224 147.8 224h396.2C567.7 224 583.2 249 572.6 270.3z"/><path fill="#3e7ea8" class="fa-secondary" d="M480 144V224H147.8C135.7 224 124.6 230.8 119.2 241.7L0 480V80C0 53.49 21.49 32 48 32h160l64 64h160C458.5 96 480 117.5 480 144z"/></svg>',
	),
);

if ( get_option( 'crosswinds-blocks-portfolio-cpt' ) ) {
	$portfolio_cpt = get_option( 'crosswinds-blocks-portfolio-cpt' );
} else {
	$portfolio_cpt = '';
}

if ( get_option( 'crosswinds-blocks-accordions-block' ) ) {
	$accordions = get_option( 'crosswinds-blocks-accordions-block' );
} else {
	$accordions = '';
}

if ( get_option( 'crosswinds-blocks-basic-grid-block' ) ) {
	$basic_grid = get_option( 'crosswinds-blocks-basic-grid-block' );
} else {
	$basic_grid = '';
}

if ( get_option( 'crosswinds-blocks-breadcrumbs-block' ) ) {
	$breadcrumbs = get_option( 'crosswinds-blocks-breadcrumbs-block' );
} else {
	$breadcrumbs = '';
}

if ( get_option( 'crosswinds-blocks-copyright-block' ) ) {
	$copyright = get_option( 'crosswinds-blocks-copyright-block' );
} else {
	$copyright = '';
}

if ( get_option( 'crosswinds-blocks-marquee-block' ) ) {
	$marquee = get_option( 'crosswinds-blocks-marquee-block' );
} else {
	$marquee = '';
}

if ( get_option( 'crosswinds-blocks-portfolio-category-search-block' ) ) {
	$portfolio_category_search = get_option( 'crosswinds-blocks-portfolio-category-search-block' );
} else {
	$portfolio_category_search = '';
}

if ( get_option( 'crosswinds-blocks-portfolio-information-block' ) ) {
	$portfolio_information = get_option( 'crosswinds-blocks-portfolio-information-block' );
} else {
	$portfolio_information = '';
}

if ( get_option( 'crosswinds-blocks-portfolio-search-block' ) ) {
	$portfolio_search = get_option( 'crosswinds-blocks-portfolio-search-block' );
} else {
	$portfolio_search = '';
}

if ( get_option( 'crosswinds-blocks-portfolio-tag-search-block' ) ) {
	$portfolio_tag_search = get_option( 'crosswinds-blocks-portfolio-tag-search-block' );
} else {
	$portfolio_tag_search = '';
}

if ( get_option( 'crosswinds-blocks-post-navigation-block' ) ) {
	$post_navigation = get_option( 'crosswinds-blocks-post-navigation-block' );
} else {
	$post_navigation = '';
}

if ( get_option( 'crosswinds-blocks-related-posts-block' ) ) {
	$related_posts = get_option( 'crosswinds-blocks-related-posts-block' );
} else {
	$related_posts = '';
}

if ( get_option( 'crosswinds-blocks-single-content-block' ) ) {
	$single_content = get_option( 'crosswinds-blocks-single-content-block' );
} else {
	$single_content = '';
}

if ( get_option( 'crosswinds-blocks-skills-slider-block' ) ) {
	$skills_slider = get_option( 'crosswinds-blocks-skills-slider-block' );
} else {
	$skills_slider = '';
}

if ( get_option( 'crosswinds-blocks-social-share-content-block' ) ) {
	$social_share_content = get_option( 'crosswinds-blocks-social-share-content-block' );
} else {
	$social_share_content = '';
}

if ( get_option( 'crosswinds-blocks-tabs-block' ) ) {
	$tabs = get_option( 'crosswinds-blocks-tabs-block' );
} else {
	$tabs = '';
}
?>

<h2><?php esc_html_e( 'Custom Post Type Settings', 'crosswinds-blocks' ); ?></h2>

<form id="form" method="POST" action="options.php">
	<?php
	wp_nonce_field( 'update-options' );
	settings_fields( 'crosswinds_blocks_options_settings' );
	?>

	<div class="options-grid">
		<?php
		foreach ( $custom_taxonomies as $custom_taxonomy ) {
			if ( get_option( 'crosswinds-blocks-' . $custom_taxonomy['slug'] . '-taxonomy' ) ) {
				$checked = checked( get_option( 'crosswinds-blocks-' . $custom_taxonomy['slug'] . '-taxonomy' ), 1, false );
			} else {
				$checked = '';
			}

			if ( apply_filters( 'crosswinds_blocks_enable_' . $custom_taxonomy['slug'] . '_taxonomy', false ) ) {
				$disabled = 'disabled="disabled"';
			} else {
				$disabled = '';
			}
			?>
			<div class="options-grid-item">
				<div class="block-icon">
					<?php echo $custom_taxonomy['icon']; ?>
				</div>
				<p class="block-title"><?php echo wp_kses_post( $custom_taxonomy['name'] ); ?></p>
				<p class="block-description"><?php echo wp_kses_post( $custom_taxonomy['description'] ); ?></p>

				<label class="Toggle" for="enable-<?php echo esc_attr( $custom_taxonomy['slug'] ); ?>-taxonomy">
				<input type="checkbox" name="crosswinds-blocks-<?php echo esc_attr( $custom_taxonomy['slug'] ); ?>-taxonomy" id="enable-<?php echo esc_attr( $custom_taxonomy['slug'] ); ?>-taxonomy" class="Toggle__input" <?php echo wp_kses_post( $checked ); ?> value="1" <?php echo wp_kses_post( $disabled ); ?> />

					<span class="Toggle__display" hidden>
						<svg
						aria-hidden="true"
						focusable="false"
						class="Toggle__icon Toggle__icon--checkmark"
						width="18"
						height="14"
						viewBox="0 0 18 14"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
						>
						<path
							d="M6.08471 10.6237L2.29164 6.83059L1 8.11313L6.08471 13.1978L17 2.28255L15.7175 1L6.08471 10.6237Z"
							fill="currentcolor"
							stroke="currentcolor"
						/>
						</svg>
						<svg
						aria-hidden="true"
						focusable="false"
						class="Toggle__icon Toggle__icon--cross"
						width="13"
						height="13"
						viewBox="0 0 13 13"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
						>
						<path
							d="M11.167 0L6.5 4.667L1.833 0L0 1.833L4.667 6.5L0 11.167L1.833 13L6.5 8.333L11.167 13L13 11.167L8.333 6.5L13 1.833L11.167 0Z"
							fill="currentcolor"
						/>
						</svg>
					</span>

					<span class="screen-reader-text"><?php esc_html_e( 'Enable/Disable', 'crosswinds-blocks' ); ?></span>
				</label>
			</div>
			<?php
		}
		?>
	</div>

	<input type="hidden" name="crosswinds-blocks-portfolio-cpt" value="<?php echo esc_attr( $portfolio_cpt ); ?>" />
	<input type="hidden" name="crosswinds-blocks-accordions-block" value="<?php echo esc_attr( $accordions ); ?>" />
	<input type="hidden" name="crosswinds-blocks-basic-grid-block" value="<?php echo esc_attr( $basic_grid ); ?>" />
	<input type="hidden" name="crosswinds-blocks-breadcrumbs-block" value="<?php echo esc_attr( $breadcrumbs ); ?>" />
	<input type="hidden" name="crosswinds-blocks-copyright-block" value="<?php echo esc_attr( $copyright ); ?>" />
	<input type="hidden" name="crosswinds-blocks-marquee-block" value="<?php echo esc_attr( $marquee ); ?>" />
	<input type="hidden" name="crosswinds-blocks-portfolio-category-search-block" value="<?php echo esc_attr( $portfolio_category_search ); ?>" />
	<input type="hidden" name="crosswinds-blocks-portfolio-information-block" value="<?php echo esc_attr( $portfolio_information ); ?>" />
	<input type="hidden" name="crosswinds-blocks-portfolio-search-block" value="<?php echo esc_attr( $portfolio_search ); ?>" />
	<input type="hidden" name="crosswinds-blocks-portfolio-tag-search-block" value="<?php echo esc_attr( $portfolio_tag_search ); ?>" />
	<input type="hidden" name="crosswinds-blocks-post-navigation-block" value="<?php echo esc_attr( $post_navigation ); ?>" />
	<input type="hidden" name="crosswinds-blocks-related-posts-block" value="<?php echo esc_attr( $related_posts ); ?>" />
	<input type="hidden" name="crosswinds-blocks-single-content-block" value="<?php echo esc_attr( $single_content ); ?>" />
	<input type="hidden" name="crosswinds-blocks-skills-slider-block" value="<?php echo esc_attr( $skills_slider ); ?>" />
	<input type="hidden" name="crosswinds-blocks-social-share-content-block" value="<?php echo esc_attr( $social_share_content ); ?>" />
	<input type="hidden" name="crosswinds-blocks-tabs-block" value="<?php echo esc_attr( $tabs ); ?>" />
	<input type="hidden" name="action" value="update" />
	<input type="submit" value="<?php esc_html_e( 'Save', 'crosswinds-blocks' ); ?>" id="submit" class="button-primary" name="submit">
</form>
