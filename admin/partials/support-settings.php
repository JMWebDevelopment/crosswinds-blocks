<?php
?>
<h2><?php esc_html_e( 'Support', 'crosswinds-blocks' ); ?></h2>

<div class="support-section">
	<table class="form-table">
		<tbody>
			<tr>
				<th><?php esc_html_e( 'Crosswinds Blocks Version:', 'crosswinds-blocks' ); ?></th>
				<td>
					<p><?php echo esc_html( get_option( 'crosswinds_blocks_version' ) ); ?></p>
				</td>
			</tr>
			<tr>
				<th><?php esc_html_e( 'WordPress Version:', 'crosswinds-blocks' ); ?></th>
				<td>
					<p><?php echo esc_html( get_bloginfo( 'version' ) ); ?></p>
				</td>
			</tr>
			<tr>
				<th><?php esc_html_e( 'PHP Version:', 'crosswinds-blocks' ); ?></th>
				<td>
					<p><?php echo esc_html( phpversion() ); ?></p>
				</td>
			</tr>

			<tr>
				<th><?php esc_html_e( 'Report an Issue:', 'crosswinds-blocks' ); ?></th>
				<td>
					<p>
						<?php esc_html_e( 'If you run into an issue with Crosswinds Blocks, please report it in the GitHub repo linked to below. Thank you!', 'crosswinds-blocks' ); ?>
					</p>
					<br />
					<a class="button" href="https://sportsbenchwp.com/report-an-issue/" target="_blank"><?php esc_html_e( 'Report an Issue', 'crosswinds-blocks' ); ?></a>
				</td>
			</tr>
		</tbody>
	</table>
</div>
