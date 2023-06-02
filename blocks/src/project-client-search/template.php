<?php
global $wpdb;

$transient_key = 'get_project_type_client';

$project_clients = get_transient( $transient_key );

if ( true === $project_clients ) {
	return $project_clients;
}

$project_clients = $wpdb->get_col( $wpdb->prepare( "SELECT DISTINCT pm.meta_value FROM {$wpdb->postmeta} pm  LEFT JOIN {$wpdb->posts} p ON p.ID = pm.post_id  WHERE pm.meta_key = %s  AND p.post_type = %s  AND p.post_status = %s ", 'project_client', 'project', 'publish' ) );

set_transient( $transient_key, $project_clients, DAY_IN_SECONDS );
?>

<div <?php echo get_block_wrapper_attributes(); ?>>
	<label for="portafoglio-client-search"><?php esc_html_e( 'Select a Client', 'crosswinds-blocks' ); ?></label>
	<select name="project_client" id="portafoglio-client-search">
		<option value=""><?php esc_html_e( 'Select a Client', 'crosswinds-blocks' ); ?></option>
		<?php
		if ( $project_clients ) {
			foreach ( $project_clients as $project_client ) {
				if ( 'project_client' === $project_client ) {
					$selected = 'selected="selected"';
				} else {
					$selected = '';
				}
				echo '<option value="' . esc_attr( $project_client ) . '" ' . wp_kses_post( $selected ) . '>' . wp_kses_post( $project_client ) . '</option>';
			}
		}
		?>
	</select>
</div>
