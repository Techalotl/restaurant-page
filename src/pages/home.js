import "../styles/home.css"
import cheesecakeImg from "../assets/cheesecake.jpg";
import oreoCheesecake from "../assets/oreoCheesecake.jpg"
import basqueCheesecake from "../assets/basqueCheesecake.jpg"
import lavaCake from "../assets/lavaCake.jpg"
const content = document.querySelector("#content");

export function createHomepage () {
    const banner = document.createElement("div");
    banner.setAttribute("class","banner");
    content.appendChild(banner);
    const bannerImg = new Image();
    bannerImg.src = cheesecakeImg;
    bannerImg.alt = "A cheesecake slice. Picture by Suzy Hazelwood on pexels.com"
    banner.appendChild(bannerImg);

    const favs = document.createElement("div");
    favs.setAttribute("class", "favs");
    content.appendChild(favs);
    const favsTitle = document.createElement("h2");
    favsTitle.textContent = "Our favourites";
    favs.appendChild(favsTitle);

    const dishes = document.createElement("div");
    dishes.setAttribute("class", "dishes");
    favs.appendChild(dishes);
    const dish1 = document.createElement("div");
    dish1.setAttribute("class", "dish");
    dishes.appendChild(dish1);
    const dish1Img = new Image();
    dish1Img.src = oreoCheesecake;
    dish1Img.alt = "An oreo cheesecake slice. Picture by Angela Khebou on pexels.com";
    dish1.appendChild(dish1Img);
    const dish1Text = document.createElement("p");
    dish1Text.textContent = "Oreo Cheesecake";
    dish1.appendChild(dish1Text);
    const dish2 = document.createElement("div");
    dish2.setAttribute("class", "dish");
    dishes.appendChild(dish2);
    const dish2Img = document.createElement("img");
    dish2Img.src = basqueCheesecake;
    dish2Img.alt = "A basque cheesecake. Picture by Kezia Lynn on pexels.com";
    dish2.appendChild(dish2Img);
    const dish2Text = document.createElement("p");
    dish2Text.textContent = "Basque Cheesecake";
    dish2.appendChild(dish2Text);
    const dish3 = document.createElement("div");
    dish3.setAttribute("class", "dish");
    dishes.appendChild(dish3);
    const dish3Img = document.createElement("img");
    dish3Img.src = lavaCake;
    dish3Img.alt = "A lava cake. Picture by Valeria Boltneva on pexels.com";
    dish3.appendChild(dish3Img);
    const dish3Text = document.createElement("p");
    dish3Text.textContent = "Lava Cake";
    dish3.appendChild(dish3Text);

    const testimonial = document.createElement("div");
    testimonial.setAttribute("class", "testimonial");
    content.appendChild(testimonial);
    const chefQuote = document.createElement("p");
    chefQuote.textContent = `"This is a 100% real testimonial of how good our this restaurant is according a very famous food critic that is never wrong, so come and visit or something!"`;
    testimonial.appendChild(chefQuote);
    const chefName = document.createElement("p");
    chefName.textContent = `— Anton Ego (maybe)`;
    testimonial.appendChild(chefName);
}