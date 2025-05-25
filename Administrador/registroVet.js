document.getElementById("btnRegistro").addEventListener("click", function (e) {
  e.preventDefault();

  const datosVeterinario = {
    cedula: document.getElementById("cedula").value,
    sueldo: parseFloat(document.getElementById("sueldo").value),
    nombre1: document.getElementById("nombre1").value,
    nombre2: document.getElementById("nombre2").value,
    email: document.getElementById("email").value,
    telefono: document.getElementById("telefono").value,
    usuario: document.getElementById("usuario").value,
    contrasena: document.getElementById("password").value,
    confirmar: document.getElementById("confirmar").value,
    especialidad: document.getElementById("especialidad").value,
  };

  // Validación de contraseña
  if (datosVeterinario.contrasena !== datosVeterinario.confirmar) {
    alert("Las contraseñas no coinciden");
    return;
  }

  // Validar campos obligatorios
  if (
    !datosVeterinario.usuario ||
    !datosVeterinario.contrasena ||
    isNaN(datosVeterinario.sueldo)
  ) {
    alert("Por favor completa todos los campos obligatorios.");
    return;
  }

  // Cargar lista existente
  let listaVeterinarios = JSON.parse(localStorage.getItem("veterinarios")) || [];

  // Verificar duplicado
  const existe = listaVeterinarios.some(
    (v) => v.usuario === datosVeterinario.usuario
  );
  if (existe) {
    alert("Ese usuario ya está registrado.");
    return;
  }

  // Guardar
  listaVeterinarios.push(datosVeterinario);
  localStorage.setItem("veterinarios", JSON.stringify(listaVeterinarios));

  alert("Veterinario registrado correctamente.");

  // Limpiar formulario
  document.getElementById("cedula").value = "";
  document.getElementById("sueldo").value = "";
  document.getElementById("nombre1").value = "";
  document.getElementById("nombre2").value = "";
  document.getElementById("email").value = "";
  document.getElementById("telefono").value = "";
  document.getElementById("usuario").value = "";
  document.getElementById("password").value = "";
  document.getElementById("confirmar").value = "";
  document.getElementById("especialidad").selectedIndex = 0;
});
