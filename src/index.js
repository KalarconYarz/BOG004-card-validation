import validator from "./validator.js";
const boton = document.getElementById("validar");
const numeroTarjeta = document.getElementById("tarjetaDeCredito");

function mostrarNumero(numeroTarjeta) {
  console.log(numeroTarjeta);
  if (numeroTarjeta === undefined || numeroTarjeta === "" ) {  
    console.log("dentro del if", numeroTarjeta === undefined)  //=== estrictamente igual //
    alert("Por favor ingresa tu numero de tarjeta");
    
  } else if (validator.isValid(numeroTarjeta)) {
    console.log(validator.isValid(numeroTarjeta));
    alert("Su tarjeta de credito " + validator.maskify(numeroTarjeta) +
        "es Valida" );
  } else {
    console.log(validator.maskify(numeroTarjeta));
    alert( "Su tarjeta de credito " +validator.maskify(numeroTarjeta ) +
        "es Invalida" );
  }
  //const resultado = validator.isValid(numeroTarjeta);
 // console.log("cardSplit", resultado);
  
  
}
boton.addEventListener("click", () => mostrarNumero(numeroTarjeta.value));

//const form = document.querySelector("form");

//boton.addEventListener("click"), (e) => resultado(numeroTarjeta.value); {    //alcance del evento //
 
//};
