export const BASE_URL = 'https://pixabay.com/api/';
const API_KEY = '43730897-75789e447f4fce7bddaa4c488';

export const options = {
  params: {
    key: API_KEY,
    q:  "",
    image_type: "photo",
    orientation: "horizontal",
    safesearch: true,
    page: 1,
    per_page: 40,
  },
};