document.addEventListener("DOMContentLoaded", () => {
  const btn = document.querySelector(".btnRegister");

  btn.addEventListener("click", (e) => {
    e.preventDefault();

    const cliente = {
      primerNombre: document.querySelector('input[placeholder="Primer nombre *"]').value,
      segundoNombre: document.querySelector('input[placeholder="Segundo nombre *"]').value,
      email: document.querySelector('input[type="email"]').value,
      telefono: document.querySelector('input[name="txtEmpPhone"]').value,
      usuario: document.querySelector('input[placeholder="Ingresa un usuario *"]').value,
      contrasena: document.querySelector('input[placeholder="Contraseña *"]').value
    };

    localStorage.setItem("cliente", JSON.stringify(cliente));
    alert("Cliente registrado correctamente.");
  });

  // Redirección al presionar Login
  const btnLogin = document.getElementById("btnLogin");
  btnLogin.addEventListener("click", () => {
    window.location.href = "inicioCliente.html";
  });
});
