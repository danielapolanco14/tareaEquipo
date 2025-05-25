document.getElementById("formBaja").addEventListener("submit", function (e) {
  e.preventDefault();

  const cedula = document.getElementById("cedula").value.trim();
  const resultado = document.getElementById("resultado");

  // Obtener lista actual de veterinarios
  let listaVeterinarios = JSON.parse(localStorage.getItem("veterinarios")) || [];

  // Buscar veterinario por cédula
  const index = listaVeterinarios.findIndex(v => v.cedula === cedula);

  if (index !== -1) {
    // Eliminar del array
    listaVeterinarios.splice(index, 1);

    // Guardar nueva lista
    localStorage.setItem("veterinarios", JSON.stringify(listaVeterinarios));

    resultado.innerHTML = `<div class="alert alert-success">
      Veterinario con cédula <strong>${cedula}</strong> eliminado correctamente.
    </div>`;
  } else {
    resultado.innerHTML = `<div class="alert alert-warning">
      No se encontró un veterinario con la cédula <strong>${cedula}</strong>.
    </div>`;
  }

  // Limpiar el campo de cédula
  document.getElementById("formBaja").reset();
});
