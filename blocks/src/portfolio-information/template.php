<?php
$portfolio_cats  = get_the_terms( get_the_ID(), 'portfolio_category' );
$category_string = '';
if ( $portfolio_cats ) {
	$num_cats = count( $portfolio_cats );
	$count    = 1;
	foreach ( $portfolio_cats as $cat ) {
		$category_string .= $cat->name;

		if ( $count < $num_cats ) {
			$category_string .= ', ';
		}
		$count++;
	}
}
?>
<p <?php echo get_block_wrapper_attributes(); ?>>
	<strong><?php esc_html_e( 'Client:', 'crosswinds-blocks' ); ?></strong> <?php echo get_post_meta( get_the_ID(), 'portafoglio_client', true ); ?><br />
	<strong><?php esc_html_e( 'Date:', 'crosswinds-blocks' ); ?></strong> <?php echo date_format( new DateTime( iso8601_to_datetime( get_post_meta( get_the_ID(), 'portafoglio_date', true ) ) ), get_option( 'date_format' ) ); ?><br />
	<strong><?php esc_html_e( 'Category:', 'crosswinds-blocks' ); ?></strong> <?php echo wp_kses_post( $category_string ); ?>
</p>
