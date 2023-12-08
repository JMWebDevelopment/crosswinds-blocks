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

// If this file is called directly, then about execution.
if ( ! defined( 'WPINC' ) ) {
	die;
}

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

<div <?php echo wp_kses_data( get_block_wrapper_attributes( array( 'class' => 'has-text-align-' . $attributes['align'] ) ) ); ?>>

	<?php
	/* Check for homepage first! */
	if ( is_home() || is_front_page() ) {
		$on_homepage = 1;
	} else {
		$on_homepage = 0;
	}

	if ( 0 === $show_on_homepage && 1 === $on_homepage ) {
		return;
	}

	/* Proceed with showing the breadcrumbs */
	?>
	<ol id="crumbs" <?php echo wp_kses_post( $list_attributes ); ?>>

		<li <?php echo wp_kses_post( $list_item_attributes ); ?>><a href="<?php echo esc_attr( $home_url ); ?>"><?php echo esc_html( $home ); ?></a></li>

		<?php
		/* Build breadcrumbs here */
		if ( is_category() ) {
			echo wp_kses_post( $delimiter );
			$this_cat = get_category( get_query_var( 'cat' ), false );
			if ( 0 !== $this_cat->parent ) {
				echo '<li ' . wp_kses_post( $list_item_attributes ) . '>';
				echo wp_kses_post( get_category_parents( $this_cat->parent, true, '</li> ' . wp_kses_post( $delimiter ) . ' <li ' . wp_kses_post( $list_item_attributes ) . '>' ) );
				echo '</li>';
			}
			echo '<li ' . wp_kses_post( $list_item_attributes ) . '>' . wp_kses_post( $before ) . wp_kses_post( single_cat_title( '', false ) ) . wp_kses_post( $after ) . '</li>';
		} elseif ( is_search() ) {
			echo wp_kses_post( $delimiter );
			echo '<li ' . wp_kses_post( $list_item_attributes ) . '>' . wp_kses_post( $before ) . 'Search results for "' . wp_kses_post( get_search_query() ) . '"' . wp_kses_post( $after ) . '</li>';
		} elseif ( is_day() ) {
			echo wp_kses_post( $delimiter );
			echo '<li ' . wp_kses_post( $list_item_attributes ) . '><a href="' . wp_kses_post( get_year_link( get_the_time( 'Y' ) ) ) . '">' . wp_kses_post( get_the_time( 'Y' ) ) . '</a></li> ' . wp_kses_post( $delimiter ) . ' ';
			echo '<li ' . wp_kses_post( $list_item_attributes ) . '><a href="' . wp_kses_post( get_month_link( get_the_time( 'Y' ), get_the_time( 'm' ) ) ) . '">' . wp_kses_post( get_the_time( 'F' ) ) . '</a></li> ' . wp_kses_post( $delimiter ) . ' ';
			echo '<li ' . wp_kses_post( $list_item_attributes ) . '>' . wp_kses_post( $before ) . wp_kses_post( get_the_time( 'd' ) ) . wp_kses_post( $after ) . '</li>';
		} elseif ( is_month() ) {
			echo wp_kses_post( $delimiter );
			echo '<li ' . wp_kses_post( $list_item_attributes ) . '><a href="' . wp_kses_post( get_year_link( get_the_time( 'Y' ) ) ) . '">' . wp_kses_post( get_the_time( 'Y' ) ) . '</a></li> ' . wp_kses_post( $delimiter ) . ' ';
			echo '<li ' . wp_kses_post( $list_item_attributes ) . '>' . wp_kses_post( $before ) . wp_kses_post( get_the_time( 'F' ) ) . wp_kses_post( $after ) . '</li>';
		} elseif ( is_year() ) {
			echo wp_kses_post( $delimiter );
			echo '<li ' . wp_kses_post( $list_item_attributes ) . '>' . wp_kses_post( $before ) . wp_kses_post( get_the_time( 'Y' ) ) . wp_kses_post( $after ) . '</li>';
		} elseif ( is_single() && ! is_attachment() ) {
			echo wp_kses_post( $delimiter );
			if ( get_post_type() !== 'post' ) {
				$the_post_type = get_post_type_object( get_post_type() );
				$slug          = $the_post_type->rewrite;
				echo '<a href="' . esc_url( $home_link ) . '/' . esc_attr( $slug['slug'] ) . '/">' . wp_kses_post( $the_post_type->labels->singular_name ) . '</a>';
				if ( 1 === $show_current ) {
					echo ' ' . wp_kses_post( $delimiter ) . ' <li ' . wp_kses_post( $list_item_attributes ) . '>' . wp_kses_post( $before ) . wp_kses_post( get_the_title() ) . wp_kses_post( $after ) . '</li>';
				}
			} else {
				$the_cat = get_the_category();
				$the_cat = $the_cat[0];
				$cats    = get_category_parents( $the_cat, true, '</li> ' . wp_kses_post( $delimiter ) . ' <li ' . wp_kses_post( $list_item_attributes ) . '>' );
				if ( 0 === $show_current ) {
					$cats = preg_replace( "#^(.+)\s$delimiter\s$#", '$1', $cats );
				}
				echo '<li ' . wp_kses_post( $list_item_attributes ) . '>';
				echo wp_kses_post( $cats );
				echo '</li>';
				if ( 1 === $show_current ) {
					echo '<li ' . wp_kses_post( $list_item_attributes ) . '>' . wp_kses_post( $before ) . wp_kses_post( get_the_title() ) . wp_kses_post( $after ) . '</li>';
				}
			}
		} elseif ( ! is_single() && ! is_page() && get_post_type() !== 'post' && ! is_404() ) {
			echo wp_kses_post( $delimiter );
			$the_post_type = get_post_type_object( get_post_type() );
			echo '<li ' . wp_kses_post( $list_item_attributes ) . '>' . wp_kses_post( $before ) . wp_kses_post( $the_post_type->labels->singular_name ) . wp_kses_post( $after ) . '</li>';
		} elseif ( is_attachment() ) {
			echo wp_kses_post( $delimiter );
			$parent  = get_post( $post->post_parent );
			$the_cat = get_the_category( $parent->ID );
			$the_cat = $cat[0];
			echo '<li ' . wp_kses_post( $list_item_attributes ) . '>';
			echo wp_kses_post( get_category_parents( $cat, true, '</li> ' . wp_kses_post( $delimiter ) . ' <li ' . wp_kses_post( $list_item_attributes ) . '>' ) );
			echo '</li>';
			echo wp_kses_post( $delimiter );
			echo '<li ' . wp_kses_post( $list_item_attributes ) . '><a href="' . esc_url( get_permalink( $parent ) ) . '">' . wp_kses_post( $parent->post_title ) . '</a></li>';
			if ( 1 === $show_current ) {
				echo ' ' . wp_kses_post( $delimiter ) . ' <li ' . wp_kses_post( $list_item_attributes ) . '>' . wp_kses_post( $before ) . wp_kses_post( get_the_title() ) . wp_kses_post( $after ) . '</li>';
			}
		} elseif ( is_page() && ! $post->post_parent ) {
			echo wp_kses_post( $delimiter );
			if ( 1 === $show_current ) {
				echo '<li ' . wp_kses_post( $list_item_attributes ) . '>' . wp_kses_post( $before ) . wp_kses_post( get_the_title() ) . wp_kses_post( $after ) . '</li>';
			}
		} elseif ( is_page() && $post->post_parent ) {
			echo wp_kses_post( $delimiter );
			$parent_id   = $post->post_parent;
			$breadcrumbs = array();
			while ( $parent_id ) {
				$the_page      = get_page( $parent_id );
				$breadcrumbs[] = '<li ' . wp_kses_post( $list_item_attributes ) . '><a href="' . esc_url( get_permalink( $the_page->ID ) ) . '">' . wp_kses_post( get_the_title( $the_page->ID ) ) . '</a></li>';
				$parent_id     = $the_page->post_parent;
			}
			$breadcrumbs     = array_reverse( $breadcrumbs );
			$num_breadcrumbs = count( $breadcrumbs );
			for ( $i = 0; $i < $num_breadcrumbs; $i++ ) {
				echo wp_kses_post( $breadcrumbs[ $i ] );
				if ( $i !== $num_breadcrumbs -1 )  {
					echo ' ' . wp_kses_post( $delimiter ) . ' ';
				}
			}
			if ( $show_current === 1 ) {
				echo ' ' . wp_kses_post( $delimiter ) . ' <li ' . wp_kses_post( $list_item_attributes ) . '>' . wp_kses_post( $before ) . wp_kses_post( get_the_title() ) . wp_kses_post( $after ) . '</li>';
			}
		} elseif ( is_tag() ) {
			echo wp_kses_post( $delimiter );
			echo '<li ' . wp_kses_post( $list_item_attributes ) . '>' . wp_kses_post( $before ) . wp_kses_post( single_tag_title( '', false ) ) . '"' . wp_kses_post( $after ) . '</li>';
		} elseif ( is_author() ) {
			echo wp_kses_post( $delimiter );
			global $author;
			$userdata = get_userdata( $author) ;
			echo '<li ' . wp_kses_post( $list_item_attributes ) . '>' . wp_kses_post( $before ) . esc_html__( 'Articles posted by ', 'crosswinds-blocks' ) . wp_kses_post( $userdata->display_name ) . wp_kses_post( $after ) . '</li>';
		} elseif ( is_404() ) {
			echo wp_kses_post( $delimiter );
			echo '<li ' . wp_kses_post( $list_item_attributes ) . '>' . wp_kses_post( $before ) . esc_html__( 'Error 404', 'crosswinds-blocks' ) . wp_kses_post( $after ) . '</li>';
		}
		if ( get_query_var( 'paged' ) ) {
			if ( is_category() || is_day() || is_month() || is_year() || is_search() || is_tag() || is_author() ) {
				echo ' (';
			}
			echo esc_html__( 'Page', 'crosswinds-blocks' ) . ' ' . wp_kses_post( get_query_var('paged') );
			if ( is_category() || is_day() || is_month() || is_year() || is_search() || is_tag() || is_author() ) {
				echo ')';
			}
		}
		?>

	</ol>

</div>
