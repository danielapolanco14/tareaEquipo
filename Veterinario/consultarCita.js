document.addEventListener("DOMContentLoaded", () => {
  const detalleCita = document.getElementById("detalleCita");
  const btnMostrarModificar = document.getElementById("btnMostrarModificar");
  const btnEliminar = document.getElementById("btnEliminar");
  const btnAceptar = document.getElementById("btnAceptar");
  const buscarCitaForm = document.getElementById("buscarCitaForm");
  const buscarIdInput = document.getElementById("buscarIdInput");

  const formModificar = document.getElementById("formModificar");
  const inputIdDiagnostico = document.getElementById("idDiagnostico");
  const inputIdCita = document.getElementById("idCita");
  const inputDiagnostico = document.getElementById("diagnostico");
  const inputPrecio = document.getElementById("precio");
  const btnCancelarMod = document.getElementById("cancelarMod");

  function mostrarDiagnosticoTexto(dx) {
    detalleCita.innerHTML = `
      <p><strong>ID Diagnóstico:</strong> ${dx.id}</p>
      <p><strong>ID Cita:</strong> ${dx.cita}</p>
      <p><strong>Diagnóstico:</strong> ${dx.diagnostico}</p>
      <p><strong>Precio:</strong> $${dx.precio.toFixed(2)}</p>
    `;
  }

  function mostrarDiagnosticoForm(dx) {
    formModificar.style.display = "block";
    detalleCita.innerHTML = "";
    inputIdDiagnostico.value = dx.id;
    inputIdCita.value = dx.cita;
    inputDiagnostico.value = dx.diagnostico;
    inputPrecio.value = dx.precio;
  }

  function obtenerIdDesdeUrl() {
    const params = new URLSearchParams(window.location.search);
    return params.get("id");
  }

  function cargarDiagnosticoPorId(id) {
    if (!id) {
      detalleCita.innerHTML = "<p>No se proporcionó un ID válido.</p>";
      formModificar.style.display = "none";
      return null;
    }

    const diagnosticos = JSON.parse(localStorage.getItem("diagnosticos")) || [];
    const dx = diagnosticos.find((d) => d.id === id);

    if (dx) {
      mostrarDiagnosticoTexto(dx);
      formModificar.style.display = "none";
      return dx;
    } else {
      detalleCita.innerHTML = "<p>No se encontró información para este ID.</p>";
      formModificar.style.display = "none";
      return null;
    }
  }

  let diagnosticoActual = cargarDiagnosticoPorId(obtenerIdDesdeUrl());

  if (buscarCitaForm && buscarIdInput) {
    buscarCitaForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const nuevoId = buscarIdInput.value.trim();
      diagnosticoActual = cargarDiagnosticoPorId(nuevoId);
    });
  }

  if (btnMostrarModificar) {
    btnMostrarModificar.addEventListener("click", () => {
      if (!diagnosticoActual) {
        alert("Primero busca un diagnóstico válido.");
        return;
      }
      mostrarDiagnosticoForm(diagnosticoActual);
    });
  }

  if (btnCancelarMod) {
    btnCancelarMod.addEventListener("click", () => {
      formModificar.style.display = "none";
      if (diagnosticoActual) {
        mostrarDiagnosticoTexto(diagnosticoActual);
      } else {
        detalleCita.innerHTML = "<p>No hay diagnóstico cargado.</p>";
      }
    });
  }

  if (formModificar) {
    formModificar.addEventListener("submit", (e) => {
      e.preventDefault();
      if (!diagnosticoActual) return;

      const nuevoCita = inputIdCita.value.trim();
      const nuevoDiagnostico = inputDiagnostico.value.trim();
      const nuevoPrecio = parseFloat(inputPrecio.value);

      if (!nuevoCita || !nuevoDiagnostico || isNaN(nuevoPrecio)) {
        alert("Por favor, completa todos los campos correctamente.");
        return;
      }

      diagnosticoActual.cita = nuevoCita;
      diagnosticoActual.diagnostico = nuevoDiagnostico;
      diagnosticoActual.precio = nuevoPrecio;

      let diagnosticos = JSON.parse(localStorage.getItem("diagnosticos")) || [];
      const index = diagnosticos.findIndex((d) => d.id === diagnosticoActual.id);

      if (index !== -1) {
        diagnosticos[index] = diagnosticoActual;
        localStorage.setItem("diagnosticos", JSON.stringify(diagnosticos));
        alert("Diagnóstico modificado correctamente.");
        formModificar.style.display = "none";
        mostrarDiagnosticoTexto(diagnosticoActual);
      }
    });
  }

  if (btnEliminar) {
    btnEliminar.addEventListener("click", () => {
      if (!diagnosticoActual) {
        alert("Primero busca un diagnóstico válido.");
        return;
      }

      if (confirm(`¿Seguro que deseas eliminar el diagnóstico con ID ${diagnosticoActual.id}?`)) {
        let diagnosticos = JSON.parse(localStorage.getItem("diagnosticos")) || [];
        diagnosticos = diagnosticos.filter((d) => d.id !== diagnosticoActual.id);
        localStorage.setItem("diagnosticos", JSON.stringify(diagnosticos));
        detalleCita.innerHTML = "<p>Diagnóstico eliminado.</p>";
        formModificar.style.display = "none";
        diagnosticoActual = null;
      }
    });
  }

  if (btnAceptar) {
    btnAceptar.addEventListener("click", () => {
      window.location.href = "./Veterinarios/historiales.html";
    });
  }
});
