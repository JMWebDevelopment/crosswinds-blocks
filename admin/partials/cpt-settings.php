<?php
$cpts = array(
	'portfolio' => array(
		'slug'        => 'portfolio',
		'name'        => esc_html__( 'Portfolio', 'crosswinds-blocks' ),
		'description' => esc_html__( 'Add a portfolio custom post type for your website.', 'crosswinds-blocks' ),
		'icon'        => '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path fill="#1b1930" class="fa-primary" d="M572.6 270.3l-96 192C471.2 473.2 460.1 480 447.1 480H0l119.2-238.3C124.6 230.8 135.7 224 147.8 224h396.2C567.7 224 583.2 249 572.6 270.3z"/><path fill="#3e7ea8" class="fa-secondary" d="M480 144V224H147.8C135.7 224 124.6 230.8 119.2 241.7L0 480V80C0 53.49 21.49 32 48 32h160l64 64h160C458.5 96 480 117.5 480 144z"/></svg>',
	),
);

if ( get_option( 'crosswinds-blocks-mobile-breakpoint' ) ) {
	$mobile_breakpoint = get_option( 'crosswinds-blocks-mobile-breakpoint' );
} else {
	$mobile_breakpoint = '650';
}

if ( get_option( 'crosswinds-blocks-tablet-breakpoint' ) ) {
	$tablet_breakpoint = get_option( 'crosswinds-blocks-tablet-breakpoint' );
} else {
	$tablet_breakpoint = '1000';
}

if ( get_option( 'crosswinds-blocks-portfolio-category-taxonomy' ) ) {
	$portfolio_category_taxonomy = get_option( 'crosswinds-blocks-portfolio-category-taxonomy' );
} else {
	$portfolio_category_taxonomy = '';
}

if ( get_option( 'crosswinds-blocks-portfolio-tag-taxonomy' ) ) {
	$portfolio_tag_taxonomy = get_option( 'crosswinds-blocks-portfolio-tag-taxonomy' );
} else {
	$portfolio_tag_taxonomy = '';
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

if ( get_option( 'crosswinds-blocks-marquee-block' ) ) {
	$marquee = get_option( 'crosswinds-blocks-marquee-block' );
} else {
	$marquee = '';
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
		foreach ( $cpts as $cpt ) {
			if ( get_option( 'crosswinds-blocks-' . $cpt['slug'] . '-cpt' ) ) {
				$checked = checked( get_option( 'crosswinds-blocks-' . $cpt['slug'] . '-cpt' ), 1, false );
			} else {
				$checked = '';
			}

			if ( apply_filters( 'crosswinds_blocks_enable_' . $cpt['slug'] . '_cpt', false ) ) {
				$disabled = 'disabled="disabled"';
			} else {
				$disabled = '';
			}
			?>
			<div class="options-grid-item">
				<div class="block-icon">
					<?php echo $cpt['icon']; ?>
				</div>
				<p class="block-title"><?php echo wp_kses_post( $cpt['name'] ); ?></p>
				<p class="block-description"><?php echo wp_kses_post( $cpt['description'] ); ?></p>

				<label class="Toggle" for="enable-<?php echo esc_attr( $cpt['slug'] ); ?>-cpt">
					<input type="checkbox" name="crosswinds-blocks-<?php echo esc_attr( $cpt['slug'] ); ?>-cpt" id="enable-<?php echo esc_attr( $cpt['slug'] ); ?>-cpt" class="Toggle__input" <?php echo wp_kses_post( $checked ); ?> value="1"  <?php echo wp_kses_post( $disabled ); ?> />

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

	<input type="hidden" name="crosswinds-blocks-portfolio-category-taxonomy" value="<?php echo esc_attr( $portfolio_category_taxonomy ); ?>" />
	<input type="hidden" name="crosswinds-blocks-portfolio-tag-taxonomy" value="<?php echo esc_attr( $portfolio_tag_taxonomy ); ?>" />
	<input type="hidden" name="crosswinds-blocks-tablet-breakpoint" value="<?php echo esc_attr( $mobile_breakpoint ); ?>" />
	<input type="hidden" name="crosswinds-blocks-mobile-breakpoint" value="<?php echo esc_attr( $tablet_breakpoint ); ?>" />
	<input type="hidden" name="crosswinds-blocks-accordions-block" value="<?php echo esc_attr( $accordions ); ?>" />
	<input type="hidden" name="crosswinds-blocks-basic-grid-block" value="<?php echo esc_attr( $basic_grid ); ?>" />
	<input type="hidden" name="crosswinds-blocks-marquee-block" value="<?php echo esc_attr( $marquee ); ?>" />
	<input type="hidden" name="crosswinds-blocks-post-navigation-block" value="<?php echo esc_attr( $post_navigation ); ?>" />
	<input type="hidden" name="crosswinds-blocks-related-posts-block" value="<?php echo esc_attr( $related_posts ); ?>" />
	<input type="hidden" name="crosswinds-blocks-single-content-block" value="<?php echo esc_attr( $single_content ); ?>" />
	<input type="hidden" name="crosswinds-blocks-skills-slider-block" value="<?php echo esc_attr( $skills_slider ); ?>" />
	<input type="hidden" name="crosswinds-blocks-social-share-content-block" value="<?php echo esc_attr( $social_share_content ); ?>" />
	<input type="hidden" name="crosswinds-blocks-tabs-block" value="<?php echo esc_attr( $tabs ); ?>" />
	<input type="hidden" name="action" value="update" />
	<input type="submit" value="<?php esc_html_e( 'Save', 'crosswinds-blocks' ); ?>" id="submit" class="button-primary" name="submit">
</form>
