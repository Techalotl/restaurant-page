import "./pages/home.js";
import { createHomepage } from "./pages/home.js";
import "./pages/menu.js";
import { createMenu } from "./pages/menu.js";

const logo = document.querySelector(".logo");
const home = document.querySelector("#home");
const menu = document.querySelector("#menu");
const about = document.querySelector("#about");

home.addEventListener("click", () => {
    console.log("home page clicked")
    createHomepage();
});

menu.addEventListener("click", () => {
    console.log("menu was clicked")
    createMenu();
});

about.addEventListener("click", () => {
    console.log("about page was clicked")
});

logo.addEventListener("click", () => {
    console.log("logo was clicked")
    createHomepage();
});

createHomepage();