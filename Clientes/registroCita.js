document.addEventListener("DOMContentLoaded", function () {
  const citaForm = document.getElementById('citaForm');
  const agendarBtn = document.getElementById('agendarBtn');
  const spinnerIcon = document.getElementById('spinnerIcon');
  const btnText = document.getElementById('btnText');

  agendarBtn.addEventListener('click', function () {
    if (!citaForm.checkValidity()) {
      citaForm.classList.add('was-validated');
      return;
    }

    spinnerIcon.classList.remove('d-none');
    btnText.textContent = 'Agendando...';
    agendarBtn.disabled = true;

    setTimeout(() => {
      spinnerIcon.classList.add('d-none');
      alert('¡Cita agendada correctamente!');
      btnText.textContent = 'Agendar';
      agendarBtn.disabled = false;
      // citaForm.reset();
      // citaForm.classList.remove('was-validated');
    }, 1500);
  });
});
