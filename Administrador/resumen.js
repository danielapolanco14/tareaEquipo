document.addEventListener("DOMContentLoaded", () => {
  // 1. Obtener diagnósticos (citas atendidas)
  const diagnosticos = JSON.parse(localStorage.getItem("diagnosticos")) || [];

  // 2. Total de citas atendidas y suma de precios
  const totalCitas = diagnosticos.length;
  const totalIngresos = diagnosticos.reduce((sum, dx) => sum + (Number(dx.precio) || 0), 0);

  // 3. Tipo de cita más solicitado (buscando en "citas")
  const citas = JSON.parse(localStorage.getItem("citas")) || [];
  const tipoMasSolicitado = citas.reduce((acc, c) => {
    acc[c.servicio] = (acc[c.servicio] || 0) + 1;
    return acc;
  }, {});
  const tipoPopular = Object.keys(tipoMasSolicitado).reduce((a, b) => tipoMasSolicitado[a] > tipoMasSolicitado[b] ? a : b, "Sin datos");

  // 4. Obtener veterinarios y sumar sueldos
  const veterinarios = JSON.parse(localStorage.getItem("veterinarios")) || [];
  const totalSueldos = veterinarios.reduce((sum, vet) => sum + (Number(vet.sueldo) || 0), 0);

  // 5. Otros gastos fijos
  const otrosGastos = 300;

  // 6. Calcular utilidad
  const utilidad = totalIngresos - totalSueldos - otrosGastos;

  // 7. Mostrar resumen
  const items = document.querySelectorAll("#resumen .list-group-item");
  items[0].innerText = `Total de Citas: ${totalCitas}`;
  items[1].innerText = `Tipo de cita más Solicitado: ${tipoPopular}`;
  items[2].innerText = `Total a pagar a personal: $${totalSueldos.toFixed(2)}`;
  items[3].innerText = `Total ganado de Citas: $${totalIngresos.toFixed(2)}`;
  items[4].innerText = `Otros gastos: $${otrosGastos.toFixed(2)}`;
  items[5].innerText = `UTILIDAD: $${utilidad.toFixed(2)}`;
});
