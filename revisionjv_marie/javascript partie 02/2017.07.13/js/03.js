
// alert("hello");

// -- 1. Addition
// -- INFO -- JE PEUX DECLARER PLUSIEURS VARIABLES A LA SUITE VAR Nb1, nb2 resultat;

nb1 = 10;
nb2 = 5;
//Addition de nb1 + nb2 avec l operateur '+'
resultat = nb1 + nb2;
//--affichage dans la console
console.log(resultat);
//--2. Soustraction
//--Soustraction de nb1- nb2 avec l operateur "-"
resultat = nb1 - nb2;
console.log(resultat);
//-- 3. Multiplication de nb1 * nb2 avec l operateur "*"
resultat = nb1 * nb2;
console.log(resultat);
//-- 4. Division
// -- Division avec l operateur "/"
resultat = nb1 / nb2;
console.log(resultat);
//-- 5. Modulo
// -- le Modulo retourne le reste d une division
// -- modulo de nb1 % nb2 avec loperateur"%"
resultat = nb1 % nb2;
console.log(resultat);

//--et maintenant je re-affecte une valeur a nb1
nb1 = 11;
resultat = nb1 % nb2;
console.log("le reste de la division de " + nb1 + " par " + nb2 + " est egal a : " + resultat);

/*LES ECRITURES SIMPLIFIERS*/
nb1 = 15;
nb1 = nb1 + 5;
console.log(nb1);
nb1 += 10;
console.log(nb1);
nb1 += 10;//nb1 lui meme +quelque chose
console.log(nb1);
//le raccourci est le meme avec l operateurs +,-,/,*,%
