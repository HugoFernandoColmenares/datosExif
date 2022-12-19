// Obtiene el botón y el div donde se mostrarán los datos EXIF
var boton = document.getElementById('boton');
var datos = document.getElementById('datos');

// Agrega un manejador de eventos al botón
boton.addEventListener('click', function() {
  // Obtiene la imagen del formulario
  var imagen = document.getElementById('imagen').files[0];

  // Usa exif-js para obtener los datos EXIF de la imagen
  EXIF.getData(imagen, function() {
    var exifData = EXIF.getAllTags(this);
    console.log(exifData);

    // Muestra los datos EXIF en el div
    for (var propiedad in exifData) {
      if (exifData.hasOwnProperty(propiedad)) {
        datos.innerHTML += '<p><strong>' + propiedad + '</strong>: ' + exifData[propiedad] + '</p>';
      }
    }
  });
});

document.getElementById("descargarDatos").addEventListener("click", function() {
  // Obtener el contenido de texto del documento HTML
  var text = document.getElementById('datos').textContent;

  // Crear un enlace de descarga
  var a = document.createElement("a");
  a.href = "data:text/plain," + encodeURIComponent(text);
  a.download = "document.txt";

  // Añadir el enlace al documento y hacer clic en él
  document.body.appendChild(a);
  a.click();

  // Eliminar el enlace del documento
  document.body.removeChild(a);
});