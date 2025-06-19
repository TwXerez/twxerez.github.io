function filtrarResultados() {
    const seleccion = document.getElementById('filtroResultados').value;
    const resultados = document.querySelectorAll('.resultado__partido');

    resultados.forEach(partido => {
        if (seleccion === 'todas') {
            partido.style.display = 'flex';
        } else {
            partido.classList.contains(seleccion)
                ? partido.style.display = 'flex'
                : partido.style.display = 'none';
        }
    });
}

function filtrarCalendario() {
    const seleccion = document.getElementById('filtroCalendario').value;
    const partidos = document.querySelectorAll('.calendario__partido');

    partidos.forEach(partido => {
        if (seleccion === 'todas') {
            partido.style.display = 'flex';
        } else {
            partido.classList.contains(seleccion)
                ? partido.style.display = 'flex'
                : partido.style.display = 'none';
        }
    });
}

