
//alert("test")
// 1-cibler l element textarea et l id #conterBlock */
//var textarea = document.getElementById('tweetContent');
//var blockCount = document.getElementById('conterBlock');
/* 2-je cree ma fonction qui :
  =>calcule la longueur de la chaine de caractere contenue dans le textarea*/
 // function count(){
     // var count = 140 - textarea.value.length;
     // blockCount.innerHTML = count;
      /*=> affiche cette valeur dans la balise #counterBlock grace a innerHTML*/
     // if (count < 0){
    //      blockCount.classList.add("red");
    //  } else if (count >= 0) {
    //=> SI le nombre de caractere descend sous 0 on ajoute la class red a #counterBlock,SINON on l enleve 
    //      blockCount.classList.remove("red");
    //  }
  //}
// 3-ecouteur d evenement KEYUP sur le textarea */
/*=> on declare la fonction quand a tape au clavier et au chargement de la page */
 //textarea.addEventListener('keyup', count);
 //count();
 
 var textarea = document.getElementById('tweetContent');
var blockCount = document.getElementById('counterBlock');

function count(){
    var count = 140 - textarea.value.length;
    blockCount.innerHTML = count;
    if (count <0) {
        blockCount.classList.add("red");

    }else if (count>= 0) {
        blockCount.classList.remove("red");
    }
}

textarea.addEventListener("keyup", count);
count();








 