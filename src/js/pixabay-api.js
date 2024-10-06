'use strict';
import axios from "axios";
import { hideLoader, hideMore } from "./render-function";
export const BASE_URL = 'https://pixabay.com/api/';
export const API_KEY = '46311357-e3a4e4c71d54a60b91a510c1d';

export async function fetchImages(query, page = 1) {
try {
   const response = await axios.get(BASE_URL, {
    params: {
        key: API_KEY,
        q: query,
        image_type: 'photo',
        orientation: 'horizontal',
        safesearch: true,
        page: page,
        per_page: 15 
    }
   });

   return response.data;
} catch (error) {
    hideMore();
    hideLoader();
    console.log(error);
    throw error;
}    
}
