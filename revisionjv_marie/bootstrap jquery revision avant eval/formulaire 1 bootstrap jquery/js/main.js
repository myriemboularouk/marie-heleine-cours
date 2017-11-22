// alert('test');
$(".btnsubmit").on("click",function(){//je cible mon bouton .btnsubmit,puis je pose mon ecouteur d evenement .on sur le "click"et ensuite je code ma fonction
var nom =$("#oblignom").val();//je stocke dans ma variable nom la valeur de l element html qui a l ID #oblignom
var message = $('#msg');
if(nom === ""){//si le nom est vide /pas remplit
    //on manipule des classes de bootstrap ici : je vais rajouter la class .has-error de bootstrap a la div ayant la class form-group la plus proche parente de l element #oblignom => resulata si le champ n est pas rempli son cadre devient rouge 
    $("#oblignom").closest('div.form-group').addClass("has-error");
    //je rajoute ensuite la class prevue dans mon css.error sur la div#msg
    message.addClass('error');
    //je stock dans ma variable le message d erreur que je veux afficher
    var pasDeNom = $(".error");//ici je cible une classe et comme en JS par defaut il renvoie l information dans un tableau [0, 1, 2, ...];
    var msgPasDeNom = "Vous n avez pas renseigne votre nom !";
    pasDeNom[0].innerHTML = msgPasDeNom;
    
  }//fin du if de verification du nom
/*si le formulaire est rempli sur tous les champs que je rend obligatoires alors je remplace le formulaire par un message de reussite*/

var prenom = $('#obligprenom').val();
var adresse = $('#obligadresse').val();
var cp = $('#obligcp').val();
var telephone = $('#telephone').val();
var selection = $('.selection').val();/*PAYS*/
if (nom !== "" && prenom !== "" && adresse !== "" && cp !== "" && telephone !== "" && selection !== "pays"){
    var formulaireOk = $("form");
    formulaireOk.addClass("valid");
    var msgOk = "Votre formulaire est valide ;-)!";
    formulaireOk[0].innerHTML = msgOk;
      

    }    
});