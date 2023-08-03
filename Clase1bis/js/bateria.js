let sonidoBeatles = document.querySelector(".musica");
let sonidoAplausos= document.querySelector(".aplausos");

let beatles = document.querySelector(".beatles");
let beatlesBateria = document.querySelector(".beatles_bateria");

let estadoBateria = "apagado";

beatlesBateria.addEventListener("click", controlarBateria);

// funciones
function controlarBateria() {
  if (estadoBateria == "apagado") {
    estadoBateria = "encendido";
    sonidoBateria();
    
    beatles.classList.add("beatles-activo");
  } else {
    estadoBateria = "apagado";
    sonidoBateria();

    beatles.classList.remove("beatles-activo");
  }
}

function sonidoBateria(){

    if (sonidoBeatles.paused){
        /* sonidoAplausos.play(); */
        sonidoBeatles.play();

    }else{
       
        sonidoBeatles.pause();
        sonidoBeatles.currentTime=0;

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

