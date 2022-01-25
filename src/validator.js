const validator = {
  isValid: function (numeroTarjeta) {
    let sumTotal = 0; // incicializando variable en 0 //
    let array = numeroTarjeta.split("").reverse(); //split =separador   //Variable tipo array que guarde el numero de tarjeta de credito
                //Variable que guarda el arreglo en sentido inverso
  //console.log(numeroTarjeta.split("").reverse())
  console.log(array);
  const tamaño = (array.length)
  console.log(tamaño)
  for(let i=0 ; i<tamaño ; i++) { 
                 //inicie desde la posicion 0 (par)
                 // creo la variable para multimpl *2
  console.log("num", i);
  if (i % 2 === 1) {
    console.log("posicion i", i )
    let n = array[i] * 2;
    console.log("variable", n)

    if (parseInt(n)>= 10) {
      console.log("si es mayor a 10")
    n = n - 9;
    console.log("resta", n)
    }
    else {
      sumTotal = sumTotal + parseInt(n);
    console.log("suma", sumTotal)
               // el resultado de la variable lo sumo a la sumTotal
    if (sumTotal % 10 === 0){
    return true, alert("Tarjeta de credito valida");
   
    
    }
    
    }
  }
}
}  
},         
     
        
       
        //   return true, alert("Tarjeta de credito valida");
        // } else return false, alert("Tarjeta de credito invalida");
      
      // return (sumTotal + array) % 10 === 0;
    
  

//     maskify(numeroTarjeta) {
//       //console.log(numeroTarjeta)
//       //function maskify(numeroTarjeta) {
//      if (numeroTarjeta.length <6) return (v)=>{
//       const ultimosDigitos = numeroTarjeta.substr(-4);
//       const primerosDigitos = numeroTarjeta.substr(0, 1);
//       const enmascararNumeros = numeroTarjeta.substr(1,numeroTarjeta.length -5).replace(/\d/g,'#');
//       return (`${primerosDigitos}${enmascararNumeros}${ultimosDigitos}`);
//       //return numeroTarjeta.replace(/.(?=.{4})/g, "#")*/


export default validator;
