export function createGallaryItemsMurkup(galleryItems) {
  return galleryItems
    .map(
      ({
        largeImageURL,
        tags,
        likes,
        views,
        comments,
        downloads,
        webformatURL,
        userImageURL,
        webformatWidth,
        webformatHeight,
      }) =>
        ` <li class="gallary-item">
           <a href="${largeImageURL}" class="gallary-link">
         <div class="photo-card">
  <img src="${webformatURL}" alt="${tags}" loading="lazy" width="${webformatWidth}" heigth="180"/>
  <div class="info">
    <p class="info-item">
      likes
      <b>${likes}</b>
    </p>
    <p class="info-item">
      views
      <b>${views}</b>
    </p>
    <p class="info-item">
      comments
      <b>${comments}</b>
    </p>
    <p class="info-item">
      downloads
      <b>${downloads}</b>
    </p>
  </div>
</div>
           </a>
        </li>`
    )
    .join('');
}

// webformatURL - ссылка на маленькое изображение для списка карточек.
// largeImageURL - ссылка на большое изображение.
// tags - строка с описанием изображения. Подойдет для атрибута alt.
// likes - количество лайков.
// views - количество просмотров.
// comments - количество комментариев.
// downloads - количество загрузок.

{
  /* <div class="photo-card">
  <div class="card__thumb">
    <img
      class="gallery__image"
      src="${webformatURL}"
      alt="${tags}"
      loading="lazy"
      width=""
      heigth="250"
    />
  </div>
  <div class="info">
    <div>
      <p class="info-item">
        likes
        <b>${likes}</b>
      </p>
    </div>
    <div>
      <p class="info-item">
        views
        <b>${views}</b>
      </p>
    </div>
    <div>
      <p class="info-item">
        comments
        <b>${comments}</b>
      </p>
    </div>
    <div>
      <p class="info-item">
        downloads
        <b>${downloads}</b>
      </p>
    </div>
  </div>
</div>; */
}
