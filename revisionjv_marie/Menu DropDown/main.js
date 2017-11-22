/*
1-VARIABLES
on selectionne les elements du DOM(page HTML)pour les stocker dans les variables afin de les manipuler ensuite dans notre code*/
var monBouton = document.getElementById('myButton');
var liste = document.getElementById('dropdown-list');
/*
2-FONCTION:(3eme etape/toggle sur les class)
*/
function afficher() {
    if(liste.style.display == 'block') {//if on l utilise lorsque la fonction est vrai /si elle pas vrai on met!=
        liste.style.display = 'none';
    } else {
        liste.style.display = 'block';
    }
}

/*
3-EVENEMENT:(2eme etape)
*/
monBouton.addEventListener('click', afficher);


