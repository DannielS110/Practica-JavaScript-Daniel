
function verificarClave() {
    const clave = document.getElementById('clave').value;
    const longitud = clave.length >= 8;

    let digito = false;
    let espacios = false;

    for (let i = 0; i < clave.length; i++) {
        if (clave[i] >= '0' && clave[i] <= '9') {
            digito = true;
        }

        if (clave[i] === ' ') {
            espacios = true;
        }
    }

    const reglas = [
        ['Al menos 8 caracteres', longitud],
        ['Contiene un dígito del 0 al 9', digito],
        ['No contiene espacios', !espacios]
    ];

    const resultado = document.getElementById('resultado');
    resultado.replaceChildren();

    for (const [nombre, cumple] of reglas) {
        const linea = document.createElement('div');

        linea.className = cumple ? 'bien' : 'error';
        linea.textContent = (cumple ? '✓ ' : '✗ ') + nombre;

        resultado.appendChild(linea);
    }

    if (longitud && digito && !espacios) {
        const mensaje = document.createElement('strong');

        mensaje.className = 'bien';
        mensaje.textContent = 'Cumple todas las reglas';

        resultado.appendChild(mensaje);
    }
}

document.getElementById('verificar').addEventListener('click', verificarClave);

document.getElementById('clave').addEventListener('input', verificarClave);
