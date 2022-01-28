const validator = {
  isValid: function (numeroTarjeta) {
    console.log(numeroTarjeta);
    let cardOdd = 0;
    let cardPair = 0;
   // console.log("hello 8" ,typeof numeroTarjeta);  // determinar tipo de valor(string)
    const cardSplit = numeroTarjeta.split("").reverse();
    //console.log(cardSplit);
   // numeroTarjeta = numeroTarjeta.split("").reverse(); //split =separador   //Variable tipo array que guarde el numero de tarjeta de credito
    //Variable que guarda el arreglo en sentido inverso
      
    for (let i = 0; i < cardSplit.length; i++) {
      // console.log("num", i); //inicie desde la posicion 0 (par)
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
    console.log("validator", (cardPair + cardOdd) % 10 === 0);
    return (cardPair + cardOdd) % 10 === 0; // retorne suma de los numeros pares + impares) si el residuo de 10 es 0
    
  },

  maskify: function(numeroTarjeta) {      
    console.log(numeroTarjeta);
    const hide= numeroTarjeta.slice(0, -4) // slice: devuelve mismos valores //
    const noHide= numeroTarjeta.slice(-4)
    const nCardTranform = hide.split('').map(function(symbol) { //map: crea un nuevo array con los resultados
      return symbol = "#"
      
    });   
   //const nCardTranform = hide.join('');     //join:retorna un array en un string
   return nCardTranform.concat(noHide);    // concat: permite unir uno o mas arrays
},
    
   
   

 // maskify (numeroTarjeta) =>{
    //   console.log(hide);
    // const hide= array.from(numeroTarjeta)
   
    // for (let i = 0; i<(numeroTarjeta.length-4); i++) {
    //   hide[i]='#'
    //  // const element = array[i];
    //  console.log(" vacio ", hide[i] );
    //       }
    // return hide.toString().replace(/,/g," ");    // podemos usar la expresión / /gpara buscar o extraer un patrón más de una vez
      // if (numeroTarjeta.length > 4) {
      //   let answer = numeroTarjeta.length -4;
      //   campos = "#".repeat(answer)+ numeroTarjeta.substr(-4); 
      // }    
      //   else {
      //     console.log("maskify", campos);
      //     return campos
      // }
                   
      
    

    // return numeroTarjeta.replace(/.(?=.{4})/g, "#")*/
  //}

}

export default validator;
