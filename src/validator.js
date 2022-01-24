const validator 
  // ...
};

    const validator= {

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
      }
      
      }
          






   
  
   

  /*function validarNumero() {
    const numeroTarjeta=Array.from(numeroTarjeta.value)   //usuario digite numero

    if (numeroTarjeta=="") {
      alert("Digite numero de tarjeta"); 
    } 

    else {
      mensajeValidar.innerHTML="validando su tarjeta..";                 //Traer objeto del html para dar mensaje//
      if (validator.isValid(numeroTarjeta)) {
        mensajeValidar.innerHTML =" Tarjeta valida";
      }   
      else {
        mensajeValidar.innerHTML="Tarjeta invalida";
      }   
      
    }*/
      
  //},



  /*  const resultado = numeroTarjeta.reduce((isValid, maskify, accumulator ) => {
    if (numeroTarjeta % 2 === 0) {
      accumulator +=
        parseInt(valorActual, 10) * 2 > 9
          ? parseInt(valorActual, 10) * 2 - 9
          : parseInt(valorActual, 10) * 2;
    } else {
      accumulator += parseInt(valorActual, 10);
    }

    return accumulator;
  }, 0);
  const esValido = resultado % 10 === 0;

  return esValido;*/

    
export default validator;
