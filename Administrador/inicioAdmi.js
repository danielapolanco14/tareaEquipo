document.addEventListener('DOMContentLoaded', () => {
  // Capturar el botón de login utilizando su clase
  const loginButton = document.querySelector('.btn.btn-info');

  // Verificar si el botón existe
  if (loginButton) {
    // Agregar evento de clic
    loginButton.addEventListener('click', () => {
      // Capturar los valores de los campos de entrada
      const username = document.querySelector('input[placeholder="Usuario"]').value;
      const password = document.querySelector('input[placeholder="Contraseña"]').value;

      // Validar las credenciales
      if (username === 'admi' && password === 'vet123') {
        // Redirigir a la página de administrador
        window.location.href = 'seccionAdmi.html';
      } else {
        // Mostrar un mensaje de error
        alert('Usuario o contraseña incorrectos. Por favor, inténtelo de nuevo.');
      }
    });
  } else {
    console.error('El usuario o la contraseña son incorrectas.');
  }
});
