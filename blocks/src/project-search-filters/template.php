<?php
$project_tags = get_terms(
	array(
		'taxonomy' => 'project_tag'
	)
);
$term = get_queried_object();
?>

<div <?php echo get_block_wrapper_attributes(); ?>>
	<form id="searchform" method="get" action="<?php echo esc_url( home_url( '/' ) ); ?>">
		<?php echo do_blocks( $content ); ?>
	</form>
</div>
