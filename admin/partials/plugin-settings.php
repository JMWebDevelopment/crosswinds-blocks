<?php
/**
 * Creates the block settings tab for the plugin options page.
 *
 * PHP version 7.3
 *
 * @link       https://crosswindsframework.com/downloads/crosswinds-blocks
 * @since      1.0.0
 *
 * @package    Crosswinds_Blocks
 * @subpackage Crosswinds_Blocks/admin/partials
 */

// If this file is called directly, then about execution.
if ( ! defined( 'WPINC' ) ) {
	die;
}

$blocks = array(
	'accordions' => array(
		'slug'               => 'accordions',
		'name'               => esc_html__( 'Accordions', 'crosswinds-blocks' ),
		'description'        => esc_html__( 'Add an accordion section to your content.', 'crosswinds-blocks' ),
		'documentation_link' => '',
		'icon'               => '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="#171247" class="fa-primary" d="M416 128H32C14.33 128 0 113.7 0 96C0 78.33 14.33 64 32 64H416C433.7 64 448 78.33 448 96C448 113.7 433.7 128 416 128zM416 448H32C14.33 448 0 433.7 0 416C0 398.3 14.33 384 32 384H416C433.7 384 448 398.3 448 416C448 433.7 433.7 448 416 448z"/><path fill="#8200ff" class="fa-secondary" d="M0 256C0 238.3 14.33 224 32 224H416C433.7 224 448 238.3 448 256C448 273.7 433.7 288 416 288H32C14.33 288 0 273.7 0 256z"/></svg>',
	),
	'basic-grid' => array(
		'slug'               => 'basic-grid',
		'name'               => esc_html__( 'Basic Grid', 'crosswinds-blocks' ),
		'description'        => esc_html__( 'Add a simple grid with a custom number of columns.', 'crosswinds-blocks' ),
		'documentation_link' => '',
		'icon'               => '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="#171247" class="fa-primary" d="M0 72C0 49.91 17.91 32 40 32H88C110.1 32 128 49.91 128 72V120C128 142.1 110.1 160 88 160H40C17.91 160 0 142.1 0 120V72zM0 392C0 369.9 17.91 352 40 352H88C110.1 352 128 369.9 128 392V440C128 462.1 110.1 480 88 480H40C17.91 480 0 462.1 0 440V392zM288 280C288 302.1 270.1 320 248 320H200C177.9 320 160 302.1 160 280V232C160 209.9 177.9 192 200 192H248C270.1 192 288 209.9 288 232V280zM320 72C320 49.91 337.9 32 360 32H408C430.1 32 448 49.91 448 72V120C448 142.1 430.1 160 408 160H360C337.9 160 320 142.1 320 120V72zM448 440C448 462.1 430.1 480 408 480H360C337.9 480 320 462.1 320 440V392C320 369.9 337.9 352 360 352H408C430.1 352 448 369.9 448 392V440z"/><path fill="#8200ff" class="fa-secondary" d="M248 32C270.1 32 288 49.91 288 72V120C288 142.1 270.1 160 248 160H200C177.9 160 160 142.1 160 120V72C160 49.91 177.9 32 200 32H248zM88 192C110.1 192 128 209.9 128 232V280C128 302.1 110.1 320 88 320H40C17.91 320 0 302.1 0 280V232C0 209.9 17.91 192 40 192H88zM160 392C160 369.9 177.9 352 200 352H248C270.1 352 288 369.9 288 392V440C288 462.1 270.1 480 248 480H200C177.9 480 160 462.1 160 440V392zM408 192C430.1 192 448 209.9 448 232V280C448 302.1 430.1 320 408 320H360C337.9 320 320 302.1 320 280V232C320 209.9 337.9 192 360 192H408z" /></svg>',
	),
	'breadcrumbs' => array(
		'slug'               => 'breadcrumbs',
		'name'               => esc_html__( 'Breadcrumbs', 'crosswinds-blocks' ),
		'description'        => esc_html__( 'Display a breadcrumbs section to help a user know where they are on your site.', 'crosswinds-blocks' ),
		'documentation_link' => '',
		'icon'               => '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="#171247" class="fa-primary" d="M441.4 64C445.6 64 449.7 65.69 452.7 68.69L500.7 116.7C506.9 122.9 506.9 133.1 500.7 139.3L452.7 187.3C449.7 190.3 445.6 192 441.4 192H63.1C46.33 192 31.1 177.7 31.1 160V96C31.1 78.33 46.33 64 63.1 64L441.4 64zM448 224C465.7 224 480 238.3 480 256V320C480 337.7 465.7 352 448 352H70.63C66.38 352 62.31 350.3 59.31 347.3L11.31 299.3C5.065 293.1 5.065 282.9 11.31 276.7L59.31 228.7C62.31 225.7 66.38 223.1 70.63 223.1L448 224z"/><path fill="#8200ff" class="fa-secondary" d="M224 32C224 14.33 238.3 0 256 0C273.7 0 288 14.33 288 32V64H224V32zM288 192V224H224V192H288zM256 512C238.3 512 224 497.7 224 480V352H288V480C288 497.7 273.7 512 256 512z"/></svg>',
	),
	'comments-number' => array(
		'slug'               => 'comments-number',
		'name'               => esc_html__( 'Comments Number', 'crosswinds-blocks' ),
		'description'        => esc_html__( 'Display the number of comments for a post.', 'crosswinds-blocks' ),
		'documentation_link' => '',
		'icon'               => '<svg xmlns="http://www.w3.org/2000/svg" height="16" width="20" viewBox="0 0 640 512"><path class="fa-secondary" fill="#8200ff" d="M256 352v32c0 35.3 28.7 64 64 64H437.3l81.1 60.8c4.8 3.6 11.3 4.2 16.8 1.5s8.8-8.2 8.8-14.3V448h32c35.3 0 64-28.7 64-64V192c0-35.3-28.7-64-64-64H448V256c0 53-43 96-96 96H256z"/><path class="fa-primary" fill="#171247" d="M0 64C0 28.7 28.7 0 64 0H352c35.3 0 64 28.7 64 64V256c0 35.3-28.7 64-64 64H202.7l-81.1 60.8c-4.8 3.6-11.3 4.2-16.8 1.5s-8.8-8.2-8.8-14.3V320H64c-35.3 0-64-28.7-64-64V64z"/></svg>',
	),
	'copyright' => array(
		'slug'               => 'copyright',
		'name'               => esc_html__( 'Copyright', 'crosswinds-blocks' ),
		'description'        => esc_html__( 'Display the copyright that will always be updated.', 'crosswinds-blocks' ),
		'documentation_link' => '',
		'icon'               => '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="#171247" class="fa-primary" d="M199.2 312.6c14.94 15.06 34.8 23.38 55.89 23.38c.0313 0 0 0 0 0c21.06 0 40.92-8.312 55.83-23.38c9.375-9.375 24.53-9.469 33.97-.1562c9.406 9.344 9.469 24.53 .1562 33.97c-24 24.22-55.95 37.56-89.95 37.56c0 0 .0313 0 0 0c-33.97 0-65.95-13.34-89.95-37.56c-49.44-49.88-49.44-131 0-180.9c24-24.22 55.98-37.56 89.95-37.56c.0313 0 0 0 0 0c34 0 65.95 13.34 89.95 37.56c9.312 9.438 9.25 24.62-.1562 33.97c-9.438 9.344-24.59 9.188-33.97-.1562c-14.91-15.06-34.77-23.38-55.83-23.38c0 0 .0313 0 0 0c-21.09 0-40.95 8.312-55.89 23.38C168.3 230.6 168.3 281.4 199.2 312.6z"/><path fill="#8200ff" class="fa-secondary" d="M256 0C114.6 0 0 114.6 0 256s114.6 256 256 256s256-114.6 256-256S397.4 0 256 0zM199.2 312.6c14.94 15.06 34.8 23.38 55.89 23.38c.0313 0 0 0 0 0c21.06 0 40.92-8.312 55.83-23.38c9.375-9.375 24.53-9.469 33.97-.1562c9.406 9.344 9.469 24.53 .1562 33.97c-24 24.22-55.95 37.56-89.95 37.56c0 0 .0313 0 0 0c-33.97 0-65.95-13.34-89.95-37.56c-49.44-49.88-49.44-131 0-180.9c24-24.22 55.98-37.56 89.95-37.56c.0313 0 0 0 0 0c34 0 65.95 13.34 89.95 37.56c9.312 9.438 9.25 24.62-.1562 33.97c-9.438 9.344-24.59 9.188-33.97-.1562c-14.91-15.06-34.77-23.38-55.83-23.38c0 0 .0313 0 0 0c-21.09 0-40.95 8.312-55.89 23.38C168.3 230.6 168.3 281.4 199.2 312.6z"/></svg>',
	),
	'download-searchh-filters' => array(
		'slug'               => 'download-search-filters',
		'name'               => esc_html__( 'Downloads Search Filters', 'crosswinds-blocks' ),
		'description'        => esc_html__( 'Adds in a set of download search blocks that allow you to create a download search filters section.', 'crosswinds-blocks' ),
		'documentation_link' => '',
		'icon'               => '<svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512"><path fill="#171247" class="fa-primary" d="M256 0c17.7 0 32 14.3 32 32V306.7l73.4-73.4c12.5-12.5 32.8-12.5 45.3 0s12.5 32.8 0 45.3l-128 128c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L224 306.7V32c0-17.7 14.3-32 32-32z"/><path fill="#8200ff" class="fa-secondary" d="M178.7 352H64c-35.3 0-64 28.7-64 64v32c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V416c0-35.3-28.7-64-64-64H333.3l-54.6 54.6c-12.5 12.5-32.8 12.5-45.3 0L178.7 352zM408 432a24 24 0 1 1 48 0 24 24 0 1 1 -48 0z"/></svg>',
	),
	'google-maps' => array(
		'slug'               => 'google-maps',
		'name'               => esc_html__( 'Google Maps', 'crosswinds-blocks' ),
		'description'        => esc_html__( 'Add in a Google Maps embed to show a location.', 'crosswinds-blocks' ),
		'documentation_link' => '',
		'icon'               => '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path fill="#171247" class="fa-primary" d="M192 144a48 48 0 1 0 0 96 48 48 0 1 0 0-96z"/><path fill="#8200ff" class="fa-secondary" d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 112a80 80 0 1 1 0 160 80 80 0 1 1 0-160z"/></svg>',
	),
	'marquee' => array(
		'slug'               => 'marquee',
		'name'               => esc_html__( 'Marquee', 'crosswinds-blocks' ),
		'description'        => esc_html__( 'Create a section of horizontally scrolling text.', 'crosswinds-blocks' ),
		'documentation_link' => '',
		'icon'               => '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path fill="#171247" d="M64 32C28.65 32 0 60.65 0 96v48C0 152.8 7.164 160 16 160H128V96C128 60.65 99.35 32 64 32zM560 352H288v48c0 44.18-35.82 80-80 80h256c61.88 0 112-50.13 112-112C576 359.1 568.9 352 560 352z" /><path fill="#8200ff" d="M480 128v224h-192v48c0 44.18-35.82 80-80 80C163.8 480 128 444.2 128 400V96c0-35.35-28.65-64-64-64h320C437 32 480 75 480 128z" /></svg>',
	),
	'project-searchh-filters' => array(
		'slug'               => 'project-search-filters',
		'name'               => esc_html__( 'Project Search Filters', 'crosswinds-blocks' ),
		'description'        => esc_html__( 'Adds in a set of project search blocks that allow you to create a project search filters section.', 'crosswinds-blocks' ),
		'documentation_link' => '',
		'icon'               => '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path fill="#171247" class="fa-primary" d="M572.6 270.3l-96 192C471.2 473.2 460.1 480 447.1 480H0l119.2-238.3C124.6 230.8 135.7 224 147.8 224h396.2C567.7 224 583.2 249 572.6 270.3z"/><path fill="#8200ff" class="fa-secondary" d="M480 144V224H147.8C135.7 224 124.6 230.8 119.2 241.7L0 480V80C0 53.49 21.49 32 48 32h160l64 64h160C458.5 96 480 117.5 480 144z"/></svg>',
	),
	'project-information' => array(
		'slug'               => 'project-information',
		'name'               => esc_html__( 'Project Information', 'crosswinds-blocks' ),
		'description'        => esc_html__( 'Allows you to show the category, client and date for a project.', 'crosswinds-blocks' ),
		'documentation_link' => '',
		'icon'               => '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="#171247" class="fa-primary" d="M256 192c17.67 0 32-14.33 32-32c0-17.67-14.33-32-32-32S224 142.3 224 160C224 177.7 238.3 192 256 192zM296 336h-16V248C280 234.8 269.3 224 256 224H224C210.8 224 200 234.8 200 248S210.8 272 224 272h8v64h-16C202.8 336 192 346.8 192 360S202.8 384 216 384h80c13.25 0 24-10.75 24-24S309.3 336 296 336z"/><path fill="#8200ff" class="fa-secondary" d="M256 0C114.6 0 0 114.6 0 256s114.6 256 256 256s256-114.6 256-256S397.4 0 256 0zM256 128c17.67 0 32 14.33 32 32c0 17.67-14.33 32-32 32S224 177.7 224 160C224 142.3 238.3 128 256 128zM296 384h-80C202.8 384 192 373.3 192 360s10.75-24 24-24h16v-64H224c-13.25 0-24-10.75-24-24S210.8 224 224 224h32c13.25 0 24 10.75 24 24v88h16c13.25 0 24 10.75 24 24S309.3 384 296 384z"/></svg>',
	),
	'post-navigation' => array(
		'slug'               => 'post-navigation',
		'name'               => esc_html__( 'Post Navigation', 'crosswinds-blocks' ),
		'description'        => esc_html__( 'Add in customizable next and previous post blocks.', 'crosswinds-blocks' ),
		'documentation_link' => '',
		'icon'               => '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="#171247" class="fa-primary" d="M150.6 329.4c12.5 12.5 12.5 32.75 0 45.25C144.4 380.9 136.2 384 128 384s-16.38-3.125-22.62-9.375l-96-96c-12.5-12.5-12.5-32.75 0-45.25l96-96c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25L109.3 224H256v64H109.3L150.6 329.4z"/><path fill="#8200ff" class="fa-secondary" d="M361.4 182.6c-12.5-12.5-12.5-32.75 0-45.25C367.6 131.1 375.8 128 384 128s16.38 3.125 22.62 9.375l96 96c12.5 12.5 12.5 32.75 0 45.25l-96 96c-12.5 12.5-32.75 12.5-45.25 0s-12.5-32.75 0-45.25L402.8 288H256V224h146.8L361.4 182.6z"/></svg>',
	),
	'related-posts' => array(
		'slug'               => 'related-posts',
		'name'               => esc_html__( 'Related Posts', 'crosswinds-blocks' ),
		'description'        => esc_html__( 'Create a section to show related posts for continued reading.', 'crosswinds-blocks' ),
		'documentation_link' => '',
		'icon'               => '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="#171247" d="M160 64C160 28.65 188.7 0 224 0H448C483.3 0 512 28.65 512 64V288C512 323.3 483.3 352 448 352H224C188.7 352 160 323.3 160 288V64z" /><path fill="#8200ff" d="M0 224C0 188.7 28.65 160 64 160H128V288C128 341 170.1 384 224 384H352V448C352 483.3 323.3 512 288 512H64C28.65 512 0 483.3 0 448V224z" /></svg>',
	),
	'single-content' => array(
		'slug'               => 'single-content',
		'name'               => esc_html__( 'Single Content', 'crosswinds-blocks' ),
		'description'        => esc_html__( 'Add in a section to highlight a single post, page or other custom post type.', 'crosswinds-blocks' ),
		'documentation_link' => '',
		'icon'               => '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="#171247" d="M384 0H64C28.65 0 0 28.65 0 64v64h448V64C448 28.65 419.3 0 384 0zM208 400h-96C103.2 400 96 407.2 96 416c0 8.836 7.164 16 16 16h96c8.836 0 16-7.164 16-16C224 407.2 216.8 400 208 400zM336 208h-224C103.2 208 96 215.2 96 224c0 8.836 7.164 16 16 16h224C344.8 240 352 232.8 352 224C352 215.2 344.8 208 336 208zM336 304h-224C103.2 304 96 311.2 96 320c0 8.836 7.164 16 16 16h224c8.836 0 16-7.164 16-16C352 311.2 344.8 304 336 304z" /><path fill="#8200ff" d="M0 128v320c0 35.35 28.65 64 64 64h320c35.35 0 64-28.65 64-64V128H0zM208 432h-96C103.2 432 96 424.8 96 416c0-8.838 7.164-16 16-16h96c8.836 0 16 7.162 16 16C224 424.8 216.8 432 208 432zM336 336h-224C103.2 336 96 328.8 96 320c0-8.838 7.164-16 16-16h224c8.836 0 16 7.162 16 16C352 328.8 344.8 336 336 336zM336 240h-224C103.2 240 96 232.8 96 224c0-8.838 7.164-16 16-16h224C344.8 208 352 215.2 352 224C352 232.8 344.8 240 336 240z" /></svg>',
	),
	'skills-slider' => array(
		'slug'               => 'skills-slider',
		'name'               => esc_html__( 'Skills Slider', 'crosswinds-blocks' ),
		'description'        => esc_html__( 'Add a skills slider to show how much you know about something.', 'crosswinds-blocks' ),
		'documentation_link' => '',
		'icon'               => '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="#171247" d="M384 112C384 138.5 362.5 160 336 160H48C21.49 160 0 138.5 0 112V80C0 53.49 21.49 32 48 32H336C362.5 32 384 53.49 384 80V112zM256 432C256 458.5 234.5 480 208 480H48C21.49 480 0 458.5 0 432V400C0 373.5 21.49 352 48 352H208C234.5 352 256 373.5 256 400V432z" /><path fill="#8200ff" d="M48 320C21.49 320 0 298.5 0 272V240C0 213.5 21.49 192 48 192H400C426.5 192 448 213.5 448 240V272C448 298.5 426.5 320 400 320H48z" /></svg>',
	),
	'social-share-content' => array(
		'slug'               => 'social-share-content',
		'name'               => esc_html__( 'Social Share Content', 'crosswinds-blocks' ),
		'description'        => esc_html__( 'Add a click to share section for your content.', 'crosswinds-blocks' ),
		'documentation_link' => '',
		'icon'               => '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path fill="#171247" class="fa-primary" d="M243 34.8c-11.5 5.1-19 16.6-19 29.2v64H176C78.8 128 0 206.8 0 304C0 417.3 81.5 467.9 100.2 478.1c2.5 1.4 5.3 1.9 8.1 1.9c10.9 0 19.7-8.9 19.7-19.7c0-7.5-4.3-14.4-9.8-19.5C108.8 431.9 96 414.4 96 384c0-53 43-96 96-96h32v64c0 12.6 7.4 24.1 19 29.2s25 3 34.4-5.4l160-144c6.7-6.1 10.6-14.7 10.6-23.8s-3.8-17.7-10.6-23.8l-160-144c-9.4-8.5-22.9-10.6-34.4-5.4z"/><path fill="#8200ff" class="fa-secondary" d="M371 34.8c-11.5 5.1-19 16.6-19 29.2v43.3l85.4 76.9c6.7 6.1 10.6 14.7 10.6 23.8s-3.8 17.7-10.6 23.8L352 308.7V352c0 12.6 7.4 24.1 19 29.2s25 3 34.4-5.4l160-144c6.7-6.1 10.6-14.7 10.6-23.8s-3.8-17.7-10.6-23.8l-160-144c-9.4-8.5-22.9-10.6-34.4-5.4z" /></svg>',
	),
	'tabs' => array(
		'slug'               => 'tabs',
		'name'               => esc_html__( 'Tabs', 'crosswinds-blocks' ),
		'description'        => esc_html__( 'Add a section with tabs.', 'crosswinds-blocks' ),
		'documentation_link' => '',
		'icon'               => '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="#171247" class="fa-primary" d="M512 192v240c0 26.5-21.5 48-48 48h-416C21.5 480 0 458.5 0 432V192H512z"/><path fill="#8200ff" class="fa-secondary" d="M512 144V192H0V80C0 53.5 21.5 32 48 32h160l64 64h192C490.5 96 512 117.5 512 144z"/></svg>',
	),
);
$blocks = apply_filters( 'crosswinds_blocks_blocks_list', $blocks );

