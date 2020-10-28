var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;


function verificar(formulario){

    var nombre_correccion=document.getElementById("mensaje_nombre")
    var correo_correccion=document.getElementById("mensaje_correo");
    var contraseña_correccion=document.getElementById("mensaje_contraseña");
    var Verificacion_correccion=document.getElementById("mensaje_verificacion");
    var opcion_correccion=document.getElementById("mensaje_opcion");


    if (formulario.nombre.value.trim().length < 5){
        nombre_correccion.innerText=("!---El nombre tiene que ser mayor que 5---!");
        return false
    }nombre_correccion.innerText=("");

    if (!re.test(formulario.email.value)){
        correo_correccion.innerText=("!---El correo tiene un formato erroneo---!");
        return false
    }correo_correccion.innerText=("");

    if(formulario.contraseña.value.trim().length < 8){
        contraseña_correccion.innerText=("!---Necesita minimo 8 caracteres---!");
        return false
    }contraseña_correccion.innerText=("");

    if(formulario.verificacion.value.trim().length  != contraseña.value.trim().length){
        Verificacion_correccion.innerText=("!---La contraseña no coincide---!");
        return false
    }Verificacion_correccion.innerText=("");

    if(formulario.opcion.value == "0"){
        opcion_correccion.innerText=("!---Por favor eliga un genero---!");
        return false
    }opcion_correccion.innerText=("");


    if(formulario.edades.value == ""){
        mensaje_edad.innerText=("!---Por favor eliga una edad---!");
        return false
    }mensaje_edad.innerText=("");

    $("#exito").modal("show")
    return true
}