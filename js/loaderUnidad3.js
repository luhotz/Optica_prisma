document.addEventListener('DOMContentLoaded', () => {
  const secciones = [
    'seccionesUnidad3/seccion1_recomendacionestrategica.html',
    'seccionesUnidad3/seccion2_insight.html',
    'seccionesUnidad3/seccion3_posts.html',
    'seccionesUnidad3/seccion4_plandemedios.html' // <-- Nueva sección de Plan de Medios
  ];

  const contenedor = document.getElementById('contenido-unidad3');
  if (!contenedor) return;

  async function cargarSecciones() {
    for (const ruta of secciones) {
      try {
        const respuesta = await fetch(ruta);
        if (respuesta.ok) {
          const html = await respuesta.text();
          contenedor.insertAdjacentHTML('beforeend', html);
        } else {
          console.error(`Error 404: No se encontró la sección ${ruta}`);
        }
      } catch (error) {
        console.error(`Error de red al cargar ${ruta}:`, error);
      }
    }
  }

  cargarSecciones();
});