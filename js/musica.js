$(document).ready(function(){ verificar()
})

function verificar(){
    $.get("../datos.json" , function(datos){
        $.each(datos , function(obj,index){
            for( var sec of index){
                var ruta_audio=(("../canciones/")+sec.ruta);
                var ruta_icono=(("../imagenes/icon_")+sec.icono+(".svg"));
                var nombre_musica=(sec.nombre);
                var reproducciones_can=(sec.reproducciones);

                var contenedor=document.getElementById("Agregar");

                var ele_1=document.createElement("div");
                ele_1.setAttribute("class" , "col-12 col-md-6 col-xl-4 p-3 ");

                var ele_2=document.createElement("div");
                ele_2.setAttribute("class","card");

                var ele_3_v1=document.createElement("div");
                ele_3_v1.setAttribute("class","card-header text-center");


                var ele_3_v2=document.createElement("div");
                ele_3_v2.setAttribute("class","card-body text-center");
                ele_3_v2.setAttribute("style","honeydew");


                var imagen_icono =document.createElement("img");
                imagen_icono.setAttribute("src", ruta_icono)
                imagen_icono.setAttribute("width", "50px")
                imagen_icono.setAttribute("Name", "icono")


                var audio_titulo =document.createElement("h3");
                audio_titulo.setAttribute("class","col-12 text-center p-3")
                audio_titulo.innerText=(nombre_musica);

                var audio_control =document.createElement("audio");
                audio_control.setAttribute("class","col-12")
                audio_control.setAttribute("src",ruta_audio)
                audio_control.setAttribute("controls","")


                ele_3_v1.appendChild(imagen_icono)
                ele_3_v2.appendChild(audio_titulo)
                ele_3_v2.appendChild(audio_control)
                ele_2.appendChild(ele_3_v1);
                ele_2.appendChild(ele_3_v2);
                ele_1.appendChild(ele_2)
                contenedor.appendChild(ele_1);



            }



        })
    })
} 

