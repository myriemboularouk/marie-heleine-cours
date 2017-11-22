<?php
/**
 * La configuration de base de votre installation WordPress.
 *
 * Ce fichier contient les réglages de configuration suivants : réglages MySQL,
 * préfixe de table, clés secrètes, langue utilisée, et ABSPATH.
 * Vous pouvez en savoir plus à leur sujet en allant sur
 * {@link http://codex.wordpress.org/fr:Modifier_wp-config.php Modifier
 * wp-config.php}. C’est votre hébergeur qui doit vous donner vos
 * codes MySQL.
 *
 * Ce fichier est utilisé par le script de création de wp-config.php pendant
 * le processus d’installation. Vous n’avez pas à utiliser le site web, vous
 * pouvez simplement renommer ce fichier en "wp-config.php" et remplir les
 * valeurs.
 *
 * @package WordPress
 */

// ** Réglages MySQL - Votre hébergeur doit vous fournir ces informations. ** //
/** Nom de la base de données de WordPress. */
define('DB_NAME', 'labonnebouffe');

/** Utilisateur de la base de données MySQL. */
define('DB_USER', 'root');

/** Mot de passe de la base de données MySQL. */
define('DB_PASSWORD', '');

/** Adresse de l’hébergement MySQL. */
define('DB_HOST', 'localhost');

/** Jeu de caractères à utiliser par la base de données lors de la création des tables. */
define('DB_CHARSET', 'utf8mb4');

/** Type de collation de la base de données.
  * N’y touchez que si vous savez ce que vous faites.
  */
define('DB_COLLATE', '');

/**#@+
 * Clés uniques d’authentification et salage.
 *
 * Remplacez les valeurs par défaut par des phrases uniques !
 * Vous pouvez générer des phrases aléatoires en utilisant
 * {@link https://api.wordpress.org/secret-key/1.1/salt/ le service de clefs secrètes de WordPress.org}.
 * Vous pouvez modifier ces phrases à n’importe quel moment, afin d’invalider tous les cookies existants.
 * Cela forcera également tous les utilisateurs à se reconnecter.
 *
 * @since 2.6.0
 */
define('AUTH_KEY',         '.A$_D<|bzHX*]U-^)f!924synp24}I^sv:))4V2XwNJ]@;o-?]?yF19$!J:hofti');
define('SECURE_AUTH_KEY',  'W<s[*kr~W1_&b]M)r2 qhKqJEtEvx@LS68H1N!tT;dMp7Kw#[Mzp94IwN:wjz2M)');
define('LOGGED_IN_KEY',    '|(7`.9W} o@fz fc}&H0`j^?izo(W&gbW6&=24[piXbjzR/6r0R8fq|$Q@5-r0gH');
define('NONCE_KEY',        'S%(+FhXSV^;iG}o#BSM1rOYe5c@~QCiXLmU`L]1}%s^nCNV|H<^D>[SvJ:os3V29');
define('AUTH_SALT',        '|5<5zc`Ak@fT2y@&dp{{`+}u*jBfRQz:QEs.,Y8OEy,D6M_B6o}nkA:|Dx#x4FJN');
define('SECURE_AUTH_SALT', '2l4VA[~p$}_M!8ai(evoF,p)UL~GV.$O~Jx?*F/ZFFmrdmi:qLpD2o<#+`L?KG=I');
define('LOGGED_IN_SALT',   'C*]e[b>^3h[zs,M),P,<OA2PV-mK%[yea]90cb+K`~y7y2nVlHlNhRg3L(KCF4Hu');
define('NONCE_SALT',       '*z:mVJJLu3Dn*k{gcu>!%`+8wOc8G]j6l9BM.}MnbOqyf[wN.0)T5f^wY*tKgHqt');
/**#@-*/

/**
 * Préfixe de base de données pour les tables de WordPress.
 *
 * Vous pouvez installer plusieurs WordPress sur une seule base de données
 * si vous leur donnez chacune un préfixe unique.
 * N’utilisez que des chiffres, des lettres non-accentuées, et des caractères soulignés !
 */
$table_prefix  = 'bb';

/**
 * Pour les développeurs : le mode déboguage de WordPress.
 *
 * En passant la valeur suivante à "true", vous activez l’affichage des
 * notifications d’erreurs pendant vos essais.
 * Il est fortemment recommandé que les développeurs d’extensions et
 * de thèmes se servent de WP_DEBUG dans leur environnement de
 * développement.
 *
 * Pour plus d’information sur les autres constantes qui peuvent être utilisées
 * pour le déboguage, rendez-vous sur le Codex.
 *
 * @link https://codex.wordpress.org/Debugging_in_WordPress
 */
define('WP_DEBUG', false);

/* C’est tout, ne touchez pas à ce qui suit ! */

/** Chemin absolu vers le dossier de WordPress. */
if ( !defined('ABSPATH') )
	define('ABSPATH', dirname(__FILE__) . '/');

/** Réglage des variables de WordPress et de ses fichiers inclus. */
require_once(ABSPATH . 'wp-settings.php');