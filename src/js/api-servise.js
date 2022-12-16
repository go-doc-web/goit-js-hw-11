export default class PixabayApiService {
  constructor() {}

  fetchPhoto(searchQuery) {
    const URL = 'https://pixabay.com/api/';
    const KEY = '18725015-a08852ce69505435b84afef2d';

    fetch(
      `${URL}?key=${KEY}&q=${searchQuery}&image_type=photo&orientation=horizontal&safesearch=true`
    )
      .then(res => res.json())
      .then(({ hits }) => {
        console.log(hits);
        // const murkUp = createGallaryItemsMurkup(hits);
        // refs.gallaryContainer.insertAdjacentHTML('beforeend', murkUp);
        // lightbox.refresh();
      });
  }
}
