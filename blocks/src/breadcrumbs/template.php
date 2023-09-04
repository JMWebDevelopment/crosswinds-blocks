<?php
/**
 * Creates the template for the breadcrumbs block.
 *
 * PHP version 7.3
 *
 * @link       https://crosswindsframework.com/downloads/crosswinds-blocks
 * @since      1.0.0
 *
 * @package    Crosswinds_Blocks
 * @subpackage Crosswinds_Blocks/blocks/breadcrumbs
 */

$show_on_homepage = 0;
$show_current = 1;
$delimiter = '<li><span class="far fa-' . $attributes['separatorIcon'] . '"></span></li>';
$home = esc_html__( 'Home', 'crosswinds-blocks' );
$before = '<span class="current">';
$after = '</span>';

if ( $attributes['breadrcumbsSchema'] ) {
	$list_attributes      = 'itemscope itemtype="http://schema.org/BreadcrumbList"';
	$list_item_attributes = 'itemprop="itemListElement" itemtype="http://schema.org/ListItem"';
} else {
	$list_attributes      = '';
	$list_item_attributes = '';
}

/* Don't change values below */
global $post;
$home_url = get_bloginfo( 'url' );
?>

<div <?php echo get_block_wrapper_attributes( array( 'class' => 'has-text-align-' . $attributes['align'] ) ); ?>>

	<?php
	/* Check for homepage first! */
	if ( is_home() || is_front_page() ) {
		$on_homepage = 1;
	}
	if ( 0 === $show_on_homepage && 1 === $on_homepage ) return;

	/* Proceed with showing the breadcrumbs */
	?>
	<ol id="crumbs" <?php echo wp_kses_post( $list_attributes ); ?>>

		<li <?php echo wp_kses_post( $list_item_attributes ); ?>><a href="<?php echo esc_attr( $home_url ); ?>"><?php echo esc_html( $home ); ?></a></li>

		<?php
		/* Build breadcrumbs here */
		if ( is_category() ) {
			echo wp_kses_post( $delimiter );
			$thisCat = get_category( get_query_var( 'cat' ), false );
			if ( $thisCat->parent !== 0 ) {
				echo '<li ' . wp_kses_post( $list_item_attributes ) . '>';
				echo get_category_parents( $thisCat->parent, true, '</li> ' . wp_kses_post( $delimiter ) . ' <li ' . wp_kses_post( $list_item_attributes ) . '>');
				echo '</li>';
			}
			echo '<li ' . wp_kses_post( $list_item_attributes ) . '>' . wp_kses_post( $before ) . single_cat_title('', false) . wp_kses_post( $after ) . '</li>';
		} elseif ( is_search() ) {
			echo wp_kses_post( $delimiter );
			echo '<li ' . wp_kses_post( $list_item_attributes ) . '>' . wp_kses_post( $before ) . 'Search results for "' . get_search_query() . '"' . wp_kses_post( $after ) . '</li>';
		} elseif ( is_day() ) {
			echo wp_kses_post( $delimiter );
			echo '<li ' . wp_kses_post( $list_item_attributes ) . '><a href="' . get_year_link(get_the_time('Y')) . '">' . get_the_time('Y') . '</a></li> ' . wp_kses_post( $delimiter ) . ' ';
			echo '<li ' . wp_kses_post( $list_item_attributes ) . '><a href="' . get_month_link(get_the_time('Y'), get_the_time('m')) . '">' . get_the_time('F') . '</a></li> ' . wp_kses_post( $delimiter ) . ' ';
			echo '<li ' . wp_kses_post( $list_item_attributes ) . '>' . wp_kses_post( $before ) . get_the_time('d') . wp_kses_post( $after ) . '</li>';
		} elseif ( is_month() ) {
			echo wp_kses_post( $delimiter );
			echo '<li ' . wp_kses_post( $list_item_attributes ) . '><a href="' . get_year_link(get_the_time('Y')) . '">' . get_the_time('Y') . '</a></li> ' . wp_kses_post( $delimiter ) . ' ';
			echo '<li ' . wp_kses_post( $list_item_attributes ) . '>' . wp_kses_post( $before ) . get_the_time('F') . wp_kses_post( $after ) . '</li>';
		} elseif ( is_year() ) {
			echo wp_kses_post( $delimiter );
			echo '<li ' . wp_kses_post( $list_item_attributes ) . '>' . wp_kses_post( $before ) . get_the_time('Y') . wp_kses_post( $after ) . '</li>';
		} elseif ( is_single() && ! is_attachment() ) {
			echo wp_kses_post( $delimiter );
			if ( get_post_type() !== 'post' ) {
				$post_type = get_post_type_object( get_post_type() );
				$slug = $post_type->rewrite;
				echo '<a href="' . $homeLink . '/' . $slug['slug'] . '/">' . $post_type->labels->singular_name . '</a>';
				if ($show_current == 1) {
					echo ' ' . wp_kses_post( $delimiter ) . ' <li ' . wp_kses_post( $list_item_attributes ) . '>' . wp_kses_post( $before ) . get_the_title() . wp_kses_post( $after ) . '</li>';
				}
			} else {
				$cat = get_the_category();
				$cat = $cat[0];
				$cats = get_category_parents( $cat, true, '</li> ' . wp_kses_post( $delimiter ) . ' <li ' . wp_kses_post( $list_item_attributes ) . '>' );
				if ( $show_current == 0 ) {
					$cats = preg_replace("#^(.+)\s$delimiter\s$#", "$1", $cats);
				}
				echo '<li ' . wp_kses_post( $list_item_attributes ) . '>';
				echo $cats;
				echo '</li>';
				if ( $show_current == 1 ) {
					echo '<li ' . wp_kses_post( $list_item_attributes ) . '>' . wp_kses_post( $before ) . get_the_title() . wp_kses_post( $after ) . '</li>';
				}
			}
		} elseif ( ! is_single() && ! is_page() && get_post_type() !== 'post' && ! is_404() ) {
			echo wp_kses_post( $delimiter );
			$post_type = get_post_type_object( get_post_type() );
			echo '<li ' . wp_kses_post( $list_item_attributes ) . '>' . wp_kses_post( $before ) . $post_type->labels->singular_name . wp_kses_post( $after ) . '</li>';
		} elseif ( is_attachment() ) {
			echo wp_kses_post( $delimiter );
			$parent = get_post( $post->post_parent );
			$cat = get_the_category( $parent->ID );
			$cat = $cat[0];
			echo '<li ' . wp_kses_post( $list_item_attributes ) . '>';
			echo get_category_parents( $cat, true, '</li> ' . wp_kses_post( $delimiter ) . ' <li ' . wp_kses_post( $list_item_attributes ) . '>' );
			echo '</li>';
			echo $delimiter;
			echo '<li ' . wp_kses_post( $list_item_attributes ) . '><a href="' . get_permalink($parent) . '">' . $parent->post_title . '</a></li>';
			if ( $show_current === 1 ) {
				echo ' ' . wp_kses_post( $delimiter ) . ' <li ' . wp_kses_post( $list_item_attributes ) . '>' . wp_kses_post( $before ) . get_the_title() . wp_kses_post( $after ) . '</li>';
			}
		} elseif ( is_page() && ! $post->post_parent) {
			echo wp_kses_post( $delimiter );
			if ( $show_current === 1 ) {
				echo '<li ' . wp_kses_post( $list_item_attributes ) . '>' . wp_kses_post( $before ) . get_the_title() . wp_kses_post( $after ) . '</li>';
			}
		} elseif ( is_page() && $post->post_parent ) {
			echo wp_kses_post( $delimiter );
			$parent_id  = $post->post_parent;
			$breadcrumbs = array();
			while ( $parent_id ) {
				$page = get_page( $parent_id );
				$breadcrumbs[] = '<li ' . wp_kses_post( $list_item_attributes ) . '><a href="' . get_permalink($page->ID) . '">' . get_the_title($page->ID) . '</a></li>';
				$parent_id  = $page->post_parent;
			}
			$breadcrumbs = array_reverse( $breadcrumbs );
			for ( $i = 0; $i < count( $breadcrumbs ); $i++ ) {
				echo $breadcrumbs[ $i ];
				if ($i !== count( $breadcrumbs )-1) {
					echo ' ' . wp_kses_post( $delimiter ) . ' ';
				}
			}
			if ( $show_current === 1 ) {
				echo ' ' . wp_kses_post( $delimiter ) . ' <li ' . wp_kses_post( $list_item_attributes ) . '>' . wp_kses_post( $before ) . get_the_title() . wp_kses_post( $after ) . '</li>';
			}
		} elseif ( is_tag() ) {
			echo wp_kses_post( $delimiter );
			echo '<li ' . wp_kses_post( $list_item_attributes ) . '>' . wp_kses_post( $before ) . single_tag_title('', false) . '"' . wp_kses_post( $after ) . '</li>';
		} elseif ( is_author() ) {
			echo wp_kses_post( $delimiter );
			global $author;
			$userdata = get_userdata( $author) ;
			echo '<li ' . wp_kses_post( $list_item_attributes ) . '>' . wp_kses_post( $before ) . esc_html__( 'Articles posted by ', 'crosswinds-blocks' ) . $userdata->display_name . wp_kses_post( $after ) . '</li>';
		} elseif ( is_404() ) {
			echo wp_kses_post( $delimiter );
			echo '<li ' . wp_kses_post( $list_item_attributes ) . '>' . wp_kses_post( $before ) . esc_html__( 'Error 404', 'crosswinds-blocks' ) . wp_kses_post( $after ) . '</li>';
		}
		if ( get_query_var( 'paged' ) ) {
			if ( is_category() || is_day() || is_month() || is_year() || is_search() || is_tag() || is_author() ) {
				echo ' (';
			}
			echo esc_html__( 'Page', 'crosswinds-blocks' ) . ' ' . get_query_var('paged');
			if ( is_category() || is_day() || is_month() || is_year() || is_search() || is_tag() || is_author() ) {
				echo ')';
			}
		}
		?>

	</ol>

</div>
