// console.log("Funciona correctamente");// solo para probar si esta conectado correctamente

//Selecionar contenido
// Las 3 mas comunes
// querySelector
// QueryselectorAll
//GetElementById

// // querySelector
// //te va a retornar ya sea ninguno o maximo un elemento que concuerde con el selector q stoy escribiendo
// const heading = document.querySelector('#heading') // seleccionamos el h2 que este dentro de la clasee header__texto
// // console.log(heading) // no muestra que estamos seleccionando el elemento correctamente
// heading.textContent = "Nuevo Texto"; // cambia el texto del html con textContent



// // QueryselectorAll
// // selecciono todos los elementos
// const enlaces = document.querySelectorAll(".navegacion a");
// // accedo solo al primero
// console.log(enlaces[0]); // para acceder a uno en especifico como en los arregos [posicion]
// // cambio el texto solo al primer enlace
// enlaces[0].textContent = "texto nuevo para le enlace posicion 0"
// enlaces[0].href = "http://google.com" // para cambiar la direccion a la que me lleva
// enlaces[0].classList.add('nueva clase'); // Agrega nueva clase
// // enlaces[0].classList.remove('navegacion__enlace'); // elimina una clase


//GetElementById
// Metodo antiguo

// // Generar un nuevo enlace con codigo JS
// // usamos la funcion createElement que nos permite crear nuevos elementos
// // encillo en los parentecis escribo nada mas lo que quiero agregar
// // JS recomienda usar Mayusculas en  createElement
// const nuevoEnlace = document.createElement("A") // aca JS recomienda usar Mayusculas

// // Agregamos el Href
// nuevoEnlace.href = 'http://google.com';
// // Agregamos el texto
// nuevoEnlace.textContent = "Un Nuevo Enlace"

// // agregamos la clasee
// nuevoEnlace.classList.add ('navegacion__enlace');

// // Agregarlo al documento a mostrar
// const navegacion1 = document.querySelector('.navegacion')
// // appendChild nos permite agregar un elemento e insertarla en otro lugar
// navegacion1.appendChild(nuevoEnlace)



// // Eventos

// console.log(1);
// // cada que miremos addEventListener es que hay un evento asociado y ejecuta el codigo siguiente
// window.addEventListener('load', function(){ // load espera a que el JS y los archivos que dependen del HTML esten listos despues ejecuta esto
//     console.log(2);
// })

// window.onload = function(){ // la misma forma que arriba
//     console.log(3);
// }

// // DOMContentLoaded tiene que ir escrito tal cual sino no funciona
// // DOMContentLoaded solo espera a que se descargue el HTML pero NO espera el CSS o JS
// document.addEventListener('DOMContentLoaded', function(){
//     console.log(4);

// })

// console.log(5);

// window.onscroll = function() {
//     console.log("Scroling...");
// }



// // Seleccionar un elemento y asociarle un evento

// const btnEnviar = document.querySelector('.boton--primario');
// // click evento cuando alguien precione el boton
// btnEnviar.addEventListener('click', function(evento){
//      console.log(evento); // lo utilizamos para ver que tantas funciones hay disponible se nombra evento tal cual en la funcion
//     // preventDefault es que no va hacer la accion por defaul en este caso mandar la informacion al darle clic al boton
//     evento.preventDefault();
//     console.log("Enviando Formulario");
// });



// Evento de los input y los textarea
// unir datos un formularioa una variable
// const datos = {
//     // este objeto va a tener los mismos datos que tenemos en el formulario
//     nombre : '', // va hacer un string que empieza vacio
//     email :  "",
//     mensaje: "",
//     } // fin unir datos formulario

// // mientras vas escribiendo en el input
//  const nombreInput = document.querySelector('#nombre');
//  const correoInput = document.querySelector('#email');
// const mensajeInput = document.querySelector('#mensaje');
// // change se ejecuta hasta salir del input o sea al terminar de escribir
// // validacion en tiempo real es input
// nombreInput.addEventListener("input", function(evento){
//     // target.value entramos a lo que va escribiendo el usuario letra por letra y lo mostramos en la consola
//     console.log(evento.target.value);
// })
// correoInput.addEventListener("input", function(evento){
//     console.log(evento.target.value);
// })
// mensajeInput.addEventListener("input", function(evento){
//     console.log(evento.target.value);
// })
// // para no hacer el mismo codigo de imprimir 3 veces y simplificar el codigo hacemos una funcion quedaria asi
// nombreInput.addEventListener("input", leer)
// correoInput.addEventListener("input", leer)
// mensajeInput.addEventListener("input", leer)

