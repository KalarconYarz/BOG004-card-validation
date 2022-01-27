const validator = {
  isValid: function (numeroTarjeta) {
    let cardImpar = 0;
    let cardPar = 0;
    numeroTarjeta = numeroTarjeta.split("").reverse(); //split =separador   //Variable tipo array que guarde el numero de tarjeta de credito
    //Variable que guarda el arreglo en sentido inverso
    
    for (let i = 0; i < numeroTarjeta.length; i++) {
     // console.log("num", i); //inicie desde la posicion 0 (par)
      if (i % 2 === 1) {
        let n = numeroTarjeta[i] * 2; // creo la variable para multimpl *2
        console.log("variable", n);

        if (n >= 10) {
          //comprobar el argumento y devuelva un entero
          console.log("si es mayor a 10");
          n = n - 9;
          console.log("resta", n);
          cardPar= cardPar + n
        } else {
          cardPar = cardPar + parseInt(n);
          console.log("cardPar", cardPar);

          // el resultado de la variable lo sumo a la sumTota
        }
      } else {
          cardImpar = cardImpar + parseInt(numeroTarjeta[i]) ;
         console.log("inmar", cardImpar);
        // return true, alert("Tarjeta de credito valida");
      }
    }
    console.log("validator", (cardPar + cardImpar) % 10 ===0);
    return (cardPar + cardImpar) % 10 ===0
  },

  // return (sumTotal + array) % 10 === 0;

  maskify:(numeroTarjeta) => {
    const ncard1 = numeroTarjeta.split("");
    console.log(ncard1);
    const tamaño2 = ncard1.length;

    for (let i = 0; i < tamaño2; i++) {
      if (i < tamaño2 - 4 && tamaño2 > 4) {
        ncard1[i] = "#";
      }
      const myMascara = ncard1.join("");
      console.log()
    return (myMascara);
    }
    
    // return numeroTarjeta.replace(/.(?=.{4})/g, "#")*/
  },
};

export default validator;
