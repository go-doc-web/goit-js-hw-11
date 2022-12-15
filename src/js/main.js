// import axios from 'axios';
// import { Notify } from 'notiflix/build/notiflix-notify-aio';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
// import SimpleLightbox from 'simplelightbox/dist/simple-lightbox.esm';
import { createGallaryItemsMurkup } from './createTemplates';

let searchQuery = '';

const refs = {
  form: document.querySelector('.form'),
  gallaryContainer: document.querySelector('.gallary'),
};

console.log(refs.gallaryContainer);

// const createGallaryItemsMurkup = createGallaryItemsMurkup();

refs.form.addEventListener('submit', onSubmitForm);

function onSubmitForm(e) {
  e.preventDefault();
  searchQuery = e.target.elements.searchQuery.value;

  const URL = 'https://pixabay.com/api/';
  const KEY = '18725015-a08852ce69505435b84afef2d';

  fetch(
    `${URL}?key=${KEY}&q=${searchQuery}&image_type=photo&orientation=horizontal&safesearch=true&min_height=350`
  )
    .then(res => res.json())
    .then(({ hits }) => {
      console.log(hits);
      const murkUp = createGallaryItemsMurkup(hits);
      refs.gallaryContainer.insertAdjacentHTML('beforeend', murkUp);
      const lightbox = new SimpleLightbox('.gallary a', {});

      lightbox.refresh();
      console.log(lightbox);
    });
}
