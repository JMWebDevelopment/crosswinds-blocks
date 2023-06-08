<div <?php echo get_block_wrapper_attributes(); ?>>
	<label for="search-term-field"><?php echo wp_kses_post( $attributes['label'] ); ?></label><br />
	<input type="search" class="search-field" placeholder="<?php echo esc_attr_x( 'Search …', 'placeholder', 'crosswinds-blocks' ); ?>" value="<?php echo esc_attr( get_search_query() ); ?>" name="s" id="search-term-field" title="<?php echo esc_attr_x( 'Search for:', 'label', 'crosswinds-blocks' ); ?>" />
	<input type="hidden" name="post_type" value="download" />
</div>
