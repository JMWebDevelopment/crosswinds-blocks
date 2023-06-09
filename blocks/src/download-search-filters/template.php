<div <?php echo get_block_wrapper_attributes(); ?>>
	<form id="searchform" method="get" action="<?php echo esc_url( home_url( '/' ) ); ?>">
		<input type="hidden" name="post_type" value="download" />
		<?php echo do_blocks( $content ); ?>
	</form>
</div>
