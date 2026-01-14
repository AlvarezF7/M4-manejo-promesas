import data from './data.js'; 

//1 promesa con setTimeout

let promesa = new Promise((resolve,reject) => {

console.log("Esperando respuesta");

setTimeout( () => {
    resolve(data[0]);
},3000);
       
});

console.log("Registranto promesa");

promesa.then (resultado => {
    console.log("Respuesta:", resultado);
})
.catch(error => {
    console.error("Error:", error);
});

//2-------promesa que depende de segundos actuales
let promesaSegundos = new Promise((resolve, reject) =>{
    let segundos = new Date().getSeconds();
    let horaActual = new Date().toLocaleTimeString();

    if(segundos > 30){
        if (segundos % 2 === 0) {
            resolve("Hora actual:" + horaActual);
        }else {
            reject("Error: segundos mayores a 30 e impares");
        }
    } else {
        if (segundos % 2 !== 0) {
            resolve("Hora actual: " + horaActual);
        }else{
            reject("Error: segundos menores o iguales a 30 y pares");
        }
    }
});

promesaSegundos
.then(res => console.log(res))
.catch(err => console.log(err));

//------3 promesa con proceso pesado
let promesaPesada = new Promise((resolve, reject) => {
  console.log("Proceso pesado iniciado");

  // Bloque pesado (loop intensivo)
  let inicio = Date.now();
  while (Date.now() - inicio < 4000) {

  }

  resolve("Proceso pesado terminado");
});

promesaPesada.then(res => {
  console.log(res);
  console.log("Después del proceso pesado");
});






