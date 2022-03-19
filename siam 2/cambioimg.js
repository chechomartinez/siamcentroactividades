
  var fotoMostrada = "MUSCULACION";      
  function miFuncion(){
    var imagen = document.getElementById("foto");
    if(fotoMostrada == "MUSCULACION"){
        imagen.src = "/GRAFICAS/musculacion.png";
        fotoMostrada = "HORARIOS";
    }
    else {
        imagen.src = "/GRAFICAS/horario-musculacion.png";
        fotoMostrada = "MUSCULACION";
    }
  }


  var fotoMostrada = "MUAYTHAI";      
  function miFuncion1(){
    var imagen = document.getElementById("foto2");
    if(fotoMostrada == "MUAYTHAI"){
        imagen.src = "/GRAFICAS/muaythai.png";
        fotoMostrada = "HORARIOS";
    }
    else {
        imagen.src = "/GRAFICAS/thai-horarios.png";
        fotoMostrada = "MUAYTHAI";
    }
  }

  var fotoMostrada = "BOXEO";      
  function miFuncion2(){
    var imagen = document.getElementById("foto3");
    if(fotoMostrada == "BOXEO"){
        imagen.src = "/GRAFICAS/boxeo-horarios.png";
        fotoMostrada = "HORARIOS";
    }
    else {
        imagen.src = "/GRAFICAS/BOXEO.png";
        fotoMostrada = "BOXEO";
    }
  }

  var fotoMostrada = "MMA";      
  function miFuncion3(){
    var imagen = document.getElementById("foto4");
    if(fotoMostrada == "MMA"){
        imagen.src = "/GRAFICAS/horarios-mma.png";
        fotoMostrada = "HORARIOS";
    }
    else {
        imagen.src = "/GRAFICAS/MMA.png";
        fotoMostrada = "MMA";
    }
  }

  var fotoMostrada = "HF";      
  function miFuncion4(){
    var imagen = document.getElementById("foto5");
    if(fotoMostrada == "HF"){
        imagen.src = "/GRAFICAS/hit-horarios.png";
        fotoMostrada = "HORARIOS";
    }
    else {
        imagen.src = "/GRAFICAS/hit-funcional.png";
        fotoMostrada = "HF";
    }
  }

  