

function lanzadado(num) {
    var dado1 = Math.floor(Math.random() * 6) + 1;
    var dado2 = Math.floor(Math.random() * 6) + 1;
    var dado3 = Math.floor(Math.random() * 6) + 1;
    console.log(dado1);
    console.log(dado2);
    console.log(dado3);
    
    if (num == 1) {
        document.getElementById("d1").hidden = false;
        document.getElementById("d2").hidden = true;
        document.getElementById("d3").hidden = true;

        document.getElementById("d1").innerHTML = "Dado1: "+ dado1;

    } else if (num == 2) {
        document.getElementById("d1").hidden = false;
        document.getElementById("d2").hidden = false;
        document.getElementById("d3").hidden = true;

        document.getElementById("d1").innerHTML = "Dado1: "+dado1;
        document.getElementById("d1").innerHTML = "Dado2: "+dado2;
    } else if (num == 3) {
        document.getElementById("d1").hidden = false;
        document.getElementById("d2").hidden = false;
        document.getElementById("d3").hidden = false;

        document.getElementById("d1").innerHTML = "Dado1: "+dado1;
        document.getElementById("d2").innerHTML = "Dado2: "+dado2;
        document.getElementById("d3").innerHTML = "Dado3: "+dado3;
    }

}
