import "../styles/menu.css"
import frenchToast from "../assets/frenchToast.jpg"
import pancakes from "../assets/pancakes.jpg"
import waffles from "../assets/waffles.jpg"
import crepes from "../assets/crepes.jpg"
import mango from "../assets/mangoCheesecake.jpg"
import brownie from "../assets/brownie.jpg"
import coffee from "../assets/coffee.jpg"
import milkshakeImg from "../assets/milkshake.jpg"

const content = document.querySelector("#content");

export function createMenu () {
    content.innerHTML = "";
    const breakfasts = document.createElement("div");
    breakfasts.setAttribute("class", "menu-card");
    content.appendChild(breakfasts);
    const breakfastTitle = document.createElement("h2");
    breakfastTitle.textContent = "Breakfast";
    breakfasts.appendChild(breakfastTitle);
    const breakfastContent = document.createElement("div");
    breakfastContent.setAttribute("class", "card-content");
    breakfasts.appendChild(breakfastContent);
    const dish1 = document.createElement("div");
    dish1.setAttribute("class", "dish");
    breakfastContent.appendChild(dish1);
    const crepe = document.createElement("img");
    crepe.src = crepes;
    crepe.alt = "Crepes with berries. Photo by Polina Tankilevitch on pexels.com";
    dish1.appendChild(crepe);
    const dish1Text = document.createElement("p");
    dish1Text.textContent = "Crepes";
    dish1.appendChild(dish1Text);
    const dish2 = document.createElement("div");
    dish2.setAttribute("class", "dish");
    breakfastContent.appendChild(dish2);
    const toast = document.createElement("img");
    toast.src = frenchToast;
    toast.alt = "Toast with jam. Photo by Antoni Shkraba Studio on pexels.com";
    dish2.appendChild(toast);
    const dish2Text = document.createElement("p");
    dish2Text.textContent = "French Toast";
    dish2.appendChild(dish2Text);
    const dish3 = document.createElement("div");
    dish3.setAttribute("class", "dish");
    breakfastContent.appendChild(dish3);
    const pancake = document.createElement("img");
    pancake.src = pancakes;
    pancake.alt = "Stack of pancakes.Photo by Monstera Production on pexels.com";
    dish3.appendChild(pancake);
    const dish3Text = document.createElement("p");
    dish3Text.textContent = "Pancakes";
    dish3.appendChild(dish3Text);
    const dish4 = document.createElement("div");
    dish4.setAttribute("class", "dish");
    breakfastContent.appendChild(dish4);
    const waffle = document.createElement("img");
    waffle.src = waffles;
    waffle.alt = "Waffles with maple syrup. Photo by karthik reddy on www.pexels.com";
    dish4.appendChild(waffle);
    const dish4Text = document.createElement("p");
    dish4Text.textContent = "Waffles";
    dish4.appendChild(dish4Text);

    const cheesecakes  = document.createElement("div");
    cheesecakes.setAttribute("class", "menu-card");
    content.appendChild(cheesecakes);
    const cheesecakeTitle = document.createElement("h2");
    cheesecakeTitle.textContent = "Cheesecakes";
    cheesecakes.appendChild(cheesecakeTitle);
    const cheesecakeContent = document.createElement("div");
    cheesecakeContent.setAttribute("class", "card-content");
    cheesecakes.appendChild(cheesecakeContent);
    const dish5 = document.createElement("div");
    dish5.setAttribute("class", "dish");
    cheesecakeContent.appendChild(dish5);
    content.appendChild(cheesecakes);
    const mangoCheesecake = document.createElement("img");
    mangoCheesecake.src = mango;
    mangoCheesecake.alt = "A slice of mango cheesecake. Photo by Lazarus Ziridis on pexels.com";
    dish5.appendChild(mangoCheesecake);
    const dish5Text = document.createElement("p");
    dish5Text.textContent = "Mango Cheesecake";
    dish5.appendChild(dish5Text);
    const cheesecakeMenu = document.createElement("ul");
    cheesecakeContent.appendChild(cheesecakeMenu);
    const cheesecakeItem1 = document.createElement("li");
    cheesecakeItem1.textContent = "Basque Cheesecake";
    cheesecakeMenu.appendChild(cheesecakeItem1)
    const cheesecakeItem2 = document.createElement("li");
    cheesecakeItem2.textContent = "New York Cheesecake";
    cheesecakeMenu.appendChild(cheesecakeItem2)
    const cheesecakeItem3 = document.createElement("li");
    cheesecakeItem3.textContent = "Oreo Cheesecake";
    cheesecakeMenu.appendChild(cheesecakeItem3)

    const chocolates  = document.createElement("div");
    chocolates.setAttribute("class", "menu-card");
    content.appendChild(chocolates);
    const chocolatesTitle = document.createElement("h2");
    chocolatesTitle.textContent = "Chocolate";
    chocolates.appendChild(chocolatesTitle);
    const chocolatesContent = document.createElement("div");
    chocolatesContent.setAttribute("class", "card-content");
    chocolates.appendChild(chocolatesContent);
    const chocolateMenu = document.createElement("ul");
    chocolatesContent.appendChild(chocolateMenu);
    const chocolateItem1 = document.createElement("li");
    chocolateItem1.textContent = "Lava Cake";
    chocolateMenu.appendChild(chocolateItem1)
    const chocolateItem2 = document.createElement("li");
    chocolateItem2.textContent = "Pudding";
    chocolateMenu.appendChild(chocolateItem2)
    const chocolateItem3 = document.createElement("li");
    chocolateItem3.textContent = "Truffles";
    chocolateMenu.appendChild(chocolateItem3)
    const dish6 = document.createElement("div");
    dish6.setAttribute("class", "dish");
    chocolatesContent.appendChild(dish6);
    content.appendChild(chocolates);
    const brownieImg = document.createElement("img");
    brownieImg.src = brownie;
    brownieImg.alt = "Brownie with chocolate sauce. Photo by Ali Dashti on pexels.com";
    dish6.appendChild(brownieImg);
    const dish6Text = document.createElement("p");
    dish6Text.textContent = "Brownie";
    dish6.appendChild(dish6Text);

    const drinks = document.createElement("div");
    drinks.setAttribute("class", "menu-card");
    content.appendChild(drinks);
    const drinksTitle = document.createElement("h2");
    drinksTitle.textContent = "Drinks";
    drinks.appendChild(drinksTitle);
    const drinksContent = document.createElement("div");
    drinksContent.setAttribute("class", "card-content");
    drinks.appendChild(drinksContent);
    const dish7 = document.createElement("div");
    dish7.setAttribute("class", "dish");
    drinksContent.appendChild(dish7);
    const latte = document.createElement("img");
    latte.src = coffee;
    latte.alt = "A person pouring a latte. Photo by Chevanon Photography on pexels.com";
    dish7.appendChild(latte);
    const dish7Text = document.createElement("p");
    dish7Text.textContent = "Latte";
    dish7.appendChild(dish7Text);
    const coffeeMenu = document.createElement("ul");
    drinksContent.appendChild(coffeeMenu);
    const drinksItem1 = document.createElement("li");
    drinksItem1.textContent = "Americano";
    coffeeMenu.appendChild(drinksItem1)
    const drinksItem2 = document.createElement("li");
    drinksItem2.textContent = "Black";
    coffeeMenu.appendChild(drinksItem2)
    const drinksItem3 = document.createElement("li");
    drinksItem3.textContent = "Cappuccino";
    coffeeMenu.appendChild(drinksItem3)
    const drinksItem4 = document.createElement("li");
    drinksItem4.textContent = "Espresso";
    coffeeMenu.appendChild(drinksItem4)
    const dish8 = document.createElement("div");
    dish8.setAttribute("class", "dish");
    drinksContent.appendChild(dish8);
    const milkshake = document.createElement("img");
    milkshake.src = milkshakeImg;
    milkshake.alt = "Milkshake with whipped cream on top. Photo by Kristina Paukshtite on pexels.com";
    dish8.appendChild(milkshake);
    const dish8Text = document.createElement("p");
    dish8Text.textContent = "Caramel Milkshake";
    dish8.appendChild(dish8Text);
    const milkshakeMenu = document.createElement("ul");
    drinksContent.appendChild(milkshakeMenu);
    const drinksItem5 = document.createElement("li");
    drinksItem5.textContent = "Cookies and Cream";
    milkshakeMenu.appendChild(drinksItem5)
    const drinksItem6 = document.createElement("li");
    drinksItem6.textContent = "Nutella";
    milkshakeMenu.appendChild(drinksItem6)
    const drinksItem7 = document.createElement("li");
    drinksItem7.textContent = "Strawberry";
    milkshakeMenu.appendChild(drinksItem7)
    const drinksItem8 = document.createElement("li");
    drinksItem8.textContent = "Vanilla";
    milkshakeMenu.appendChild(drinksItem8)
};