$cpts = array(
	'project' => array(
		'slug'               => 'project',
		'name'               => esc_html__( 'Projects', 'crosswinds-blocks' ),
		'description'        => esc_html__( 'Add a project custom post type for your website.', 'crosswinds-blocks' ),
		'documentation_link' => '',
		'icon'               => '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path fill="#171247" class="fa-primary" d="M572.6 270.3l-96 192C471.2 473.2 460.1 480 447.1 480H0l119.2-238.3C124.6 230.8 135.7 224 147.8 224h396.2C567.7 224 583.2 249 572.6 270.3z"/><path fill="#8200ff" class="fa-secondary" d="M480 144V224H147.8C135.7 224 124.6 230.8 119.2 241.7L0 480V80C0 53.49 21.49 32 48 32h160l64 64h160C458.5 96 480 117.5 480 144z"/></svg>',
	),
);
$cpts = apply_filters( 'crosswinds_blocks_post_types_list', $cpts );

$custom_taxonomies = array(
	'project_category' => array(
		'slug'               => 'project-category',
		'name'               => esc_html__( 'Project Category', 'crosswinds-blocks' ),
		'description'        => esc_html__( 'Add a project category taxonomy for the project custom post type for your website.', 'crosswinds-blocks' ),
		'documentation_link' => '',
		'icon'               => '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path fill="#171247" class="fa-primary" d="M572.6 270.3l-96 192C471.2 473.2 460.1 480 447.1 480H0l119.2-238.3C124.6 230.8 135.7 224 147.8 224h396.2C567.7 224 583.2 249 572.6 270.3z"/><path fill="#8200ff" class="fa-secondary" d="M480 144V224H147.8C135.7 224 124.6 230.8 119.2 241.7L0 480V80C0 53.49 21.49 32 48 32h160l64 64h160C458.5 96 480 117.5 480 144z"/></svg>',
	),
	'project_tag' => array(
		'slug'               => 'project-tag',
		'name'               => esc_html__( 'Project Tag', 'crosswinds-blocks' ),
		'description'        => esc_html__( 'Add a project tag taxonomy for the project custom post type for your website.', 'crosswinds-blocks' ),
		'documentation_link' => '',
		'icon'               => '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path fill="#171247" class="fa-primary" d="M572.6 270.3l-96 192C471.2 473.2 460.1 480 447.1 480H0l119.2-238.3C124.6 230.8 135.7 224 147.8 224h396.2C567.7 224 583.2 249 572.6 270.3z"/><path fill="#8200ff" class="fa-secondary" d="M480 144V224H147.8C135.7 224 124.6 230.8 119.2 241.7L0 480V80C0 53.49 21.49 32 48 32h160l64 64h160C458.5 96 480 117.5 480 144z"/></svg>',
	),
);
$custom_taxonomies = apply_filters( 'crosswinds_blocks_taxonomies_list', $custom_taxonomies );

