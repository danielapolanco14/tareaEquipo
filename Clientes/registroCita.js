document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector(".form-section");

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const cita = {
      cliente: document.getElementById("ownerName").value,
      mascota: document.getElementById("petName").value,
      tipoMascota: document.getElementById("petType").value,
      fecha: document.getElementById("appoimentDate").value,
      hora: document.getElementById("appoimentTime").value,
      servicio: document.getElementById("serviceType").value
    };

    let citas = JSON.parse(localStorage.getItem("citas")) || [];
    citas.push(cita);
    localStorage.setItem("citas", JSON.stringify(citas));

    alert("Cita agendada correctamente.");
  });
});
