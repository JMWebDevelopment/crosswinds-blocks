<div <?php echo get_block_wrapper_attributes(); ?>>
	<input type="reset" value="<?php esc_html_e( 'Clear', 'crosswinds-blocks' ); ?>" class="has-<?php echo esc_attr( $attributes['clearBackgroundColor'] ); ?>-background-color has-background" />
	<input type="submit" value="<?php esc_html_e( 'Submit', 'crosswinds-blocks' ); ?>" class="has-<?php echo esc_attr( $attributes['submitBackgroundColor'] ); ?>-background-color has-background" />
</div>
