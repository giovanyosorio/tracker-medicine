// Define los medicamentos
let medicamentos = [
    { id: 1, nombre: 'Paracetamol', cantidad: 0, descripcion: 'Para el dolor y la fiebre' },
    { id: 2, nombre: 'Ibuprofeno', cantidad: 0, descripcion: 'Para el dolor y la inflamación' },
    { id: 3, nombre: 'Aspirina', cantidad: 0, descripcion: 'Para el dolor y la fiebre' }
  ];
  
  // Obtiene la referencia a la tabla de medicamentos en el DOM
  const tablaMedicamentos = document.getElementById('tabla-medicamentos');
  
  // Crea las filas de la tabla de medicamentos
  function crearFila(medicamento) {
    const fila = document.createElement('tr');
  
    const celdaNombre = document.createElement('td');
    celdaNombre.innerText = medicamento.nombre;
    fila.appendChild(celdaNombre);
  
    const celdaCantidad = document.createElement('td');
    const inputCantidad = document.createElement('input');
    inputCantidad.type = 'number';
    inputCantidad.min = '0';
    inputCantidad.value = medicamento.cantidad;
    inputCantidad.addEventListener('change', e => {
      const cantidad = parseInt(e.target.value);
      medicamento.cantidad = cantidad;
      actualizarMedicamento(medicamento.id, cantidad);
    });
    celdaCantidad.appendChild(inputCantidad);
    fila.appendChild(celdaCantidad);
  
    const celdaDescripcion = document.createElement('td');
    celdaDescripcion.innerText = medicamento.descripcion;
    fila.appendChild(celdaDescripcion);
  
    const celdaAccion = document.createElement('td');
    const botonEliminar = document.createElement('button');
    botonEliminar.innerText = 'Eliminar';
    botonEliminar.addEventListener('click', () => {
      eliminarMedicamento(medicamento.id);
      fila.remove();
    });
    celdaAccion.appendChild(botonEliminar);
    fila.appendChild(celdaAccion);
  
    return fila;
  }
  
  // Renderiza la tabla de medicamentos
  function renderizarTabla() {
    tablaMedicamentos.innerHTML = '';
    medicamentos.forEach(medicamento => {
      const fila = crearFila(medicamento);
      tablaMedicamentos.appendChild(fila);
    });
  }
  
  // Agrega un medicamento a la lista
  function agregarMedicamento(medicamento) {
    medicamentos.push(medicamento);
    renderizarTabla();
  }
  
  // Actualiza un medicamento en la base de datos
  function actualizarMedicamento(id, cantidad) {
    // Aquí podrías usar una API para comunicarte con una base de datos, como Firebase o una API REST
    console.log(`Medicamento ${id} actualizado a cantidad ${cantidad}`);
  }
  
  // Elimina un medicamento de la base de datos
  function eliminarMedicamento(id) {
    // Aquí podrías usar una API para comunicarte con una base de datos, como Firebase o una API REST
    console.log(`Medicamento ${id} eliminado`);
  }

  // Agrega un medicamento al hacer clic en el botón
const botonAgregar = document.getElementById('boton-agregar');
botonAgregar.addEventListener('click', () => {
  const nombre = prompt('Nombre del medicamento:');
  const cantidad = parseInt(prompt('Cantidad del medicamento:'));
  const descripcion = prompt('Descripción del medicamento:');
  const id = medicamentos.length + 1;
  agregarMedicamento({ id, nombre, cantidad, descripcion });
});

// Inicializa la tabla de medicamentos
renderizarTabla();
