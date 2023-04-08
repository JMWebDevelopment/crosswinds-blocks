<?php
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
			<h2><?php esc_html_e( 'Crosswinds Framework', 'jm-web-dev-fse-starter-theme' ); ?></h2>
		</div>

		<div class="tabs">
			<div class="tab active-tab">
				<p class="tab-title"><a href="<?php echo esc_url( get_admin_url( null, '/admin.php?page=crosswinds-framework-block-options' ) ); ?>"><?php esc_html_e( 'Crosswinds Framework', 'jm-web-dev-fse-starter-theme' ); ?></a></p>
			</div>

			<?php
			if ( 'Crosswinds Framework' !== $current_theme_name ) {
				?>
				<div class="tab">
					<p class="tab-title"><a href="<?php echo esc_url( get_admin_url( null, '/admin.php?page=crosswinds-framework-theme' ) ); ?>"><?php esc_html_e( 'Theme Options', 'jm-web-dev-fse-starter-theme' ); ?></a></p>
				</div>
				<?php
			}
			?>
	
			<div class="tab">
				<p class="tab-title"><a href="<?php echo esc_url( get_admin_url( null, '/admin.php?page=crosswinds-blocks' ) ); ?>"><?php esc_html_e( 'Plugin Options', 'jm-web-dev-fse-starter-theme' ); ?></a></p>
			</div>
		</div>
	</div>

	<div class="main-area">

		<h1><?php esc_html_e( 'Crosswinds Framework', 'jm-web-dev-fse-starter-theme' ); ?></h1>

		<div class="settings-area">
			<h2><?php esc_html_e( 'Welcome to Crosswinds Framework', 'jm-web-dev-fse-starter-theme' ); ?></h2>
		</div>

		<div class="settings-area">
			<h2><?php esc_html_e( 'Crosswinds Framework Themes', 'jm-web-dev-fse-starter-theme' ); ?></h2>
		</div>

		<div class="settings-area">
			<h2><?php esc_html_e( 'Crosswinds Block', 'jm-web-dev-fse-starter-theme' ); ?></h2>
		</div>

	</div>
</div>
