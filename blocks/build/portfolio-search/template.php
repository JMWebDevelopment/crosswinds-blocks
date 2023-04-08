<div <?php echo get_block_wrapper_attributes(); ?>>
	<form role="search" method="get" class="search-form" action="<?php echo esc_attr( home_url( '/' ) ); ?>">
		<label for="search-term-field"><?php echo _x( 'Search for:', 'label', 'crosswinds-blocks' ); ?></label><br />
		<input type="search" class="search-field" placeholder="<?php echo esc_attr_x( 'Search …', 'placeholder', 'crosswinds-blocks' ); ?>" value="<?php echo esc_attr( get_search_query() ); ?>" name="s" id="search-term-field" title="<?php echo esc_attr_x( 'Search for:', 'label', 'crosswinds-blocks' ); ?>" />
		<input type="hidden" name="post_type" value="portfolio" />
		<input type="submit" class="search-submit has-background has-dark-blue-background-color" value="<?php echo esc_attr_x( 'Search', 'submit button', 'crosswinds-blocks' ); ?>" />
	</form>
</div>
