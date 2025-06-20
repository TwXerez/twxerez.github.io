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

document.querySelectorAll('.detalle-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        const id = btn.getAttribute('data-id');
        const modal = document.getElementById(id);
        if (modal) modal.style.display = 'flex';
    });
});

document.querySelectorAll('.modal__cerrar').forEach(cerrar => {
    cerrar.addEventListener('click', () => {
        cerrar.closest('.modal').style.display = 'none';
    });
});

window.addEventListener('click', function (e) {
    document.querySelectorAll('.modal').forEach(modal => {
        if (e.target === modal) {
            modal.style.display = 'none';
        }
    });
});
