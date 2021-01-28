import * as model from './model.js';
import RecipeView from './views/recipeView.js';

const recipeContainer = document.querySelector('.recipe');

const timeout = function (s) {
  return new Promise(function (_, reject) {
    setTimeout(function () {
      reject(new Error(`Request took too long! Timeout after ${s} second`));
    }, s * 1000);
  });
};

// https://forkify-api.herokuapp.com/v2

///////////////////////////////////////

const renderSpinner = function (parentEl) {
  const markup = `
 <div class="spinner">
          <svg>
            <use href="src/img/icons.svg#icon-loader"></use>
          </svg>
  </div>
  `;
  recipeContainer.innerHTML = '';
  parentEl.insertAdjacentHTML('afterbegin', markup);
};

const showRecipe = async function () {
  try {
    // const id = window.location.hash.slice(1);
    const id = 47746;
    // if (!id) return;
    //1. Loading Recipies
    renderSpinner(recipeContainer);
    const recipe = await model.loadRecipe(id);
    RecipeView.render(recipe);

    //2. Rendering Recipe
  } catch (err) {
    console.error(err);
  }
};

['hashchange', 'load'].forEach(ev => window.addEventListener(ev, showRecipe));
