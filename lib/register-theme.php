<?php

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly
}

if ( !class_exists('Robusk_Register_Theme')) {

	class Robusk_Register_Theme {
		function __construct() {
		}

		function init() {
			add_action('wp_enqueue_scripts', [$this, 'theme'], 20);
		}

		function theme() {
			wp_enqueue_script( 'react-bundle-js', get_template_directory_uri() . '/bundle.js', [ 'jquery' ], ROBUSK_ASSET_VER, true );
			wp_localize_script( 'react-bundle-js', 'RT_API', array(
				'root'            => esc_url_raw(rest_url()),
				'nonce'           => wp_create_nonce('wp_rest'),
				'siteName'        => get_bloginfo('name'),
				'siteDescription' => get_bloginfo('description'),
				'categories'      => $this->get_categories_with_links(),
				'current_user'    => wp_get_current_user()
			));

			wp_enqueue_style( 'theme_stylesheet', get_template_directory_uri() . '/bundle.css', [], ROBUSK_ASSET_VER);
		}

		function get_categories_with_links() {
			$categories = get_categories([
				'hide_empty' => 0
			]);

			foreach ($categories as $key => $category) {
				$categories[$key]->link = get_category_link($category->term_id);
			}

			return $categories;
		}
	}

}