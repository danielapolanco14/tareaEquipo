document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("historialForm");
  const table = document.getElementById("diagnosticosTable");

  // Cargar datos guardados si existen
  const cargarDiagnosticos = () => {
    const datos = JSON.parse(localStorage.getItem("diagnosticos")) || [];
    table.innerHTML = "";
    datos.forEach((dx) => {
      const fila = `<tr>
                      <td>${dx.id}</td>
                      <td>${dx.cita}</td>
                      <td>${dx.diagnostico}</td>
                      <td>${dx.precio.toFixed(2)}</td>
                      <td>
                        <a href="ConsultarCita.html?id=${encodeURIComponent(dx.id)}" class="btn btn-sm btn-info">Ver Detalle</a>
                      </td>
                    </tr>`;
      table.insertAdjacentHTML("beforeend", fila);
    });
  };

  cargarDiagnosticos();

  // Guardar nuevo diagnóstico
  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const nuevo = {
      id: document.getElementById("idDiagnostico").value.trim(),
      cita: document.getElementById("cita").value.trim(),
      diagnostico: document.getElementById("diagnostico").value.trim(),
      precio: parseFloat(document.getElementById("precio").value)
    };

    if (!nuevo.id || !nuevo.cita || !nuevo.diagnostico || isNaN(nuevo.precio)) {
      alert("Por favor, completa todos los campos correctamente.");
      return;
    }

    let datos = JSON.parse(localStorage.getItem("diagnosticos")) || [];

    // Validar que no se repita el ID
    if (datos.some((d) => d.id === nuevo.id)) {
      alert("El ID del diagnóstico ya existe.");
      return;
    }

    datos.push(nuevo);
    localStorage.setItem("diagnosticos", JSON.stringify(datos));
    cargarDiagnosticos();
    form.reset();

    const modal = bootstrap.Modal.getInstance(document.getElementById("addHistoryModal"));
    modal.hide();
  });
});
