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

	<div class="options-header">
		<img src="<?php echo esc_url( get_template_directory_uri() . '/assets/images/portafoglio-logo-no-background.png' ); ?>" alt="Crosswinds Blocks Logo" />
		<div class="header-section">
			<h1><?php esc_html_e( 'Crosswinds Blocks', 'crosswinds-framework' ); ?></h1>
		</div>

		<div class="header-section">
			<p><?php esc_html_e( 'Version', 'crosswinds-framework' ); ?>: <?php echo esc_html( get_option( 'crosswinds_blocks_version' ) ); ?></p>
		</div>

	</div>

	<div id="options-top" class="options-section">

		<div class="options-top-left">
			<h2><?php esc_html_e( 'Welcome to the Crosswinds Framework!', 'crosswinds-framework' ); ?></h2>
			<p><?php esc_html_e( 'Thank you for choosing to use the Crosswinds Blocks plugin to power your website! Below you\'ll find links to documentation to learn how to harness the power of the blocks you\'ve now added to your website, as well as view all of the amazing Crosswinds Framework themes that can help you build the website you\'ve always wanted to build.', 'crosswinds-framework' ); ?></p>
			<div class="buttons">
				<a class="button cf-button-primary" href=""><?php esc_html_e( 'Start Editing', 'crosswinds-framework' ); ?></a>
				<a class="button cf-button-secondary" href=""><?php esc_html_e( 'Check out the Documentation', 'crosswinds-framework' ); ?></a>
			</div>
		</div>

		<div class="options-top-right">
			<div class="flex-video">
				<?php echo wp_oembed_get( 'https://www.youtube.com/watch?v=h0uHC9YEAho' ); ?>
			</div>
		</div>

	</div>

	<div class="options-body">

		<div class="options-main">

			<div class="options-section">
				<h2><?php esc_html_e( 'Crosswinds Blocks', 'crosswinds-framework' ); ?></h2>
				<?php
				if ( is_plugin_active( 'crosswinds-blocks/crosswinds-blocks.php' ) ) {
					do_action( 'crosswinds_framework_blocks_settings' );
				} else {
					?>
					<?php esc_html_e( 'Want to take your website to the next level now that you\'re using the Crosswinds Framework? Check out the Crosswinds Blocks plugin! This plugin will add in an accordion block, tabs block, post navigation block, related posts block, social sharing block and more to your website. It\'s the perfect way to customize your website in a full site editor world!', 'crosswinds-framework' ); ?>
					<?php
				}
				?>
			</div>

			<?php do_action( 'crosswinds_framework_theme_settings' ); ?>

			<div class="options-section">
				<h2><?php esc_html_e( 'Check Out Crosswinds Framework Templates', 'crosswinds-framework' ); ?></h2>
				<p><?php esc_html_e( 'Want to get the most out of Crosswinds Blocks? Checkout the Crosswinds Framework themes! From a portfolio to an online store to a newspaper website and even a blank canvas to create anything you want, the Crosswinds Framework will help you create a great website.', 'crosswinds-framework' ); ?></p>
			</div>

		</div>

		<div class="options-sidebar">

			<div class="options-section">
				<h2><?php esc_html_e( 'Report an Issue', 'crosswinds-framework' ); ?></h2>
				<p><?php esc_html_e( 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.', 'crosswinds-framework' ); ?></p>
				<a class="button cf-button-primary" href=""><?php esc_html_e( 'Report an Issue', 'crosswinds-framework' ); ?></a>
			</div>

			<div class="options-section">
				<h2><?php esc_html_e( 'Suggest a Feature', 'crosswinds-framework' ); ?></h2>
				<p><?php esc_html_e( 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.', 'crosswinds-framework' ); ?></p>
				<a class="button cf-button-primary" href=""><?php esc_html_e( 'Suggest a Feature', 'crosswinds-framework' ); ?></a>
			</div>

			<div class="options-section">
				<h2><?php esc_html_e( 'Leave a Review', 'crosswinds-framework' ); ?></h2>
				<p><?php esc_html_e( 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.', 'crosswinds-framework' ); ?></p>
				<a class="button cf-button-primary" href=""><?php esc_html_e( 'Leave a Review', 'crosswinds-framework' ); ?></a>
			</div>

			<div class="options-section">
				<h2><?php esc_html_e( 'View Documentation', 'crosswinds-framework' ); ?></h2>
				<p><?php esc_html_e( 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.', 'crosswinds-framework' ); ?></p>
				<a class="button cf-button-primary" href=""><?php esc_html_e( 'View Documentation', 'crosswinds-framework' ); ?></a>
			</div>

		</div>

	</div>

</div>