const endpoint = 'http://localhost:3001/';

async function get(url) {
  return fetch(endpoint + url)
    .then(response => response.json())
    .then(data => {
      return data;
    })
    .catch(err => console.log(err));
}

async function post(url, data) {
  return fetch(endpoint + url, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  })
    .then(response => response.json())
    .then(data => {
      return data;
    })
    .catch(err => console.log(err));
}
async function put(url, data) {
  return fetch(endpoint + url, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  })
    .then(response => response.json())
    .then(data => {
      return data;
    })
    .catch(err => console.log(err));
}

async function del(url) {
  return fetch(endpoint + url, {
    method: 'DELETE',
    headers: { 'Content-Type': 'application/json' },
  })
    .then(response => response.json())
    .then(data => {
      return data;
    })

    .catch(err => console.log(err));
}

export const ApiClient = {
  get,
  post,
  put,
  del,
};
