export const state = {
  recipe: {},
};

export const loadRecipe = async function (id) {
  try {
    //prettier-ignore
    const res = await fetch(
      `https://forkify-api.herokuapp.com/api/get?rId=${id}`
    );
    const data = await res.json();
    //prettier-ignore
    if (!res.ok) throw new Error(`${data.error.slice(0, 36)} Error ${res.status}.`);
    return data.recipe;
  } catch (err) {
    console.error(err);
  }
};
