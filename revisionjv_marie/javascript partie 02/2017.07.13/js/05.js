//alert("yes")

// -- Structure de base IF

if (true) {/* par defaut la condition a verifier le IF verifie si elle si elle est vraie*/}
var nb1 = 10;
if (nb1 < 50) { console.log("nb1 est bien inferieur a 50");}
if (true) { /*..code si VRAI..*/}
else { /*..code si FAUX..*/}
if (nb1 > 50) { console.log("nb1 est bien superieur a 50");}/* il affiche directement faux et il ecrit sa*/
else { console.log("nb1 n est pas superieur a 50");}
/* EXERCICE
on utilise le IF pour verifier l age de l internaute.*/
//=> s il est ma


// 1 --je declare la majorite legale
var MajoriteFR = 18;
// 2 -- demander l age en s assurant que nous avons un NUMBER
var age = parseInt(prompt("Iindiqueez votre age"));
// 3 -- je verifie si mon internaute est majeur
if (age >= MajoriteFR) {/*bienvenue si vrai*/alert("bienvenue, vous etes majeur");}
else {
    /*s il est mineur je lui signiale*/alert("Aller voir un autre site ...");//et ensuite je redirige vers Dardy ;*/
    document.location.href = "http://www.darty.com/"
}
