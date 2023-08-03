let sonidoBatman = document.querySelector(".bati_encendido");
let sonidoBoton = document.querySelector(".bati_click");

let batman = document.querySelector(".batman");
let batmanBoton = document.querySelector(".bati_boton");

let estadoLinterna = "apagado";

batmanBoton.addEventListener("click",controlarLinterna);

// funciones
function controlarLinterna() {
  if (estadoLinterna == "apagado") {
    estadoLinterna = "encendido";
    sonidoLinterna();
    
    batman.classList.add("batman-activo");
  } else {
    estadoLinterna = "apagado";
    sonidoLinterna();

   
    batman.classList.remove("batman-activo");
  }
}

function sonidoLinterna(){

    if (sonidoBatman.paused){
        sonidoBoton.play();
        sonidoBatman.play();

    }else{
        sonidoBoton.play();
        sonidoBatman.pause();
        sonidoBatman.currentTime=0;

    }
}

/* const controlarLinterna = () => {
    console.log(!estadoLinternada);
    if (!estadoLinternada) {
        estadoLinternada = true;
        sonidoLinterna();
        batman.classList.add('batman_activo');
    } else {
        estadoLinternada = false;
        sonidoLinterna();
        batman.classList.remove('batman_activo');
    }
}

const sonidoLinterna = () => {
    if (sonidoBatman.paused) {
        sonidoClick.play();
        sonidoBatman.play();
    } else {
        sonidoClick.play();
    }
} */

