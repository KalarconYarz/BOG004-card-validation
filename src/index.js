import validator from './validator.js'
const boton= document.getElementById("validar")
const numeroTarjeta= document.getElementById("tarjetaDeCredito");

function mostrarNumero(numeroTarjeta) {
  
const resultado= validator.isValid(numeroTarjeta); 
console.log("numeroTarjeta", resultado)


}
boton.addEventListener("click", ()=>mostrarNumero(numeroTarjeta.value));
if (validator.isValid('')) {
  alert("Digite numero de tarjeta")
  }

if (validator.isValid(numeroTarjeta.value)){
  alert("tarjeta de credito Valida");
} else {
    alert("tarjeta de credito invalida")
  }







console.log(validator)
