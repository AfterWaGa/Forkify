// https://forkify-api.herokuapp.com/v2
import * as model from "./model.js";
import recipeView from "./views/recipeView.js";

import "core-js/stable";
import "regenerator-runtime/runtime";

const recipeContainer = document.querySelector(".recipe");

// const timeout = function (s) {
//   return new Promise(function (_, reject) {
//     setTimeout(function () {
//       reject(new Error(`Request took too long! Timeout after ${s} second`));
//     }, s * 1000);
//   });
// };

const controlRecipes = async function () {
  try {
    // Защита от отсутствия выбранного рецепта (хэша)
    const id = window.location.hash.slice(1);
    if (!id) return;
    recipeView.renderSpinner();

    // Загрузка рецепта
    await model.loadRecipe(id);

    // 2. Отрисовка рецепта
    recipeView.render(model.state.recipe);
  } catch (err) {
    alert(err);
  }
};

// Загрузка рецепта при смене ссылки \ загрузке страницы
["load", "hashchange"].forEach(function (EvElem) {
  window.addEventListener(EvElem, controlRecipes);
});
