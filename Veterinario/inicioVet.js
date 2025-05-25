document.addEventListener("DOMContentLoaded", () => {
  // Veterinarios predefinidos
  const veterinariosPredefinidos = [
    { usuario: "Fidel", contraseña: "123" },
    { usuario: "docGamboa", contraseña: "Toki" },
    { usuario: "Eli", contraseña: "lala" },
  ];

  const loginBtn = document.getElementById("loginBtn");

  loginBtn.addEventListener("click", function () {
    const usuarioInput = document.getElementById("username").value.trim();
    const passwordInput = document.getElementById("password").value.trim();

    // Obtener veterinario registrado en localStorage
    const vetLocal = JSON.parse(localStorage.getItem("veterinario"));

    // Combinar todos los veterinarios (predefinidos + localStorage)
    const todosLosVeterinarios = [...veterinariosPredefinidos];
    if (vetLocal) {
      todosLosVeterinarios.push({
        usuario: vetLocal.usuario,
        contraseña: vetLocal.contrasena,
      });
    }

    const usuarioValido = todosLosVeterinarios.find(
      (v) => v.usuario === usuarioInput && v.contraseña === passwordInput
    );

    if (usuarioValido) {
      window.location.href = "seccionVet.html";
    } else {
      alert("Usuario o contraseña incorrectos");
    }
  });
});
