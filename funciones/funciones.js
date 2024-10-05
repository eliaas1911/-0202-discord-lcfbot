function fecha() {
    let today = new Date();

    // Formatear la fecha
    let day = String(today.getDate()).padStart(2, '0'); // Día
    let month = String(today.getMonth() + 1).padStart(2, '0'); // Mes (los meses son 0-indexados)
    let year = today.getFullYear(); // Año

    // Combinar en un formato "DD/MM/YYYY"
    return `${day}/${month}/${year}`;
}
module.exports = {fecha};
