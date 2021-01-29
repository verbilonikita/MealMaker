import * as model from './model.js';
import RecipeView from './views/recipeView.js';
import SearchView from './views/searchView.js';
import ResultsView from './views/resultsView.js';
import Pagination from './views/paginationView.js';

//Declaring Variables

const recipeContainer = document.querySelector('.recipe');

//Rendering Recipe

const showRecipe = async function () {
  try {
    //check whether it has hash
    const id = window.location.hash.slice(1);
    if (!id) return;
    //1. Loading Recipies
    RecipeView.renderSpinner();
    const recipe = await model.loadRecipe(id);
    //2. Rendering Recipe
    RecipeView.render(recipe);
  } catch (err) {
    RecipeView.renderError(err);
  }
};

// Rendering Search

const searchResults = async function () {
  try {
    // render Spinner
    ResultsView.renderSpinner();
    // search for input value
    const query = SearchView.getQuery();
    if (!query) return;
    //insert input value
    await model.loadResults(query);
    SearchView.clearInput();
    //render value with input value
    ResultsView.render(model.getSeachResulsPage());
    // render initial page buttons
    Pagination.render(model.state.search);
  } catch (err) {
    ResultsView.renderError();
  }
};

//Listners

const controlPagination = function (page) {
  ResultsView.render(model.getSeachResulsPage(page));
  model.state.search.page = page;
  console.log(model.state);
  Pagination.render(model.state.search);
};

const controlServings = function () {};

const init = function () {
  RecipeView.addHandlerRender(showRecipe);
  SearchView.addHandlerSearch(searchResults);
  Pagination.addHandlerClick(controlPagination);
};
init();
