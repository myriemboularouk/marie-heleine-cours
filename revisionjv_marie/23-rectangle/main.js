//alert("")
/*variable qui stocke le dom*/

// je cible le bouton afficher /cacher dans le dom
var bouton = document.getElementById('toggle-rectangle');/* je vais selection l'id bouton/dans html*/

// je cible le rectangle dans le dom
var rectangle = document.querySelector('.rectangle');/*on va appeler un selecteur/ pour selectionne n'importe quel element mais avec le . pour la class ou le # id*/
/*fonction*/

/*a-fonction au click sur un bouton/= est l action
/*
/*la methode ou fonction .toggle() va ajouter ou supprimer la class css (comme un interrupteur)*/

function surClickBouton(){
     rectangle.classList.toggle('hide');// hide=la class /correspond a .hide en css qui a la propriete display :none;
     /*classList=liste de la class html qui sont dans css*/
     
}
function auSurvolRectangle(){
    rectangle.classList.add('important');
}
/*
c- fonction a la sortie du survol du rectangle*/
function aSortieRectangle(){
    rectangle.classList.remove('important');
    rectangle.classList.remove('good');
    
}
function auDoubleClic(){
    rectangle.classList.toggle('good');
}
 

/* ecouteurs évènements */
/*l ecouteur prend 2 parametres () => ecouteur(parametre_1,parametre_2)
//en 1er => l evenement
//en 2end => la fonction a executer a cet evenement

/*a-installe un gestionnaire d evenement au clic sur le bouton cible dans ma variable BUTTON*/
bouton.addEventListener('click',surClickBouton);

/* b-installe monecouteur au survol sur le rectangle*/
rectangle.addEventListener('mouseover', auSurvolRectangle);
/*
c- installe l ectour sur la sortie de la souris*/
rectangle.addEventListener('mouseout', aSortieRectangle);
/*
d-ecoute au double clic*/
rectangle.addEventListener('dblclick', auDoubleClic);




















