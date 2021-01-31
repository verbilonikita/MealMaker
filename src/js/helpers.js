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

// NOT IN USE - Sending recipe to API
/*
export const sentJSON = async function (url, uploadData) {
  try {
    const res = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(uploadData),
    });
    const data = await res.json();
    if (!res.ok)
      throw new Error(`${data.error.split(0, 15)} Error: ${res.status}.`);
    return data;
  } catch (err) {
    throw err;
  }
};
*/
