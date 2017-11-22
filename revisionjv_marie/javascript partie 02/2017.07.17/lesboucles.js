

//LESBOUCLES
//-- la boucle FOR
//for (/*3 argements*/){
    //...code..
//}
//2. la condition a verifier qui doit donc etre VRAIE (true)
//3. le 'pas'(++) d incrementation (combien j ajoute a chaque tour,generalement 1 donc i++)

for (var i = 0; i <= 10 ; i++) {
    document.write("<p>Instruction executee : " + i + "</p>");
}
//--la boucle WHILE (tant que)
// tres utilise quand on ne connait pas le nombre de tours de boucles a l avance
var j = 1;
while (j <= 10) {
    document.write("<hr>Instruction executee : " + j + "</hr>");
    /* 50 ligne de code a linfini et bien j ajoute  */
    j++;
}
//EXERCICE
//chaque mois j'ajoute 50€
//combien de temps me faut-il pour avoir 2000€ sur mon compte ?
var monCompte = 1000;
var temps = 0;
while(monCompte <= 2000) {
    monCompte += 50;
    temps++;
}
document.write("<h3>sous sur mon compte : " + monCompte + "</h3>");
document.write("<h3>jusqu a 2000€, il me faut : " + temps + " mois</h3>");
document.write("<h3>jusqu a 2000€, il me faut: " + (temps/12) + "annees</h3>");


// dans la boucle for il y a 3 variables, il a le meme raisonnement que le IF
// la variable il faut le mettre toujour en haut sinon il la connait pas
var tps = 0;
for (var mesSous = 1000; mesSous <= 2000 ; mesSous += 50) {
    document.write("<h3>le mois suivant j ai : " + mesSous + "</h3>");tps++;
}
// i cest mesSous
document.write("<h3>Il aura fallu " + tps + " mois.</h3>")
