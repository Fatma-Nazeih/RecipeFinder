document.addEventListener("DOMContentLoaded", () => {
    const favoriteButton = document.querySelector(".favorite-button");
    const recipeContainer = document.querySelector(".recipe-header");

    if (favoriteButton && recipeContainer) {
        const recipe = {
            id: recipeContainer.dataset.id,
            title: recipeContainer.dataset.title,
            description: recipeContainer.dataset.description,
            image: recipeContainer.dataset.image,
            link: recipeContainer.dataset.link
        };

        favoriteButton.addEventListener("click", () => {
            let favorites = JSON.parse(localStorage.getItem("favorites")) || [];

            if (!favorites.some(fav => fav.id === recipe.id)) {
                favorites.push(recipe);
                localStorage.setItem("favorites", JSON.stringify(favorites));
            }
        });
    }
});