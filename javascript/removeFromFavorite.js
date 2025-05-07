document.addEventListener("DOMContentLoaded", () => {
    renderFavorites(); 
});

function renderFavorites() {
    const favoritesContainer = document.querySelector(".favorites-container");
    let favorites = JSON.parse(localStorage.getItem("favorites")) || [];

    favoritesContainer.innerHTML = ""; 

    
    if (favorites.length === 0) {
        const initialRecipes = [
            {
                id: "101",
                title: "Chicken Alfredo",
                description: "A creamy, delicious pasta dish perfect for dinner.",
                image: "images/ChickenAlfredo.avif",
                link: "ChickenAlfredo.html"
            },
            {
                id: "102",
                title: "Classic Cheeseburger",
                description: "A juicy grilled beef patty topped with melted cheese, fresh lettuce, tomatoes, pickles, and a toasted bun.",
                image: "images/burger.jpeg",
                link: "burger.html"
            },
            {
                id: "103",
                title: "Sushi Rolls",
                description: "Fresh and flavorful sushi rolls made with seafood and vinegared rice.",
                image: "images/sushi.jpeg",
                link: "sushi.html"
            },
            {
                id: "104",
                title: "Margherita Pizza",
                description: "Italian pizza topped with fresh tomatoes, mozzarella, basil, and olive oil.",
                image: "images/margherita.jpeg",
                link: "margherita.html"
            },
            {
                id: "105",
                title: "Grilled Steak with Garlic Butter",
                description: "Juicy steak topped with garlic butter and served with sides.",
                image: "images/steak.jpg",
                link: "steak.html"
            },
            {
                id: "106",
                title: "Chocolate Lava Cake",
                description: "A decadent dessert with a warm, gooey chocolate center.",
                image: "images/cake.jpg",
                link: "cake.html"
            },
            {
                id: "107",
                title: "Tiramisu",
                description: "Creamy Italian dessert with mascarpone and coffee-soaked ladyfingers.",
                image: "images/tiramisu.webp",
                link: "tiramisu.html"
            },
            {
                id: "108",
                title: "Cheesecake",
                description: "Rich and creamy dessert with a graham cracker crust.",
                image: "images/cheesecake.jpg",
                link: "cheeseCake.html"
            }
        ];

    
        localStorage.setItem("favorites", JSON.stringify(initialRecipes));
        favorites = initialRecipes;  
    }

    
    favorites.forEach(recipe => {
        const card = document.createElement("div");
        card.classList.add("recipe-card");
        card.setAttribute("data-id", recipe.id);

        card.innerHTML = `
            <img src="${recipe.image}" alt="${recipe.title}">
            <h2>${recipe.title}</h2>
            <p>${recipe.description}</p>
            <a href="${recipe.link}" class="view-button">View Recipe</a>
            <button class="remove-button">Remove</button>
        `;

        favoritesContainer.appendChild(card);
    });

    
    favoritesContainer.addEventListener("click", (e) => {
        if (e.target.classList.contains("remove-button")) {
            const card = e.target.closest(".recipe-card");
            const recipeId = card.getAttribute("data-id");

            
            favorites = favorites.filter(recipe => recipe.id !== recipeId);
            localStorage.setItem("favorites", JSON.stringify(favorites));

            card.remove();
        }
    });
}
