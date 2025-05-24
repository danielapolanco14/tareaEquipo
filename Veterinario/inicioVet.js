document.addEventListener("DOMContentLoaded", () => {
  const veterinarios = [
    { usuario: "Fidel", contraseña: "123" },
    { usuario: "docGamboa", contraseña: "Toki" },
    { usuario: "Eli", contraseña: "lala" },
  ];

  const loginBtn = document.getElementById("loginBtn");
  loginBtn.addEventListener("click", function () {
    const usuarioInput = document.getElementById("username").value.trim();
    const passwordInput = document.getElementById("password").value.trim();

    const usuarioValido = veterinarios.find(
      (v) => v.usuario === usuarioInput && v.contraseña === passwordInput
    );

    if (usuarioValido) {
      window.location.href = "seccionVet.html";
    } else {
      alert("Usuario o contraseña incorrectos");
    }
  });
});
