document.addEventListener('DOMContentLoaded', () => {
  // Lista de archivos de la unidad 2 a cargar en orden escalable.
  const secciones = [
    'seccionesUnidad2/seccion1_aspectos.html',
    'seccionesUnidad2/seccion2_propuestadevalor.html',
    'seccionesUnidad2/seccion3_objetivosmarketing.html',
    'seccionesUnidad2/seccion4_justificacionestrategias.html',
    'seccionesUnidad2/seccion5_post_inicio.html',
    'seccionesUnidad2/seccion6_post_informativo.html',
    'seccionesUnidad2/seccion7_post_promocional.html',
    'seccionesUnidad2/seccion8_presupuesto.html',
    'seccionesUnidad2/seccion9_anexo.html'

    // Cuando tengas la siguiente sección, solo agrégala aquí abajo:
    // 'seccionesUnidad2/seccion2_nombre.html'
  ];

  const contenedor = document.getElementById('contenido-unidad2');

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