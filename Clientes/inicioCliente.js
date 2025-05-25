document.addEventListener("DOMContentLoaded", () => {
  // Usuarios predefinidos
  const clientesPredefinidos = [
    { usuario: "Lola", contraseña: "123" },
    { usuario: "Dani", contraseña: "Fidel" },
    { usuario: "Eli", contraseña: "lala" },
  ];

  const loginBtn = document.getElementById("loginBtn");

  loginBtn.addEventListener("click", function () {
    const usuarioInput = document.getElementById("username").value.trim();
    const passwordInput = document.getElementById("password").value.trim();

    // Obtener usuario registrado en localStorage
    const clienteLocal = JSON.parse(localStorage.getItem("cliente"));

    // Combinar todos los clientes (predefinidos + registrados)
    const todosLosClientes = [...clientesPredefinidos];
    if (clienteLocal) {
      todosLosClientes.push({
        usuario: clienteLocal.usuario,
        contraseña: clienteLocal.contrasena,
      });
    }

    const usuarioValido = todosLosClientes.find(
      (c) => c.usuario === usuarioInput && c.contraseña === passwordInput
    );

    if (usuarioValido) {
      window.location.href = "seccionCliente.html";
    } else {
      alert("Usuario o contraseña incorrectos");
    }
  });
});
