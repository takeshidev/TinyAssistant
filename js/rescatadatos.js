var nombre = window.localStorage.getItem('nombre');
document.getElementById("nombre").innerHTML = nombre;
console.log("nombre:" + nombre);

var herenciaX = window.localStorage.getItem('herencia');
if (herenciaX == '1') {
    document.getElementById("hiddRasgo4").hidden = false;
    console.log("humanooo");
    var rasgo4 = window.localStorage.getItem('rasgo4');
    rasgo4 = rasgos[rasgo4];
    document.getElementById("rasgo4").innerHTML = rasgo4;
} else {
    console.log("no humano");
    localStorage.setItem("rasgo4", "");
    document.getElementById("hiddRasgo4").innerHTML = "";

}

if (herenciaX == '5') {
    document.getElementById("hiddSolimar").hidden = false;
    console.log("Solimar");
    var rasgosoli = window.localStorage.getItem('rasgosoli');
    console.log("rasgosoli: " + rasgosoli);
    rasgosoli = solimars[rasgosoli];
    document.getElementById("rasgosoli").innerHTML = rasgosoli;
} else {
    console.log("no solimar");
    localStorage.setItem("rasgosoli", "2");
    document.getElementById("hiddSolimar").innerHTML = "";
}

herenciaX = herencia[herenciaX];
document.getElementById("herencia").innerHTML = herenciaX;

var pais = window.localStorage.getItem('pais');
document.getElementById("pais").innerHTML = pais;

var edad = window.localStorage.getItem('edad');
document.getElementById("edad").innerHTML = edad;

var ojos = window.localStorage.getItem('ojos');
document.getElementById("ojos").innerHTML = ojos;

var pelo = window.localStorage.getItem('pelo');
document.getElementById("pelo").innerHTML = pelo;

var rasgo1 = window.localStorage.getItem('rasgo1');
rasgo1 = rasgos[rasgo1];
document.getElementById("rasgo1").innerHTML = rasgo1;

var rasgo2 = window.localStorage.getItem('rasgo2');
rasgo2 = rasgos[rasgo2];
document.getElementById("rasgo2").innerHTML = rasgo2;

var rasgo3 = window.localStorage.getItem('rasgo3');
rasgo3 = rasgos[rasgo3];
document.getElementById("rasgo3").innerHTML = rasgo3;

var oficio = window.localStorage.getItem('oficio');
document.getElementById("oficio").innerHTML = oficio;

var creencias = window.localStorage.getItem('creencias');
document.getElementById("creencias").innerHTML = creencias;

var armarango = window.localStorage.getItem('armarango');
armarango = especialidades[armarango];
document.getElementById("armarango").innerHTML = armarango;

var armafav = window.localStorage.getItem('arma');
document.getElementById("armafav").innerHTML = armafav;