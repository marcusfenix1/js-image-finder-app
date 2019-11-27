const axios = require('axios');

const baseUrl = 'https://pixabay.com/api/';

export default {
  page: 1,
  query: '',
  fetchImages() {
    const requestParams = `?image_type=photo&orientation=horizontal&q=${this.query}&page=${this.page}&per_page=12&key=14390846-904ad623fe4da4860ab777265`;

    return axios.get(baseUrl + requestParams)
      .then(response => {
        this.incrementPage();

        return response.data.hits;
      });
  },
  get searchQuery() {
    return this.query;
  },
  set searchQuery(string) {
    this.query = string;
  },
  incrementPage() {
    this.page += 1;
  },
  resetPage() {
    this.page = 1;
  },
};
