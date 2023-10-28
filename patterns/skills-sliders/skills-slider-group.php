<?php
// If this file is called directly, then about execution.
if ( ! defined( 'WPINC' ) ) {
	die;
}

return array(
	'title'         => esc_html__( 'Skills Slider Group', 'crosswinds-blocks' ),
	'categories'    => array( 'crosswinds-blocks' ),
	'viewportWidth' => 500,
	'content'       => '<!-- wp:group {"className":"skills-sliders-group","layout":{"type":"constrained"}} -->
						<div class="wp-block-group skills-sliders-group"><!-- wp:group {"style":{"spacing":{"blockGap":"10px"}},"className":"skill-slider","layout":{"type":"constrained"}} -->
						<div class="wp-block-group skill-slider"><!-- wp:paragraph {"style":{"typography":{"fontStyle":"normal","fontWeight":"600"}},"fontSize":"medium"} -->
						<p class="has-medium-font-size" style="font-style:normal;font-weight:600">' . esc_html__( 'Skill Title', 'crosswinds-blocks' ) . '</p>
						<!-- /wp:paragraph -->
						
						<!-- wp:crosswinds-blocks/skills-slider {"sliderWidth":85,"sliderBackgroundColor":"white","sliderBackgroundColorValue":"#ffffff","sliderColor":"primary","sliderColorValue":"#222831"} -->
						<div class="wp-block-crosswinds-blocks-skills-slider"><div class="slider-container has-slider-background-color has-white-background-color" style="background-color:#ffffff;height:5px"><div class="slider has-slider-color has-primary-background-color" style="width:85%;height:5px;background-color:#222831"></div></div></div>
						<!-- /wp:crosswinds-blocks/skills-slider --></div>
						<!-- /wp:group -->
						
						<!-- wp:group {"style":{"spacing":{"blockGap":"10px"}},"className":"skill-slider","layout":{"type":"constrained"}} -->
						<div class="wp-block-group skill-slider"><!-- wp:paragraph {"style":{"typography":{"fontStyle":"normal","fontWeight":"600"}},"fontSize":"medium"} -->
						<p class="has-medium-font-size" style="font-style:normal;font-weight:600">' . esc_html__( 'Skill Title', 'crosswinds-blocks' ) . '</p>
						<!-- /wp:paragraph -->
						
						<!-- wp:crosswinds-blocks/skills-slider {"sliderWidth":85,"sliderBackgroundColor":"contrast","sliderBackgroundColorValue":"#000000","sliderColor":"primary","sliderColorValue":"#222831"} -->
						<div class="wp-block-crosswinds-blocks-skills-slider"><div class="slider-container has-slider-background-color has-contrast-background-color" style="background-color:#000000;height:5px"><div class="slider has-slider-color has-primary-background-color" style="width:85%;height:5px;background-color:#222831"></div></div></div>
						<!-- /wp:crosswinds-blocks/skills-slider --></div>
						<!-- /wp:group -->
						
						<!-- wp:group {"style":{"spacing":{"blockGap":"10px"}},"className":"skill-slider","layout":{"type":"constrained"}} -->
						<div class="wp-block-group skill-slider"><!-- wp:paragraph {"style":{"typography":{"fontStyle":"normal","fontWeight":"600"}},"fontSize":"medium"} -->
						<p class="has-medium-font-size" style="font-style:normal;font-weight:600">' . esc_html__( 'Skill Title', 'crosswinds-blocks' ) . '</p>
						<!-- /wp:paragraph -->
						
						<!-- wp:crosswinds-blocks/skills-slider {"sliderWidth":85,"sliderBackgroundColor":"secondary","sliderBackgroundColorValue":"#345C00","sliderColor":"primary","sliderColorValue":"#222831"} -->
						<div class="wp-block-crosswinds-blocks-skills-slider"><div class="slider-container has-slider-background-color has-secondary-background-color" style="background-color:#345C00;height:5px"><div class="slider has-slider-color has-primary-background-color" style="width:85%;height:5px;background-color:#222831"></div></div></div>
						<!-- /wp:crosswinds-blocks/skills-slider --></div>
						<!-- /wp:group -->
						
						<!-- wp:group {"style":{"spacing":{"blockGap":"10px"}},"className":"skill-slider","layout":{"type":"constrained"}} -->
						<div class="wp-block-group skill-slider"><!-- wp:paragraph {"style":{"typography":{"fontStyle":"normal","fontWeight":"600"}},"fontSize":"medium"} -->
						<p class="has-medium-font-size" style="font-style:normal;font-weight:600">' . esc_html__( 'Skill Title', 'crosswinds-blocks' ) . '</p>
						<!-- /wp:paragraph -->
						
						<!-- wp:crosswinds-blocks/skills-slider {"sliderWidth":85,"sliderBackgroundColor":"contrast","sliderBackgroundColorValue":"#000000","sliderColor":"primary","sliderColorValue":"#222831"} -->
						<div class="wp-block-crosswinds-blocks-skills-slider"><div class="slider-container has-slider-background-color has-contrast-background-color" style="background-color:#000000;height:5px"><div class="slider has-slider-color has-primary-background-color" style="width:85%;height:5px;background-color:#222831"></div></div></div>
						<!-- /wp:crosswinds-blocks/skills-slider --></div>
						<!-- /wp:group --></div>
						<!-- /wp:group -->',
);