// function leer(evento){
//     // para mostrar los datos del fomrulario
//    datos[evento.target.id] = evento.target.value;
//    console.log(datos);
// }






// Validar un formulario
// unir datos un formularioa una variable
// esto esta como forma global lo podiamos reutilizar pero por temas de estudido lo pongo a parte





// //---------------------------------------

// Todo el codigo para validar un formulario
// unir datos un formularioa una variable
const datos = {
    // este objeto va a tener los mismos datos que tenemos en el formulario
    nombre : '', // va hacer un string que empieza vacio
    email :  "",
    mensaje: "",
    } // fin unir datos formulario

 const nombreInput = document.querySelector('#nombre');
 const correoInput = document.querySelector('#email');
const mensajeInput = document.querySelector('#mensaje');

// validacion en tiempo real es input
// para no hacer el mismo codigo de imprimir 3 veces y simplificar el codigo hacemos una funcion quedaria asi
nombreInput.addEventListener("input", leer)
correoInput.addEventListener("input", leer)
mensajeInput.addEventListener("input", leer)

function leer(evento){
    // para mostrar los datos del fomrulario
   datos[evento.target.id] = evento.target.value;
}

// // El evento de Submit 
// // para validar formularios utilizar siempre submit
// const formulario = document.querySelector(".formulario")
// formulario.addEventListener('submit', function(evento){
//     evento.preventDefault();

//     //validar el formulario si los campos estan vacios
//     const {nombre, email, mensaje} = datos;
// //   //  signo || se saca con el codigo ascii ALT+124
// // if (nombre == "" || email == "" || mensaje == "") {
// //     mostrarError('Todos los campos son Obligatorios');
// //     return; // en este caso impide que se ejecute el resto del codigo
// // }
// // // Crear la otra alerta de envio correcto
// //     mostrarMensaje('Formulario enviado con exito');

// })

// // funcion muestra error en pantalla como parrafo
// function mostrarError(mensaje){ // este mensaje hace referencia al msj puesto dond se va a utliziar la funcion
//     const error = document.createElement("P");
//     error.textContent = mensaje; // agregamos el contenido del mensaje
//     error.classList.add("error"); // agregamos clase
//     formulario.appendChild(error);// agregamos al html

// // Desaparecer el Parrafo de Alerta despues de 5 segundos
// setTimeout(() => {
//     error.remove();
// }, 5000);
// }


// // funcion muestra que se envio satisfactoriamente en pantalla como parrafo
// function mostrarMensaje(mensaje){ // este mensaje hace referencia al msj puesto dond se va a utliziar la funcion
//     const alerta = document.createElement("P");
//     alerta.textContent = mensaje; // agregamos el contenido del mensaje
//     alerta.classList.add("correcto"); // agregamos clase
//     formulario.appendChild(alerta);// agregamos al html

// // Desaparecer el Parrafo de Alerta despues de 5 segundos
// setTimeout(() => {
//     correcto.remove();
// }, 5000);
// }


//-----------------------------

// refactoring de codigo
// La refactorización es una técnica de la ingeniería de software para reestructurar un código fuente
// encontramos dos problemas clave con el refactoring
// 1ero las personas quieren crear un codigo lo mas compacto que se pueda cuando aun no funciona
// 2do problema esque muchos dicen funciona ya, ya no lo voy a tocar
// como recomendacion escribe codigo feo pero que funcione y una ves que funcione que lo entienda entoncs
// buscar la forma de mejorarlo o refactorizarlo

//   El evento de Submit 
// para validar formularios utilizar siempre submit
// const formulario = document.querySelector(".formulario")
// formulario.addEventListener('submit', function(evento){
//     evento.preventDefault();

//     validar el formulario si los campos estan vacios
//     const {nombre, email, mensaje} = datos;
//       signo || se saca con el codigo ascii ALT+124
//     if (nombre == "" || email == "" || mensaje == "") {
//         mostrarAlerta('Todos los campos son Obligatorios', 'error');
//         return;
//     }
//     Crear la otra alerta de envio correcto
//     mostrarAlerta('Formulario enviado con exito');
// })


// function mostrarAlerta(mensaje, error = null){
//     const alerta = document.createElement("P");
//     alerta.textContent = mensaje;

//     if (error) {
//         alerta.classList.add("error");
//     } else{
//             alerta.classList.add("correcto"); // agregamos clase
//     }
// formulario.appendChild(alerta);// agregamos al html

// Desaparecer el Parrafo de Alerta despues de 5 segundos
// setTimeout(() => {
//     alerta.remove();
// }, 5000);
// }


    









