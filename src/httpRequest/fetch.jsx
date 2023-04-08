import axios from 'axios';
axios.defaults.baseURL = 'https://pixabay.com/api/';

const searchParams = new URLSearchParams({
  key: '33729999-7705c23e9189284ee9a61a627',
  image_type: 'photo',
  orientation: 'horizontal',
  per_page: 12,
});

export const fetchImages = async (value, page) => {
  const response = await axios.get(`?q=${value}&page=${page}&${searchParams}`);
  const data = response.data;
  return data;
};