$allowed_tags = array(
	'svg' => array(
		'xmlns'   => array(),
		'width'   => array(),
		'height'  => array(),
		'viewbox' => array(),
	),
	'path' => array(
		'd' => array(),
		'fill' => array(),
	),
);
?>

<form id="form" method="POST" action="options.php">
	<?php
	wp_nonce_field( 'update-options' );
	settings_fields( 'crosswinds_blocks_options_settings' );
	?>
	<div class="cb-options-section">
		<h3><?php esc_html_e( 'Blocks', 'crosswinds-blocks' ); ?></h3>
		<div class="bulk-actions">
			<button class="enable-all cb-primary"><?php esc_html_e( 'Enable All', 'crosswinds-blocks' ); ?></button>
			<button class="disable-all cb-secondary"><?php esc_html_e( 'Disable All', 'crosswinds-blocks' ); ?></button>
		</div>

		<div class="settings-grid">
			<?php
			foreach ( $blocks as $block ) {
				if ( get_option( 'crosswinds-blocks-' . $block['slug'] . '-block' ) || apply_filters( 'crosswinds_blocks_enable_' . $block['slug'] . '_block', false ) ) {
					$checked = 'checked="checked"';
				} else {
					$checked = '';
				}

				if ( apply_filters( 'crosswinds_blocks_enable_' . $block['slug'] . '_block', false ) ) {
					$disabled = 'disabled="disabled"';
				} else {
					$disabled = '';
				}
				?>
				<div class="settings-grid-item">
					<div class="icon">
						<?php echo wp_kses( $block['icon'], $allowed_tags ); ?>
					</div>

					<div class="title">
						<p><strong><?php echo wp_kses_post( $block['name'] ); ?></strong><br /><a href="<?php echo esc_url( $block['description'] ); ?>" target="_blank"><?php esc_html_e( 'Documentation', 'crosswinds-blocks' ); ?></a></p>
					</div>

					<div class="field">
						<label class="Toggle" for="enable-<?php echo esc_attr( $block['slug'] ); ?>-block">
							<input type="checkbox" name="crosswinds-blocks-<?php echo esc_attr( $block['slug'] ); ?>-block" id="enable-<?php echo esc_attr( $block['slug'] ); ?>-block" class="Toggle__input" <?php echo wp_kses_post( $checked ); ?> value="1" <?php echo wp_kses_post( $disabled ); ?> />

							<span class="Toggle__display" hidden>
								<svg
								aria-hidden="true"
								focusable="false"
								class="Toggle__icon Toggle__icon--checkmark"
								width="18"
								height="14"
								viewBox="0 0 18 14"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
								>
								<path
									d="M6.08471 10.6237L2.29164 6.83059L1 8.11313L6.08471 13.1978L17 2.28255L15.7175 1L6.08471 10.6237Z"
									fill="currentcolor"
									stroke="currentcolor"
								/>
								</svg>
								<svg
								aria-hidden="true"
								focusable="false"
								class="Toggle__icon Toggle__icon--cross"
								width="13"
								height="13"
								viewBox="0 0 13 13"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
								>
								<path
									d="M11.167 0L6.5 4.667L1.833 0L0 1.833L4.667 6.5L0 11.167L1.833 13L6.5 8.333L11.167 13L13 11.167L8.333 6.5L13 1.833L11.167 0Z"
									fill="currentcolor"
								/>
								</svg>
							</span>

							<span class="screen-reader-text"><?php esc_html_e( 'Enable/Disable', 'crosswinds-blocks' ); ?></span>
						</label>
					</div>
				</div>
				<?php
			}
			?>
		</div>
	</div>

	<div class="cb-options-section">
		<h3><?php esc_html_e( 'Post Types', 'crosswinds-blocks' ); ?></h3>
		<div class="bulk-actions">
			<button class="enable-all cb-primary"><?php esc_html_e( 'Enable All', 'crosswinds-blocks' ); ?></button>
			<button class="disable-all cb-secondary"><?php esc_html_e( 'Disable All', 'crosswinds-blocks' ); ?></button>
		</div>

		<div class="settings-grid">
			<?php
			foreach ( $cpts as $cpt ) {
				if ( get_option( 'crosswinds-blocks-' . $cpt['slug'] . '-cpt' ) || apply_filters( 'crosswinds_blocks_enable_' . $cpt['slug'] . '_cpt', false ) ) {
					$checked = 'checked="checked"';
				} else {
					$checked = '';
				}

				if ( apply_filters( 'crosswinds_blocks_enable_' . $cpt['slug'] . '_cpt', false ) ) {
					$disabled = 'disabled="disabled"';
				} else {
					$disabled = '';
				}
				?>
				<div class="settings-grid-item">
					<div class="icon">
						<?php echo wp_kses( $cpt['icon'], $allowed_tags ); ?>
					</div>

					<div class="title">
						<p><strong><?php echo wp_kses_post( $cpt['name'] ); ?></strong><br /><a href="<?php echo esc_url( $cpt['description'] ); ?>" target="_blank"><?php esc_html_e( 'Documentation', 'crosswinds-blocks' ); ?></a></p>
					</div>

					<div class="field">
						<label class="Toggle" for="enable-<?php echo esc_attr( $block['slug'] ); ?>-cpt">
							<input type="checkbox" name="crosswinds-blocks-<?php echo esc_attr( $cpt['slug'] ); ?>-cpt" id="enable-<?php echo esc_attr( $cpt['slug'] ); ?>-cpt" class="Toggle__input" <?php echo wp_kses_post( $checked ); ?> value="1" <?php echo wp_kses_post( $disabled ); ?> />

							<span class="Toggle__display" hidden>
								<svg
								aria-hidden="true"
								focusable="false"
								class="Toggle__icon Toggle__icon--checkmark"
								width="18"
								height="14"
								viewBox="0 0 18 14"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
								>
								<path
									d="M6.08471 10.6237L2.29164 6.83059L1 8.11313L6.08471 13.1978L17 2.28255L15.7175 1L6.08471 10.6237Z"
									fill="currentcolor"
									stroke="currentcolor"
								/>
								</svg>
								<svg
								aria-hidden="true"
								focusable="false"
								class="Toggle__icon Toggle__icon--cross"
								width="13"
								height="13"
								viewBox="0 0 13 13"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
								>
								<path
									d="M11.167 0L6.5 4.667L1.833 0L0 1.833L4.667 6.5L0 11.167L1.833 13L6.5 8.333L11.167 13L13 11.167L8.333 6.5L13 1.833L11.167 0Z"
									fill="currentcolor"
								/>
								</svg>
							</span>

							<span class="screen-reader-text"><?php esc_html_e( 'Enable/Disable', 'crosswinds-blocks' ); ?></span>
						</label>
					</div>
				</div>
				<?php
			}
			?>
		</div>
	</div>

	<div class="cb-options-section">
		<h3><?php esc_html_e( 'Taxonomies', 'crosswinds-blocks' ); ?></h3>
		<div class="bulk-actions">
			<button class="enable-all cb-primary"><?php esc_html_e( 'Enable All', 'crosswinds-blocks' ); ?></button>
			<button class="disable-all cb-secondary"><?php esc_html_e( 'Disable All', 'crosswinds-blocks' ); ?></button>
		</div>

		<div class="settings-grid">
			<?php
			foreach ( $custom_taxonomies as $custom_taxonomy ) {
				if ( get_option( 'crosswinds-blocks-' . $custom_taxonomy['slug'] . '-taxonomy' ) || apply_filters( 'crosswinds_blocks_enable_' . $custom_taxonomy['slug'] . '_taxonomy', false ) ) {
					$checked = 'checked="checked"';
				} else {
					$checked = '';
				}

				if ( apply_filters( 'crosswinds_blocks_enable_' . $custom_taxonomy['slug'] . '_taxonomy', false ) ) {
					$disabled = 'disabled="disabled"';
				} else {
					$disabled = '';
				}
				?>
				<div class="settings-grid-item">
					<div class="icon">
						<?php echo wp_kses( $custom_taxonomy['icon'], $allowed_tags ); ?>
					</div>

					<div class="title">
						<p><strong><?php echo wp_kses_post( $custom_taxonomy['name'] ); ?></strong><br /><a href="<?php echo esc_url( $custom_taxonomy['description'] ); ?>" target="_blank"><?php esc_html_e( 'Documentation', 'crosswinds-blocks' ); ?></a></p>
					</div>

					<div class="field">
						<label class="Toggle" for="enable-<?php echo esc_attr( $custom_taxonomy['slug'] ); ?>-taxonomy">
							<input type="checkbox" name="crosswinds-blocks-<?php echo esc_attr( $custom_taxonomy['slug'] ); ?>-taxonomy" id="enable-<?php echo esc_attr( $custom_taxonomy['slug'] ); ?>-taxonomy" class="Toggle__input" <?php echo wp_kses_post( $checked ); ?> value="1" <?php echo wp_kses_post( $disabled ); ?> />

							<span class="Toggle__display" hidden>
								<svg
								aria-hidden="true"
								focusable="false"
								class="Toggle__icon Toggle__icon--checkmark"
								width="18"
								height="14"
								viewBox="0 0 18 14"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
								>
								<path
									d="M6.08471 10.6237L2.29164 6.83059L1 8.11313L6.08471 13.1978L17 2.28255L15.7175 1L6.08471 10.6237Z"
									fill="currentcolor"
									stroke="currentcolor"
								/>
								</svg>
								<svg
								aria-hidden="true"
								focusable="false"
								class="Toggle__icon Toggle__icon--cross"
								width="13"
								height="13"
								viewBox="0 0 13 13"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
								>
								<path
									d="M11.167 0L6.5 4.667L1.833 0L0 1.833L4.667 6.5L0 11.167L1.833 13L6.5 8.333L11.167 13L13 11.167L8.333 6.5L13 1.833L11.167 0Z"
									fill="currentcolor"
								/>
								</svg>
							</span>

							<span class="screen-reader-text"><?php esc_html_e( 'Enable/Disable', 'crosswinds-blocks' ); ?></span>
						</label>
					</div>
				</div>
				<?php
			}
			?>
		</div>
	</div>

	<div class="cb-options-section">
		<h3><?php esc_html_e( 'Other Settings', 'crosswinds-blocks' ); ?></h3>

		<div class="options-area">
			<?php
			if ( get_option( 'crosswinds-blocks-google-maps-api-key' ) ) {
				$google_maps_api_key = get_option( 'crosswinds-blocks-google-maps-api-key' );
			} else {
				$google_maps_api_key = '';
			}
			?>
			<p>
				<label for="crosswinds-blocks-google-maps-api-key"><?php esc_html_e( 'Google Maps API Key', 'crosswinds-blocks' ); ?></label><br />
				<input id="crosswinds-blocks-google-maps-api-key" name="crosswinds-blocks-google-maps-api-key" value="<?php echo esc_attr( $google_maps_api_key ); ?>" />
			</p>
		</div>
	</div>

	<?php do_action( 'crosswinds_blocks_other_settings_sections' ); ?>

	<input type="hidden" name="action" value="update" />
	<input type="submit" value="<?php esc_html_e( 'Save Plugin Settings', 'crosswinds-blocks' ); ?>" id="submit" class="cb-primary" name="submit">
</form>
