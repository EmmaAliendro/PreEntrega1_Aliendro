//Sistema de loggeo para clientes registrados en un ciber

let usuario1 = "Matias"
let usuario2 = "Nelson"
let usuario3 = "Maxi"
let contrasenia = "pass"
let usuarioIngresado = prompt ("Ingrese nombre de Usuario")
let contraseniaIngresada = prompt ("Ingrese contraseña")
function Loggeo(){
    let contraseniaIngresada = prompt ("Ingrese contraseña")
        if (contraseniaIngresada == contrasenia){
            alert ("Bienvenido Su tiempo restante es de 3:00hs")
        }else{
            alert ("Contraseña Incorrecta")
        }
}   


if (usuarioIngresado == usuario1 || usuarioIngresado == usuario2 || usuarioIngresado == usuario3){
    Loggeo()

}else{
    alert("El usuario ingresado no existe")
}





