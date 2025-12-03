/**
 * Cambia la imagen inicial por la especificada en la ruta
 * @param {string} imageRoute - Nombre del archivo de imagen (ej. "cat.jpg")
 */
const changeLogo = (imageRoute) => {
    const logoElement = document.getElementById("logo");

    if (imageRoute && logoElement) {
        logoElement.src = `./assets/img/${imageRoute}`;
    } else {
        console.warn(`Element with route "${imageRoute}" not found.`);
    }
};

export { changeLogo };

