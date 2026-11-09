
function calcularTotal() {
    const precioTexto = document.getElementById('precio').value.trim();
    const cantidadTexto = document.getElementById('cantidad').value.trim();
    const resultado = document.getElementById('resultado');

    const precio = Number(precioTexto);
    const cantidad = Number(cantidadTexto);

    if (
        precioTexto === '' ||
        cantidadTexto === '' ||
        !Number.isFinite(precio) ||
        precio <= 0 ||
        !Number.isInteger(cantidad) ||
        cantidad <= 0
    ) {
        resultado.className = 'resultado error';
        resultado.textContent = 'Error: ingresa un precio mayor que cero y una cantidad entera positiva.';
        return;
    }

    const subtotal = precio * cantidad;
    const descuento = subtotal >= 100 ? subtotal * 0.10 : 0;
    const total = subtotal - descuento;

    resultado.className = 'resultado';

    resultado.innerHTML = `
        <div class="tarjeta">
            Subtotal: $${subtotal.toFixed(2)}<br>
            Descuento (10 %): $${descuento.toFixed(2)}<br>
            <strong>Total: $${total.toFixed(2)}</strong>
        </div>
    `;
}

document.getElementById('calcular').addEventListener('click', calcularTotal);
