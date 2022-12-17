// import axios from 'axios';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import { createGallaryItemsMurkup } from './createTemplates';
import PixabayApiService from './api-servise';
import LoadMoreBtn from './LoadMoreBtn';

const refs = {
  form: document.querySelector('.form'),
  gallaryContainer: document.querySelector('.gallary'),
};

const loadMoreBtn = new LoadMoreBtn({
  selector: '[data-action="load-more"]',
  hidden: true,
});

const pixabayApiService = new PixabayApiService();

refs.form.addEventListener('submit', onSubmitForm);
loadMoreBtn.refs.button.addEventListener('click', fetchHits);

let totalPerPage = pixabayApiService.perPage;

function onSubmitForm(e) {
  e.preventDefault();

  pixabayApiService.query = e.target.elements.searchQuery.value;

  if (pixabayApiService.query === '') {
    return Notify.info('The input field must be filled');
  }
  pixabayApiService.resetPage();

  loadMoreBtn.show();

  fetchHits();
  // if(pixabayApiService.)
}

function renderPhotoMurkup(murkUp) {
  refs.gallaryContainer.insertAdjacentHTML('beforeend', murkUp);
}

function clearRenderMurkup() {
  refs.gallaryContainer.innerHTML = '';
}

function fetchHits() {
  loadMoreBtn.disable();

  pixabayApiService
    .fetchPhoto()
    .then(({ hits, totalHits }) => {
      console.log(hits);
      totalPerPage += pixabayApiService.perPage;
      if (hits.length === 0) {
        loadMoreBtn.hide();
        Notify.failure(
          '"Sorry, there are no images matching your search query. Please try again."'
        );
        return;
      }

      if (totalPerPage >= totalHits || totalHits <= 40) {
        loadMoreBtn.hide();
        totalPerPage = 0;

        Notify.info(
          "We're sorry, but you've reached the end of search results."
        );
      }

      console.log('totalPerPage', totalPerPage);
      console.log('totalHits', totalHits);

      loadMoreBtn.enable();
      clearRenderMurkup();
      const murkUp = createGallaryItemsMurkup(hits);
      renderPhotoMurkup(murkUp);
      lightbox.refresh();
    })
    .catch(err => {
      Notify.failure('Error');
    });
}

const lightbox = new SimpleLightbox('.gallary a', {});
