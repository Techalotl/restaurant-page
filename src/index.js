import "./pages/home.js";
import { createHomepage } from "./pages/home.js";
import "./pages/menu.js";
import { createMenu } from "./pages/menu.js";
import "./pages/about.js"
import { createAbout } from "./pages/about.js";

const logo = document.querySelector(".logo");
const home = document.querySelector("#home");
const menu = document.querySelector("#menu");
const about = document.querySelector("#about");

home.addEventListener("click", () => {
    createHomepage();
});

menu.addEventListener("click", () => {
    createMenu();
});

about.addEventListener("click", () => {
    createAbout();
});

logo.addEventListener("click", () => {
    createHomepage();
});

createHomepage();