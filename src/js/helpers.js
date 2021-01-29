import * as config from './config.js';

//searching by ID
export const getJSON = async function (url) {
  try {
    const res = await fetch(url);
    const data = await res.json();
    if (!res.ok)
      throw new Error(`${data.error.split(0, 15)} Error: ${res.status}.`);
    return data;
  } catch (err) {
    throw err;
  }
};
