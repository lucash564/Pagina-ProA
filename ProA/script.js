function mostrarTabla(tablaId) {
    // Oculta todas las tablas de docentes
    var tablasDocentes = document.querySelectorAll(".tabla-docentes");
    for (var i = 0; i < tablasDocentes.length; i++) {
      tablasDocentes[i].style.display = "none";
    }
  
    // Muestra la tabla correspondiente al año seleccionado
    var tabla = document.getElementById(tablaId);
    tabla.style.display = "block";
  }
  
  // Muestra la tabla del primer año por defecto
  window.onload = function() {
    mostrarTabla("tabla-1");
  };
  


