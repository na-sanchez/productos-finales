//pedir una frase
var phrase = prompt("Ingresa una frase");
//declarar una array vacío que contenga
var phraseInAscii = [];
function cipher (asciiCode){
// declarar un for que pase por toda la frase y obtenga un numero ascii y lo integre al array vacio
 for (var i = 0; i< phrase.length; i+=1){
   var letters = phrase[i].charCodeAt();
   phraseInAscii.push(letras);
  }
    return phraseInAscii;
}
cipher(phrase);
