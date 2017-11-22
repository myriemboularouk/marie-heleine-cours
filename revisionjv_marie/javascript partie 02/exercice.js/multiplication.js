//alert("yes");
//for(var i = 1; i <= 10 ; i++){
    //var res = choix * i;
    //document.write(choix + " x " + i + " = " + res + "<br />");
//}
var choix = prompt("choisis un nombre :");
if ((choix >= 2) && (choix <= 9)) {
    for(var i = 1; i <= 10 ; i++){
        var res = choix * i;
        document.write(choix + " x " + i + " = " + res + "<br />");
    }
} else {
    document.write("<h4>")
}
