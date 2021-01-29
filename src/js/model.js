import * as config from './config.js';
import * as helpers from './helpers.js';

export const state = {
  recipe: {},
  search: {
    query: '',
    results: [],
    resultsPerPage: config.resultsPerPage,
    page: 1,
  },
  bookmarks: [],
};

const persistBookmarks = function () {
  localStorage.setItem('bookmarks', JSON.stringify(state.bookmarks));
};

export const loadRecipe = async function (id) {
  try {
    const data = await helpers.getJSON(`${config.API_URL}${id}`);
    state.recipe = data.recipe;
    if (state.bookmarks.some(bookmark => bookmark.recipe_id === id))
      state.recipe.bookmarked = true;
    else state.recipe.bookmarked = false;
  } catch (err) {
    throw err;
  }
};

export const loadResults = async function (query) {
  try {
    state.search.query = query;
    //prettier-ignore
    const data = await helpers.getJSON(`${config.API_URL_QUERY}${query}`);
    state.search.results = data.recipes.map(rec => rec);
  } catch (err) {
    throw err;
  }
};

export const getSeachResulsPage = function (page = 1) {
  const start = (page - 1) * state.search.resultsPerPage;
  const end = page * state.search.resultsPerPage;

  return state.search.results.slice(start, end);
};

export const addBookmark = function (recipe) {
  //Add bookmark to state object
  state.bookmarks.push(recipe);
  //mark current recipe as booked
  if (recipe.id === state.recipe.id) state.recipe.bookmarked = true;

  persistBookmarks();
};

export const deleteBookmark = function (id) {
  //delete bookmark
  const index = state.bookmarks.findIndex(el => el.recipe_id === id);
  state.bookmarks.splice(index, 1);

  //mark as not bookmarked
  if (id === state.recipe.recipe_id) state.recipe.bookmarked = false;

  persistBookmarks();
};

const init = function () {
  const storage = localStorage.getItem('bookmarks');
  if (storage) state.bookmarks = JSON.parse(storage);
};

init();
