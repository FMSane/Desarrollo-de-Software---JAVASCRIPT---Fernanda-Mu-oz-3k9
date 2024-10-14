//1. Introducción a JavaScript:
//Ejercicio 2:
let a = 6;
let b = 9;
let c = a + b;

console.log("El resultado de a + b es: " + c);

//Ejercicio 3:
let nombre1 = window.prompt("¿Cuál es tu nombre?");
console.log("Hola, " + nombre1 + "!");

//2. Operadores lógicos y condicionales:
//Ejercicio 1:
let a2 = 8;
let b2 = 15;
let c2 = 3;

if(a2 > b2 && a2 > c2){
    console.log(a2);
} else if(b2 > a2 && b2 > c2){
    console.log(b2);
} else if(c2 > a2 && c2 > b2){
    console.log(c2);
};

//Ejercicio 2:
let numero2 = window.prompt("Ingresa un número");
if(numero2%2 === 0){
    alert("El número " + numero2 + " es par");
}else if(numero2%2 === 1){
    alert("El número " + numero2 + " es impar");
}else{alert("Ingrese un número, no otra cosa.");}

//3. Operadores de asignación y bucles
//Ejercicio 1:
let contador = 10;
while(contador > 0){
    console.log(contador);
    contador--;
};

//Ejercicio 2:
do{
    var numeroAlto = window.prompt("Ingrese un número mayor a 100");
    if(numeroAlto > 100){
        console.log("Ingresaste un número mayor a 100: " + numeroAlto);
    }
}while(numeroAlto <= 100)

//4. Funciones de JavaScript
//Ejercicio 1:
const par = 58;
const impar = 105;

const esPar = (numerito) => {
    if(numerito%2 === 0){
        console.log("El numero " + numerito + " es par: true");
    } else{
        console.log("El numero " + numerito + " es par: false");
    }
}

esPar(par);
esPar(impar);

//Ejercicio 2:
let gradosC = 32;

const convertirCelsiusAFahrenheit = (celcius) => {
    let gradosF = celcius*1.8 + 32;
    return gradosF;
}

let gradosF = convertirCelsiusAFahrenheit(gradosC);

console.log(gradosC + "°C son equivalentes a " + gradosF + "°F");

//5. Objetos en JavaScript
//Ejercio 1:
let persona = {
    nombre: "Fernanda",
    edad: "21",
    ciudad: "Buenos Aires",
}

const presentarBien = (alguien)=>{
    console.log("Persona: " + alguien.nombre + ", Edad: " + alguien.edad + ", Ciudad: " + alguien.ciudad);
}

presentarBien(persona);

const cambiarCiudad = (personita, newCiudad) => {
    persona.ciudad = newCiudad;
    return persona;
}

let newPersona = cambiarCiudad(persona, "Mendoza");

presentarBien(newPersona);

//Ejercicio 2:
let libro = {
    titulo: "Harry Potter y las Reliquias de la Muerte",
    autor: "JK Rowling",
    anio: 2013
}

const antiguedad = (librito) => {
    if(2024 - librito.anio > 10){
        return "true";
    } else{
        return "false";
    }
}

console.log("El libro: \"" + libro.titulo + "\" es antiguo: " + antiguedad(libro));

//6. Arrays
//Ejercicio 1:
let numeros = [1,2,3,4,5,6,7,8,9,10];

let newNumeros = numeros.map((elemento)=>{
    return elemento*2;
});

console.log("Números originales: " + numeros);
console.log("Números multiplicados por 2: " + newNumeros);

//Ejercicio 2:
let pares = [];

for(let i = 1; i<=20; i++){
    if(i%2===0){
        pares.push(i);
    }else{

    }
}

console.log("Primeros 10 números pares: " + pares);

//7. Introducción al DOM
//Ejercicio 1:
let caja = document.getElementById("ej7-1");
const button = document.getElementById("button1");
let contador1 = 0;

//Agrega la clase "azul" al elemento que se está llamando.
const cambioColor = ()=>{
    if(contador1===0){
        caja.classList.add('azul');
    contador1 = 1;
    }else{
        caja.classList.remove('azul');
        contador1 = 0;
    }
};

button.addEventListener("click",()=>{
    cambioColor();
},true);

//Ejercicio 2:
const formulario = document.querySelector("#formulario");

formulario.addEventListener("submit", (e)=>{
    e.preventDefault();
    const mensaje = document.querySelector("#mensaje").value;
    alert("Has ingresado: " + mensaje);
});

//8. Eventos en DOM
//Ejercicio 1:
const lista = document.getElementById("lista");

lista.addEventListener("click", (e)=>{
    if(e.target.classList.contains("click")){
        console.log(e.target.innerHTML);
    }
});

//Ejercicio 2:
const from82 = document.getElementById("form82");
const campoTexto = document.getElementById("campoTexto");
const btnHabi = document.getElementById("habilitar");
const btnDes = document.getElementById("deshabilitar");

btnDes.addEventListener("click",(e)=>{
    e.preventDefault();
    campoTexto.disabled = true;
});

btnHabi.addEventListener("click",(e)=>{
    e.preventDefault();
    campoTexto.disabled = false;
});

//9. LocalStorage
document.addEventListener("DOMContentLoaded", ()=>{
    
    const input9 = document.getElementById("email9");
    const btnGuardar = document.getElementById("guardare");
    const btnBorrar = document.getElementById("borrare");
    const emailDisplay = document.getElementById("emailDisplay");

    const displayEmail = ()=>{
        const emailGuardado = localStorage.getItem("correo");
        if(emailGuardado){
            emailDisplay.textContent = "Correo guardado: " + emailGuardado;
        }else{
            emailDisplay.textContent = "";
        }
    }
    

btnGuardar.addEventListener("click", (e)=>{
    e.preventDefault;
    localStorage.setItem("correo", input9.value);
    displayEmail();
});

btnBorrar.addEventListener("click", ()=>{
    localStorage.removeItem("correo");
});

    displayEmail();

});