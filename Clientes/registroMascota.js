document.addEventListener("DOMContentLoaded", () => {
  const btn = document.getElementById("register");

  btn.addEventListener("click", (e) => {
    e.preventDefault();

    const mascota = {
      nombreMascota: document.getElementById("nombreMascota").value,
      nombreCliente: document.getElementById("nombreCliente").value,
      especie: document.getElementById("kindpet").value,
      sexo: document.querySelector('input[name="sex"]:checked')?.value || "No definido"
    };

    let mascotas = JSON.parse(localStorage.getItem("mascotas")) || [];
    mascotas.push(mascota);
    localStorage.setItem("mascotas", JSON.stringify(mascotas));

    alert("Mascota registrada correctamente.");
  });
});
