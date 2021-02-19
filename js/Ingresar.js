var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;




function verificar(formulario){
    var correo_error=document.getElementById("mensaje_correo");
    var contraseña_error=document.getElementById("mensaje_contraseña");


    if(!re.test(formulario.email.value)){
        correo_error.innerText=("!--- Correo invalido---!");
        return false
    }correo_error.innerText=("");
 
     
    if(formulario.contraseña.value.trim().length < 8){
        contraseña_error.innerText=("!--- Contraseña incorrecta---!");
        return false
    }contraseña_error.innerText=("");

       $("#exito").modal("show")   
    

return true
}

