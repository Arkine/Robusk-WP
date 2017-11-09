<?php
if (!defined('ABSPATH')) {
	exit;
}
if (!class_exists('Robusk_Theme')) {
	class Robusk_Theme {
		public function __construct() {
			foreach (glob(__DIR__ . "/*.php") as $filename) {
				include_once($filename);
			}
		}

		public function init() {
			$Theme_Support = new Robusk_Theme_Support();
			$Theme_Support->init();

			$Register_Theme = new Robusk_Register_Theme();
			$Register_Theme->init();

			$Register_Endpoints = new Robusk_Register_Endpoints();
			$Register_Endpoints->init();
		}
	}
}