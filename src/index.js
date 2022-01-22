import validator from './validator.js'
const boton= document.getElementById("validar")
const ncard= document.getElementById("tarjetaDeCredito");

function mostrarNumero(ncard) {
  
 validator.isValid(ncard) 
}

boton.addEventListener("click", ()=>mostrarNumero(ncard.value));



/*
  function validarNumero() {
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
      
    }
      


  } */

