import validator from './validator.js'
const boton= document.getElementById("validar")
const numeroTarjeta= document.getElementById("tarjetaDeCredito");

function mostrarNumero(numeroTarjeta) {
  
const resultado= validator.isValid(numeroTarjeta) 
console.log(resultado)

//if (validator('')) 
//  alert("Digite numero de tarjeta")
}

boton.addEventListener("click", ()=>mostrarNumero(numeroTarjeta.value));






