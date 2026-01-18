import axios from 'axios';

const baseUrl = 'https://pixabay.com/api/';
const API = '54253298-65810cbc5d2dae2f379ec0f7f';

export function getImagesByQuery(query) {
  return axios
    .get(baseUrl, {
      params: {
        key: API,
        q: query,
        image_type: 'photo',
        orientation: 'horizontal',
        safesearch: true,
      },
    })
    .then(response => response.data);
}
