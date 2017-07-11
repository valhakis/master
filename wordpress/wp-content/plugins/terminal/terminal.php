<?php
/*
 * Plugin Name: Terminal
 *
 *
 *
 *
 */

function terminal_scripts() {
  wp_enqueue_script('script', plugin_dir_url(__FILE__) . 'scripts/script.js');
  wp_enqueue_style('style', plugin_dir_url(__FILE__) . 'styles/style.css');
}

add_action('wp_enqueue_scripts', 'terminal_scripts');
add_action('admin_enqueue_scripts', 'terminal_scripts');

function terminal_container() {
  //echo '<div id="terminal">';
  do_action('terminal_actions');
  //echo '</div>';
}

add_action('wp_footer', 'terminal_container');

function example() {
  // echo "<div>WHAT IS HAPPENING</div>";
}

add_action('terminal_actions', 'example');
