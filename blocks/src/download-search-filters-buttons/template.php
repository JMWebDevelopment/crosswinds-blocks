<div <?php echo get_block_wrapper_attributes(); ?>>
	<input type="submit" value="<?php echo wp_kses_post( $attributes['searchLabel'] ); ?>" class="has-<?php echo esc_attr( $attributes['submitBackgroundColor'] ); ?>-background-color has-background" />
	<input type="reset" value="<?php echo wp_kses_post( $attributes['clearLabel'] ); ?>" class="has-<?php echo esc_attr( $attributes['resetBackgroundColor'] ); ?>-background-color has-background" />
</div>
