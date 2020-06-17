function exito() {
    document.getElementById("resultadotest").innerHTML = "Lanzando...";
    setTimeout(function() { document.getElementById("resultadotest").innerHTML = '<i class="far fa-hand-peace"></i> Acción exitosa!!!' }, 700);
}

function fail() {
    document.getElementById("resultadotest").innerHTML = "Lanzando...";
    setTimeout(function() { document.getElementById("resultadotest").innerHTML = '<i class="fas fa-heart-broken"></i> Fallaste!' }, 700);
}


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

        document.getElementById("d1").innerHTML = "Dado1: " + dado1;
        document.getElementById("d2").innerHTML = "";
        document.getElementById("d3").innerHTML = "";

        if (dado1 >= 5) {
            exito();
        } else {
            fail();
        }

    } else if (num == 2) {
        document.getElementById("d1").hidden = false;
        document.getElementById("d2").hidden = false;
        document.getElementById("d3").hidden = true;

        document.getElementById("d1").innerHTML = "Dado1: " + dado1;
        document.getElementById("d2").innerHTML = "Dado2: " + dado2;
        document.getElementById("d3").innerHTML = "";

        if (dado1 >= 5 || dado2 >= 5) {
            exito()
        } else {
            fail();
        }
    } else if (num == 3) {
        document.getElementById("d1").hidden = false;
        document.getElementById("d2").hidden = false;
        document.getElementById("d3").hidden = false;

        document.getElementById("d1").innerHTML = "Dado1: " + dado1;
        document.getElementById("d2").innerHTML = "Dado2: " + dado2;
        document.getElementById("d3").innerHTML = "Dado3: " + dado3;

        if (dado1 >= 5 || dado2 >= 5 || dado3 >= 5) {
            exito()
        } else {
            fail();
        }
    }

}