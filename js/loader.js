document.addEventListener('DOMContentLoaded', () => {
  // Lista de archivos a cargar en orden. 
  // Cuando tengas la captura 3, solo agregas 'secciones/seccion3_...html' aquí abajo.
  const secciones = [
    'secciones/seccion1_entorno.html',
    'secciones/seccion2_beneficios.html',
    'secciones/seccion3_opinion.html',
    'secciones/seccion4_investigacion.html',
    'secciones/seccion5_foda.html',
    'secciones/seccion6_problemacomunicacional.html'
  ];

  const contenedor = document.getElementById('contenido-unidad1');

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