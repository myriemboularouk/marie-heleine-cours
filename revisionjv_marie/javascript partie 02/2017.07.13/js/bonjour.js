
















<!DOCTYPE html>
<html>
<head>
	<title>Bonjour</title>
	<meta charset="UTF-8">

</head>

<body>
	<h1>Bonjour</h1>
	<p></p>
	<ul>
		<li>créez un fichier bonjour.html et faites-le pointer vers un fichier bonjour.js</li>
		<li>écrire le code invitant l'utilisateur à saisir d'abord son nom et ensuite son prénom dans 2 boîtes de dialogue successives</li>
		<li>afficher ensuite dans une autre boîte de dialogue le nom et le prénom de l'utilisateur</li>
		<li>Attention à bien respecter les espaces entre les mots dans le message final.</li>
	</ul>
<script type="text/javascript" src="../js/1_bonjour.js" ></script>
</body>
</html>//alert("yes");
var nom = (prompt("quel est votre nom"));
var prenom = (prompt("quel est votre prenom"));
alert(nom +' '+ prenom);
