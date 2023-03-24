<?php
/**
 * The template for the server-side rendering of single post block.
 *
 * @since 1.0
 *
 * @version 1.0
 *
 * @package Featured Content Block
 */

// Get post title.
$post_title = get_the_title( get_the_ID() );
$post_url   = get_the_permalink( get_the_ID() );
$post_image = get_the_post_thumbnail_url( get_the_ID(), 'full' );

// Create the icons array.
$icons = array(
	'facebook' => array(
		'icon' => 'fab fa-facebookf',
		'url'  => 'https://www.facebook.com/sharer.php?u=' . esc_url( $post_url ),
		'slug' => 'facebook',
		'name' => 'Facebook'
	),
	'twitter' => array(
		'icon' => 'fab fa-twitter',
		'url'  => 'https://twitter.com/share?url=' . esc_url( $post_url ) . '&text=' . esc_attr( $post_title ),
		'slug' => 'twitter',
		'name' => 'Twitter'
	),
	'mastodon' => array(
		'icon' => 'fab fa-mastodon',
		'url'  => 'https://mastodonshare.com/?text='  . esc_attr( $post_title ) . '&url=' . esc_url( $post_url ),
		'slug' => 'mastodon',
		'name' => 'Mastodon'
	),
	'reddit' => array(
		'icon' => 'fab fa-reddit',
		'url'  => 'http://www.reddit.com/submit?url=' . esc_url( $post_url ),
		'slug' => 'reddit',
		'name' => 'Reddit'
	),
	'pinterest' => array(
		'icon' => 'fab fa-pinterest',
		'url'  => 'https://pinterest.com/pin/create/bookmarklet/?media=' . esc_url( $post_image ) . '&url=' . esc_url( $post_url ) . '&description',
		'slug' => 'pinterest',
		'name' => 'Pinterest'
	),
	'email' => array(
		'icon' => 'fab fa-envelope',
		'url'  => 'mailto:?subject='  . esc_attr( $post_title ) . '&amp;body=' . esc_url( $post_url ),
		'slug' => 'email',
		'name' => esc_html__( 'Email', 'crosswinds-blocks' )
	),
);

// Add the styles for the icons.

// Add in the classes for the block.
$wrapper_attributes = get_block_wrapper_attributes(
	[
		'class' => $attributes['iconsDirection'] . '-icons ' . $attributes['iconsStretch'] . '-icons',
	]
);
?>

<div <?php echo wp_kses_post( $wrapper_attributes ); ?>>
	<?php
	foreach ( $icons as $icon ) {
		if ( in_array( $icon['slug'], $attributes['socialIcons'] ) ) {
			if ( '' === $attributes[''] ) {
				?>
				<div class="social-icon">
					<a class="<?php echo esc_attr( $icon['slug'] ); ?>" href="<?php echo esc_url( $icon['url'] ); ?>" target="_blank"><span class="<?php echo esc_attr( $icon['icon'] ); ?>"></span><?php echo esc_html( $icon['name'] ); ?></a>
				</div>
				<?php
			} elseif ( '' === $attributes[''] ) {
				?>
				<div class="social-icon">
					<a class="<?php echo esc_attr( $icon['slug'] ); ?>" href="<?php echo esc_url( $icon['url'] ); ?>" target="_blank"><span class="<?php echo esc_attr( $icon['icon'] ); ?>"></span></a>
				</div>
				<?php
			} else {
				?>
				<div class="social-icon">
					<a class="<?php echo esc_attr( $icon['slug'] ); ?>" href="<?php echo esc_url( $icon['url'] ); ?>" target="_blank"><?php echo esc_html( $icon['name'] ); ?></a>
				</div>
				<?php
			}
		}
	}
	?>
</div>
