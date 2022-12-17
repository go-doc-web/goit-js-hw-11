const URL = 'https://pixabay.com/api/';
const KEY = '18725015-a08852ce69505435b84afef2d';

export default class PixabayApiService {
  constructor() {
    this.searchQuery = '';
    this.page = 1;
    this.perPage = 40;
  }

  fetchPhoto() {
    return fetch(
      `${URL}?key=${KEY}&q=${this.searchQuery}&image_type=photo&orientation=horizontal&safesearch=true&per_page=${this.perPage}&page=${this.page}`
    )
      .then(responce => responce.json())
      .then(({ hits, totalHits }) => {
        this.page += 1;

        return { hits, totalHits };
      });
  }

  resetPage() {
    this.page = 1;
  }

  get query() {
    return this.searchQuery;
  }

  set query(newQuery) {
    this.searchQuery = newQuery;
  }
}
