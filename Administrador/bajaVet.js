
    document.getElementById("formBaja").addEventListener("submit", function (e) {
      e.preventDefault();
      const cedula = document.getElementById("cedula").value.trim();
      if (!cedula) {
        alert("Por favor ingresa una cédula.");
        return;
      }

      let veterinarios = JSON.parse(localStorage.getItem("veterinarios")) || [];
      const index = veterinarios.findIndex(v => v.cedula === cedula);

      const resultado = document.getElementById("resultado");

      if (index !== -1) {
        veterinarios.splice(index, 1);
        localStorage.setItem("veterinarios", JSON.stringify(veterinarios));
        resultado.innerHTML = `<div class="alert alert-success">Veterinario con cédula <strong>${cedula}</strong> eliminado correctamente.</div>`;
      } else {
        resultado.innerHTML = `<div class="alert alert-warning">No se encontró un veterinario con esa cédula.</div>`;
      }

      document.getElementById("formBaja").reset();
    });
