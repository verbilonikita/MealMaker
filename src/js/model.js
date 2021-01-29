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
};

export const loadRecipe = async function (id) {
  try {
    const data = await helpers.getJSON(`${config.API_URL}${id}`);
    return data.recipe;
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
