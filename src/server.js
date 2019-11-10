import username from './sett-brukernavnet-ditt-her';

// ⚠️ OBS ⚠️
// Denne filen inneholder kode som kaller serveren vår
// Du skal ikke egentlig trenge å forholde deg til denne koden,
// men om du debugger litt, eller lurer på hvorfor noe ikke fungerer,
// er det alltids lov å ta en titt.

const API_BASE_URL = 'https://bekkstagram-api.herokuapp.com/api';

export const getFeed = async () => {
  const response = await fetch(`${API_BASE_URL}/media`);
  const { data } = await response.json();
  return data;
};

export const getImage = async id => {
  const response = await fetch(`${API_BASE_URL}/media/${id}`);
  const { data } = await response.json();
  return data;
};

const validateImage = url =>
  new Promise(resolve => {
    const image = new Image();
    image.onload = () => resolve(true);
    image.onerror = () => resolve(false);
    image.src = url;
  });

export const uploadImage = async ({ url, description }) => {
  const isValidUrl = await validateImage(url);
  if (!isValidUrl) {
    throw new Error("Image URL wasn't valid");
  }

  const response = await fetch(`${API_BASE_URL}/media`, {
    method: 'POST',
    body: JSON.stringify({ url, description, username }),
    headers: {
      'Content-Type': 'application/json',
    },
  });

  const { data } = await response.json();
  return data;
};

export const putComment = async (imageId, comment) => {
  const commentObject = { text: comment, username };

  const response = await fetch(`${API_BASE_URL}/media/${imageId}/comments`, {
    method: 'PUT',
    body: JSON.stringify(commentObject),
    headers: {
      'Content-Type': 'application/json',
    },
  });

  const { data } = await response.json();
  return data;
};
