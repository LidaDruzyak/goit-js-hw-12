import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

import { fetchImages } from "./js/pixabay-api";
import { renderImages, showLoader,
    hideLoader, showMore, hideMore
 } from "./js/render-function";

 const form = document.querySelector('.form');
 const gallery = document.querySelector('.gallery');
 let lightbox = null;
 let page = 1;
 const perPage = 15;
 const moreBtn = document.querySelector('.load-more');
 
 form.addEventListener('submit', async (event) => {
     event.preventDefault();
     
     const inputValue = form.elements.query.value.trim();
 
     if(inputValue === '') {
         iziToast.error({
             title: '',
             message: 'Query is invalid! Please enter search parameters!',
             position: 'topRight'
         });
         return;
     };
     gallery.innerHTML = '';
     page = 1; 

     try {
         showLoader();
         const images = await fetchImages(inputValue, page, perPage);
         renderImages(images);
         lightbox = new SimpleLightbox('.gallery a').refresh();
         hideLoader();

         if(images.hits.length >= perPage) {
             showMore();
         }  else {
             hideMore();
         } 
 
         if(images.totalHits === 0) {
             hideLoader();
             iziToast.error({
                 title: '',
                 message: 'Sorry, there are no images matching your search query. Please try again!',
                 position: 'topRight',
             });
 
         }
     } catch (error) {
         console.error('Error fetching images', error);
     iziToast.error({
         title: '',
         message: 'Sorry, something went wrong. Please try again!',
         position: 'topRight',
     });
     } finally {
        hideLoader();
        form.reset();
     }
    
 });
 
 function smoothScroll() {
     const {height: cardHeight } = document.querySelector('.gallery-query').getBoundingClientRect();
 
     window.scrollBy({
         top: cardHeight * 2,
         behavior: 'smooth',
     })
 }

 moreBtn.addEventListener('click', async () => {
    page += 1;
    const inputValue = form.elements.query.value.trim();
   
    try {
        showLoader();
        const images = await fetchImages(inputValue, page, perPage);
        renderImages(images);
        lightbox.refresh();

        hideLoader();
        smoothScroll();

        if(images.hits.length < perPage) {
            hideMore();
            iziToast.info({
                title: '',
                message: "We're sorry, but you've reached the end of search results.",
                position: 'topRight', 
            });
        }
        
    } catch (error) {
        console.log(error);
        iziToast.error({
            title: '',
            message: 'Sorry, something went wrong. Please try again!',
            position: 'topRight',
        });
    } finally {
        hideLoader();
    }
 });