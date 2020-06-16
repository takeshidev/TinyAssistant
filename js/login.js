function login() {
    var user = document.getElementById("usuario").value;
    window.localStorage.setItem('user', user);
    // var val = JSON.parse(window.localStorage.getItem('user'));
    console.log(user);
    document.getElementById("nomuser").innerHTML = user;
    document.getElementById("nohayusuario").hidden = true;
    document.getElementById("sihayusuario").hidden = false;
}

function verificarusuario() {
    console.log("Verificando usuario")
    var user2 = window.localStorage.getItem('user');
    console.log(user2)
    if (user2 !== null) {
        document.getElementById("nomuser").innerHTML = user2;
        document.getElementById("nohayusuario").hidden = true;
        document.getElementById("sihayusuario").hidden = false;
    } else {
        document.getElementById("sihayusuario").hidden = true;
    }
}

function cerrarsesion() {

    window.localStorage.clear();
    console.log("Cerrando sesion");
    location.reload();
}



verificarusuario();