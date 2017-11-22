(function(){
    /*
    1-VARIABLES
    */
    // cible le bouton
    var bouton = document.querySelector(".c-hamburger");//il va chercher le element 
    // cible le panneau glissant
    var panneau = document.querySelector("#menu-panel");
    
    /*
    2-FONCTION
    */
    // au clic sur le bouton=> 2 actions:
    //-animation du menu (les barres=> la croix)
    //-glissement du panneau vers la droitr
     bouton.addEventListener("click", function(e){//e=racoursis de evenement
          e.preventDefault();//il annule l evenement par defaut et tu applique le code q il te demande
          this.classList.toggle("is-active");//this c lui meme/toggle=rajoute ou enleve une class
          // on ajoute la class .show a ma div#menu-panel
          // en fait en CSS on applique un transform: translateX(0)
          // on utilise l ecriture ternaire '?:'<=>'if else'
        (this.classList.contains('is-active') === true)?
        panneau.classList.toggle('show'):
        panneau.classList.remove('show');
        
    
    });
      //if(this.classList.contains('is-active') === true){
      //   panneau.classList.toggle('show');
      // }else {
      //panneau.classList.remove('show')
     //} 
    
    
    
})();

