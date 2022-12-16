// import axios from 'axios';
// import { Notify } from 'notiflix/build/notiflix-notify-aio';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import { createGallaryItemsMurkup } from './createTemplates';
import PixabayApiService from './api-servise';

let searchQuery = '';

const refs = {
  form: document.querySelector('.form'),
  gallaryContainer: document.querySelector('.gallary'),
  loadMoreBtn: document.querySelector('.btn-more'),
};

const pixabayApiService = new PixabayApiService();

// const createGallaryItemsMurkup = createGallaryItemsMurkup();

refs.form.addEventListener('submit', onSubmitForm);
refs.loadMoreBtn.addEventListener('click', onLoadMore);

function onSubmitForm(e) {
  e.preventDefault();

  searchQuery = e.target.elements.searchQuery.value;

  pixabayApiService.fetchPhoto(searchQuery);
}

function onLoadMore(e) {
  pixabayApiService.fetchPhoto(searchQuery);
}

const lightbox = new SimpleLightbox('.gallary a', {});
