// Arreglo en memoria para almacenar los turnos
let turnos = [];

// Función para mostrar la sección seleccionada
function mostrarSeccion(seccion) {
    document.querySelectorAll('section').forEach((sec) => {
        sec.classList.remove('active');
    });
    document.getElementById(seccion).classList.add('active');

    if (seccion === 'inicio') {
        mostrarTurnosPorCliente();
    } else if (seccion === 'consultar') {
        mostrarTodosLosTurnos();
    }
}

// Función para agregar un nuevo turno
function agregarTurno(event) {
    event.preventDefault();
    const cliente = document.getElementById('cliente').value;
    const fecha = document.getElementById('fecha').value;
    const hora = document.getElementById('hora').value;

    // Validación de datos completos
    if (cliente && fecha && hora) {
        const id = turnos.length + 1;
        turnos.push({ id, cliente, fecha, hora });
        alert('Turno agregado correctamente.');
        
        // Limpiar el formulario
        document.getElementById('cliente').value = '';
        document.getElementById('fecha').value = '';
        document.getElementById('hora').value = '';
    } else {
        alert('Complete todos los campos.');
    }
}

// Función para mostrar el total de turnos por cliente en el Dashboard
function mostrarTurnosPorCliente() {
    const conteoClientes = {};
    turnos.forEach(turno => {
        conteoClientes[turno.cliente] = (conteoClientes[turno.cliente] || 0) + 1;
    });

    const tbody = document.getElementById('tablaTurnosCliente').getElementsByTagName('tbody')[0];
    tbody.innerHTML = '';
    for (const cliente in conteoClientes) {
        const row = tbody.insertRow();
        row.insertCell(0).textContent = cliente;
        row.insertCell(1).textContent = conteoClientes[cliente];
    }
}

// Función para mostrar todos los turnos en la sección "Consultar turnos"
function mostrarTodosLosTurnos() {
    const tbody = document.getElementById('tablaTurnos').getElementsByTagName('tbody')[0];
    tbody.innerHTML = '';
    turnos.forEach(turno => {
        const row = tbody.insertRow();
        row.insertCell(0).textContent = turno.id;
        row.insertCell(1).textContent = turno.cliente;
        row.insertCell(2).textContent = turno.fecha;
        row.insertCell(3).textContent = turno.hora;
    });
}
