function agregarTarea() {
    const campo = document.getElementById('tarea');
    const texto = campo.value.trim();
    const mensaje = document.getElementById('mensaje');

    if (texto === '') {
        mensaje.textContent = 'Error: escribe una tarea válida.';
        return;
    }

    mensaje.textContent = '';

    const li = document.createElement('li');

    const casilla = document.createElement('input');
    casilla.type = 'checkbox';

    const nombre = document.createElement('span');
    nombre.textContent = texto;

    casilla.addEventListener('change', () => {
        nombre.classList.toggle('completada', casilla.checked);
    });

    const eliminar = document.createElement('button');
    eliminar.textContent = 'Eliminar';
    eliminar.className = 'eliminar';

    eliminar.addEventListener('click', () => {
        li.remove();
    });

    li.append(casilla, nombre, eliminar);

    document.getElementById('lista').appendChild(li);

    campo.value = '';
    campo.focus();
}

document.getElementById('agregar').addEventListener('click', agregarTarea);

document.getElementById('tarea').addEventListener('keydown', e => {
    if (e.key === 'Enter') {
        agregarTarea();
    }
});
