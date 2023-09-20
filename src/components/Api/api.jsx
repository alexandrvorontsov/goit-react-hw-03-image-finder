import axios from 'axios';
import { toast } from 'react-toastify';

const BASE_URL = 'https://pixabay.com/api/';

const searchParams = new URLSearchParams({
  key: '31185882-33d75530acb6f2e03ef303dd9',
  image_type: 'photo',
  orientation: 'horizontal',
  per_page: 12,
});

export default async function searchImages(searchQuery = '', page = 1) {
  const url = `${BASE_URL}?${searchParams}&q=${searchQuery}&page=${page}`;
  return await axios
    .get(url)
    .then(({ data }) => data)
    .catch(error => toast(error.massage));
}
