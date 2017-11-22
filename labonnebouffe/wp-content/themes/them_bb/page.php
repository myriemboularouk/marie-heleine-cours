
<?php get_header(); ?>


<?php if (have_posts()): ?>

	<?php while(have_posts()): the_post() ?>
		<!-- debut contenu html -->
		<h2><a href="<?php the_permalink(); ?>"><?php the_title( ) ?></a></h2>
		<div class="contenu">
			<?php the_content(); ?>
		</div>
		<!-- fin contenu HTML -->


		<?php endwhile; ?>

	<?php endif; ?>	

<?php get_footer(); ?>


