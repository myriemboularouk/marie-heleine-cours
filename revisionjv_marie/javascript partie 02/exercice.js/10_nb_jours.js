//alert{"yes"};

var mois = parseInt(prompt("quel mois choisissez-vous", "<saisir un chiffre entre 1 et 12>"));
if (mois === 2){// si on a choisi fevrier => chiffre 2
    document.write("le mois numero" + mois + " fait 28 jours.");
} else if ((mois === 4) || (mois === 6) || (mois === 9) (mois === 11)){ // si on a choisi un mois qui fait 30jours
    document.write("le mois numero" + mois + " fait 30 jours.");
} else if ((mois === 1) || (mois === 3) || (mois === 5)|| (mois === 7) || (mois === 8) || (mois === 10) || (mois === 12)){ // si on a choisi un mois qui fait 31jours
    document.write("le mois numero" + mois + " fait 31 jours.");
} else {
    document.write("votre choix" + mois + " n est dans le calendrier.");
}
