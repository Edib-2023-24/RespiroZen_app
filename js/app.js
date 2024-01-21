function startBreath() {
  // Cambiar el tamaño y radio del círculo al hacer clic en Start
  document.getElementById("circulo").style.width = "309px";
  document.getElementById("circulo").style.height = "315px";
  document.getElementById("circulo").style.borderRadius = "315px";

  // Ocultar botones Start y About
  document.querySelector(".start-button").style.display = "none";
  document.querySelector(".about-button").style.display = "none";

  // Mostrar el botón Restart
  document.querySelector(".restart-button").style.display = "inline";

  // Agregar la clase 'breath' al círculo después de un breve tiempo
  setTimeout(function () {
    document.getElementById("circulo").classList.add("breath");
  }, 100);
}

function restartBreath() {
  // Mostrar botones Start y About
  document.querySelector(".start-button").style.display = "inline";
  document.querySelector(".about-button").style.display = "inline";

  // Ocultar el botón Restart
  document.querySelector(".restart-button").style.display = "none";

  // Detener la animación eliminando la clase 'breath'
  document.getElementById("circulo").classList.remove("breath");
}
