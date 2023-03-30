<?php
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
?>

<h2><?php esc_html_e( 'Design Settings', 'crosswinds-blocks' ); ?></h2>

<form id="form" method="POST" action="options.php">
	<?php
	wp_nonce_field( 'update-options' );
	settings_fields( 'crosswinds_blocks_options_settings' );
	?>

	<div class="options-grid">
	<div class="options-grid-item">
			<div class="block-icon">
				<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512"><path fill="#1b1930" class="fa-primary" d="M604 127.1h-184C400.1 127.1 384 144.1 384 164v312C384 495.9 400.1 512 420 512h184C623.9 512 640 495.9 640 476v-312C640 144.1 623.9 127.1 604 127.1zM576 448h-128V192h128V448z"/><path fill="#3e7ea8" class="fa-secondary" d="M448 192v256h128V192H448zM128 64h320v32h64V48c0-26.5-21.5-47.88-47.88-48H111.9C85.5 .125 64 21.5 64 48V288H16C7.125 288 0 295.1 0 304V320c.125 35.25 28.63 63.88 63.88 64H352V288H128V64z"/></svg>
			</div>
			<p class="block-title"><?php esc_html_e( 'Design Breakpoints', 'crosswinds-blocks' ); ?></p>
			<p class="block-description"><?php esc_html_e( 'Choose custom breakpoints for mobile and tablet screen sizes.', 'crosswinds-blocks' ); ?></p>

			<div class="text-field-container">
				<label for="mobile-breakpoint"><?php esc_html_e( 'Mobile Breakpoint', 'crosswinds-blocks' ); ?></label>
				<input type="number" id="mobile-breakpoint" name="crosswinds-blocks-mobile-breakpoint" value="<?php echo esc_attr( $mobile_breakpoint ); ?>" />
			</div>

			<div class="text-field-container">
				<label for="tablet-breakpoint"><?php esc_html_e( 'Tablet Breakpoint', 'crosswinds-blocks' ); ?></label>
				<input type="number" id="tablet-breakpoint" name="crosswinds-blocks-tablet-breakpoint" value="<?php echo esc_attr( $tablet_breakpoint ); ?>" />
			</div>
			</label>
		</div>
	</div>

	<input type="hidden" name="action" value="update" />
	<input type="submit" value="<?php esc_html_e( 'Save', 'crosswinds-blocks' ); ?>" id="submit" class="button-primary" name="submit">
</form>
