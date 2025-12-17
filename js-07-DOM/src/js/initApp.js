import aboutUs from "./components/about-us-title";
import navbar from "./components/navbar";

// importanción por default
// import {navbar:navbarContent } from "./components/navbar"; // importanción nombrada

const initApp = () => {
    console.log("App initialized");
    const navbarContainer = document.getElementById("main-header");
    navbarContainer.innerHTML = navbar();

}

export { initApp }; //Exportación nombrada


const aboutUsTitle = () => {
    const titleAboutUs = document.getElementById("about-us");
    titleAboutUs.innerHTML = aboutUs();
}

export { aboutUsTitle };