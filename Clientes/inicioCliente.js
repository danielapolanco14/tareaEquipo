document.addEventListener("DOMContentLoaded", () => {
  const clientes = [
    { usuario: "Lola", contraseña: "123" },
    { usuario: "Dani", contraseña: "Fidel" },
    { usuario: "Eli", contraseña: "lala" },
  ];

  const loginBtn = document.getElementById("loginBtn");
  loginBtn.addEventListener("click", function () {
    const usuarioInput = document.getElementById("username").value.trim();
    const passwordInput = document.getElementById("password").value.trim();

    const usuarioValido = clientes.find(
      (v) => v.usuario === usuarioInput && v.contraseña === passwordInput
    );

    if (usuarioValido) {
      window.location.href = "seccionCliente.html";
    } else {
      alert("Usuario o contraseña incorrectos");
    }
  });
});
