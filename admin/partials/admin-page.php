<?php
/**
 * Creates the main plugin admin page.
 * This is used if the Crosswinds Framework is not an active theme or the parent theme.
 *
 * PHP version 7.3
 *
 * @link       https://crosswindsframework.com/downloads/crosswinds-blocks
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
$plugin_info = get_plugin_data( WP_PLUGIN_DIR . '/crosswinds-blocks/crosswinds-blocks.php' );
?>

<div class="options-wrap">

	<div class="options-header">
		<img src="<?php echo esc_url( plugin_dir_url( dirname( __FILE__ ) ) . 'images/cf-wordmark.png' ); ?>" alt="Crosswinds Blocks Logo" />
		<div class="header-section">
			<h1 class="screen-reader-text"><?php esc_html_e( 'Crosswinds Blocks', 'crosswinds-blocks' ); ?></h1>
		</div>

		<div class="header-section">
			<p><?php esc_html_e( 'Blocks Version', 'crosswinds-blocks' ); ?>: <?php echo esc_html( $plugin_info['Version'] ); ?></p>
		</div>

	</div>

	<div id="options-top" class="options-section">

		<div class="options-top-left">
			<h2><?php esc_html_e( 'Welcome to Crosswinds Blocks!', 'crosswinds-blocks' ); ?></h2>
			<p><?php esc_html_e( 'Thank you for choosing to use the Crosswinds Blocks plugin to power your website! Below you\'ll find links to documentation to learn how to harness the power of the blocks you\'ve now added to your website, as well as view all of the amazing Crosswinds Framework themes that can help you build the website you\'ve always wanted to build.', 'crosswinds-blocks' ); ?></p>
			<div class="buttons">
				<a class="button cf-button-secondary" href="https://github.com/JMWebDevelopment/crosswinds-blocks/wiki"><?php esc_html_e( 'Check out the Documentation', 'crosswinds-blocks' ); ?></a>
			</div>
		</div>

		<div class="options-top-right">
			<div class="flex-video">
			</div>
		</div>

	</div>

	<div class="options-body">

		<div class="options-main">

			<div class="options-section">
				<h2><?php esc_html_e( 'Crosswinds Blocks', 'crosswinds-blocks' ); ?></h2>
				<?php
				if ( is_plugin_active( 'crosswinds-blocks/crosswinds-blocks.php' ) ) {
					do_action( 'crosswinds_framework_blocks_settings' );
				} else {
					?>
					<?php esc_html_e( 'Want to take your website to the next level now that you\'re using the Crosswinds Framework? Check out the Crosswinds Blocks plugin! This plugin will add in an accordion block, tabs block, post navigation block, related posts block, social sharing block and more to your website. It\'s the perfect way to customize your website in a full site editor world!', 'crosswinds-blocks' ); ?>
					<?php
				}
				?>
			</div>

			<?php do_action( 'crosswinds_framework_theme_settings' ); ?>

			<div class="options-section">
				<h2><?php esc_html_e( 'Check Out Crosswinds Framework Templates', 'crosswinds-blocks' ); ?></h2>
				<p><?php esc_html_e( 'Want to get the most out of Crosswinds Blocks? Checkout the Crosswinds Framework themes! From a portfolio to an online store to a newspaper website and even a blank canvas to create anything you want, the Crosswinds Framework will help you create a great website.', 'crosswinds-blocks' ); ?></p>
				<a class="button cf-button-primary" href="https://crosswindsframework.com"><?php esc_html_e( 'Download Crosswinds Framework', 'crosswinds-blocks' ); ?></a>
			</div>

		</div>

		<div class="options-sidebar">

			<div class="options-section">
				<h2><?php esc_html_e( 'Report an Issue', 'crosswinds-blocks' ); ?></h2>
				<p><?php esc_html_e( 'If you come across an issue with Crosswinds Blocks, please report the issue in the GitHub repository using the link below.', 'crosswinds-blocks' ); ?></p>
				<a class="button cf-button-primary" href="https://github.com/JMWebDevelopment/crosswinds-blocks/issues/new"><?php esc_html_e( 'Report an Issue', 'crosswinds-blocks' ); ?></a>
			</div>

			<div class="options-section">
				<h2><?php esc_html_e( 'Suggest a Feature', 'crosswinds-blocks' ); ?></h2>
				<p><?php esc_html_e( 'Want to see a new feature included in a release of Crosswinds Blocks? Be sure to drop your feature idea off in the GitHub repository using the link below.', 'crosswinds-blocks' ); ?></p>
				<a class="button cf-button-primary" href="https://github.com/JMWebDevelopment/crosswinds-blocks/issues/new"><?php esc_html_e( 'Suggest a Feature', 'crosswinds-blocks' ); ?></a>
			</div>

			<div class="options-section">
				<h2><?php esc_html_e( 'View Documentation', 'crosswinds-blocks' ); ?></h2>
				<p><?php esc_html_e( 'Learn how you can get started using the Crosswinds Framework for your website by visiting the documentation at the link below.', 'crosswinds-blocks' ); ?></p>
				<a class="button cf-button-primary" href="https://github.com/JMWebDevelopment/crosswinds-blocks/wiki"><?php esc_html_e( 'View Documentation', 'crosswinds-blocks' ); ?></a>
			</div>

		</div>

	</div>

</div>
