import * as model from './model.js'; // used for state and business logic
import RecipeView from './views/recipeView.js'; //render recipe
import SearchView from './views/searchView.js'; //render search
import ResultsView from './views/resultsView.js'; //render results
import Pagination from './views/paginationView.js'; //render pagination
import BookmarksView from './views/bookmarksView.js'; //render bookmarks
//not in use anymore
// import addRecipeView from './views/addRecipeView.js';

//Rendering Recipe

const showRecipe = async function () {
  try {
    //check whether it has hash
    const id = window.location.hash.slice(1);
    if (!id) return;
    //1. Loading Recipe
    // rendering spinner
    RecipeView.renderSpinner();
    // if bookmarks - create bookmarks
    BookmarksView.render(model.state.bookmarks);
    // creating a state object based on has value of recipe
    await model.loadRecipe(id);
    // pushing current recipe to state recipe
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
    // search by input value
    await model.loadResults(query);
    //clear input field
    SearchView.clearInput();
    // page 1 must be rendered
    model.state.search.page = 1;
    //render search recipe previews number depends on how much page allows to render
    ResultsView.render(model.getSeachResulsPage());
    // render initial page buttons
    Pagination.render(model.state.search);
  } catch (err) {
    ResultsView.renderError();
  }
};

// control pagination (back forth)
const controlPagination = function (page) {
  ResultsView.render(model.getSeachResulsPage(page));
  model.state.search.page = page;
  Pagination.render(model.state.search);
};

// if recipe isn't bookmarked push it to bookmark state
// if it is bookmarked then delete it from the bookmarked array
// also render bookmark in the bookmark field

const controlBookmark = function () {
  if (model.state.recipe.bookmarked === false)
    model.addBookmark(model.state.recipe);
  else model.deleteBookmark(model.state.recipe.recipe_id);
  RecipeView.render(model.state.recipe);

  // render Bookmarks
  BookmarksView.render(model.state.bookmarks);
};

// on load renders bookmarks that were in bookmarks state (those returned from local storage)

const controlBookmarks = function () {
  BookmarksView.render(model.state.bookmarks);
};

// Initializing addEventListners for all interactive parts

const init = function () {
  RecipeView.addHandlerRender(showRecipe);
  SearchView.addHandlerSearch(searchResults);
  Pagination.addHandlerClick(controlPagination);
  RecipeView.addHandleraddBookmark(controlBookmark);
  BookmarksView.addHandlerRender(controlBookmarks);
  //not in use anymore
  // addRecipeView.addHandlerUpload(addRecipe);
};
init();

//not in use anymore
// const addRecipe = function (newRecipe) {
//   model.uploadRecipe(newRecipe);
// };
