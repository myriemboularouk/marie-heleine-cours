//syntaxe de bas

//commentaire sur une ligne

 /*
  Ici, je fais un commentaire sur plusieur lignes
  */
  //-- 1 :pour declarer une variable en JS(creer une boite pour stoqer des chiffres boulien:oui et non)
  //var prenom;
  //-- 2 :Affecter une valeur a une variable
  //prenom ="Mila";

  // var prenom ="Mila";
  // //-- 3 : une instruction se termine TOUJOURS par ;,aussi il est possible d ecrire plusieurs instructions sur une seule ligne
  // inst_1;
  // inst_2; inst_3;

  // -- 4 :afficher une boite de dialogue(2 facons)
   //alert("super,tu es arrive sur mon site!");
   // window.alert("super,tu es arrive sur mon site!");
   // -- 5 :Afficher dans la console(ici, la valeur de ma variable prenom )
   //console.log(prenom);
   //-- 6 :Aafficher dans la page web
   //document.write("c est la pause vous aurez des haribos pik !");
   //-- 7 : Demander a l utilisateur une valeur (2 facons)
   // window.prompt("question: on est quel jour?","jour de la semaine");
   //prompt("qestion: on est que jour?","jour de la semaine");
   //--et pour manupiler cette valeur, je n oublie pas de la stocker
   //var jour = prompt("question: on est quel jour?" , "jour de la semaine");
   //console.log(jour);
   //-- 8 :Attention /!\le JS est sensible a la casse ('case sensitive')
   // mavariable =/= mavariable =/= mavariable
   //            camel case       snake case
   //-- 9 : Une variable ne peut pas commencer par un chiffre, ne doit contenir que des caracteres alphanumeriques, et ne peut pas etre un mot reserve (var, for.. des elements natifs du langage JS)
   https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Mots_r%C3%A9serv%C3%A9s
   //-- 10 :Une variable peut etre declaree de facon explicite :
   //var fruit;
   //var fruit = "fraise";//on le met une seul fois
      // ou implicite :
   //fruit ="coco";
   //haribo ="tagada";
   /*------------------------
   /~~~~~~~~ LES TYPES DE VARIATION ~~~~~~~~~/
   -----------------------------------------*/
   // -- 1. chaine de caracteres (string)
   var vacances = "2017";
   var destination = "Australie";

   //-- 2. Un nombre entier (integrer ou int)
   var annee = 2017;
   //-- 3. un nombre decimal (float)
   var nombre_a_virgule = -5.32;
   // --4. Un booleen (boolean = VRAI/FAUX = TRUE/FALSE)
   var unBooleen = false; //--true
   //-- 5. les constantes

   /*la declaration const permet de creer une constante accissible uniqement en lecture. Contrairement a une variable sa valeur ne peut plus etre modifiee par reaffectation plus bas dans le code .
   Une constante ne peut pas etre declarer a neuveau dans le meme script.*/
   //-- par convention les constantes sont en majuscules
   const PAYS = "France";
   //-- 6. typeof permet de connaitre le type de ma variable
   console.log(vacances)
   console.log(typeof vacances);
   console.log(annee);
   console.log(typeof annee);
   // en JS les VARIABLE sont auto-typees()
   //on peut convertire une variable de type NUMBER en STRING et aussi STRING en NUMBER avec les fonctions natives de JS
   //-- la fonctions parseInt() renvoie un entier a partir d une chaine de quaracteres

   var unChiffre = "12";
   console.log(unChiffre);
   console.log(typeof unChiffre);

   // STRING => NUMBER
   unChiffre = parseInt(unChiffre);
   console.log(unChiffre);
   console.log(typeof unChiffre);

   // je re-affecte une valeur
   unChiffre = "12.12";
   console.log(unChiffre);
   console.log(typeof unChiffre);

   //STRING => float
   unChiffre = parseFloat(unChiffre);
   console.log(unChiffre);
   console.log(typeof unChiffre);

   // NUMBER => STRING
   var nb_en_lettres = 258;
   console.log(nb_en_lettres);
   console.log(typeof nb_en_lettres);

   var nb_en_lettres = nb_en_lettres.toString();
   console.log(nb_en_lettres);
   console.log(typeof nb_en_lettres);
