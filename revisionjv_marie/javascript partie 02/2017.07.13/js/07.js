//alert("yes");

/* L OPERATEUR ET : && ou AND
//-- si je cumule 2 conditions:
//=> prenom === prenomlogin
//=> monAge === agelogin
// pour que les 2 correspondent pour etre valides il faut les associer*/
if ((prenomlogin === prenom) && (agelogin === monAge)) {
    /*..code...*/
    /* je ne rentre ici si les 2 conditions sont vraies */
}
if ((A) && (B)) {...}
=> si A est FAUX et B est VRAI => FAUX
=> si A est VRAI et B est FAUX => FAUX
=> si A est FAUX et B est FAUX => FAUX
=> si A est VRAI et B est VRAI => VRAI

/* L OPERATEUR OU : || ou OR ( | pipe => alt gr + 6 ) */
if ((c) ||(d)) {...}
=> si C est FAUX et D est FAUX => FAUX
=> si C est FAUX et D est VRAI => VRAI
=> si C est VRAI et D est FAUX => VRAI
=> si C est VRAI et D est VRAI => VRAI

/* l operateur "!" signifie : le contraire de */
var utilisateurlog = true;
if (!utilisateurlog ) {// si l utilisateur n est pas loggé.

}
// ce qui revient a ecrire :
if (utilisateurlog == false) {

}
s
