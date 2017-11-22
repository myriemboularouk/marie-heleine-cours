//alert("yes");
/*<h1>Heure suivante</h1>

<p>Ecrivez un programme qui demande une heure à un utilisateur sous la forme de trois informations (heures, minutes, secondes).</p>
<p>il affiche ensuite l'heure qu'il sera une seconde plus tard.</p>
<p>Les erreurs de saisie doivent être gérées.</p>
<ul style='border: 1px solid; background-color: lightgray'>Ce programme est moins simple qu'il en a l'air : >
<li>14h17m59s => 14h18m0s</li>
<li>6h59m59s => 7h0m0s</li>
<li>23h59m59s => 0h0m0s (minuit)</li>
</ul>

<h3>Résultat :</h3>*/
var heure =prompt("Entrez l heure :");
var minute =prompt("Entrez l minute :");
var seconde =prompt("Entrez l seconde :");
//on teste les cas d erreur
if ((heures => 0) && (heure <= 23) && (minute >= 0) && (minute <= 59) && (seconde >= 0) && (seconde <=59)) {//&&      seconde++
    //on incremente les secondes
    if (seconde === 60) {//===
        // on met les secondes a 0 et passe a la minute suivante
        seconde = 0;
        minute++;
        if (minute === 60) {
            //on met les minutes a 0 et passe a l heure suivante
            minute = 0;
            heure++;
            if (heure === 24) { //===
                // l heure suivante est minuit
                heure = 0;
            }
        }
    }
    // affichage de l heure
    document.write("<h3> Dans une seconde il sera " + " h " + minute + " m " + seconde + " s</h3");

} else {
    // heure incorrecte
    document.write("Heure incorrecte !");
}
