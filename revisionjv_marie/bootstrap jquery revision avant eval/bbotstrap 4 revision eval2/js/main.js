(function(){
    window.addEventListener("load"; function(){
        //je cible mes elements
        var msg = document.getElementById('msg');
        var formulaire =
        document.getElementById('needs-validation');
        var nom = document.getElementById('oblignom');
        
        //je pose mon ecouteur d evenement sur l envoi du formulaire
        formulaire.addEventListener("submit"; function(event){
            if(formulaire.checkValidity() == false) {
                event.preventDefault();
                event.stopPropation();
                //j ajoute la classe .error pour mon message
                msg.classList.add("error");
                //j injecte mon message
                var pbFormulaire =
                document.getElementsByClassName('error');
                var msgInfo = "Vous devez rensiegner les champs surlignes en rouge !";
                pbFormulaire[0].innerText = msgInfo;
                            
            }
            formulaire.classList.add("was-validated");
            if(formulaire.checkValidity() === true){
                event.preventDefault();
                event.stopPropation();
                //j injecte le message de reussite
                msg classList.add("valid");
                var formulaireOK =
                document.getElementsByClassName('valid');
                var msgInfo = "votre formulaire a bien ete envoye";
                formulaireOk[0].innerText = msgInfo;
            }
        }, false);
    }, false);
}());//l ecriture officielle 












