//alert("no")
//l operateur de comparaison == 'signifie' egal a
// il permet de verifier que les VALEURS DE 2 variable sont identiques
var nb1 = 123;/*nombre*/
var nb2 = "123";/*chaine de caracteres*/
console.log(nb1 == nb2);// retourne TRUE
//l oprerateur de comparaison === signifiestrictement egal a
// il permet de verifier la VALEUR et le type
console.log(nb1===nb2); //retourne FALSE
//-- l operateur != signifie 'different de ... en VALEUR'
console.log(nb1 != nb2);// retourne FALSE

//-- l operateur !== signifie'strictement different de ...en VALEUR et en TYPE'
console.log(nb1 !== nb2); // retourne TRUE
/* -------------------------------
            EXERCICE :
J'arrive sur un Espace Sécurisé au moyen du prénom et de l'âge.
Je doit saisir mon prénom et mon age pour être authentifié sur le site (les infos sont en BDD, ici dans mes variables prenom et age).
En cas d'échec une alerte m'informe du problème.
Si tout se passe bien, un message de bienvenue m'accueille.
-------------------------------- */
var prenom, monAge;
prenom = "meryem";
monAge = 34;
mdp = "bibi";
// 1 -- Demander son prénom à l'utilisateur avec un prompt
var prenomLogin = prompt("quel est votre prenom");

// 2 -- Je vérifie si le prénom saisi (prenomLogin) correspond à celui en base de donnée (prenom)
if (prenomLogin === prenom)/*c c pas meryem il l exsicute pas*/ {
    var agelogin = parseInt(prompt("votre age"));
    if (agelogin === monAge) {
        var mdplogin = prompt("le mot de passe")
        if (mdplogin === mdp) {
            alert("bienvenue" + prenomLogin);

        } else {
            alert("pb de mot de passe" );
        }
         } else {
        // 2a2. Si les AGEs ne correspondent pas, je lance une ALERT.
           alert("Erreur d age");
    }
}  else {
     alert("Attention, prenom non reconnu");
 }

// 2a. Si tout est ok, je continue la vérification avec l'âge
// 2a1. Demande a mon utilisateur son l'âge via un PROMPT
// 2b. Sinon, les prénoms ne correspondent pas, je lance une ALERT.
/*var prenom = meryem;
var prenom = parseInt(prompt("meryem"));
if (prenom >= MajoriteFR) {alert("meryem");}
else {
    alert("Aller voir un autre site ...");*/
//var age = 34;
//if (age >= MajoriteFR) {alert("34");}
//else {
    //alert("Aller voir un autre site ...");
    //var prenom, monAge;
    //prenom = "meryem";
    //monAge = 999;
