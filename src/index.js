import validator from "./validator.js";
const boton = document.getElementById("validar");
const numeroTarjeta = document.getElementById("tarjetaDeCredito");


function mostrarNumero(numeroTarjeta) {
 
const notification = validator.isValid(numeroTarjeta);
const ncAnswer = validator.maskify(numeroTarjeta);

  if (notification == true && ncAnswer !="") {
    document.getElementById("notifications").style.display="block" 
    document.getElementById("notifications").innerHTML =
      "su tarjeta de credito terminada en " +
      ncAnswer +
      " fue validada satisfactoriamente!.";
      document.getElementById("tarjetaDeCredito").value = "";
    
    

    } else if (notification == false && ncAnswer != "") {
    document.getElementById("notifications").style.display="block" 
    document.getElementById("notifications").innerHTML =
      "su tarjeta de credito " +
      ncAnswer +
      " es inválida, por favor verifique su tarjeta!.";
      document.getElementById("tarjetaDeCredito").value = "";
  }
  else {
    alert("Ingrese un número de tarjeta");
  }
}
  
boton.addEventListener("click", () => mostrarNumero(numeroTarjeta.value));


