
// Recupera  datos de localStorage
const datosCita = JSON.parse(localStorage.getItem("datosCita"));

// Muestra los datos 
if (datosCita) {
  const detalleCita = document.getElementById("detalleCita");
  detalleCita.innerHTML = `
    <p><strong>Nombre del Cliente:</strong> ${datosCita.nombre}</p>
    <p><strong>Nombre Mascota:</strong> ${datosCita.nombreMascota}</p>
    <p><strong>Tipo de Mascota:</strong> ${datosCita.tipoMascota}</p>
    <p><strong>Fecha de Cita:</strong> ${datosCita.fechaCita}</p>
    <p><strong>Hora Cita:</strong> ${datosCita.horaCita}</p>
    <p><strong>Servicio Requerido:</strong> ${datosCita.servicio}</p>
  `;
} else {
  document.getElementById("detalleCita").innerHTML = "<p>No hay datos de la cita.</p>";
}
