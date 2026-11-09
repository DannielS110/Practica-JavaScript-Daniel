
const notas = [8, 6, 9, 7, 5, 10, 4, 7];

function analizarNotas() {
    const resultado = document.getElementById('resultado');

    if (notas.length === 0) {
        resultado.className = 'resultado error';
        resultado.textContent = 'No hay calificaciones para analizar.';
        return;
    }

    let suma = 0;
    let maxima = notas[0];
    let minima = notas[0];
    let aprobadas = 0;
    let noAprobadas = 0;

    for (let i = 0; i < notas.length; i++) {
        const nota = notas[i];

        if (
            typeof nota !== 'number' ||
            !Number.isFinite(nota) ||
            nota < 0 ||
            nota > 10
        ) {
            resultado.className = 'resultado error';
            resultado.textContent = 'Error: existen calificaciones fuera del intervalo de 0 a 10 o no válidas.';
            return;
        }

        suma += nota;

        if (nota > maxima) {
            maxima = nota;
        }

        if (nota < minima) {
            minima = nota;
        }

        if (nota >= 7) {
            aprobadas++;
        } else {
            noAprobadas++;
        }
    }

    resultado.className = 'resultado';

    resultado.innerHTML = `
        <div class="tarjeta">
            Calificaciones: ${notas.join(', ')}<br>
            Promedio: ${(suma / notas.length).toFixed(2)}<br>
            Nota máxima: ${maxima}<br>
            Nota mínima: ${minima}<br>
            Aprobadas: ${aprobadas}<br>
            No aprobadas: ${noAprobadas}
        </div>
    `;
}

document.getElementById('analizar').addEventListener('click', analizarNotas);
