const grid = new Muuri('.grid',{
    layout: {
         rounding: false
    }
});

window.addEventListener('load', () => {
    grid.refreshItems().layout();
    document.getElementById('grid').classList.add('imagenes-cargadas');

    const enlaces = document.querySelectorAll('#categories a');
    enlaces.forEach((enlace) => {
         enlace.addEventListener('click', (event) => {
              event.preventDefault();

              enlaces.forEach((enlace) => enlace.classList.remove('activo'));
              event.target.classList.add('activo');

              const categoria = event.target.innerHTML.toLowerCase();

              console.log(categoria);

              categoria === 'all' ? grid.filter('[data-categoria]') : grid.filter(`[data-categoria="${categoria}"]`);
         });
    });

    document.querySelector('#barra-busqueda').addEventListener('input', (event) => {
         const busqueda = event.target.value;
         grid.filter( (item) => item.getElement().dataset.etiquetas.includes(busqueda) );
    });
    
});