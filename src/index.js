import validator from './validator.js'
const boton= document.getElementById("validar")
const numeroTarjeta= document.getElementById("tarjetaDeCredito");

function mostrarNumero(numeroTarjeta) {
  
const resultado= validator.isValid(numeroTarjeta) 
console.log(resultado)

//alert("su tarjeta es invalida");

// resultado= (""), {
//   if (isValid) {
//     alert("Digite numero de tarjeta");
//     }
    
     //else {
    //       mensajeValidar.innerHTML="validando su tarjeta..";                 //Traer objeto del html para dar mensaje//
    //       if (numeroTarjeta.isValid(numeroTarjeta)) {
    //         mensajeValidar.innerHTML =" Tarjeta valida";
    //       }
    //       else {
    //         mensajeValidar.innerHTML="Tarjeta invalida";
    //       }
    //  }  
     
     //usuario digite numero

 

//}

boton.addEventListener("click", ()=>mostrarNumero(numeroTarjeta.value));




console.log(validator)
