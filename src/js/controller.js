import * as model from './model.js';
import RecipeView from './views/recipeView.js';
import SearchView from './views/searchView.js';
import ResultsView from './views/resultsView.js';
import Pagination from './views/paginationView.js';
import bookmarksView from './views/bookmarksView.js';
//not in use anymore
// import addRecipeView from './views/addRecipeView.js';

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
    bookmarksView.render(model.state.bookmarks);
    await model.loadRecipe(id);
    const recipe = model.state.recipe;
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
    model.state.search.page = 1;
    //render value with input value
    ResultsView.render(model.getSeachResulsPage());
    // render initial page buttons
    Pagination.render(model.state.search);
  } catch (err) {
    ResultsView.renderError();
  }
};

const controlPagination = function (page) {
  ResultsView.render(model.getSeachResulsPage(page));
  model.state.search.page = page;
  Pagination.render(model.state.search);
};

const controlBookmark = function () {
  if (model.state.recipe.bookmarked === false)
    model.addBookmark(model.state.recipe);
  else model.deleteBookmark(model.state.recipe.recipe_id);
  RecipeView.render(model.state.recipe);

  // render Bookmarks
  BookmarksView.render(model.state.bookmarks);
};

const controlBookmarks = function () {
  bookmarksView.render(model.state.bookmarks);
};

//not in use anymore
// const addRecipe = function (newRecipe) {
//   model.uploadRecipe(newRecipe);
// };

const init = function () {
  RecipeView.addHandlerRender(showRecipe);
  SearchView.addHandlerSearch(searchResults);
  Pagination.addHandlerClick(controlPagination);
  RecipeView.addHandleraddBookmark(controlBookmark);
  bookmarksView.addHandlerRender(controlBookmarks);
  //not in use anymore
  // addRecipeView.addHandlerUpload(addRecipe);
};
init();
