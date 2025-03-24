document.getElementById("citaForm").addEventListener("submit", function (event) {
    event.preventDefault(); // Evita que el formulario se envíe

    // Captura los valores del formulario
    const nombre = document.getElementById("ownerName").value;
    const nombreMascota = document.getElementById("petName").value;
    const tipoMascota = document.getElementById("petType").value;
    const fechaCita = document.getElementById("appoimentDate").value;
    const horaCita = document.getElementById("appoimentTime").value;
    const servicio = document.getElementById("serviceType").value;

    // Guarda los datos en localStorage
    const datosCita = {
        nombre, nombreMascota, tipoMascota, fechaCita, horaCita, servicio,
    };
    localStorage.setItem("datosCita", JSON.stringify(datosCita));

    // Redirige a la página de detalle
    window.location.href = "ConsultarCIta.html";
});