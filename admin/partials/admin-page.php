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

namespace Crosswinds_Blocks;

// If this file is called directly, then about execution.
if ( ! defined( 'WPINC' ) ) {
	die;
}

require_once plugin_dir_path( dirname( dirname( __FILE__ ) ) ) . 'includes/class-crosswinds-blocks-screen.php';

$settings = new Crosswinds_Blocks_Screen();

$current_theme = wp_get_theme();
if ( $settings->is_crosswinds_framework_active() ) {
	if ( $settings->is_crosswinds_framework_child_theme_active() ) {
		$theme_name              = $current_theme->get( 'Name' );
		$theme_version           = $current_theme->get( 'Version' );
		$parent_theme            = $current_theme->parent();
		$framework_theme_version = $parent_theme->get( 'Version' );
	} else {
		$framework_theme_version = $current_theme->get( 'Version' );
	}

	$required_plugins  = crosswinds_framework_get_required_plugins();
	$suggested_plugins = crosswinds_framework_get_suggested_plugins();
}

$added_plugins = array();
?>

<div class="options-wrap">

	<div class="options-header">
		<img src="<?php echo esc_url( plugin_dir_url( dirname( __FILE__ ) ) . 'images/crosswinds-framework-wordmark-dark.png' ); ?>" alt="Crosswinds Framework Logo" />
		<div class="header-section">
			<h1 class="screen-reader-text"><?php esc_html_e( 'Crosswinds Framework', 'crosswinds-blocks' ); ?></h1>
		</div>

		<?php
		if ( $settings->is_crosswinds_framework_active() ) {
			if ( $settings->is_crosswinds_framework_child_theme_active() ) {
				?>
				<div class="header-section">
					<p><?php echo esc_html( $theme_name ); ?> <?php esc_html_e( 'Version', 'crosswinds-blocks' ); ?>: <?php echo esc_html( $theme_version ); ?></p>
				</div>
				<?php
			}
			?>

			<div class="header-section">
				<p><?php esc_html_e( 'Framework Version', 'crosswinds-blocks' ); ?>: <?php echo esc_html( $framework_theme_version ); ?></p>
			</div>
			<?php
		}
		?>

		<div class="header-section">
			<p><?php esc_html_e( 'Blocks Version', 'crosswinds-blocks' ); ?>: <?php echo esc_html( CROSSWINDS_BLOCKS_VERSION ); ?></p>
		</div>

	</div>

	<div id="options-top" class="options-section">

		<div class="options-top-left">
			<h2><?php esc_html_e( 'Welcome to Crosswinds Framework!', 'crosswinds-blocks' ); ?></h2>
			<?php
			if ( $settings->is_crosswinds_framework_active() ) {
				?>
				<p><?php do_action( 'crosswinds_framework_admin_intro' ); ?></p>
				<?php
			} else {
				?>
				<p><?php esc_html_e( 'Thank you for choosing to use the Crosswinds Blocks plugin to power your website! Below you\'ll find links to documentation to learn how to harness the power of the blocks you\'ve now added to your website, as well as view all of the amazing Crosswinds Framework themes that can help you build the website you\'ve always wanted to build.', 'crosswinds-blocks' ); ?></p>
				<?php
			}
			?>

			<div class="buttons">
				<a class="button cf-button-primary" href="<?php echo esc_url( get_admin_url() ); ?>/site-editor.php"><?php esc_html_e( 'Start Editing', 'crosswinds-blocks' ); ?></a>
				<a class="button cf-button-secondary" href="https://crosswindsframework.com/docs/"><?php esc_html_e( 'Check out the Documentation', 'crosswinds-blocks' ); ?></a>
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
				do_action( 'crosswinds_framework_blocks_settings' );
				?>
			</div>

			<?php
			if ( $settings->is_crosswinds_framework_active() ) {
				do_action( 'crosswinds_framework_theme_settings' );
			} else {
				?>
				<div class="options-section">
					<h2><?php esc_html_e( 'Check Out Crosswinds Framework Templates', 'crosswinds-blocks' ); ?></h2>
					<p><?php esc_html_e( 'Want to get the most out of Crosswinds Blocks? Checkout the Crosswinds Framework themes! From a portfolio to an online store to a newspaper website and even a blank canvas to create anything you want, the Crosswinds Framework will help you create a great website.', 'crosswinds-blocks' ); ?></p>
					<a class="button cf-button-primary" href="https://crosswindsframework.com"><?php esc_html_e( 'Download Crosswinds Framework', 'crosswinds-blocks' ); ?></a>
				</div>
				<?php
			}
			?>

		</div>

		<div class="options-sidebar">

			<?php
			if ( $settings->is_crosswinds_framework_active() ) {
				?>
				<div class="options-section">
					<?php
					if ( $required_plugins ) {
						?>
						<h2><?php esc_html_e( 'Required Plugins', 'crosswinds-blocks' ); ?></h2>
						<div class="plugins-section">
						<?php
						foreach ( $required_plugins as $key => $value ) {
							if ( ! in_array( $value['slug'], $added_plugins ) ) {
								$added_plugins[] = $value['slug'];
								if ( ! file_exists( CROSSWINDS_BLOCKS_PLUGIN_PATH . '/' . $value['slug'] . '/' . $value['slug'] . '.php' ) ) {
									if ( 'external' === $value['location'] ) {
										$link_text = '<p><a href="' . esc_url( $value['link'] ) . '" target="_blank">' . esc_html__( 'Learn More', 'crosswinds-blocks' ) . '</a></p>';
									} else {
										$nonce_url = wp_nonce_url(
											add_query_arg(
												array(
													'page'          => 'tgmpa-install-plugins',
													'plugin'        => urlencode( $value['slug'] ),
													'tgmpa-install' => 'install-plugin',
												),
												get_admin_url( null, '/themes.php' )
											),
											'tgmpa-install',
											'tgmpa-nonce'
										);
										$link_text = '<p><a href="' . esc_url( $nonce_url ) . '">' . esc_html__( 'Install', 'crosswinds-blocks' ) . '</a></p>';
									}
								} elseif ( ! is_plugin_active( $value['slug'] . '/' . $value['slug'] . '.php' ) ) {
									$nonce_url = wp_nonce_url(
										add_query_arg(
											array(
												'page'           => 'tgmpa-install-plugins',
												'plugin'         => urlencode( $value['slug'] ),
												'tgmpa-activate' => 'activate-plugin',
											),
											get_admin_url( null, '/themes.php' )
										),
										'tgmpa-activate',
										'tgmpa-nonce'
									);
									$link_text = '<p><a href="' . esc_url( $nonce_url ) . '">' . esc_html__( 'Activate', 'crosswinds-blocks' ) . '</a></p>';
								} else {
									$link_text = '<p>' . esc_html__( 'Installed', 'crosswinds-blocks' ) . '</p>';
								}
								?>
								<div class="plugin-section">
									<div class="logo">
										<img src="<?php echo esc_html( $value['logo'] ); ?>" alt="<?php echo esc_html( $value['name'] ); ?> logo" />
									</div>

									<div class="plugin-info">
										<p class="plugin-title"><strong><?php echo esc_html( $value['name'] ); ?></strong><br /><a href="<?php echo esc_html( $value['link'] ); ?>" target="_blank"><?php esc_html_e( 'Learn More', 'crosswinds-blocks' ); ?></a></p>
									</div>

									<div class="plugin-link">
										<?php echo wp_kses_post( $link_text ); ?>
									</div>
								</div>
								<?php
							}
						}
						?>
						</div>
						<?php
					}
					?>

					<?php
					if ( $suggested_plugins ) {
						?>
						<h2><?php esc_html_e( 'Suggested Plugins', 'crosswinds-blocks' ); ?></h2>
						<div class="plugins-section">
						<?php
						foreach ( $suggested_plugins as $key => $value ) {
							if ( ! in_array( $value['slug'], $added_plugins ) ) {
								$added_plugins[] = $value['slug'];
								if ( ! file_exists( CROSSWINDS_BLOCKS_PLUGIN_PATH . '/' . $value['slug'] . '/' . $value['slug'] . '.php' ) ) {
									if ( 'external' === $value['location'] ) {
										$link_text = '<p><a href="' . esc_url( $value['link'] ) . '" target="_blank">' . esc_html__( 'Learn More', 'crosswinds-blocks' ) . '</a></p>';
									} else {
										$nonce_url = wp_nonce_url(
											add_query_arg(
												array(
													'page'          => 'tgmpa-install-plugins',
													'plugin'        => urlencode( $value['slug'] ),
													'tgmpa-install' => 'install-plugin',
												),
												get_admin_url( null, '/themes.php' )
											),
											'tgmpa-install',
											'tgmpa-nonce'
										);
										$link_text = '<p><a href="' . esc_url( $nonce_url ) . '">' . esc_html__( 'Install', 'crosswinds-blocks' ) . '</a></p>';
									}
								} elseif ( ! is_plugin_active( $value['slug'] . '/' . $value['slug'] . '.php' ) ) {
									$nonce_url = wp_nonce_url(
										add_query_arg(
											array(
												'page'           => 'tgmpa-install-plugins',
												'plugin'         => urlencode( $value['slug'] ),
												'tgmpa-activate' => 'activate-plugin',
											),
											get_admin_url( null, '/themes.php' )
										),
										'tgmpa-activate',
										'tgmpa-nonce'
									);
									$link_text = '<p><a href="' . esc_url( $nonce_url ) . '">' . esc_html__( 'Activate', 'crosswinds-blocks' ) . '</a></p>';
								} else {
									$link_text = '<p>' . esc_html__( 'Installed', 'crosswinds-blocks' ) . '</p>';
								}
								?>
								<div class="plugin-section">
									<div class="logo">
										<img src="<?php echo esc_html( $value['logo'] ); ?>" alt="<?php echo esc_html( $value['name'] ); ?> logo" />
									</div>

									<div class="plugin-info">
										<p class="plugin-title"><strong><?php echo esc_html( $value['name'] ); ?></strong><br /><a href="<?php echo esc_html( $value['link'] ); ?>" target="_blank"><?php esc_html_e( 'Learn More', 'crosswinds-blocks' ); ?></a></p>
									</div>

									<div class="plugin-link">
										<?php echo wp_kses_post( $link_text ); ?>
									</div>
								</div>
								<?php
							}
						}
						?>
						</div>
						<?php
					}
					?>
				</div>
				<?php
			}
			?>

			<?php
			if ( $settings->is_crosswinds_framework_active() ) {
				do_action( 'crosswinds_framework_admin_report_issue_section' );

				do_action( 'crosswinds_framework_admin_feature_request_section' );

				do_action( 'crosswinds_framework_admin_review_section' );

				do_action( 'crosswinds_framework_admin_documentation_section' );
			} else {
				?>

				<div class="options-section">
					<h2><?php esc_html_e( 'Report an Issue', 'crosswinds-blocks' ); ?></h2>
					<p><?php esc_html_e( 'If you come across an issue with Crosswinds Blocks, please report the issue in the GitHub repository using the link below.', 'crosswinds-blocks' ); ?></p>
					<a class="button cf-button-primary" href="https://crosswindsframework.com/report-an-issue/"><?php esc_html_e( 'Report an Issue', 'crosswinds-blocks' ); ?></a>
				</div>

				<div class="options-section">
					<h2><?php esc_html_e( 'Suggest a Feature', 'crosswinds-blocks' ); ?></h2>
					<p><?php esc_html_e( 'Want to see a new feature included in a release of Crosswinds Blocks? Be sure to drop your feature idea off in the GitHub repository using the link below.', 'crosswinds-blocks' ); ?></p>
					<a class="button cf-button-primary" href="https://crosswindsframework.com/feature-request/"><?php esc_html_e( 'Suggest a Feature', 'crosswinds-blocks' ); ?></a>
				</div>

				<div class="options-section">
					<h2><?php esc_html_e( 'View Documentation', 'crosswinds-blocks' ); ?></h2>
					<p><?php esc_html_e( 'Learn how you can get started using the Crosswinds Framework for your website by visiting the documentation at the link below.', 'crosswinds-blocks' ); ?></p>
					<a class="button cf-button-primary" href="https://crosswindsframework.com/docs/"><?php esc_html_e( 'View Documentation', 'crosswinds-blocks' ); ?></a>
			</div>

				<?php
			}
			?>

		</div>

	</div>

</div>
