const validator = {
  isValid: function (numeroTarjeta) {
   // console.log(numeroTarjeta);
    let cardOdd = 0;
    let cardPair = 0;
  // console.log("que tipo soy" ,typeof numeroTarjeta);  // determinar tipo de valor(string)
   const cardSplit = numeroTarjeta.split("").reverse();
    //console.log(cardSplit);
    //Variable tipo array que guarde el numero de tarjeta de credito
    //Variable que guarda el arreglo en sentido inverso
      
    for (let i = 0; i < cardSplit.length; i++) {  //inicie desde la posicion 0 (par) y dependiendo la longitud inicie su ciclo
      // console.log("num", i); 
      if (i % 2 === 1) {
        let n = cardSplit[i] * 2; // creo la variable para multimpl *2

        if (n >= 10) {
          //comprobar el argumento y devuelva un entero
         // console.log("si es mayor a 10");
          n = n - 9; // si se cumple la condicion (resta -9)
          cardPair = cardPair + n;
        } else {
          cardPair = cardPair + parseInt(n);
          // el resultado de la variable lo sumo a los numeros que no proceso el algoritmo//
        }
      } else {
        cardOdd = cardOdd + parseInt(cardSplit[i]);
        //console.log("impar", cardOdd);
      }
    }
  // console.log("validator", (cardPair + cardOdd) % 10 === 0);
    return (cardPair + cardOdd) % 10 === 0; // retorne suma de los numeros pares + impares) si el residuo de 10 es 0
    
  },

  maskify: function(numeroTarjeta) {      
 
    const array2 = numeroTarjeta.split("");     //split: separa los valores en comillas
    const nLength = array2.length;
    
    for (let j = 0; j< nLength; j++) {
      if (j < nLength -4 && nLength >4 ){
        array2[j]= "#";
      }
    }
      const nMaskify = array2.join("");   //join:retorna un array en un string
      return nMaskify;
    }
      
}    
    


export default validator;
