'use strict';
export function renderImages(images) {
    const gallery = document.querySelector('.gallery');
    const markup = images.hits.map(({webformatURL, largeImageURL, tags, likes, views, comments, downloads }) => {
        return `<li class="gallery-query">
    <a class="gallery-link" href="${largeImageURL}">
    <img class="gallery-image"
    src="${webformatURL}"
    data-source="${largeImageURL}"
    alt="${tags}"
    width="360"  onclick="return false">
    <ul class="gallery-descr">
                    <li class="gallery-item">
                        <p class="gallery-item-descr">Likes</p>
                        <p class="gallery-value">${likes}</p>
                    </li>
                    <li class="gallery-item">
                        <p class="gallery-item-descr">Views</p>
                        <p class="gallery-value">${views}</p>
                    </li>
                    <li class="gallery-item">
                        <p class="gallery-item-descr">Comments</p>
                        <p class="gallery-value">${comments}</p>
                    </li>
                    <li class="gallery-item">
                        <p class="gallery-item-descr">Downloads</p>
                        <p class="gallery-value">${downloads}</p>
                    </li>
                </ul>
            </a>
       </li>`;
    }).join('');
    gallery.insertAdjacentHTML('beforeend', markup);
};

export function showLoader() {
    const loader = document.querySelector('.loader');
    loader.classList.remove('visually-hidden');
}

export function hideLoader() {
    const loader = document.querySelector('.loader');
    loader.classList.add('visually-hidden');
}

export function showMore() {
    const loadMore = document.querySelector('.load-more');
    loadMore.classList.remove('visually-hidden');
}

export function hideMore() {
    const loadMore = document.querySelector('.load-more');
    loadMore.classList.add('visually-hidden');
}