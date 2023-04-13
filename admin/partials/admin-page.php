<?php
/**
 * Creates the main plugin admin page.
 *
 * PHP version 7.3
 *
 * @link       https://jacobmartella.com
 * @since      1.0.0
 *
 * @package    Crosswinds_Blocks
 * @subpackage Crosswinds_Blocks/admin/partials
 */

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
			<h2><?php esc_html_e( 'Crosswinds Framework', 'crosswinds-blocks' ); ?></h2>
		</div>

		<div class="tabs">
			<div class="tab active-tab">
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
	
			<div class="tab">
				<p class="tab-title"><a href="<?php echo esc_url( get_admin_url( null, '/admin.php?page=crosswinds-blocks' ) ); ?>"><?php esc_html_e( 'Plugin Options', 'crosswinds-blocks' ); ?></a></p>
			</div>
		</div>
	</div>

	<div class="main-area">

		<h1><?php esc_html_e( 'Crosswinds Framework', 'crosswinds-blocks' ); ?></h1>

		<div class="settings-area">
			<h2><?php esc_html_e( 'Welcome to Crosswinds Framework', 'crosswinds-blocks' ); ?></h2>
			<p><?php esc_html_e( 'Thank you for choosing to use the Crosswinds Blocks plugin to power your website! Below you\'ll find links to documentation to learn how to harness the power of the blocks you\'ve now added to your website, as well as view all of the amazing Crosswinds Framework themes that can help you build the website you\'ve always wanted to build.', 'crosswinds-blocks' ); ?></p>

			<div class="buttons-row">
				<a href="" target="_blank" class="button dark-blue"><?php esc_html_e( 'View Documentation', 'crosswinds-blocks' ); ?></a>
				<a href="" target="_blank" class="button light-blue"><?php esc_html_e( 'View Demo Sites', 'crosswinds-blocks' ); ?></a>
			</div>
		</div>

		<div class="settings-area">
			<h2><?php esc_html_e( 'Crosswinds Framework Themes', 'crosswinds-blocks' ); ?></h2>
			<p><?php esc_html_e( 'Want to get the most out of Crosswinds Blocks? Checkout the Crosswinds Framework themes! From a portfolio to an online store to a newspaper website and even a blank canvas to create anything you want, the Crosswinds Framework will help you create a great website.', 'crosswinds-blocks' ); ?></p>
			<a href="" target="_blank" class="button dark-blue"><?php esc_html_e( 'View Crosswinds Frameworks Themes', 'crosswinds-blocks' ); ?></a>
		</div>

		<div class="settings-area">
			<h2><?php esc_html_e( 'Crosswinds Blocks', 'crosswinds-blocks' ); ?></h2>
			<p><?php esc_html_e( 'Thank you for using Crosswinds Blocks! Check out the plugin settings page to enable or disable various blocks, custom post types, custom taxonomies and other settings as well as find links to documentation and ways to get help or ask a question.', 'crosswinds-blocks' ); ?></p>
			<a href="<?php echo esc_url( get_admin_url( null, '/admin.php?page=crosswinds-blocks' ) ); ?>" target="_blank" class="button dark-blue"><?php esc_html_e( 'View Crosswinds Blocks Settings', 'crosswinds-blocks' ); ?></a>
		</div>

	</div>
</div>
