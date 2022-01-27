const validator= {
  isValid:

}
function ncardArray(ncard) {
     

      //console.log(newArray.length); //Variable que guarda el arreglo en sentido inverso
      for (let i = 0; i < newArray.length; i++) {
                                  //For para recorrer array invertido y buscar las posiciones pares
        //console.log("Hola", newArray);
        //console.log(i % 2 === 1)

        if (i % 2 !== 0) {        //inicie desde la posicion 1 (par)
         // console.log(newArray[i] * 2 >= 10, newArray[i] * 2)
          if (parseInt(newArray[i]) * 2 >= 10) {
                                    // si el doble es mayor a 10 entonces sume los valores//
            console.log(sumTotal,sumTotal += ((parseInt(newArray[i]) * 2) - 9))
            
            sumTotal += ((parseInt(newArray[i]) * 2) - 9);
          } else {
            sumTotal += parseInt(newArray[i]) * 2;
          }
          //console.log(newArray)
           
          }
         else {
         sumTotal += parseInt(newArray[i]); //Comprobar argumento, y devuelve numero
        }
        console.log(sumTotal)
      }
      console.log(sumTotal % 10 === 0) 
     //return (sumTotal + newArray) % 10 === 0;
      
    }
  
  }
  //  

  // }

    isValid: function (numeroTarjeta) {
      console.log("tarjeta",numeroTarjeta)
                                                       //  function ncardArray(ncard) {
    const array = numeroTarjeta.split("");                //split =separador   //Variable tipo array que guarde el numero de tarjeta de credito
    const newArray = array.reverse();      
    console.log(newArray.length)          //Variable que guarda el array en sentido inverso
      for(let i = 0; i < newArray.length; i++){    //For para recorrer array invertido y buscar las posiciones pares
      console.log("Hola", newArray);    
       
     } 
    
    },
      maskify:(numeroTarjeta)=> {
      //console.log(numeroTarjeta)
      //function maskify(numeroTarjeta) {
     if (numeroTarjeta.length <6) return (v);
      const ultimosDigitos = numeroTarjeta.substr(-4);
      const primerosDigitos = numeroTarjeta.substr(0, 1);
      const enmascararNumeros = numeroTarjeta.substr(1,numeroTarjeta.length -5).replace(/\d/g,'#');
      return (`${primerosDigitos}${enmascararNumeros}${ultimosDigitos}`);
      //return numeroTarjeta.replace(/.(?=.{4})/g, "#")
  //  }/

  //}//

  //}//
//};*/

export default validator;
