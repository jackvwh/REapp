const base_url = 'http://localhost:3001/';

async function get(endpoint) {
  if (!endpoint) return console.error('No endpoint provided');

  try {
    const response = await fetch(base_url + endpoint, {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' },
    });

    if (!response.ok) {
      throw new Error('Network response was not ok');
    }

    const data = await response.json();
    return data;
  } catch (err) {
    console.error(err);
    throw err; // Re-throw the error so it can be caught in useGet hook
  }
}
//main use is for sending the cookie, the normal get doesnt do that
async function getAuth(endpoint) {
  if (!endpoint) return console.error('No endpoint provided');

  try {
    const response = await fetch(base_url + endpoint, {
      method: 'GET', 
      credentials: 'include', // Include credentials for cookies, the special sauce
      headers: { 'Content-Type': 'application/json' },
    });

    if (!response.ok) {
      throw new Error('Network response was not ok');
    }

    const data = await response.json();
    return data;
  } catch (err) {
    console.error(err);
    throw err; // Re-throw the error so it can be caught in useGet hook
  }
}

async function post(endpoint, body) {
  if (!endpoint) return console.error('No endpoint provided');

  try {
    const response = await fetch(base_url + endpoint, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(body),
    });

    if (!response.ok) {
      throw new Error('Network response was not ok');
    }

    const data = await response.json();
    return data;
  } catch (err) {
    console.error(err);
    throw err;
  }
}

async function put(endpoint, body) {
  if (!endpoint) return console.error('No endpoint provided');

  try {
    const response = await fetch(base_url + endpoint, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(body),
    });

    if (!response.ok) {
      throw new Error('Network response was not ok');
    }

    const data = await response.json();
    return data;
  } catch (err) {
    console.error(err);
    throw err;
  }
}

async function del(endpoint) {
  if (!endpoint) return console.error('No endpoint provided');

  try {
    const response = await fetch(base_url + endpoint, {
      method: 'DELETE',
      headers: { 'Content-Type': 'application/json' },
    });

    if (!response.ok) {
      throw new Error('Network response was not ok');
    }

    const data = await response.json();
    return data;
  } catch (err) {
    console.error(err);
    throw err;
  }
}

export const ApiClient = {
  get,
  post,
  put,
  del,
};
