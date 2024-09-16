import { API_URL } from "./config.js";
import { getJSON } from "./helpers.js";

// Текущий рецепт, состояние
export const state = { recipe: {} };

export const loadRecipe = async function () {
    try {
        // Загрузка рецепта
        const data = await getJSON(`${API_URL}/${id}`);

        const recipe = data.data.recipe;
        state.recipe = {
            id: recipe.id,
            title: recipe.title,
            publisher: recipe.publisher,
            sourceUrl: recipe.source_url,
            image: recipe.image_url,
            servings: recipe.servings,
            cookingTime: recipe.cooking_time,
            ingredients: recipe.ingredients,
        };
        console.log(state.recipe);
    } catch (err) {
        // Обработка ошибки из getJSON()
        console.error(`${err}`);
    }
};
