var nombre = window.localStorage.getItem('nombre');
document.getElementById("nombre").innerHTML = nombre;
console.log("nombre:"+ nombre);
var herencia = window.localStorage.getItem('herencia');
document.getElementById("herencia").innerHTML = herencia;
var pais = window.localStorage.getItem('pais');
document.getElementById("pais").innerHTML = pais;
var edad = window.localStorage.getItem('edad');
document.getElementById("edad").innerHTML = edad;
var ojos = window.localStorage.getItem('ojos');
document.getElementById("ojos").innerHTML = ojos;
var pelo = window.localStorage.getItem('pelo');
document.getElementById("pelo").innerHTML = pelo;
var rasgo1 = window.localStorage.getItem('rasgo1');
document.getElementById("rasgo1").innerHTML = rasgo1;
var rasgo2 = window.localStorage.getItem('rasgo2');
document.getElementById("rasgo2").innerHTML = rasgo2;
var rasgo3 = window.localStorage.getItem('rasgo3');
document.getElementById("rasgo3").innerHTML = rasgo3;
var rasgo4 = window.localStorage.getItem('rasgo4');
document.getElementById("rasgo4").innerHTML = rasgo4;
var rasgosoli = window.localStorage.getItem('rasgosoli');
document.getElementById("rasgosoli").innerHTML = rasgosoli;
var oficio = window.localStorage.getItem('oficio');
document.getElementById("oficio").innerHTML = oficio;
var creencias = window.localStorage.getItem('creencias');
document.getElementById("creencias").innerHTML = creencias;
var armarango = window.localStorage.getItem('armarango');
document.getElementById("armarango").innerHTML = armarango;
var armafav = window.localStorage.getItem('armafav');
document.getElementById("armafav").innerHTML = armafav;

if (herencia == '1') {
    document.getElementById("hiddRasgo4").hidden = false;
    console.log("humanooo");
}

if (herencia == '5') {
    document.getElementById("hiddSolimar").hidden = false;
    console.log("Solimar");
    console.log(rasgosoli);
}

