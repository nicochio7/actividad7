// Arreglo en memoria para turnos
let turnos = [
    { id: '1', fecha: '2024-10-30', hora: '10:00', cliente: 'Cliente 1' },
    { id: '2', fecha: '2024-10-31', hora: '11:00', cliente: 'Cliente 2' },
  ];
  
  // Alternar entre secciones
  function mostrarSeccion(seccion) {
    document.querySelectorAll('section').forEach(sec => sec.style.display = 'none');
    document.getElementById(seccion).style.display = 'block';
  }
  
  // Cargar datos en tablas
  function cargarTablaTurnos() {
    const tablaTurnos = document.getElementById('tablaTurnos');
    tablaTurnos.innerHTML = '';
    turnos.forEach(turno => {
      const fila = `<tr><td>${turno.id}</td><td>${turno.fecha}</td><td>${turno.hora}</td><td>${turno.cliente}</td></tr>`;
      tablaTurnos.insertAdjacentHTML('beforeend', fila);
    });
  }
  
  function cargarTablaClientes() {
    const clientes = {};
    turnos.forEach(turno => {
      clientes[turno.cliente] = (clientes[turno.cliente] || 0) + 1;
    });
  
    const tablaClientes = document.getElementById('tablaClientes');
    tablaClientes.innerHTML = '';
    for (let cliente in clientes) {
      const fila = `<tr><td>${cliente}</td><td>${clientes[cliente]}</td></tr>`;
      tablaClientes.insertAdjacentHTML('beforeend', fila);
    }
  }
  
  // Registrar turno
  function registrarTurno(event) {
    event.preventDefault();
    const id = document.getElementById('id').value;
    const fecha = document.getElementById('fecha').value;
    const hora = document.getElementById('hora').value;
    const cliente = document.getElementById('cliente').value;
  
    // Validación básica
    if (id && fecha && hora && cliente) {
      turnos.push({ id, fecha, hora, cliente });
      cargarTablaTurnos();
      cargarTablaClientes();
      alert('Turno registrado exitosamente!');
      document.getElementById('formTurno').reset();
    } else {
      alert('Por favor completa todos los campos.');
    }
  }
  
  // Inicializar
  document.addEventListener('DOMContentLoaded', () => {
    mostrarSeccion('inicio');
    cargarTablaTurnos();
    cargarTablaClientes();
  });
  