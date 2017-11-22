//alert("yes");
/*1-- boucle while*/
var manege = 0 ;
while (manege <10) {
    manege++;
    document.write("c'est le tour n°"+ manege + "<br />");
}

/*2-- boucle FOR*/
document.write("<hr />");

for (var i = 1; i < 10; i++) {
    document.write("c'est le tour n°" + i + "<br />");
}

document.write("<hr />");
document.write("<hr />");

/* 2-- boucle WHILE */
var question = parseInt(prompt("combien de tours ?"));
var compteur = 1
while (compteur <= question) {
    document.write("c'est le tour n°" + compteur +"<br />");
    compteur++;
}

document.write("<hr />");

/* 3-- boucle for*/
var nbTours = parseInt(prompt("Combien de tours a faire ?"));
for (var tour = 1; tour <= nbTours; tour++) {
    document.write("c'est le tour n°" + tour +"<br />");
}
