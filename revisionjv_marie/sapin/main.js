// demande a lutilisateur le nombre d etage du sapin
var taille = prompt('choisis le nombre d etage du sapin');

//on met les etages du sapin
for (var etage = 1; etage <= taille; etage++){
    //1-pour chaque etage mon compteur est egale a etage + 3 
    for(var i = 0; i < etage + 3 ; i++){
        // 2- pour chaque ligne j ai =>((etage + ligne)*2)-1etoile
        for(var nb_etoile = 1; nb_etoile <=((etage + i)*2)-1 ;nb_etoile++){
            document.getElementById('sapin').innerHTML += '*';
        } // fin nombre d etoiles par ligne
        document.getElementById('sapin').innerHTML += '<br>'; 
    }// fin lignes
}    //fin etage
    //on affiche le pied qui depend du nombre d etage du sapin
for (var pied = 1 ; pied <= taille ; pied++) {
    document.getElementById('sapin').innerHTML += '|';
    document.getElementById('sapin').innerHTML += '<br>';
}