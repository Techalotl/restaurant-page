import "../styles/about.css";

export function createAbout () {
    content.innerHTML = "";
    const story = document.createElement("div");
    story.setAttribute("class","card");
    content.appendChild(story);
    const storyTitle = document.createElement("h2");
    storyTitle.textContent = "Our Story"
    story.appendChild(storyTitle);
    const storyText = document.createElement("p");
    storyText.textContent = "This is an incredible touching story about our origins and includes a dream of a humble person that became reality. I'm not sure what to write here, but I think this must be a little longer than two sentences and I really really don't want to use AI because it sucks at being creative and you can easily tell when someone used it to create a text. I'll be honest, I think AI is an excellent bullshitter and that would be what is needed here, but still I refuse to use it for something this silly. Anyway, consider yourself touch by this words, please."
    story.appendChild(storyText);

    const food = document.createElement("div");
    food.setAttribute("class","card");
    content.appendChild(food);
    const foodTitle = document.createElement("h2");
    foodTitle.textContent = "Our food"
    food.appendChild(foodTitle);
    const foodText = document.createElement("p");
    foodText.textContent = "Consider yourself informed about out food, which consist of fresh ingredients, only the very best ingredients. We do everything with love, from scratch and is so amazing I can't even put it into words. We even have a dairy farm in our backyard and the milk is so fresh and raw that RFK Jr. is already there drinking directly from the cow's tit. It is, indeed, awful. Please someone take him away or just give him another cow somewhere else. Or cow carcass, whatever he pleases."
    food.appendChild(foodText);
}