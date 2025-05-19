
const form = document.getElementById('appointmentForm');

form.addEventListener('submit', (event) => {
    event.preventDefault(); // Prevenir el envío por defecto
    alert('Cita guardada exitosamente.');
});

const backButton = document.getElementById('back');
backButton.addEventListener('click', () => {
    window.history.back(); // Volver a la página anterior
});
