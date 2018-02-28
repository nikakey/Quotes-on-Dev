<?php
/**
 * The template for displaying the footer.
 *
 * @package QOD_Theme
 */

?>

			</div><!-- #content -->

			<footer id="colophon" class="site-footer" role="contentinfo">
				<div class="site-info">

				<?php wp_nav_menu(
					array(
						'theme_location' => 'primary',
						'menu_id' => 'primary-menu',
						'menu_class' => 'footer-navigation'
					)
				);
				?>
					
					<p>Brought you by &copy; <a href="https://github.com/nikakey">NikaKey</a> <?php echo date( 'Y' ); ?></p>

				</div><!-- .site-info -->
			</footer><!-- #colophon -->
		</div><!-- #page -->

		<?php wp_footer(); ?>

	</body>
</html>
